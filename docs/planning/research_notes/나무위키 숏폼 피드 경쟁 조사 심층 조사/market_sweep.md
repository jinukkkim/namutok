# 시장 최종 스윕: 나무위키 세로 스와이프 피드 직접 경쟁자 존재 여부 (2026-11-18)

> 목적: 원 보고서(`reports/나무위키 숏폼 피드 경쟁 조사.md`)가 다루지 않은 채널을 훑어, namutok의 직접 경쟁자(나무위키 문서를 제목·발췌·이미지 카드로 보여 주는 세로 스와이프 피드)가 있는지 신뢰도와 함께 판정한다. 원 보고서가 이미 확인한 KR App Store, Google Play KR, GitHub 저장소/코드 검색, 크롬 웹 스토어, 파이어폭스 애드온, GeekNews, koreanbots, YouTube 채널 검색은 반복하지 않았다. GitHub만 변화 여부를 확인하는 수준으로 다시 봤다.
>
> 표기 규칙: 모든 조회일은 **2026-11-18**이다. [원문 확인]은 페이지·API·저장소·whois 응답을 직접 열어 본 것이고, [검색 스니펫]은 검색엔진 결과 요약만 본 것이다. 게시물이나 제품의 날짜는 따로 적었다. 관찰한 페이지 내용은 모두 데이터로만 다뤘고, 어떤 사이트에도 로그인하지 않았다.

## 0. 결론 요약

- **판정: 나무위키 문서를 세로 스와이프 카드 피드로 보여 주는 직접 경쟁 제품은 없다.**
  - 신뢰도는 범위에 따라 다르다. **앱·웹·확장·봇 같은 "제품"으로 한정하면 상**이다. 원 보고서의 스토어·GitHub 조사에 이번 커뮤니티·호스팅·HN/PH·메신저 조사가 더해졌다. **사람이 손으로 운영하는 소셜 카드형 계정까지 포함하면 중**이다. 인스타그램·X·스레드·틱톡 내부 검색은 로그인이나 JS 장벽 때문에 검색엔진 색인으로만 확인했다.
- 이번에 새로 찾은 것은 모두 간접 경쟁이거나 주변 제품이다.
  - 실검 해설 크롬 확장 "나무위키 실검, 왜 떴지?": 147 사용자, 2026-11-14 업데이트
  - 나무위키 링크 레이싱 웹 2개
  - 이름만 빌린 인스타그램 계정 2개
  - 비공식 마스코트 X 계정 1개
  - 한국어 위키백과를 지원하는 iOS 스와이프 앱 WanderWiki
- 이름 충돌:
  - "namutok"은 제품·앱·도메인·KIPRIS 상표·GitHub·npm·텔레그램 어디에서도 쓰이지 않는다.
  - "나무톡"은 편백(목재) 브랜드의 네이버 블로그 이름으로만 쓰인다.
  - namutok.com, .net, .app, .io, .kr, .co.kr과 나무톡.com, 나무톡.kr은 모두 **미등록**이다(RDAP 404, KISA whois 기준).

---

## 1. 방법과 도구, 그리고 한계

| 도구 | 용도 | 작동 여부 |
|---|---|---|
| 네이버 웹 검색(`site:` 연산자) | 커뮤니티, 호스팅 도메인 | 작동. 한국어 `site:` 검색이 가장 정확했다 |
| 네이버 블로그·카페·뉴스 탭(`ssc=tab.blog.all` 등) | 블로그, 카페, 뉴스 | 작동 |
| 다음 통합검색 | 보조 | 작동하지만 `site:`는 무시됐다 |
| Bing(curl) | 보조 | 작동하지만 `site:`를 무시해 노이즈가 컸다. 결과에서 제외했다 |
| DuckDuckGo HTML | 보조 | 봇 캡차 때문에 사용하지 않았다(우회하지 않음) |
| Brave Search | 인스타그램·스레드·틱톡 `site:` 검색 | 6개 질의만 성공했고, 이후 429로 차단됐다 |
| WebSearch 도구(도메인 제한) | 커뮤니티, PH, HN, X, top.gg, t.me, 카카오 | 작동 |
| velog GraphQL 검색 API(공개) | velog 전수 스캔 | 작동. 대조군 "나무위키" 1,970건으로 확인 |
| HN Algolia API | Hacker News | 작동 |
| GitHub API(`gh`) | 저장소·코드·사용자 | 작동 |
| RDAP(Verisign, Google Registry, Identity Digital), KISA whois | 도메인 | 작동. 대조군 google.com, get.app, github.io는 200 |
| KIPRIS(브라우저, 비로그인) | 상표 | 작동. 대조군 TN=[카카오톡] 국내 68건 |

막힌 곳은 다음과 같다. 우회는 하지 않았다.
- Product Hunt: 직접 요청은 403이었다. 브라우저 확장에는 이 사이트 권한이 없었다.
- X 프로필: 402 응답.
- 인스타그램 프로필 메타: 로그인 장벽. 비공식 프로필 API는 권한 거부로 사용하지 않았다.
- TGStat: Cloudflare 차단.
- TMview: 봇 차단.
- 틱톡 discover/tag 페이지: 동영상 데이터가 JS로만 로드된다.
- 디스콰이엇, OKKY, 요즘IT 자체 검색: 클라이언트 렌더링이라 네이버 색인에 의존했다.

---

## 2. 채널별 결과

### 2.1 한국 메이커·개발 커뮤니티

공통 키워드 8개: `나무위키 피드`, `나무위키 틱톡`, `나무위키 숏폼`, `나무위키 스와이프`, `나무위키 클론`, `나무톡`, `namutok`, `위키 스와이프`

| 채널 | 방법 | 결과 | 관련 히트 |
|---|---|---|---|
| 디스콰이엇 (disquiet.io) | 네이버 `site:disquiet.io` × 8개 키워드, `site:disquiet.io 나무위키`, WebSearch 도메인 제한 | "틱톡/숏폼/스와이프/namutok"은 0건, 나머지는 무관 | **없음.** 나무위키 관련 글은 "우리 학교만의 위키, 부마 위키 개발 회고"(2023-08-07, 학교 위키 자체 개발)와 제품 "남의위키 namui wiki"(친구가 써 주는 자기소개 위키, 이름 말장난)뿐이다 [검색 스니펫] — [부마 위키 회고](https://disquiet.io/articles/lrsMB0), [남의위키](https://disquiet.io/products/%EB%82%A8%EC%9D%98%EC%9C%84%ED%82%A4-namui-wiki) |
| 요즘IT (yozm.wishket.com) | 네이버 `site:` × 8개 키워드, `site:yozm.wishket.com 나무위키`, WebSearch | 5개 키워드 0건, 나머지 무관 | **없음.** 나무위키 접속 오류 Q&A 같은 글만 있다 [검색 스니펫] |
| velog | 네이버 `site:` × 8개 키워드 + **velog GraphQL 전수 스캔**("나무위키" 1,970건, "namu.wiki" 2,939건, "namuwiki" 23건의 제목을 피드·스와이프·틱톡·숏폼·카드·랜덤·최근 변경·sidebar·PWA 등 정규식으로 필터) | 키워드 구문 검색 10개 모두 count=0 [원문 확인] | **피드형 없음.** 관련 글 2건(2.4절 참조): "1. 나무위키 파도타기"(2024-10-13, naco0406)는 릴스에서 본 나무위키 링크 레이싱 게임을 만들겠다는 아이디어 글이다 [원문 확인 — API short_description] — [velog](https://velog.io/@naco0406/1.-%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4-%ED%8C%8C%EB%8F%84%ED%83%80%EA%B8%B0) |
| 티스토리 | 네이버 `site:tistory.com` × 8개 키워드, 네이버 블로그 탭 | "namutok" 0건, 나머지는 "OOO 나무위키 프로필" 류 연예인 정리 블로그 | **없음** [검색 스니펫] |
| 브런치 | 네이버 `site:brunch.co.kr` × 8개 키워드 | "namutok" 0건, 나머지는 숏폼·SNS 에세이 | **없음** [검색 스니펫] |
| OKKY | 네이버 `site:okky.kr` × 8개 키워드, `site:okky.kr 나무위키 프로젝트`, WebSearch | 3개 키워드 0건, 나머지 무관 | **없음** [검색 스니펫] |
| 인프런 커뮤니티 | 네이버 `site:inflearn.com` × 8개 키워드, `site:inflearn.com/community 나무위키`, WebSearch | community 경로 0건, 나머지는 강의 페이지 | **없음** [검색 스니펫] |
| 프로그래머스 커뮤니티 | 네이버 `site:programmers.co.kr`, `site:career.programmers.co.kr` | 서비스 소개 페이지만 나왔고 career는 0건 | **없음.** 커뮤니티 글이 색인되지 않는 것으로 보인다 [검색 스니펫] |
| 네이버 블로그·카페 전체 | 블로그·카페 탭 × `나무위키 틱톡/숏폼/스와이프/피드`, `나무톡`, `나무위키 쇼츠 앱`, `나무위키 카톡 봇`, `나무위키 오픈채팅`, `나무위키 텔레그램` | 연예인 정리 글, 카톡봇 개발 카페 가입 인사 등 | **피드형 없음.** "나무톡"은 2.6절 참조 |
| 네이버 뉴스 | 뉴스 탭 × `나무위키 숏폼 앱`, `나무위키 피드 서비스`, `나무위키 틱톡처럼`, `위키 틱톡 앱 한국` | 카카오 CPO의 나무위키 삭제 요청(2025-10-10) 기사 등 | **나무위키 피드 앱 보도 없음** [검색 스니펫] |

### 2.2 호스팅 사이드 프로젝트 (vercel.app, netlify.app, pages.dev, github.io, web.app)

- 키워드는 `나무위키`, `namu.wiki`, `namuwiki` 3개다. 네이버 `site:` 15개 조합을 돌렸고, Bing은 `site:`를 무시해 제외했다. WebSearch로는 `"나무위키" 스와이프 웹앱`을 도메인 제한해 검색했다.
- 나무위키를 언급한 호스팅 페이지는 넷이고, 피드형은 없었다.

| 호스트 | 내용 | 성격 | 출처 |
|---|---|---|---|
| tree-speed.vercel.app | "나무위키 스피드런 - 위키 서핑 챌린지 게임". 랜덤 제시어로 시작 문서에서 목표 문서까지 링크만으로 이동 | 링크 레이싱(원 보고서의 레이싱 범주) | [원문 확인 — HTTP 200, meta description] |
| jeongchaehojun.github.io/Namuwiki_Speedrun | "나무위키 스피드런을 할 수 있는 직접 만든 페이지". 저장소 생성·마지막 push 모두 2026-04-06, ★0 | 링크 레이싱 | [원문 확인 — GitHub API] — [GitHub](https://github.com/Jeongchaehojun/Namuwiki_Speedrun) |
| kangdol.github.io/NamuVocaroLyric | 나무위키 보컬로이드 가사 마크다운 제작 에디터 | 편집자 도구 | [검색 스니펫] |
| modum-app.github.io | 나무위키 덤프 변환기 | 원 보고서에 이미 있음 | [검색 스니펫] |

- 피드형 클론이 쓸 법한 서브도메인 이름 19개를 vercel, netlify, pages.dev, github.io 4곳에서 직접 확인했다. 이름은 namutok, namu-tok, namufeed, namu-feed, namuwiki-feed, namushorts, namu-shorts, namuscroll, namu-scroll, namuswipe, namu-swipe, namureels, namu-reels, namuwikitok, namu-wikitok, wikitok-ko, namutiktok, namu-tiktok, treetok이다. **모두 404이거나 DNS가 없었다.** 대조군 tree-speed.vercel.app와 wikirunner-web.vercel.app은 200이었다 [원문 확인 — curl 응답코드].
- 해외 유사 사례: **WanderWiki**(Lagerland Apps, 핀란드 1인 스튜디오)는 iOS용 위키백과 스와이프 앱이다. 32개 언어판 위키백과를 지원하며 **한국어 위키백과를 포함**한다. 랜덤, Browse(16개 주제), For You(프리미엄), Today in History(프리미엄) 모드가 있다. 무료는 하루 20문서이고, 프리미엄은 월 $1.99, 연 $8.99, 평생 $24.99다. 2026-02-07에 처음 출시했고 2026-11-08에 업데이트했다. 나무위키가 아니라 위키백과를 쓰므로 간접 경쟁이다 [원문 확인] — [lagerland.app](https://lagerland.app/apps/wanderwiki/)

### 2.3 소셜 (인스타그램, 스레드, 틱톡, X)

질의는 다음과 같다.
- Brave: `site:instagram.com 나무위키`, `site:instagram.com "오늘의 나무위키"`, `site:instagram.com 나무위키 요약`, `site:instagram.com 나무위키 랜덤`, `site:threads.net 나무위키`, `site:threads.com 나무위키 문서`, `site:tiktok.com 나무위키`
- WebSearch: `"오늘의 나무위키" 인스타그램 OR 스레드 OR 틱톡 OR 트위터`, `나무위키 실검 봇 트위터 X 계정`, `instagram.com 나무위키 요약 계정 카드뉴스`, `tiktok.com 나무위키 랜덤 문서`, X·twitter.com 도메인 제한 `나무위키 실검 OR 최근변경 OR 랜덤문서 봇 계정`, `"namumascot_tree" OR "세피로트" 나무위키 마스코트 봇 X`
- 직접 접속: 틱톡 `/discover/나무위키`, `/tag/나무위키`

| 채널 | 결과 | 관련 히트 |
|---|---|---|
| 인스타그램 | "오늘의 나무위키"와 "나무위키 요약" 계정은 없다. "나무위키 랜덤" 검색에서는 인스타그램 토픽 페이지 `popular/나무위키-랜덤문서`가 색인돼 있었다(로그인 장벽, 사용자 게시물 모음으로 추정) [검색 스니펫] | **@namu.wiki.kr**: 표시명 "나무위키", 팔로워 0, 게시물 0의 빈 계정이다. 이름 선점으로 보인다 [원문 확인 — WebFetch, 로그인 장벽 페이지에서 팔로워 0 확인] — [instagram](https://www.instagram.com/namu.wiki.kr/). **@sportsnamuwiki**("스포츠 나무위키"): 팔로워 3,430, 게시물 885. "스포츠 나무위키에 질문하세요! … 광고문의 DM … 무료 스포츠 중계 바로 보기"라는 소개로 보아 스포츠 정보 계정이 이름만 빌린 것이고, 나무위키 문서 카드는 아니다 [검색 스니펫, 스니펫 시점 불명] — [instagram](https://www.instagram.com/sportsnamuwiki/). @random_wikipedia: 팔로워 7, 게시물 23으로, 영문 위키백과를 다루는 소규모 계정이다 [검색 스니펫] |
| 스레드 | 계정 단위 히트 없음. 개인이 나무위키 링크를 공유한 게시물만 있었다 [검색 스니펫] | 없음 |
| 틱톡 | #나무위키 해시태그는 "3.2M명이 이 동영상을 시청"했다 [검색 스니펫]. discover 페이지는 대부분 "인물명 + 나무위키" 조합이다. 나무위키 문서를 카드처럼 올리는 전용 계정은 색인에서 찾지 못했다. 직접 접속한 discover/tag 페이지는 HTTP 200이었지만 동영상 목록이 JS로만 로드돼 확인할 수 없었다 [원문 확인 — 데이터 블록에 키워드 메타만 있음] | 없음. 인기 영상 예시는 "나무위키 꺼라 ㅋㅋ #애플워치"(@tech_zumo, 좋아요 2.94만)로, 밈 성격이다 [검색 스니펫] |
| X | X 프로필은 402로 응답했고 검색은 로그인이 필요해 직접 확인하지 못했다. WebSearch(x.com, twitter.com 제한)에서 실검·최근 변경·랜덤 문서 봇은 나오지 않았다 [검색 스니펫] | **@namumascot_tree**("세피로트"): 나무위키 마스코트를 표방한 **비공식 봇**이다(검색 요약 기준). 게시 내용과 자동 게시 여부는 확인하지 못했다 [검색 스니펫] — [x.com](https://x.com/namumascot_tree) |
| YouTube | 원 보고서에서 조사함(@나무위키실검 구독 734 등) | 생략 |

### 2.4 메신저·봇 (카카오톡, 텔레그램, 디스코드)

질의는 다음과 같다.
- 네이버 웹·블로그·카페: `나무위키 카카오톡 봇`, `나무위키 오픈채팅 봇`, `나무위키 텔레그램 봇`, `나무위키 텔레그램 채널`, `나무위키 디스코드 봇`, `나무위키 실검 봇`, `나무위키 랜덤 문서 봇`, `나무위키 최근 변경 봇`, `나무위키 카톡 봇`, `나무위키 오픈채팅`, `나무위키 텔레그램`
- WebSearch: t.me, open.kakao.com, pf.kakao.com 제한, top.gg, discordbotlist.com, discord.bots.gg, discords.com 제한
- GitHub 저장소 검색: `namuwiki bot/twitter/discord/telegram/kakao/recent/trending/feed/shorts/reels/swipe/card`, `나무위키 봇`
- 텔레그램 핸들 12개 직접 확인

| 채널 | 결과 | 관련 히트 |
|---|---|---|
| 카카오톡(오픈채팅, 채널) | 웹에 노출된 나무위키 피드 봇이나 채널은 없다. 나무위키 검색 명령을 넣은 개인 카톡봇 자랑 글, 카톡봇 개발 카페 가입 인사("나무위키 문서를 보고 왔다") 정도만 있다 [검색 스니펫] — [예: 네이버 카페 글](https://cafe.naver.com/nameyee/48631) | 없음. 오픈채팅방 목록은 앱 안에서만 검색되므로 확인할 수 없었다 |
| 텔레그램 | 원 보고서의 @namuwikiBot은 여전히 존재한다. og 설명은 "🌱나무위키에서 궁금한 것을 검색해드립니다! 💎인라인 모드로도 사용가능해요"인 **검색 봇**이다 [원문 확인 — t.me 페이지] | **@namuwiki**는 표시명 "나무위키"인 사용자 계정이다. 채널이 아니고 피드도 없다 [원문 확인]. namu_wiki는 무관한 개인 계정이다. namuwikikr, namuwiki_kr, namuhot, namu_hot, namuwiki_hot, namutrend, namuwiki_trend, namu_recent, namuwiki_random, **namutok**은 미사용이다 [원문 확인 — t.me 응답]. TGStat 디렉터리는 Cloudflare 때문에 확인하지 못했다 |
| koreanbots 외 디스코드 봇 목록 | top.gg, discordbotlist, discord.bots.gg에 나무위키 전용 봇은 없다. 일반 MediaWiki용 "Wiki-Bot"만 있다 [검색 스니펫] | "나무위키 봇, 세피로트"(velog, 2022-02-20)는 discord.js 기반 나무위키 **검색** 봇이다. 당시 명령어는 `/나무위키 [문서이름]` 하나였다 [검색 스니펫] — [velog](https://velog.io/@open1204/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4-%EB%B4%87-%EC%84%B8%ED%94%BC%EB%A1%9C%ED%8A%B8) |
| GitHub 봇 저장소 | `namuwiki bot`은 7건이다. kiwitreekor/theseed-bot(2026-04-05 push, ★15), HelloWorld017/NamuWikiBot(2022-12-11), namuplant, theseed-botlib, namu-bot, parsing-bot 2종으로, 모두 검색·편집·파싱용이다. `namuwiki twitter/discord/kakao/feed/shorts/reels/swipe/card`는 **0건**이다 [원문 확인 — GitHub API] | 피드나 자동 게시 봇은 없음 |

### 2.5 Product Hunt, Hacker News

- **Hacker News**(Algolia API) [원문 확인]
  - "나무위키" 0건이다. "namuwiki" 5건과 "namu.wiki" 32건은 **모두 댓글**에서 나무위키를 인용한 것이다.
  - "namutok"은 오타 허용을 끄면 0건이다.
  - "namu" 스토리 140건 중 나무위키 관련 스토리는 없다. Show HN "korean wiki" 2건도 무관하다.
  - 위키 피드로 묶이는 Show HN은 WikiScroll(43198348), WikiTok(42936723), QuickQuack(46557029), Xikipedia(46850803)로, 원 보고서에 이미 있다. **나무위키·한국어 위키 피드 Show HN은 없다.**
- **Product Hunt**: 직접 검색은 403이었고, 브라우저 확장에도 이 도메인 권한이 없었다. WebSearch의 `site:producthunt.com` 질의(Namuwiki, "Namu Wiki", 나무위키)와 도메인 제한 질의 `namuwiki tiktok style feed swipe app`에서 나무위키 관련 제품은 없었다 [검색 스니펫]. 다만 자체 검색으로 확인하지 못했으므로 **부분 확인**이다.

### 2.6 GitHub 재확인 (원 보고서 이후 변화)

- 코드 검색 `"namu.wiki/sidebar"`는 **5건**으로, 원 보고서의 4건에 ne-aki/workspace가 늘었다. 새 히트는 나무위키 대문 페이지를 통째로 저장한 개인 연습 폴더 안의 광고 스크립트 파일이다. 제품이 아니다 [원문 확인] — [GitHub](https://github.com/ne-aki/workspace)
- 코드 검색 `"namu.wiki/RecentChanges"`는 66건이다. 대부분 데이터 분석 수업 과제(medical1 계열 포크)이고, dittos/wikistat(2015~2018, 한국 위키 통계)와 JebDS/namu(2024-09)가 있다. 피드 제품은 없다 [원문 확인]
- 저장소 검색 `namuwiki trending`은 2건으로, 원 보고서에 있는 namu-trending(2026-11-17 push)과 NamuWikiTrendMonitor다. `namutok`, `나무톡`은 0건이다 [원문 확인]

---

## 3. 이번에 새로 확인한 간접 경쟁·주변 항목 (원 보고서에 없던 것)

| 항목 | 성격 | 지표·날짜 | 출처 |
|---|---|---|---|
| 크롬 확장 "나무위키 실검, 왜 떴지?" (제공자 scjang0123) | 실검 옆 "이유" 버튼으로 관련 글을 연다(실검 해설) | **147 사용자**, 5.0★(2개), v1.3.0, **2026-11-14 업데이트**. 원 보고서의 실검 해설 확장(47명, 25명)보다 크다 | [CWS](https://chromewebstore.google.com/detail/lkeohnkcjiniaeahjneenijngejohhnb) [원문 확인] |
| tree-speed.vercel.app "나무위키 스피드런" | 링크 레이싱 웹 | 응답 200, 출시일 미상 | [원문 확인] |
| Jeongchaehojun/Namuwiki_Speedrun | 링크 레이싱 웹(github.io) | 2026-04-06, ★0 | [GitHub](https://github.com/Jeongchaehojun/Namuwiki_Speedrun) [원문 확인] |
| velog "1. 나무위키 파도타기" | 레이싱 게임 아이디어 글 | 2024-10-13 | [원문 확인 — API] |
| velog "나무위키 봇, 세피로트" | 디스코드 검색 봇 | 2022-02-20 | [검색 스니펫] |
| Instagram @sportsnamuwiki | 이름만 빌린 스포츠 정보 계정 | 팔로워 3,430, 게시물 885 | [검색 스니펫] |
| Instagram @namu.wiki.kr | 빈 계정(이름 선점) | 팔로워 0, 게시물 0 | [원문 확인] |
| X @namumascot_tree | 비공식 마스코트 봇 | 내용 미확인 | [검색 스니펫] |
| WanderWiki (iOS) | 한국어 위키백과를 지원하는 스와이프 앱 | 2026-02-07 출시, 2026-11-08 업데이트, 프리미엄 월 $1.99 | [원문 확인] |
| TikTok #나무위키 | 인물·밈 중심 UGC | "3.2M명 시청" | [검색 스니펫] |

이 중 namutok처럼 **나무위키 문서를 카드로 넘겨 보는 소비 경험**을 주는 것은 하나도 없다.

---

## 4. 이름 충돌 점검: namutok / 나무톡 / NamuTok

| 대상 | 결과 | 근거 |
|---|---|---|
| 웹 검색 "namutok" | 제품이나 서비스 없음. 다음은 "검색결과가 없습니다"였다. 네이버는 무관한 웹소설 카탈로그 1건, WebSearch는 타갈로그어 *manutok*과 태국어 *nam tok*(폭포) 같은 유사어만 보여 줬다 | [원문 확인 — 다음·네이버 결과], [검색 스니펫 — WebSearch] |
| 웹 검색 "나무톡" | 소프트웨어 제품 없음. **"히노끼나라편백나라 - 나무톡 블로그"**(네이버 블로그 do2013117, 히노끼 목재 전문 브랜드, 구독자 약 740명, 게시물 약 690건)가 블로그 제목으로 쓰고 있다. 그 밖에는 "나무"와 "톡"이 따로 들어간 유튜브 영상(나무시장 연구소 등) 정도다 | [검색 스니펫 — 네이버 웹], [원문 확인 — YouTube oEmbed 제목] |
| 앱스토어 "나무톡" | 해당 앱 없음(나무뷰어, 나무증권 등만 나옴) | [검색 스니펫 — WebSearch] |
| 도메인 namutok.com / .net | **미등록**(Verisign RDAP 404, DNS 없음). 대조군 google.com은 200 | [원문 확인] |
| namutok.app | **미등록**(Google Registry RDAP 404). 대조군 get.app은 200 | [원문 확인] |
| namutok.io | **미등록**(RDAP 404). 대조군 github.io는 200 | [원문 확인] |
| namutok.kr / namutok.co.kr | **미등록**(KISA whois: "상기 도메인이름은 등록되어 있지 않습니다") | [원문 확인] |
| 나무톡.com (xn--910b64rd7r.com) / 나무톡.kr | **미등록**(RDAP 404, KISA whois 미등록) | [원문 확인] |
| 과거 유사 도메인 | NamuToKi.com이 2020년 만료 도메인 목록에 있다(이름이 다르고 무관함) | [원문 확인 — cirosantilli/expired-domain-names-by-day-2020] |
| 호스팅 서브도메인 | namutok과 namu-tok 모두 vercel.app, netlify.app, github.io, web.app에서 404였고, pages.dev는 DNS가 없었다 | [원문 확인] |
| GitHub | 사용자·조직 `namutok`은 404, 저장소 `namutok`과 `나무톡`은 0건이다. 코드 검색 29건은 NamuTokenizer 같은 부분 문자열뿐이다 | [원문 확인] |
| npm | `namutok` 404(미사용) | [원문 확인] |
| 텔레그램 | @namutok 미사용 | [원문 확인] |
| **KIPRIS 상표(국내·해외 탭)** | `TN=[namutok+나무톡+namu?tok+나무?톡]` 국내 **0건**, `TN=[나무톡]` 국내 0 / 해외 0, `TN=[namutok]` 국내 0 / 해외 0. 대조군 `TN=[카카오톡]`은 국내 68건으로, 검색이 정상 작동했다. 참고로 `TN=[나무위키]`도 0건이었다 | [원문 확인 — 브라우저, 비로그인] |
| TMview / WIPO 국제 상표 | 봇 차단으로 확인하지 못함 | - |

해석은 다음과 같다(법률 자문 아님).
- namutok이라는 이름에는 2026-11-18 기준 등록 상표, 도메인, 동명 제품 같은 직접 충돌이 없다.
- "나무톡"은 목재 브랜드 블로그 제목으로 쓰이지만 업종(목재)과 형태(블로그)가 달라 혼동 가능성은 낮아 보인다.
- 두 가지는 따로 확인이 필요하다. 하나는 "~톡" 접미어 상표가 많은 카카오 계열과의 유사성이다(이번에 조사하지 않음). 다른 하나는 "나무위키" 표지를 연상시키는 이름이라는 점이다. 상표는 KIPRIS 기준 없지만, 운영사 umanle 측의 브랜드 사용 정책은 확인하지 않았다.
- 도메인을 쓸 계획이라면 미등록 상태가 바뀔 수 있으므로 일찍 확보하는 편이 낫다(.app 등의 가격은 확인하지 않음).

---

## 5. 판정

### 직접 경쟁자(나무위키 문서 세로 스와이프 피드) 존재 여부: **없음**

- **신뢰도**
  - **상**: 공개적으로 찾을 수 있는 앱·웹·확장·봇 기준. 원 보고서와 이번 스윕을 합치면 스토어, 코드 저장소, 개발·메이커 커뮤니티, 호스팅 도메인, HN, 뉴스, 메신저 봇 목록을 모두 훑었다.
  - **중**: 사람이 운영하는 소셜 카드형 콘텐츠 계정까지 포함할 때. 인스타그램, X, 스레드, 틱톡 내부 검색은 로그인·JS·402 장벽 때문에 검색엔진 색인으로만 확인했다.
- **근거 요약**
  - 이번에 훑은 채널 전부(커뮤니티 8곳, 호스팅 5개 도메인, 소셜 4곳, 메신저·봇 3종, HN, PH, 뉴스)에서 피드형 히트가 0건이었다.
  - 나무위키 파생 제품은 기존 범주(뷰어, 실검 해설, 링크 레이싱, 검색 봇) 안에서만 늘었다.
  - 19개 후보 서브도메인, GitHub `namuwiki feed/shorts/reels/swipe/card`, velog 4,900여 건 제목 스캔도 모두 비어 있었다.

### 판정을 바꿀 수 있는 것
1. 색인되지 않은 도메인이나 비공개 베타로 운영되는 PWA/앱이 공개되는 경우. 아카라이브나 디시 등 커뮤니티에 홍보 글이 올라오는 시점에 드러날 것이다.
2. 카카오톡 오픈채팅 봇이 "실검·최근 변경 문서 카드"를 정기적으로 보내고 있는 경우(앱 안에서만 검색 가능).
3. 인스타그램, X, 스레드, 틱톡에서 나무위키 문서 카드를 자동이나 수동으로 올리는 계정이 의미 있는 팔로워(수천 명 이상)를 확보한 경우. 특히 @namumascot_tree의 게시 내용을 확인할 필요가 있다.
4. 공식앱(umanle)이 피드를 넣는 경우. 이미 2026-08에 랜덤 버튼과 썸네일 실검을 실험했다(원 보고서).
5. GitHub에 sidebar.json이나 RecentChanges에 스와이프 UI를 붙인 저장소가 새로 생기는 경우. 월 1회 코드 검색 `"namu.wiki/sidebar"`만으로 감시할 수 있다.

### 확인하지 못한 채널
- 인스타그램 해시태그·탐색, 프로필 상세(로그인 장벽)
- X 검색과 프로필(402, 로그인 필요)
- 스레드 내부 검색(로그인 필요)
- 틱톡 검색과 계정 영상 목록(JS 로딩, Brave 색인으로만 확인)
- 카카오톡 오픈채팅 검색(앱 전용)
- 텔레그램 디렉터리 TGStat(Cloudflare)
- Product Hunt 자체 검색(403, 확장 권한 없음, WebSearch 스니펫으로만 확인)
- TMview, WIPO 국제 상표 DB(봇 차단)
- 디스콰이엇, OKKY, 요즘IT 자체 검색(클라이언트 렌더링, 네이버 색인으로 대체)
- 회원 전용 네이버 카페, 디스코드 서버 내부
- Brave를 쓰는 X·t.me·카카오·top.gg·PH 질의(429 차단, WebSearch 도메인 제한으로 대체)

---

## 6. 원 보고서 대비 업데이트 요약
- 원 보고서가 "확인하지 못했다"고 적은 인스타그램, 틱톡, 스레드, 카카오톡, 텔레그램은 색인 수준에서 확인했다. **직접 경쟁 계정이나 봇은 찾지 못했다.** 원 보고서의 판정(직접 경쟁자 없음)은 유지된다.
- 실검 해설 확장 중 가장 큰 것은 원 보고서가 적은 47명짜리가 아니라 **"나무위키 실검, 왜 떴지?" 147명**이다(2026-11-14 업데이트, 활발히 유지보수 중).
- 나무위키 링크 레이싱 범주에 웹 2개(tree-speed.vercel.app, Jeongchaehojun/Namuwiki_Speedrun)를 추가한다.
- 해외 유사 사례에 WanderWiki(iOS, 한국어 위키백과 지원, 2026-02 출시)를 추가한다.
- 이름 "namutok"은 도메인(.com/.app/.kr 등), 상표(KIPRIS), GitHub, npm, 텔레그램이 모두 비어 있다.
