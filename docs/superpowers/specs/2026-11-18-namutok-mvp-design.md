# namutok MVP 설계 명세

- 작성일: 2026-11-18
- 기획 근거: `docs/planning/` (00-overview, 04-feasibility, 04b-concept, 05-business, 07-mvp)
- 상태: **중단 (Kill, 2026-11-19)**. 구현 Task 1·1b의 A10 차단 테스트 실패로 프로젝트 종료. 승인은 2026-11-18

## 1. 의도와 이유

나무위키에서 **지금 편집되고 있는 문서**를 세로로 넘기는 카드로 보여 주는 무료 웹앱이다. 탭 한 번이면 원문으로 간다.

- 만드는 이유: 재미용 무료 포트폴리오다. 실제 사용자 숫자(방문, 재방문, 원문 클릭)를 남기는 것이 목표다.
- 대상: 나무위키 헤비 유저, 모바일 우선.
- 기간: 1주.
- 성격: 고통을 푸는 도구가 아니라 재미 상품이다. 성패는 "카드를 넘기는 게 재미있는가"(A4, 미검증)에 달려 있다.

## 2. 목표 · 비목표 · 반목표

**목표**
- 편집 중 문서 피드가 끊기지 않고 돈다. 서버가 막혀도 제목만 있는 카드로 계속 돈다.
- 출시 2주 동안 방문 500, 재방문 비율 15%, 원문 클릭이 있는 세션 20%를 잴 수 있다.
- 운영비 0원을 유지한다.

**비목표**
- 본문 뷰어, 계정, 개인화, 분류 피드, 놀이 모드, 앱스토어 앱 (`07-mvp.md` 제외 목록)

**반목표** (기술적으로 돌아가도 실패로 본다)
- 나무위키 광고나 트래픽을 빼앗는 구조. 본문을 namutok 안에서 읽게 만드는 것.
- 운영사 차단을 피하려고 정체를 숨기는 것. 운영사가 막으면 멈춘다 (Kill 기준).
- 공개 피드에 성인물 이미지가 그대로 뜨는 것.
- 사용자를 식별하는 데이터(쿠키, ID, IP 저장)를 모으는 것.

## 3. 제약
- 무료 티어만 쓴다. Cloudflare Workers Free 기준:
  - 하루 10만 요청 (00:00 UTC에 초기화)
  - 요청당 CPU 10ms (네트워크 대기 시간은 제외)
  - 요청당 외부 요청 50회
  - KV 쓰기 하루 1,000회 ([가격](https://developers.cloudflare.com/workers/platform/pricing/))
- 커스텀 도메인은 쓰지 않는다. 주소는 `namutok.<계정>.workers.dev`.
- 나무위키 robots.txt가 허용하는 경로만 쓴다: `/w/<문서>`, `/sidebar.json`. `/random`과 `/raw/`는 쓰지 않는다.
- 본문은 CC BY-NC-SA 2.0 KR이다. 출처와 라이선스를 표기하고, 영리 요소는 넣지 않는다. 이미지는 라이선스 대상이 아니라서 핫링크만 한다.
- React 계열 웹·PWA.

## 4. 접근 방식

| | 구성 | 판단 |
|---|---|---|
| **A (선택)** | Vite + React 정적 앱과 Cloudflare Worker 하나를 함께 배포한다 (Workers 정적 자산) | 배포 1개. Worker가 카드 API, 공유 미리보기, 측정을 모두 맡는다. 프로토타입의 UI와 정제 규칙을 거의 그대로 옮긴다 |
| B | Next.js 정적 빌드 + Pages + 별도 Worker | 정적 빌드에서는 Next 고유 기능을 못 써서 Worker가 따로 필요하다. 배포 2개 |
| C | Next.js 전체를 OpenNext로 Workers에서 실행 | 어댑터 설정과 번들 크기 부담이 크고, 무료 CPU 10ms에 걸릴 위험이 있어 1주에 맞지 않는다 |

사용자가 A를 골랐다 (2026-11-18). 이유: Next.js가 이 앱에서 할 일을 Worker가 이미 한다.

## 5. 정해진 설계

### 5.1 구조

```
브라우저 (React SPA)
 ├─ 30초마다 GET https://namu.wiki/sidebar.json   ← 직접 호출 (CORS 허용)
 ├─ 카드마다 GET /api/card?title=…                ← Worker
 ├─ 이미지 <img src="https://i.namu.wiki/…">      ← 핫링크
 └─ 세션 끝 POST /api/e (sendBeacon 1회)          ← Worker → Analytics Engine

Worker (namutok)
 ├─ /api/card   나무위키 /w/<문서>의 <head>만 읽고 og 태그 추출·정제 → JSON
 ├─ /c/<문서>   index.html에 그 카드의 og 태그를 넣어 반환 (공유 미리보기)
 ├─ /api/e      익명 집계 1건을 Analytics Engine에 기록
 └─ 그 외       정적 자산 (SPA)
```

폴더 구성:
```
src/            React 앱 (main.tsx, App.tsx, Card.tsx, feed.ts, storage.ts, beacon.ts)
worker/         index.ts (라우팅), og.ts (head 스트림 파싱), clean.ts (요약 정제), adult.ts
shared/         types.ts (CardData)
test/           clean.test.ts, feed.test.ts
wrangler.jsonc  assets: dist, SPA 폴백, run_worker_first: ["/api/*", "/c/*"], Analytics Engine 바인딩
```

### 5.2 Worker `/api/card?title=<문서명>`

**입력 검증**
- `title`은 1~200자여야 하고, `틀:`·`분류:`·`파일:`·`사용자:`·`나무위키:`·`휴지통:`·`토론` 등 네임스페이스 접두어를 거부한다.
- 요청 URL은 항상 `https://namu.wiki/w/` + `encodeURIComponent(title)`로 고정한다. 임의 URL은 받지 않으므로 열린 프록시가 되지 않는다.

**head만 읽기 (CPU 10ms 대응)**
- 응답 본문을 스트림으로 읽고, `</head>`가 나오면 `reader.cancel()`로 끊는다.
- 그 범위에서 `og:title`, `og:description`, `og:image`만 정규식으로 뽑는다.
- 본문 HTML은 파싱하지 않는다. 해시 클래스명이 자주 바뀌기 때문이다 (4b).

**하위 문서 승격**
- 제목에 `/`가 있다고 해서 하위 문서라고 단정하지 않는다 (`AC/DC`, `Fate/Grand Order` 같은 문서가 있다).
- 판단 기준은 문서 자체의 og:description이다. 이것이 "상위 문서"로 시작하면 하위 문서로 본다.
- 하위 문서이면 마지막 `/` 앞의 문서(바로 위 문서)를 한 번 더 읽어 그 카드를 돌려준다. 이때 `sub`에 하위 문서 이름을 넣는다. 외부 요청은 최대 2회다.
- "상위 문서" 표기가 모든 하위 문서에 있는지는 미검증이다 (추정). 3일차에 실측한다.

**정제**
- `prototype/build.py`의 규칙을 `worker/clean.ts`로 옮긴다:
  - `파일:…확장자` 제거
  - 앞머리의 분류·상위 문서·동음이의어 안내 제거
  - 각주 `[숫자]` 제거
  - 공백 정리, 문장부호 앞 공백 제거, 링크 뒤 조사 앞 공백 제거
- 요약은 약 120자에서 문장 경계로 자른다. 25자 미만이면 `summary: null`.

**성인 판정**
- `title + summary`가 키워드 목록과 맞으면 `adult: true`.
- 키워드: 성인, 성인용, 19금, AV 배우, 야애니, 에로, 포르노. 오탐은 감수한다. 기본 흐림이라 손해가 작다.

**응답**
```json
{ "title": "유창식", "sub": "선수 경력", "summary": "대한민국의 야구인. …",
  "image": "https://i.namu.wiki/i/…", "adult": false }
```
- 성공: `Cache-Control: public, max-age=21600` (브라우저 캐시 6시간).
- 실패: `503 {"error":"blocked"|"upstream"}` + `Cache-Control: no-store`. 실패는 절대 캐시하지 않는다.
- 차단 판정 기준: 나무위키 응답이 200이 아니거나, `og:title`이 없거나, 챌린지 페이지 표식이 있는 경우.

**캐시**
- `caches.default`는 `*.workers.dev`에서 작동하지 않는다 ([문서](https://developers.cloudflare.com/workers/runtime-apis/cache/)).
- 대신 isolate 메모리에 Map 기반 LRU 500개를 둔다 (6시간 만료). 한국 사용자는 같은 지역 데이터센터로 몰리므로, 같은 편집 중 문서를 여러 사람이 보면 적중한다 (추정).
- 1일차에 Workers Cache(2026 기능, [블로그](https://blog.cloudflare.com/workers-cache/))를 켜 보고 workers.dev에서 적중하는지 확인한다. 적중하면 남기고, 아니면 뺀다.

**User-Agent**: `namutok/1.0 (+https://namutok.<계정>.workers.dev/about)`로 정체를 밝힌다. 어차피 Worker 요청에는 `CF-Worker` 헤더로 우리 도메인이 붙는다 ([문서](https://developers.cloudflare.com/fundamentals/reference/http-request-headers/)). 숨기지 않는다.

### 5.3 Worker `/c/<문서명>` (공유 미리보기)
- `/api/card`와 같은 로직으로 카드를 얻는다.
- `HTMLRewriter`로 정적 `index.html`의 `<head>`에 og 태그를 넣어 돌려준다.
  - `og:title`: "<문서명> · namutok"
  - `og:description`: 요약
  - `og:image`: 이미지 URL
  - 성인 문서이거나 이미지가 없으면 namutok 기본 이미지
- 카드를 못 얻으면 기본 og 태그로 같은 페이지를 돌려준다.
- SPA는 `location.pathname`이 `/c/`로 시작하면 그 문서를 첫 카드로 넣는다.

### 5.4 Worker `/api/e` (측정)
- 본문: `{"r":0|1,"s":0|1,"n":<본 카드 수>,"o":<원문 클릭 수>}`.
  - `r`: 재방문 여부
  - `s`: 공유 링크로 들어왔는지
- 값의 범위를 검사한다(0~1, 0~1000). 범위를 벗어나면 버린다.
- `env.STATS.writeDataPoint({ blobs: ["v1"], doubles: [r, s, n, o] })`. IP, UA, 식별자는 기록하지 않는다.
- 조회는 운영자가 Analytics Engine SQL API로 한다. 쿼리 예시는 README에 둔다. 무료 하루 10만 건 ([가격](https://developers.cloudflare.com/analytics/analytics-engine/pricing/)).
- 방문 수는 Cloudflare Web Analytics JS 스니펫으로 따로 잰다 (쿠키 없음, 순방문자 없음).

### 5.5 브라우저: 피드
`feed.ts`는 순수 함수로 만들고 테스트한다.

1. **폴링**: 문서가 보일 때만 30초마다 `sidebar.json`을 받는다. 숨겨지면 멈춘다.
2. **필터**: 네임스페이스 문서를 빼고, 이미 큐에 있거나, 본 적 있거나, 숨긴 문서를 뺀다.
   - 본 문서 기록은 localStorage에 최근 2,000개까지 둔다.
3. **큐 순서**: 처음 들어오면 최신 편집순이다. 그 뒤 새 편집은 큐 끝에 붙인다.
   - 카드 API가 상위 문서로 바꿔 돌려주면, 정규화된 제목으로 중복을 한 번 더 거른다.
4. **섞기 (권장)**: 새 항목의 첫 글자가 바로 앞 카드와 같으면 한 칸 뒤로 미룬다. 한 편집자의 가나다순 묶음 편집 대응이다 (6단계 관찰).
5. **미리 받기**: 현재 카드 기준 앞으로 3장만 `/api/card`를 미리 부른다. 본 카드만큼만 Worker가 실행되게 하기 위해서다.
6. **큐가 비면**: "새 편집을 기다리는 중" 카드를 보여 준다.
7. **제목만 있는 카드 모드**
   - 전환 조건: `/api/card`가 503을 내거나, 연속 3번 실패하거나, Cloudflare 한도 초과 오류가 난 경우.
   - 화면: 상단 배너("미리보기를 잠시 못 불러오는 중")를 띄우고, 카드는 문서명, 편집 시각, 원문 링크만 보여 준다.
   - 복구: 5분마다 한 번 다시 시도한다.
   - 이 모드에서도 `sidebar.json`만으로 피드는 계속 돈다.
8. **`sidebar.json` 실패**: 지금까지 모은 제목을 순환하고 배너를 띄운다.

### 5.6 브라우저: 카드 UI
- `prototype/template.html`의 레이아웃과 토큰을 옮긴다: 어두운 단일 테마, 형광펜 노란색 편집 라벨, IBM Plex Sans KR / Plex Mono.
- **라벨**: "N분 전 편집"(1분마다 갱신. 60분이 넘으면 "HH:MM 편집"). 하위 문서가 있으면 "하위 문서 '…' 편집 중".
- **원문 보기**: `<a target="_blank" rel="noopener">`. 새 탭이라 피드 위치는 자연히 유지된다. 클릭 수를 센다.
- **좋아요 (권장)**: localStorage에 저장한다. 상단 메뉴에 좋아요 목록이 있다.
- **이미지 모드**: 보통 / 흐리게 / 끄기. localStorage에 저장한다.
  - `adult: true`면 모드와 상관없이 최소 흐리게다 (보여 주기 버튼 없음).
  - 이미지 로드에 실패하면 이미지 없는 레이아웃으로 바꾼다.
- **출처**: 카드마다 "출처: 나무위키 「문서명」 · CC BY-NC-SA 2.0 KR"을 원문 링크와 함께 단다.
- **About 시트**: 비공식 서비스라는 점, 데이터 출처, 수집하지 않는 것, 측정 항목, "운영사가 요청하면 중단합니다".
- **첫 방문 안내**: "지금 나무위키에서 편집되고 있는 문서들". 넘기면 사라진다.
- **공유 (권장)**: `navigator.share`가 있으면 쓰고, 없으면 `/c/<문서명>` 링크를 복사한다.

### 5.7 저장 (localStorage만 사용, 모든 접근은 try/catch)
| 키 | 내용 |
|---|---|
| `nt.first` | 첫 방문일 (KST 날짜). 재방문 판정용 |
| `nt.seen` | 본 문서 제목 배열 (최근 2,000) |
| `nt.likes` | 좋아요 `{title, at}[]` |
| `nt.img` | `normal` / `blur` / `off` |
| `nt.hidden` | (선택 기능) 숨긴 제목 |

### 5.8 측정 비콘
- 페이지를 열 때마다 계수를 0으로 시작한다.
- `visibilitychange`가 `hidden`이 되거나 `pagehide`가 오면 `navigator.sendBeacon('/api/e', …)`를 한 번만 보낸다.
- `r`은 `nt.first`가 오늘(KST)보다 이전이면 1이다.

### 5.9 배포와 1일차 차단 테스트
1. 빈 Worker를 배포하고 `/api/card`로 편집 중 문서 20건을 연달아 불러 본다. 기록할 것: 성공률, 응답 시간, CPU 시간(대시보드). 통과 기준은 20건 중 18건 이상 성공하고 CPU가 10ms 안인 것이다.
2. 막히면 같은 코드를 Vercel 함수로 옮겨 한 번 더 시도한다. 그래도 막히면 **중단**한다 (Kill 기준).
3. Workers Cache를 켜고 같은 문서를 두 번 불러 적중하는지 본다.
4. `i.namu.wiki` 핫링크가 workers.dev 출처에서 뜨는지 확인한다 (Referer 정책).

## 6. 빌더에게 맡기는 것
- 컴포넌트 분할, 상태 관리 방식(React state로 충분하다. 라이브러리를 추가하지 않는다)
- 정규식 세부, 요약 자르기 경계 처리
- 아이콘, 기본 og 이미지 제작
- README의 Analytics Engine 쿼리 예시
- 테스트 범위: `clean.ts`와 `feed.ts`의 순수 함수만 vitest로 확인한다. UI 테스트는 하지 않는다.

## 7. 정정된 사실 (기획 문서 대비)
- **캐시**: 4b의 "CDN 6시간 캐시"는 workers.dev에서는 성립하지 않는다. isolate 메모리 캐시와 브라우저 캐시로 대체하고, Workers Cache는 1일차에 확인한다.
- **수용량**: Worker는 캐시 적중과 상관없이 매 요청마다 실행된다. 세션당 약 50요청(카드)으로 잡으면 하루 약 **2,000세션**이다. 4b의 약 4,000은 캐시 적중 50% 가정이었다. 2주 목표(방문 500)에는 충분하다.
  - ponytail: 카드 요청을 묶어 보내는 배치 API로 바꾸면 약 10배가 되지만, 한도에 실제로 닿기 전에는 만들지 않는다.

## 8. 7일 일정
| 날 | 할 일 |
|---|---|
| 1 | 프로젝트 골격(Vite+React+Worker, wrangler), `/api/card` 최소 구현, **차단 테스트(5.9)** |
| 2 | 피드: `sidebar.json` 폴링, 큐, 필터, 세로 스와이프, 카드 UI 이식 |
| 3 | 정제 규칙, 하위 문서 승격 실측, 성인 판정, 미리 받기 |
| 4 | 이미지 모드, 원문 열기 계수, 제목만 있는 카드 모드, 배너 |
| 5 | 측정 비콘, Analytics Engine, Web Analytics, About |
| 6 | 공유(`/c/`, HTMLRewriter), 좋아요, 섞기 규칙, 모바일 QA |
| 7 | 출시 (05-business 첫 사용자 확보 계획 D0) |

## 9. 미검증 가정 (출시 전에 알 수 없음)
- A4 재미, A13 관리자 허락: 6단계를 건너뛰었다. 개발 1~2일차에 프로토타입 링크라도 지인 3명에게 보내기를 권한다.
- A10 차단: 1일차에 확인한다.
- 하위 문서의 "상위 문서" 표기 비율, Workers Cache 적중, `</head>`까지의 CPU 시간: 실측이 필요하다.
