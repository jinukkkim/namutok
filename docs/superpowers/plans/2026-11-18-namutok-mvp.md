# namutok MVP 구현 계획

> **중단 (Kill, 2026-11-19)**: Task 1·1b의 A10 차단 테스트에서 Cloudflare Workers·Vercel 모두 0/20(403). Task 2~9는 실행하지 않았다. 기록은 `docs/planning/00-overview.md`.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 나무위키에서 지금 편집 중인 문서를 세로 스와이프 카드로 보여 주는 무료 웹앱을 1주 안에 출시한다.

**Architecture:**
- **브라우저:** Vite + React SPA다. `namu.wiki/sidebar.json`을 직접 30초마다 받는다.
- **Worker:** Cloudflare Worker 하나가 정적 자산과 세 라우트를 맡는다.
  - `/api/card`: 문서 `<head>`의 og 태그를 추출한다.
  - `/c/<문서>`: 공유 미리보기를 만든다.
  - `/api/e`: 익명 집계를 Analytics Engine에 쓴다.
- **저장:** 서버 저장소는 없고 localStorage만 쓴다.

**Tech Stack:** TypeScript, React, Vite, Vitest, Cloudflare Workers(wrangler, 정적 자산, Analytics Engine)

**Spec:** `docs/superpowers/specs/2026-11-18-namutok-mvp-design.md`. 근거 자료는 `docs/planning/07-mvp.md`, `docs/planning/prototype/template.html`, `docs/planning/prototype/build.py`

**착수 전:** `kickoff` 스킬로 리포를 만든다. 아래 경로는 모두 리포 루트 기준이다.

## Global Constraints

**비용·의존성**
- 운영비 0원이다. Cloudflare Workers Free만 쓴다. 커스텀 도메인, 유료 플랜, 유료 API는 쓰지 않는다.
- 의존성은 `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `typescript`, `vitest`, `wrangler`, `@cloudflare/workers-types`만 쓴다. 다른 라이브러리는 추가하지 않는다.

**나무위키 접근**
- 나무위키 요청은 `https://namu.wiki/w/` + `encodeURIComponent(title)`와 `https://namu.wiki/sidebar.json`만 쓴다. `/random`, `/raw/`는 쓰지 않는다.
- Worker의 나무위키 요청 User-Agent는 정확히 `namutok/1.0 (+https://namutok.<계정>.workers.dev/about)`이다. `<계정>`은 배포 후 실제 서브도메인으로 바꾼다. 브라우저 UA를 흉내 내지 않는다.

**표기**
- 카드 출처 표기 문구는 정확히 `출처: 나무위키 「<문서명>」 · CC BY-NC-SA 2.0 KR`이다. 광고, 후원, 결제 요소는 넣지 않는다.
- 사용자에게 보이는 문구는 모두 한국어다.

**저장·측정**
- 쿠키, 사용자 ID, IP를 저장하거나 전송하지 않는다. localStorage 접근은 모두 try/catch로 감싼다.
- localStorage 키: `nt.first`, `nt.seen`, `nt.likes`, `nt.img`
- 비콘 형식: `{"r":0|1,"s":0|1,"n":0..1000,"o":0..1000}`. Analytics Engine에는 `{ blobs: ["v1"], doubles: [r, s, n, o] }`로 쓴다.

**수치**
| 항목 | 값 |
|---|---|
| 폴링 주기 | 30초 (문서가 보일 때만) |
| 미리 받기 | 앞으로 3장 |
| 본 문서 기록 | 최근 2,000개 |
| 카드 캐시 | 메모리 LRU 500개, 6시간 |
| 성공 응답 헤더 | `Cache-Control: public, max-age=21600` |
| 실패 응답 헤더 | `Cache-Control: no-store` |
| 제목만 있는 카드 모드 | 503(`blocked`)을 받으면 즉시, 일반 실패는 3회 연속이면 전환. 300,000ms마다 재시도 |
| 요약 길이 | 약 120자에서 문장 경계로 자름. 정제 후 25자 미만이면 `null` |

- 성인 키워드: `성인`, `19금`, `AV ?배우`, `야애니`, `에로`, `포르노`

**커밋·브랜치** (리포 `AGENTS.md`가 원본):
- 커밋 메시지와 PR 본문에 AI 표기(Co-Authored-By 등)를 넣지 않는다.
- 커밋 형식은 `type(scope): subject`다. 제목은 영어 명령형, 범위는 `app`(`src/`, `index.html`, `public/`) 또는 `worker`(`worker/`, `wrangler.jsonc`, `scripts/`)다. 두 범위에 걸친 변경은 커밋 두 개로 나눈다.
- `main`에 직접 커밋하지 않는다. `feat/mvp` 브랜치에서 작업하고, push와 PR은 사용자가 요청할 때만 한다.
- `git add -A`를 쓰지 않는다. 파일을 이름으로 add한다.

## Review Focus

명세는 말하지 않지만 실제로 사용자를 물 가능성이 큰 입력과 상황이다. 각 항목의 테스트는 담당 Task에 넣어 두었다.

1. **특수문자가 든 문서명** (`C#`, `100%`, `AC/DC`, 공백): 정확한 문서를 불러와야 하고, 공유 링크에서도 그대로 돌아와야 한다. 테스트는 Task 3, Task 8.
2. **나무위키가 200으로 챌린지·차단 페이지를 주는 경우** (og:title 없음): 차단으로 처리하고, 캐시하지 않고, 앱은 제목만 있는 카드로 넘어가야 한다. 테스트는 Task 3, Task 5.
3. **삭제된 문서** (`sidebar.json`에 `status`가 `normal`이 아닌 항목, 또는 `/w/`가 404): 카드를 조용히 건너뛰어야 한다. 실패로 세지 않으니 제목만 있는 카드 모드로 넘어가지 않는다. 테스트는 Task 3, Task 4.
4. **localStorage를 못 쓰는 환경** (사파리 사생활 모드, 차단): 앱은 기록 없이 정상으로 돌아야 한다. 테스트는 Task 5.
5. **공유 미리보기 HTML에 문서명이나 요약의 `"<>&`가 들어가는 경우**: 이스케이프되어 태그가 깨지거나 스크립트가 들어가면 안 된다. 테스트는 Task 8.

---

### Task 1: 프로젝트 골격, og 추출, A10 차단 테스트 (중단 판정)

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `wrangler.jsonc`, `worker/index.ts`, `worker/og.ts`, `shared/types.ts`, `scripts/a10-probe.mjs`
- Test: `test/og.test.ts`

**Interfaces:**
- Produces:
  - `shared/types.ts`: `export interface CardData { title: string; sub: string | null; summary: string | null; image: string | null; adult: boolean }`
  - `worker/og.ts`: `readHead(body: ReadableStream<Uint8Array>, maxBytes?: number): Promise<string>`. 기본값 262144. `</head>`까지 읽고 스트림을 cancel한다.
  - `worker/og.ts`: `extractOg(head: string): { title: string | null; description: string | null; image: string | null }`. HTML 엔티티를 디코드한다.
  - `worker/index.ts`: `export interface Env { ASSETS: Fetcher; STATS: AnalyticsEngineDataset }`, `export default { fetch(req: Request, env: Env): Promise<Response> }`

- [ ] **Step 1: Vite react-ts 템플릿으로 골격을 만들고 허용된 의존성만 설치한다**

Run: `npm create vite@latest . -- --template react-ts && npm i -D vitest wrangler @cloudflare/workers-types`

`package.json` scripts는 다음과 같다:
- `"dev": "vite"`
- `"build": "tsc -b && vite build"`
- `"test": "vitest run"`
- `"worker": "wrangler dev"`
- `"deploy": "npm run build && wrangler deploy"`

`vite.config.ts`의 `server.proxy`는 `/api`와 `/c`를 `http://localhost:8787`로 보낸다.

- [ ] **Step 2: `wrangler.jsonc`를 쓴다**

```jsonc
{
  "name": "namutok",
  "main": "worker/index.ts",
  "compatibility_date": "2026-11-01",
  "assets": { "directory": "dist", "binding": "ASSETS", "not_found_handling": "single-page-application", "run_worker_first": ["/api/*", "/c/*"] },
  "analytics_engine_datasets": [{ "binding": "STATS", "dataset": "namutok_stats" }]
}
```

- [ ] **Step 3: 실패하는 테스트를 쓴다**

```ts
// test/og.test.ts
import { readHead, extractOg } from '../worker/og';
const stream = (chunks: string[], pulled: { n: number }) => new ReadableStream<Uint8Array>({
  pull(c) { const s = chunks[pulled.n++]; s === undefined ? c.close() : c.enqueue(new TextEncoder().encode(s)); },
});
test('readHead: </head>에서 멈춘다', async () => {
  const pulled = { n: 0 };
  const head = await readHead(stream(['<html><head><meta a>', '</head><body>', 'x'.repeat(1000), 'y'], pulled));
  expect(head).toContain('</head>');
  expect(head).not.toContain('xxx');
  expect(pulled.n).toBeLessThanOrEqual(2);
});
test('readHead: </head>가 없으면 maxBytes까지만 읽는다', async () => {
  const head = await readHead(stream(['a'.repeat(100), 'b'.repeat(100), 'c'.repeat(100)], { n: 0 }), 150);
  expect(head.length).toBeLessThanOrEqual(200);
});
test('extractOg: 세 태그 추출과 엔티티 디코드', () => {
  const h = '<meta property="og:title" content="A &amp; B"><meta property="og:description" content="설명 &quot;x&quot;"><meta property="og:image" content="//i.namu.wiki/i/a">';
  expect(extractOg(h)).toEqual({ title: 'A & B', description: '설명 "x"', image: '//i.namu.wiki/i/a' });
});
test('extractOg: 없으면 null', () => {
  expect(extractOg('<head></head>')).toEqual({ title: null, description: null, image: null });
});
```

- [ ] **Step 4: 테스트가 실패하는지 확인한다**

Run: `npx vitest run test/og.test.ts`
Expected: FAIL. `readHead`를 찾을 수 없다는 오류.

- [ ] **Step 5: `worker/og.ts`의 `readHead`, `extractOg`를 구현한다**

`TextDecoder`의 `{stream:true}` 옵션으로 누적한다. `</head>`를 찾거나 maxBytes를 넘으면 `reader.cancel()`한다. 엔티티는 `&amp; &quot; &#39; &lt; &gt; &#NNN;`만 디코드한다.

- [ ] **Step 6: 테스트가 통과하는지 확인한다**

Run: `npx vitest run test/og.test.ts`
Expected: PASS (4 tests)

- [ ] **Step 7: `worker/index.ts`에 임시 `/api/card`를 만든다**

동작:
- 나무위키 `/w/`를 Global Constraints의 UA로 fetch한다.
- `readHead` → `extractOg`. `og:title`이 있으면 `200 {title, description, image}`, 없거나 200이 아니면 `503 {"error":"blocked"}`.
- 그 외 경로는 `env.ASSETS.fetch(req)`.

이 라우트는 Task 3에서 교체한다.

- [ ] **Step 8: `scripts/a10-probe.mjs <base-url>`를 쓴다**

동작:
- `https://namu.wiki/sidebar.json`에서 네임스페이스(`/^(틀|분류|파일|사용자|나무위키|토론|휴지통|특수기능):/`)가 아닌 제목 20개를 모은다. 부족하면 30초 뒤 다시 받는다.
- `<base-url>/api/card?title=`을 1초 간격으로 차례로 부른다.
- 출력: `ok=<성공수>/20 avg_ms=<평균>`. 성공이 18 미만이면 exit 1.

- [ ] **Step 9: 배포한다**

사용자가 `! npx wrangler login`으로 로그인한 뒤 실행한다.

Run: `npm run deploy`
Expected: `https://namutok.<계정>.workers.dev` URL 출력

- [ ] **Step 10: A10 차단 테스트를 실행한다**

Run: `node scripts/a10-probe.mjs https://namutok.<계정>.workers.dev`
Expected: `ok=18/20` 이상, exit 0

대시보드(Workers → namutok → Metrics)에서 CPU time 중앙값이 10ms 미만인지 본다.

결과를 `docs/planning/00-overview.md`의 A10 행에 날짜와 함께 적는다.
- **통과:** Task 2로 간다.
- **실패:** Task 1b로 간다.

- [ ] **Step 11: 커밋한다**

```bash
git add package.json package-lock.json vite.config.ts tsconfig*.json index.html src/ public/ eslint.config.js && git commit -m "chore(app): scaffold vite react app"
git add wrangler.jsonc worker/ shared/ scripts/ test/og.test.ts && git commit -m "feat(worker): add og extraction and card probe route"
```

(Vite 템플릿이 만든 파일 이름이 다르면 `git status`를 보고 맞춘다.)

### Task 1b (조건부: Task 1 실패 시에만): Vercel 재시도와 중단

- [ ] **Step 1:** `worker/og.ts`를 import하는 Vercel 함수 `api/card.ts`를 만든다. 동작은 Task 1 Step 7과 같다.
- [ ] **Step 2:** 사용자가 `! npx vercel login`으로 로그인한 뒤 `npx vercel deploy`를 실행하고, `node scripts/a10-probe.mjs <vercel-url>`를 돌린다.
- [ ] **Step 3: 결과에 따라 나눈다**
  - **통과:** 작업을 멈추고, Task 3·7·8의 Worker 라우트를 Vercel 함수로 바꿔 계획을 다시 쓴다. 이 계획을 그대로 진행하지 않는다.
  - **실패:** **중단한다.** `00-overview.md` 게이트 기록에 "Kill: A10 실패(Cloudflare·Vercel 모두 차단)"를 적고, 사용자에게 보고한 뒤 끝낸다.

### Task 2: 요약 정제, 이미지 정규화, 성인 판정

**Files:**
- Create: `worker/clean.ts`, `worker/adult.ts`
- Test: `test/clean.test.ts`

**Interfaces:**
- Produces:
  - `cleanSummary(raw: string | null): string | null`
  - `normalizeImage(src: string | null): string | null`
  - `isAdult(text: string): boolean`

- [ ] **Step 1: 실패하는 테스트를 쓴다** (입력은 2026-11-18 실측 og:description)

```ts
import { cleanSummary, normalizeImage } from '../worker/clean';
import { isAdult } from '../worker/adult';
test('파일: 접두어 제거(공백 포함 파일명)', () => {
  expect(cleanSummary('파일:그러시 요제프1.jpg 앞줄 오른쪽에서 두번째 친위대 제복을 입고있는 사람이 그러시. 오스트리아-헝가리 출신')!
    .startsWith('앞줄 오른쪽에서')).toBe(true);
});
test('링크 공백·조사 앞 공백·문장부호 앞 공백 정리', () => {
  expect(cleanSummary('대한민국 의  경제관료  출신  정치인 .  윤석열 정부 의 초대  경제부총리 겸 기획재정부 장관을 지냈다.'))
    .toBe('대한민국의 경제관료 출신 정치인. 윤석열 정부의 초대 경제부총리 겸 기획재정부 장관을 지냈다.');
});
test('각주 제거', () => { expect(cleanSummary('어떤 문장이 여기에 있고 각주가 붙어 있다.[1] 다음 문장도 충분히 길게 이어진다.')).not.toContain('[1]'); });
test('25자 미만은 null', () => { expect(cleanSummary('토시 Sleeves 의복')).toBeNull(); expect(cleanSummary(null)).toBeNull(); });
test('120자 근처 문장 경계에서 자르고 서로게이트를 깨지 않는다', () => {
  const s = cleanSummary('가나다라마바사아자차. '.repeat(20) + '😀'.repeat(50))!;
  expect([...s].length).toBeLessThanOrEqual(121);
  expect(/[.…]$/.test(s)).toBe(true);
  expect(s).not.toMatch(/[\uD800-\uDBFF]$/);
});
test('이미지 정규화', () => {
  expect(normalizeImage('//i.namu.wiki/i/x')).toBe('https://i.namu.wiki/i/x');
  expect(normalizeImage('/img/apple_icon.png')).toBeNull();
  expect(normalizeImage('https://i.namu.wiki/i/a.svg')).toBeNull();
  expect(normalizeImage('')).toBeNull();
});
test('성인 판정', () => {
  expect(isAdult('한국의 성인 웹툰')).toBe(true);
  expect(isAdult('AV배우 세토칸나')).toBe(true);
  expect(isAdult('피카츄 포켓몬스터 시리즈의 마스코트')).toBe(false);
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인한다**

Run: `npx vitest run test/clean.test.ts`
Expected: FAIL. 모듈 없음.

- [ ] **Step 3: 구현한다**

`cleanSummary` 규칙의 근거는 `docs/planning/prototype/build.py`의 `clean()`이다. 순서는 다음과 같다:
1. `파일:.{1,60}?\.(png|jpe?g|gif|svg|webp)` 제거
2. 앞머리 `(분류|상위 문서|하위 문서|관련 문서|이 문서는|다른 뜻|동음이의어)…` 제거
3. `\[\d+\]` 제거
4. 공백 압축, `\s+([,.)」』:!?])` → `$1`, `([(「『])\s+` → `$1`
5. 조사 앞 공백 제거: `\s(의|을|를|에|에서|에게|와|과|으로|로|이자|이다|이며|라는|이라는)(?=[\s,.])`
6. 25자 미만이면 `null`

자르기 규칙:
- 코드포인트 기준 120자 이하면 그대로 둔다.
- 길면 120자 안에서 마지막 `. `·`다.` 경계가 60자 이상이면 그 경계에서 자른다.
- 아니면 120자에서 자르고 `…`을 붙인다.

`isAdult`는 Global Constraints의 키워드를 `/성인|19금|AV ?배우|야애니|에로|포르노/` 하나로 검사한다.

- [ ] **Step 4: 테스트가 통과하는지 확인한다**

Run: `npx vitest run test/clean.test.ts`
Expected: PASS (7 tests)

- [ ] **Step 5: 커밋한다**

```bash
git add worker/clean.ts worker/adult.ts test/clean.test.ts && git commit -m "feat(worker): clean summaries and flag adult content"
```

### Task 3: `/api/card` 완성 (검증, 하위 문서 승격, 캐시, 오류 응답)

**Files:**
- Create: `worker/card.ts`
- Modify: `worker/index.ts` (Task 1의 임시 라우트를 교체)
- Test: `test/card.test.ts`

**Interfaces:**
- Consumes: `readHead`, `extractOg` (Task 1), `cleanSummary`, `normalizeImage`, `isAdult` (Task 2), `CardData`
- Produces:
  - `validTitle(title: string): boolean`
  - `class CardError extends Error { kind: 'blocked' | 'not_found' | 'upstream' }`
  - `getCard(title: string, fetcher?: typeof fetch): Promise<CardData>`. 모듈 수준 LRU 캐시(500개, 6시간)를 쓴다.
  - `export const UA: string`
  - 라우트 `GET /api/card?title=`의 응답:
    - 성공: 200 + `CardData` + `Cache-Control: public, max-age=21600`
    - 잘못된 제목: 400 `{"error":"bad_title"}`
    - 그 외 실패: 503 `{"error":"blocked"|"upstream"}` 또는 404 `{"error":"not_found"}` + `Cache-Control: no-store`

- [ ] **Step 1: 실패하는 테스트를 쓴다**

```ts
import { getCard, validTitle, CardError, UA } from '../worker/card';
const page = (og: { t?: string; d?: string; i?: string }) =>
  `<html><head>${og.t ? `<meta property="og:title" content="${og.t}">` : ''}${og.d ? `<meta property="og:description" content="${og.d}">` : ''}${og.i ? `<meta property="og:image" content="${og.i}">` : ''}</head><body></body></html>`;
const fake = (map: Record<string, [number, string]>) => {
  const calls: string[] = [];
  const f = (async (url: string, init?: RequestInit) => {
    calls.push(url); expect((init?.headers as Record<string, string>)['User-Agent']).toBe(UA);
    const [status, body] = map[url] ?? [404, ''];
    return new Response(body, { status });
  }) as unknown as typeof fetch;
  return { f, calls };
};
const W = 'https://namu.wiki/w/';
const LONG = '대한민국의 야구인. 前 한화 이글스, KIA 타이거즈의 투수로 활약했다.';
test('validTitle', () => {
  expect(validTitle('AC/DC')).toBe(true);
  expect(validTitle('틀:상위 문서')).toBe(false);
  expect(validTitle('')).toBe(false);
  expect(validTitle('가'.repeat(201))).toBe(false);
});
test('일반 문서', async () => {
  const { f } = fake({ [W + encodeURIComponent('유창식')]: [200, page({ t: '유창식', d: LONG, i: '//i.namu.wiki/i/a' })] });
  expect(await getCard('유창식', f)).toEqual({ title: '유창식', sub: null, summary: LONG, image: 'https://i.namu.wiki/i/a', adult: false });
});
test('하위 문서는 바로 위 문서 카드로 승격', async () => {
  const { f, calls } = fake({
    [W + encodeURIComponent('홍길동/선수 경력')]: [200, page({ t: '홍길동/선수 경력', d: '상위 문서: 홍길동 선수 경력 정리' })],
    [W + encodeURIComponent('홍길동')]: [200, page({ t: '홍길동', d: LONG })],
  });
  const c = await getCard('홍길동/선수 경력', f);
  expect([c.title, c.sub]).toEqual(['홍길동', '선수 경력']);
  expect(calls).toHaveLength(2);
});
test('/가 든 일반 문서는 승격하지 않는다', async () => {
  const { f, calls } = fake({ [W + encodeURIComponent('AC/DC')]: [200, page({ t: 'AC/DC', d: '오스트레일리아의 하드 록 밴드. 1973년 시드니에서 결성되었다.' })] });
  const c = await getCard('AC/DC', f);
  expect([c.title, c.sub, calls.length]).toEqual(['AC/DC', null, 1]);
});
test('특수문자 제목은 encodeURIComponent로 요청', async () => {
  const { f, calls } = fake({ [W + 'C%23']: [200, page({ t: 'C#', d: LONG })] });
  await getCard('C#', f);
  expect(calls[0]).toBe('https://namu.wiki/w/C%23');
});
test('200인데 og:title 없음 → blocked, 캐시 안 함', async () => {
  const { f, calls } = fake({ [W + encodeURIComponent('막힘')]: [200, '<html><head><title>Just a moment...</title></head>'] });
  await expect(getCard('막힘', f)).rejects.toMatchObject({ kind: 'blocked' });
  await expect(getCard('막힘', f)).rejects.toBeInstanceOf(CardError);
  expect(calls).toHaveLength(2);
});
test('403 → blocked, 404 → not_found', async () => {
  const { f } = fake({ [W + encodeURIComponent('금지')]: [403, ''] });
  await expect(getCard('금지', f)).rejects.toMatchObject({ kind: 'blocked' });
  await expect(getCard('없는문서', f)).rejects.toMatchObject({ kind: 'not_found' });
});
test('성공은 캐시: 같은 제목 두 번 → fetch 1회', async () => {
  const { f, calls } = fake({ [W + encodeURIComponent('캐시')]: [200, page({ t: '캐시', d: LONG })] });
  await getCard('캐시', f); await getCard('캐시', f);
  expect(calls).toHaveLength(1);
});
```

`getCard`의 캐시는 모듈 수준이라 테스트끼리 공유된다. 테스트마다 다른 제목을 쓴다(라우트 테스트 포함).

라우트 테스트도 같은 파일에 쓴다. `globalThis.fetch`를 `vi.fn`으로 바꾸고 `worker/index.ts`의 `fetch`를 직접 호출한다:
- `/api/card?title=${encodeURIComponent('틀:x')}` → 400
- 성공 → 200, 헤더 `cache-control`이 `public, max-age=21600`
- 차단 → 503, `no-store`, 본문 `{"error":"blocked"}`
- 404 → 404, `{"error":"not_found"}`

- [ ] **Step 2: 테스트가 실패하는지 확인한다**

Run: `npx vitest run test/card.test.ts`
Expected: FAIL. 모듈 없음.

- [ ] **Step 3: 구현한다**

`getCard`의 처리 순서:
1. 캐시 확인
2. `fetcher(url, { headers: { 'User-Agent': UA } })` (헤더는 일반 객체로 넘긴다. 테스트가 그렇게 읽는다)
3. 상태 분기: 404 → not_found, 200이 아니면 blocked, 네트워크 예외는 upstream
4. `readHead`, `extractOg`. `og:title`이 없으면 blocked
5. **정제 전** 원문 description이 `상위 문서`로 시작하고 제목에 `/`가 있으면, 마지막 `/` 앞 제목으로 재귀 1회 호출하고 `sub`에 마지막 세그먼트를 넣는다
6. `cleanSummary`, `normalizeImage`, `isAdult(title + ' ' + (summary ?? ''))`
7. 캐시에 저장

LRU는 `Map` 삽입 순서를 쓴다. 꺼낼 때 delete 후 다시 set하고, 500개를 넘으면 첫 키를 지운다. `CardError`는 캐시하지 않는다.

- [ ] **Step 4: 테스트가 통과하는지 확인한다**

Run: `npx vitest run test/card.test.ts`
Expected: PASS

- [ ] **Step 5: 배포 후 Workers Cache를 확인한다**

Cloudflare 문서(https://blog.cloudflare.com/workers-cache/)의 설정 방법대로 `wrangler.jsonc`에 Workers Cache를 켜고 `npm run deploy`한다.

같은 제목으로 `curl -sI "https://namutok.<계정>.workers.dev/api/card?title=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C"`를 두 번 실행한다.
- 두 번째 응답에 캐시 적중 헤더가 있으면 설정을 남긴다.
- 없으면 설정을 지운다.

결과를 명세 §7에 한 줄 적는다.

- [ ] **Step 6: 커밋한다**

```bash
git add worker/card.ts worker/index.ts wrangler.jsonc test/card.test.ts && git commit -m "feat(worker): complete card API with subpage promotion and cache"
```

### Task 4: 피드 큐와 편집 시각 라벨

**Files:**
- Create: `src/feed.ts`, `src/time.ts`
- Test: `test/feed.test.ts`

**Interfaces:**
- Produces:
  - `type SidebarItem = { document: string; status: string; date: number }`
  - `type QueueItem = { title: string; date: number }`
  - `nextQueue(queue: QueueItem[], items: SidebarItem[], exclude: Set<string>): QueueItem[]`
    - 네임스페이스 제외, `status !== 'normal'` 제외, exclude·기존 큐 중복 제외
    - 새 배치는 최신순으로 큐 끝에 붙이고 섞기 규칙을 적용한다
  - `editLabel(date: number, now: number): string`. 단위는 초(sidebar의 unix) / ms(now)다.

- [ ] **Step 1: 실패하는 테스트를 쓴다**

```ts
import { nextQueue } from '../src/feed';
import { editLabel } from '../src/time';
const it = (document: string, date: number, status = 'normal') => ({ document, date, status });
test('필터: 네임스페이스·비정상 상태·중복·exclude', () => {
  const q = nextQueue([{ title: 'A', date: 1 }], [it('틀:X', 5), it('B', 4, 'delete'), it('A', 3), it('C', 2), it('본문서', 6)], new Set(['본문서']));
  expect(q.map(x => x.title)).toEqual(['A', 'C']);
});
test('새 배치는 최신순', () => {
  expect(nextQueue([], [it('가', 1), it('나', 3), it('다', 2)], new Set()).map(x => x.title)).toEqual(['나', '다', '가']);
});
test('섞기: 앞 카드와 첫 글자가 같으면 배치 안의 다른 항목과 자리를 바꾼다', () => {
  const q = nextQueue([{ title: '래드 모빌', date: 9 }], [it('래리 킹', 8), it('래리 스토치', 7), it('강창일', 6)], new Set());
  expect(q.map(x => x.title)).toEqual(['래드 모빌', '강창일', '래리 스토치', '래리 킹']);
});
test('같은 sidebar를 두 번 받아도 중복 없음', () => {
  const items = [it('가', 2), it('나', 1)];
  const q1 = nextQueue([], items, new Set());
  expect(nextQueue(q1, items, new Set())).toEqual(q1);
});
test('editLabel', () => {
  const now = Date.UTC(2026, 10, 18, 13, 0, 0); // 22:00 KST
  expect(editLabel(now / 1000 - 30, now)).toBe('방금 편집');
  expect(editLabel(now / 1000 - 180, now)).toBe('3분 전 편집');
  expect(editLabel(now / 1000 - 3 * 3600, now)).toBe('19:00 편집');
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인한다**

Run: `npx vitest run test/feed.test.ts`
Expected: FAIL

- [ ] **Step 3: 구현한다**

섞기 규칙: 배치의 i번째 항목이 큐 마지막(또는 직전 배치 항목)과 첫 글자가 같으면, 배치 안 뒤쪽에서 첫 글자가 다른 첫 항목과 자리를 바꾼다. 없으면 그대로 둔다.

네임스페이스 정규식은 Task 1 Step 8과 같은 것을 export해서 함께 쓴다. `editLabel`은 60초 미만이면 `방금`, 60분 미만이면 `N분 전`, 그 이상이면 `Intl.DateTimeFormat('ko-KR', {timeZone:'Asia/Seoul', hour:'2-digit', minute:'2-digit', hourCycle:'h23'})`.

- [ ] **Step 4: 테스트가 통과하는지 확인한다**

Run: `npx vitest run test/feed.test.ts`
Expected: PASS (5 tests)

- [ ] **Step 5: 커밋한다**

```bash
git add src/feed.ts src/time.ts test/feed.test.ts && git commit -m "feat(app): add feed queue and edit-time labels"
```

### Task 5: 저장소와 카드 모드 상태

**Files:**
- Create: `src/storage.ts`, `src/cardMode.ts`
- Test: `test/storage.test.ts`

**Interfaces:**
- Produces (`storage.ts`, 모든 접근은 try/catch):
  - `load<T>(key: string, fallback: T): T`
  - `save(key: string, value: unknown): void`
  - `markSeen(title: string): void` (`nt.seen`, 최근 2,000)
  - `seenSet(): Set<string>`
  - `todayKst(now: number): string` (`YYYY-MM-DD`)
  - `isReturning(first: string | null, today: string): boolean`
  - `touchFirstVisit(now: number): { first: boolean; returning: boolean }`. `nt.first`가 없으면 오늘로 쓰고 `first: true`. `returning`은 `isReturning(이전 nt.first, todayKst(now))`.
- Produces (`cardMode.ts`):
  - `type ModeState = { mode: 'full' | 'title'; fails: number; since: number }`
  - `modeReducer(s: ModeState, e: { type: 'ok' | 'fail' | 'blocked' | 'skip'; at: number }): ModeState`
  - `shouldRetry(s: ModeState, now: number): boolean`
  - `const INITIAL_MODE: ModeState`

- [ ] **Step 1: 실패하는 테스트를 쓴다**

```ts
import { load, save, markSeen, seenSet, todayKst, isReturning } from '../src/storage';
import { modeReducer, shouldRetry, INITIAL_MODE } from '../src/cardMode';
const memory = () => { const m = new Map<string, string>(); return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v), removeItem: (k: string) => void m.delete(k) }; };
test('localStorage가 던져도 앱은 계속', () => {
  vi.stubGlobal('localStorage', { getItem() { throw new Error('denied'); }, setItem() { throw new Error('denied'); } });
  expect(load('nt.img', 'normal')).toBe('normal');
  expect(() => save('nt.img', 'off')).not.toThrow();
  expect(() => markSeen('가')).not.toThrow();
});
test('seen은 최근 2,000개만', () => {
  vi.stubGlobal('localStorage', memory());
  for (let i = 0; i < 2001; i++) markSeen('t' + i);
  const s = seenSet();
  expect(s.size).toBe(2000); expect(s.has('t0')).toBe(false); expect(s.has('t2000')).toBe(true);
});
test('KST 날짜와 재방문', () => {
  expect(todayKst(Date.UTC(2026, 10, 18, 15, 30))).toBe('2026-11-19');
  expect(isReturning('2026-11-17', '2026-11-18')).toBe(true);
  expect(isReturning('2026-11-18', '2026-11-18')).toBe(false);
  expect(isReturning(null, '2026-11-18')).toBe(false);
});
test('카드 모드: 실패 3연속 → title, ok는 리셋, blocked는 즉시, skip(404)은 무시', () => {
  let s = INITIAL_MODE;
  s = modeReducer(s, { type: 'fail', at: 1 }); s = modeReducer(s, { type: 'fail', at: 2 });
  expect(s.mode).toBe('full');
  s = modeReducer(s, { type: 'ok', at: 3 }); expect(s.fails).toBe(0);
  s = modeReducer(s, { type: 'skip', at: 4 }); expect(s).toEqual(modeReducer(s, { type: 'skip', at: 5 }));
  for (const at of [6, 7, 8]) s = modeReducer(s, { type: 'fail', at });
  expect(s.mode).toBe('title');
  expect(modeReducer(INITIAL_MODE, { type: 'blocked', at: 10 }).mode).toBe('title');
  expect(shouldRetry({ mode: 'title', fails: 3, since: 0 }, 299_999)).toBe(false);
  expect(shouldRetry({ mode: 'title', fails: 3, since: 0 }, 300_000)).toBe(true);
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인한다**

Run: `npx vitest run test/storage.test.ts`
Expected: FAIL

- [ ] **Step 3: 두 모듈을 구현한다** (위 Interfaces 그대로)

`ok`는 `{mode:'full', fails:0}`으로 돌린다. 재시도가 성공하면 복구된다는 뜻이다. `title`로 바뀔 때 `since`에 그 시각을 넣는다.

- [ ] **Step 4: 테스트가 통과하는지 확인한다**

Run: `npx vitest run test/storage.test.ts`
Expected: PASS (4 tests)

- [ ] **Step 5: 커밋한다**

```bash
git add src/storage.ts src/cardMode.ts test/storage.test.ts && git commit -m "feat(app): add storage wrapper and card mode state"
```

### Task 6: 앱 화면 (피드, 카드, 제목만 있는 카드, 이미지 모드, 좋아요, About)

**Files:**
- Create: `src/App.tsx`, `src/Card.tsx`, `src/About.tsx`, `src/api.ts`, `src/styles.css`
- Modify: `src/main.tsx`, `index.html` (Google Fonts 링크, `<title>namutok</title>`, 기본 og 태그)

**Interfaces:**
- Consumes: `nextQueue`, `editLabel` (Task 4), `load`, `save`, `markSeen`, `seenSet`, `touchFirstVisit`, `modeReducer`, `shouldRetry`, `INITIAL_MODE` (Task 5), `CardData`
- Produces:
  - `src/api.ts`: `fetchCard(title: string): Promise<{ ok: true; card: CardData } | { ok: false; kind: 'blocked' | 'not_found' | 'fail' }>`. 503 + `blocked`이면 blocked, 404면 not_found, 그 외(429, 1027 HTML, 네트워크 오류 등)는 fail.
  - `App`이 들고 있는 세션 계수: `{ seen: number; opened: number }`. Task 7이 읽는다.
  - `App`의 시작 카드 props: `startTitle: string | null`. Task 8이 넘긴다.

- [ ] **Step 1: `src/styles.css`와 `Card.tsx`를 만든다**

`docs/planning/prototype/template.html`의 `<style>` 토큰과 레이아웃(`.app/.top/.feed/.card/.media/.body/.labels/.live/.sub/.sum/.actions/.btn/.src/.sheet`)을 그대로 옮긴다.

`Card` props: `{ item: QueueItem; card: CardData | null; mode: 'full' | 'title'; imgMode: 'normal' | 'blur' | 'off'; now: number; liked: boolean; onOpen(): void; onLike(): void; onShare(): void }`

표시 규칙:
- `mode === 'title'`이거나 `card === null`이면 문서명, 편집 라벨, 원문 링크, 출처만 보여 준다.
- `card.adult`면 `imgMode`를 최소 `blur`로 올린다.
- `<img onError>`가 나면 이미지 없는 레이아웃으로 바꾼다.
- 출처 문구는 Global Constraints 그대로 쓴다.

- [ ] **Step 2: `App.tsx`를 만든다**

동작:
1. **첫 방문:** `const visit = touchFirstVisit(Date.now())`. `visit.first`면 안내 카드 "지금 나무위키에서 편집되고 있는 문서들"을 맨 앞에 둔다.
2. **폴링:** `document.visibilityState === 'visible'`일 때만 30초마다 `fetch('https://namu.wiki/sidebar.json')`를 부르고 `nextQueue(queue, items, seenSet() ∪ 표시된 제목)`. 실패하면 배너 "최신 편집을 잠시 못 받는 중"을 띄우고 기존 큐를 유지한다.
3. **시각 갱신:** 라벨용 `now`는 1분마다 갱신한다.
4. **현재 카드 판정:** `IntersectionObserver`(threshold 0.6)로 현재 카드를 잡고, 그 카드를 `markSeen`하고 계수 `seen++`.
5. **미리 받기:** 현재 기준 앞 3장만 `fetchCard`하고, 결과를 `modeReducer`에 전달한다(ok / fail / blocked / skip).
   - `not_found`(skip)이면 그 카드를 큐에서 뺀다.
   - 응답 `card.title`이 이미 표시된 제목이면 그 카드를 뺀다(하위 문서 승격 뒤 중복).
6. **제목만 있는 카드 모드:** 상단 배너 "미리보기를 잠시 못 불러오는 중". 1분마다 `shouldRetry`가 참이면 현재 카드로 `fetchCard`를 한 번 다시 시도한다.
7. **큐 끝:** "새 편집을 기다리는 중" 카드. 단 `sidebar.json`이 실패 중이면 이번 세션에 표시한 제목을 다시 큐 끝에 붙여 순환한다 (명세 §5.5-8).
8. **원문 클릭:** `opened++`.
9. **상단 메뉴:**
   - 이미지 모드 순환 버튼(보통 → 흐리게 → 끄기, `nt.img`에 저장)
   - 좋아요 목록 시트(`nt.likes`)
   - About 버튼

- [ ] **Step 3: `About.tsx`를 만든다**

다음 문단을 순서대로 넣는다:
1. "namutok은 나무위키 비공식 서비스입니다."
2. 데이터 출처와 CC BY-NC-SA 2.0 KR
3. "쿠키와 개인 식별 정보를 저장하지 않습니다. 좋아요와 본 문서는 이 기기에만 저장됩니다."
4. 측정 항목: 재방문 여부, 공유 링크 유입 여부, 본 카드 수, 원문 클릭 수
5. "나무위키 운영사가 요청하면 서비스를 중단합니다."

- [ ] **Step 4: 로컬에서 동작을 확인한다**

Run: 터미널 두 개에서 `npm run build && npm run worker`와 `npm run dev`
Expected:
- `http://localhost:5173`에서 첫 카드가 3초 안에 뜬다.
- 위로 넘기면 다음 카드가 나온다.
- 원문 보기는 새 탭으로 `namu.wiki/w/…`를 연다.
- 이미지 모드 버튼이 세 상태를 순환하고, 새로고침해도 유지된다.

- [ ] **Step 5: 제목만 있는 카드 모드를 확인한다**

`npm run worker`를 끄고 카드 3장을 넘긴다.
Expected: 배너가 뜨고 제목만 있는 카드로 계속 넘어간다. 워커를 다시 켜면 5분 안에 일반 카드로 돌아온다.

- [ ] **Step 6: 배포하고 휴대폰에서 확인한다**

Run: `npm run deploy`

휴대폰(사파리, 크롬)으로 workers.dev URL을 연다.
Expected: `i.namu.wiki` 이미지가 뜨고, 스와이프가 한 장씩 멈추며, 가로 스크롤이 없다.

이미지가 막히면(Referer 정책) `<img referrerPolicy="no-referrer">`로 바꿔 다시 확인한다.

- [ ] **Step 7: 커밋한다**

```bash
git add src/ index.html && git commit -m "feat(app): build feed screen with cards, image modes and about sheet"
```

### Task 7: 측정 (`/api/e`, 세션 비콘, Web Analytics)

**Files:**
- Create: `worker/stats.ts`, `src/beacon.ts`, `README.md`
- Modify: `worker/index.ts` (라우트 추가), `src/App.tsx` (비콘 연결), `index.html` (Web Analytics 스니펫)
- Test: `test/stats.test.ts`

**Interfaces:**
- Consumes: Task 6의 세션 계수 `{ seen, opened }`, `touchFirstVisit`의 반환값 `visit`, Task 8의 공유 유입 여부(`startTitle !== null`)
- Produces:
  - `parseBeacon(text: string): [number, number, number, number] | null`
  - 라우트 `POST /api/e` → 항상 204. 형식이 유효할 때만 `env.STATS.writeDataPoint`
  - `src/beacon.ts`: `armBeacon(get: () => { r: 0 | 1; s: 0 | 1; n: number; o: number }): void`. 페이지당 1회만 보낸다.

- [ ] **Step 1: 실패하는 테스트를 쓴다**

```ts
import { parseBeacon } from '../worker/stats';
import worker from '../worker/index';
test('parseBeacon', () => {
  expect(parseBeacon('{"r":1,"s":0,"n":12,"o":2}')).toEqual([1, 0, 12, 2]);
  expect(parseBeacon('{"r":2,"s":0,"n":1,"o":0}')).toBeNull();
  expect(parseBeacon('{"r":0,"s":0,"n":1001,"o":0}')).toBeNull();
  expect(parseBeacon('{"r":0,"s":0,"n":1.5,"o":0}')).toBeNull();
  expect(parseBeacon('not json')).toBeNull();
});
test('POST /api/e: 유효하면 기록, 아니면 기록 없이 204', async () => {
  const writeDataPoint = vi.fn();
  const env = { STATS: { writeDataPoint }, ASSETS: { fetch: vi.fn() } } as any;
  const ok = await worker.fetch(new Request('https://x/api/e', { method: 'POST', body: '{"r":1,"s":0,"n":12,"o":2}' }), env);
  expect(ok.status).toBe(204);
  expect(writeDataPoint).toHaveBeenCalledWith({ blobs: ['v1'], doubles: [1, 0, 12, 2] });
  const bad = await worker.fetch(new Request('https://x/api/e', { method: 'POST', body: 'x' }), env);
  expect(bad.status).toBe(204); expect(writeDataPoint).toHaveBeenCalledTimes(1);
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인한다**

Run: `npx vitest run test/stats.test.ts`
Expected: FAIL

- [ ] **Step 3: 구현한다**

- **`parseBeacon`:** r·s는 0 또는 1, n·o는 0~1000 정수만 받는다.
- **`armBeacon`:** `visibilitychange`가 `hidden`이 되거나 `pagehide`가 오면 `navigator.sendBeacon('/api/e', JSON.stringify(get()))`를 페이지당 한 번만 보낸다.
- **`App`:** `armBeacon(() => ({ r, s, n: seen, o: opened }))`. `r`은 `visit.returning ? 1 : 0`, `s`는 `startTitle !== null ? 1 : 0`.

- [ ] **Step 4: 테스트가 통과하는지 확인한다**

Run: `npx vitest run test/stats.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: Web Analytics와 README를 붙인다**

Cloudflare 대시보드 → Web Analytics에서 사이트(호스트네임 `namutok.<계정>.workers.dev`)를 추가하고, 받은 JS 스니펫(토큰 포함)을 `index.html`에 넣는다.

`README.md`에 들어갈 내용:
- 실행·배포 명령
- Analytics Engine SQL API 조회 예시

```sql
SELECT
  count() AS sessions,
  sum(double1) / count() AS returning_rate,
  sum(double2) / count() AS share_rate,
  countIf(double4 > 0) / count() AS open_rate,
  avg(double3) AS avg_cards
FROM namutok_stats
WHERE timestamp > NOW() - INTERVAL '14' DAY
```

호출 방법: `curl https://api.cloudflare.com/client/v4/accounts/<계정ID>/analytics_engine/sql -H "Authorization: Bearer <토큰>" -d "<쿼리>"`. 토큰은 사용자가 대시보드에서 Account Analytics Read 권한으로 만든다.

- [ ] **Step 6: 배포 후 기록이 남는지 확인한다**

`npm run deploy`. 휴대폰으로 카드 몇 장을 넘기고 앱을 백그라운드로 보낸 뒤, 몇 분 기다렸다가 README의 쿼리를 실행한다.
Expected: `sessions >= 1`

- [ ] **Step 7: 커밋한다**

```bash
git add worker/stats.ts worker/index.ts test/stats.test.ts && git commit -m "feat(worker): record session beacons in analytics engine"
git add src/beacon.ts src/App.tsx index.html && git commit -m "feat(app): send session beacon and load web analytics"
git add README.md && git commit -m "docs: add commands and stats query to readme"
```

### Task 8: 공유 (`/c/<문서명>`, 미리보기, 공유 버튼)

**Files:**
- Create: `worker/share.ts`, `public/og-default.png` (1200×630, namutok 워드마크)
- Modify: `worker/index.ts`, `src/main.tsx`, `src/App.tsx`
- Test: `test/share.test.ts`

**Interfaces:**
- Consumes: `getCard`, `CardError` (Task 3), Task 6의 `onShare`, `startTitle`
- Produces:
  - `ogTags(card: CardData | null, origin: string): string`. 이스케이프된 `<meta>` 문자열을 돌려준다.
  - 라우트 `GET /c/<encodeURIComponent(title)>`: `env.ASSETS.fetch('/index.html')`에 `HTMLRewriter`로 `head.append(ogTags(...), { html: true })`를 적용한 응답
  - `src/main.tsx`: `startTitle = location.pathname.startsWith('/c/') ? decodeURIComponent(location.pathname.slice(3)) : null`

- [ ] **Step 1: 실패하는 테스트를 쓴다**

```ts
import { ogTags } from '../worker/share';
const O = 'https://namutok.example.workers.dev';
test('카드 og 태그', () => {
  const h = ogTags({ title: '유창식', sub: null, summary: '대한민국의 야구인.', image: 'https://i.namu.wiki/i/a', adult: false }, O);
  expect(h).toContain('<meta property="og:title" content="유창식 · namutok">');
  expect(h).toContain('<meta property="og:description" content="대한민국의 야구인.">');
  expect(h).toContain('<meta property="og:image" content="https://i.namu.wiki/i/a">');
});
test('성인 문서·이미지 없음·카드 없음 → 기본 이미지', () => {
  const adult = ogTags({ title: 'X', sub: null, summary: null, image: 'https://i.namu.wiki/i/b', adult: true }, O);
  expect(adult).toContain(`content="${O}/og-default.png"`);
  expect(ogTags(null, O)).toContain(`content="${O}/og-default.png"`);
});
test('이스케이프', () => {
  const h = ogTags({ title: '"><script>alert(1)</script>', sub: null, summary: 'A & B < C', image: null, adult: false }, O);
  expect(h).not.toContain('<script>');
  expect(h).toContain('&quot;&gt;&lt;script&gt;');
  expect(h).toContain('A &amp; B &lt; C');
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인한다**

Run: `npx vitest run test/share.test.ts`
Expected: FAIL

- [ ] **Step 3: 구현한다**

**Worker `/c/` 라우트:**
- 제목은 `decodeURIComponent(path.slice(3))`이다. `validTitle`에 실패하거나 `getCard`가 실패하면 `ogTags(null, origin)`.
- 카드가 없을 때 `og:title`은 `namutok`, `og:description`은 `지금 나무위키에서 편집되고 있는 문서를 카드로 넘겨 보세요`.

**App:**
- `startTitle`이 있으면 `{title: startTitle, date: 0}`을 큐 맨 앞에 넣는다. 라벨은 `date === 0`이면 `공유된 카드`로 표시한다.
- `onShare`의 URL은 `${location.origin}/c/${encodeURIComponent(title)}`. `navigator.share`가 있으면 쓰고, 없으면 `navigator.clipboard.writeText`로 복사한 뒤 토스트 "링크를 복사했습니다".

- [ ] **Step 4: 테스트가 통과하는지 확인한다**

Run: `npx vitest run test/share.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 5: 배포 후 미리보기와 특수문자 제목을 확인한다**

Run: `npm run deploy && curl -s "https://namutok.<계정>.workers.dev/c/C%23" | grep 'og:title'`
Expected: `content="C# · namutok"` (문서가 있을 때) 또는 `content="namutok"`

카카오톡 나에게 보내기로 `/c/<문서>` 링크를 보낸다.
Expected: 제목이 미리보기로 뜬다. 이미지가 안 뜨면 `docs/planning/05-business.md` §2.3의 미검증 항목에 결과를 적는다.

- [ ] **Step 6: 커밋한다**

```bash
git add worker/share.ts worker/index.ts test/share.test.ts && git commit -m "feat(worker): serve share pages with card previews"
git add public/og-default.png src/main.tsx src/App.tsx && git commit -m "feat(app): add share links and start card"
```

### Task 9: 출시 점검

**Files:**
- Modify: `docs/planning/00-overview.md` (현재 단계, A10, 출시일)

- [ ] **Step 1: 전체 테스트와 빌드를 확인한다**

Run: `npm test && npm run build`
Expected: 모든 테스트 PASS, 빌드 성공

- [ ] **Step 2: 배포하고 출시 점검표를 휴대폰에서 확인한다**

`npm run deploy` 후 아래를 하나씩 확인한다:
- [ ] 첫 방문 안내가 뜬다
- [ ] 30초 뒤 새 카드가 추가된다
- [ ] 하위 문서 라벨이 뜨는 카드가 있다
- [ ] 원문이 새 탭으로 열리고, 돌아오면 같은 자리다
- [ ] 이미지 모드 3단이 동작한다
- [ ] 성인 키워드 카드가 흐리게 보인다
- [ ] 좋아요 목록이 동작한다
- [ ] 공유 링크로 열면 그 카드가 첫 장이다
- [ ] About이 열린다
- [ ] 사파리 사생활 모드에서도 넘어간다
- [ ] 가로 스크롤이 없다

- [ ] **Step 3: 기록하고 커밋한다**

`00-overview.md`의 현재 단계를 "출시됨 (D0), 05-business 첫 사용자 확보 계획 진행"으로 바꾸고, URL을 적는다.

```bash
git add docs/planning/00-overview.md && git commit -m "docs: record MVP launch"
```
