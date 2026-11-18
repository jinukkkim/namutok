# 글로벌 유사 서비스 조사: WikiTok과 클론·후속작, 텍스트/지식 숏폼 피드

> 조사 기준일: 2026-11-18. 표기: [원문 확인] = 원 페이지/API를 직접 열어 확인, [검색 스니펫] = 검색 결과 요약만 확인.
> GitHub 수치는 GitHub REST API, HN 수치는 HN Algolia API, App Store 수치는 iTunes Lookup/Search API(미국 스토어)로 2026-11-18에 조회했다.

## Q1. WikiTok(Isaac Gemal): 출시 후 트래픽, 이후 기능, 2026년 현재 상태, Wikimedia 협업, HN 반응

### Takeaway
WikiTok은 2025-02-04 HN 1,459점으로 폭발해 일주일 남짓 만에 약 50만 명이 써 봤지만(창작자 추정), 3주 뒤 창작자 스스로 "앞으로 할 일은 별로 없다"고 선언했고 마지막 커밋은 2025-03-18이다. 사이트는 2026-11에도 살아 있지만 사실상 유지보수가 멈춘 "완성형 토이"이고, 바이럴의 동력은 기능이 아니라 타이밍(트윗에 대한 즉각 응답)과 "알고리즘 없는 피드"라는 서사였다.

### Cited Findings
**출시와 확산 경로**
- 2025-02-03 Tyler Angert가 X에 "all of wikipedia on a single, scrollable page"를 올린 트윗이 계기였고, Gemal은 자정 12:30쯤 시작해 2시간 만에 만들어 2025-02-04 01:53(EST)에 공개했다. 스택은 bun+React+TypeScript, 백엔드 없음. Wikipedia API가 CORS를 허용해 프론트에서 바로 호출할 수 있다는 사실은 Claude가 알려줬다고 한다 — [Gemal 회고 "Reflecting on WikiTok", 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- HN 첫 게시물은 Gemal이 아니라 Group_B라는 사용자가 2025-02-04에 올렸다. 1,459점, 댓글 221개 — [HN 42936723](https://news.ycombinator.com/item?id=42936723) [원문 확인]
- Gemal이 정리한 정보 흐름은 "twitter → hacker news → mainstream news outlets → reddit / youtube"였다. HN에서 좋은 인상을 주면 트래픽이 크게 늘 것으로 보고 HN 댓글에 집중했고, Vercel CEO(rauchg)가 두 트윗을 나란히 인용한 것이 "wildly helpful"했다고 썼다 — [Gemal 회고, 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- 언론 보도는 Ars Technica(2025-02, HN 재게시 25점), Business Insider(2025-02-13), Washington Post(2025-02-14), Tubefilter(2025-02-11), PC Gamer, PopSci, 그리고 폴란드·브라질·스페인·헝가리·크로아티아 등 해외 매체로 이어졌다 — [HN 42998000(Ars 링크)](https://news.ycombinator.com/item?id=42998000) [원문 확인]; [Tubefilter](https://www.tubefilter.com/2025/02/11/wikitok-tiktok-wikipedia-scrolling-learning-project-isaac-gemal/amp/), [PC Gamer](https://pcgamer.com/hardware/give-your-wikipedia-rabbit-hole-deep-dives-a-dollop-of-dopamine-by-reading-them-in-an-anti-algorithm-tiktok-style-feed), [PopSci](https://www.popsci.com/technology/wikitok-wikipedia-tiktok/), [hvg.hu 2025-02-18](https://hvg.hu/tudomany/20250218_wikipedia-tiktok-wikitok-alkalmazas-wikipedia-szocikkek-kozossegi-alkalmazas) [검색 스니펫]
- 검색에서 WikiTok을 다룬 한국어 언론 보도는 찾지 못했다 — [WebSearch 결과, 2026-11-18] [검색 스니펫]

**트래픽 수치(유일한 1차 수치)**
- "약 500,000명이 사이트와 상호작용했다"는 것은 Gemal의 추정이다. 마지막으로 기록된 피크는 "about 200,000 total"이었고, Vercel 애널리틱스 크레딧이 떨어져 그 뒤 수치는 없다고 했다(2025-02-13, BI 에세이) — [Business Insider/AOL 재게재, 2025-02-13](https://www.aol.com/news/infinite-wikipedia-scroll-created-mere-090002486.html) [원문 확인]
- DM은 약 200건 받았고 대부분 긍정적이었다. 그중에는 가짜 TechCrunch 기자의 피싱(가짜 Calendly OAuth), 크립토 펌프앤덤프 제안, 살해 협박이 섞여 있었고, 누군가 "wikitok" 밈코인도 만들었다 — [Gemal 회고, 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- GitHub(IsaacGemal/wikitok, 2026-11-18 기준): 스타 1,321, 포크 174, 열린 이슈 26, 기여자 26명, 저장소 생성 2025-02-04, 마지막 push 2025-03-18, 아카이브되지 않음 — [GitHub API](https://github.com/IsaacGemal/wikitok) [원문 확인]
- HN 회고 게시물 "Reflecting on WikiTok"(2025-03-25)은 158점, 댓글 46개였다 — [HN 43468491](https://news.ycombinator.com/item?id=43468491) [원문 확인]

**출시 후 기능 변화와 유지보수 상태**
- README 기능 목록: 랜덤 문서 세로 피드, "14 languages", 이미지·제목·발췌 미리보기, 공유/링크 복사, 국기 언어 선택, 이미지·콘텐츠 프리로드, 반응형, PWA 설치 — [README](https://github.com/IsaacGemal/wikitok) [원문 확인]
- 실제 `languages.ts`에는 48개 언어가 있고 한국어(`ko`, "한국어")도 들어 있다. README의 "14개"는 갱신되지 않았다. 마지막 커밋들(2025-03-12~18)은 텔루구어·카슈미르어·말라얄람어·간/우/광둥어 추가 같은 커뮤니티 PR이었다 — [GitHub API commits / languages.ts](https://github.com/IsaacGemal/wikitok) [원문 확인]
- 회고에서 Gemal은 썸네일 없는 문서를 아예 빼 버렸다고 밝혔다("in later iterations I ditched articles without thumbnails altogether"). 첫 커밋은 Wikipedia `generator=random`으로 5개씩 가져와 200자 발췌를 보여주는 구조였다 — [Gemal 회고, 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- 향후 계획은 "For wikitok - not much. The website is mostly complete and currently I'm only reviewing simple pull requests."였다. 후속작으로 NASA 이미지 피드 spacetok.io를 만들었는데, 바이럴은 안 될 줄 알았다고 했다. WikiTok을 만든 이유 중 하나는 이력서용이었다(구직 중) — [Gemal 회고, 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- 처리되지 않은 이슈: "Feature Request - Filters"(2025-02-05), "topic selection"(2025-02-04), "swipe left to see related articles"(2025-02-08), "Read more only links to en"(2025-02-22), "404 not found error"(2025-05-31), "Build a native mobile app experience"(2026-06-24) — [GitHub API issues](https://github.com/IsaacGemal/wikitok/issues) [원문 확인]
- 2026-11-18 기준 wikitok.io(→www.wikitok.io), wikitok.vercel.app, spacetok.io 모두 HTTP 200으로 응답했다 — [curl 확인, 2026-11-18](https://www.wikitok.io) [원문 확인]
- 2026-01-09 다른 프로젝트의 HN 스레드에 Gemal(aizk)이 "creator of Wikitok here"라며 댓글을 달았다. 활동 계정은 유지 중이다 — [HN 46557029](https://news.ycombinator.com/item?id=46557029) [원문 확인]

**Wikimedia와의 관계**
- BI(2025-02-13)에서 Gemal은 "Wikipedia와 이야기했다"며 "I would love to collaborate with them officially and do more to help them modernize Wikipedia"라고 말했다. Wikimedia는 BI의 논평 요청에 답하지 않았다 — [BI/AOL, 2025-02-13](https://www.aol.com/news/infinite-wikipedia-scroll-created-mere-090002486.html) [원문 확인]
- Wikimedia 쪽이 API 사용 경험을 물어 왔다. 많은 개발자가 문서를 찾고 파싱하는 데 어려움을 겪는다고 했고, Gemal이 MVP에 문서를 전혀 보지 않았다고 답하자 놀랐다고 한다. 또 Wikipedia 엔지니어가 GitHub 이슈 #21에서 `curid` 파라미터가 잘못된 조회 방식이라고 지적했다 — [Gemal 회고, 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- 공식 협업이나 제휴가 발표됐다는 기록은 찾지 못했다(아래 Gaps 참조).

**수익화와 알고리즘에 대한 입장**
- 수익화는 없고 About의 기부 링크뿐이다. Gemal: "Making a monetized app would feel very wrong", Wikipedia의 CC 라이선스와도 충돌할 것 같다 — [BI/AOL, 2025-02-13](https://www.aol.com/news/infinite-wikipedia-scroll-created-mere-090002486.html) [원문 확인]
- 가장 많이 들어온 요청은 "알고리즘을 넣어 달라"였다(이메일·DM·GitHub 이슈). Gemal은 "Wikipedia 데이터 기반 프로젝트에 알고리즘을 넣고 사용자 데이터를 저장하는 건 이상하다"며 거절했고, 언론이 붙인 "doomscrolling 치료제/반(反)알고리즘" 프레임에는 동의하지 않는다고 썼다("I didn't create WikiTok initially to fight the algorithm") — [Gemal 회고, 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok); [BI/AOL](https://www.aol.com/news/infinite-wikipedia-scroll-created-mere-090002486.html) [원문 확인]
- 클론 문제: Gemal은 "iphone app that doesn't work", "play store rip off(com.arikassia.wikitok)", "wikitok.net"이 자기 것이 아니라고 밝혔다. 해외 기사 최소 5건이 wikitok.net을 공식 URL로 잘못 적었다 — [Gemal 회고, 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]

**HN 사용자 반응(2025-02-04, HN 42936723)** — 모두 [원문 확인], 출처는 [HN 42936723](https://news.ycombinator.com/item?id=42936723)
- 칭찬: "This is just great. A real keeper."(beardyw), "reminds me of the spirit of the old site stumbleupon"(novaomnidev), 단순한 것을 만드는 능력에 대한 감탄(srameshc)
- 개인화 요구: "Part of what makes short media apps (dangerously) addictive is that they eventually learn what you like… could help with the stickiness"(xhrpost, 하위 댓글 25개로 최다 스레드 중 하나)
- 랜덤 품질 비판: 분자생물학 용어처럼 세부적인 문서는 맥락 없이 보면 이해하기 어렵다(duxup)
- 차별성 의문: "How is this different from Wikipedia's own 'random article' feature?"(arrowsmith)
- NSFW: 첫 카드부터 노골적인 이미지가 나왔다며 NSFW 플래그를 요청(golergka)
- 한국어 요청: "Can you please add Korean? … great tool for discovering language learning reading material"(rickcarlino). 이후 한국어가 추가됐다
- 기타: 데스크톱 큰 화면에서 이미지가 깨진다(qwertox), 모바일에서 원문 링크를 누르면 표시가 나쁘다(beardyw)
- 회고 스레드(2025-03-25, HN 43468491): 바이브코딩 제품의 유지보수와 기술부채 우려(timkq), "'Random' is an algorithm… good for an 'explore' phase… But eventually most people…"(janalsncm), 아이디어 최초성 주장에 대한 반박(lwansbrough) — [HN 43468491](https://news.ycombinator.com/item?id=43468491) [원문 확인]

### Inferences
- 50만 명이 "interacted"했다는 것은 1회성 방문 위주로 보인다. 창작자가 애널리틱스를 계속 유지하지 않은 점, 3주 만에 "not much"를 선언한 점, 커밋이 2025-03-18에 멈춘 점을 보면 장기 리텐션을 끌어올리려는 시도 자체가 없었다. 바이럴 이후 사용자가 얼마나 남았는지는 아무도 측정하지 않았다.
- WikiTok의 성공 요인은 ① 이미 뜨고 있는 트윗에 몇 시간 안에 응답한 타이밍, ② "TikTok × Wikipedia"라는 한 줄 콘셉트, ③ "알고리즘 없는 피드"라는 시대 서사, ④ 무가입·무설치·백엔드 없음으로 마찰이 0이었다는 점이다. 기능적 깊이와는 무관하다.
- namutok이 그대로 차용할 점: 썸네일 없는 문서 제외(시각적 카드 품질), 언어/소스 선택, PWA 설치. 차별화가 필요한 점: Wikipedia 공식 "랜덤 문서"와 무엇이 다른가라는 질문에 namutok은 "지금 편집 중인 문서 = 실시간 화제성"으로 답할 수 있다.

### Gaps
- Gemal이 X에 올렸을 수 있는 트래픽 수치(방문자, 일자별 추이)는 X 접근 한계로 확인하지 못했다. SimilarWeb 같은 제3자 트래픽 추정도 조회하지 못했다.
- Wikimedia와의 "대화"가 공식 협업으로 이어졌는지 확인할 기록은 없다. Diff 블로그나 Phabricator에서 WikiTok 협업 관련 문서는 찾지 못했다.
- Reddit 반응(r/InternetIsBeautiful, r/technews 등)은 Reddit API가 막혀 원문을 확인하지 못했다. r/technews 2025-02-08 게시물이 존재한다는 것만 스니펫으로 확인했다 — [redlib 미러](https://redlib.hbubli.cc/r/technews/comments/1iklkan/developer_creates_endless_wikipedia_feed_to_fight) [검색 스니펫]

## Q2. 그 밖의 Wikipedia/위키 스와이프 피드 제품 전수 목록

### Takeaway
2021년부터 2026년 11월까지 같은 아이디어가 수십 번 반복됐다. GitHub에서 "wikitok"만 검색해도 저장소가 51개다. 1,000스타를 넘긴 것은 랜덤형 WikiTok(1,321)과 로컬 추천 알고리즘을 넣은 Xikipedia(1,147, 2026-02) 둘뿐이다. 앱스토어 클론은 거의 모두 평점 수가 0~60개 수준이고, 같은 카드형이라도 "위키 원문"이 아니라 큐레이션된 아이디어 카드를 주는 Deepstash(평점 9.4만 개)와는 규모 차이가 압도적이다.

### Cited Findings
**연표(웹·오픈소스)**
- **WikiScroll (retrohacker/William Blankenship)**: 2021-12-30 저장소 생성. HN "Show HN: Infinite Scroll Wikipedia" 2022-01-14 13점, 재게시 "WikiScroll" 2023-04-23 56점. GitHub 36스타·8포크, 마지막 push 2023-04-15. wikiscroll.blankenship.io는 2026-11-18에도 200 응답 — [HN 29930856](https://news.ycombinator.com/item?id=29930856), [HN 35673940](https://news.ycombinator.com/item?id=35673940), [GitHub](https://github.com/retrohacker/wikiscroll) [원문 확인]
- **mtricht/wikiscroll**: 2022-01 "Scroll through Wikipedia indefinitely in your native language", 3스타 — [GitHub](https://github.com/mtricht/wikiscroll) [원문 확인]
- **wikistroll.com**: "Random Wikipedia Article by Category", HN 2022-01-29 12점(카테고리 필터형) — [HN 30125005](https://news.ycombinator.com/item?id=30125005) [원문 확인]
- **BaptisteDri/wikitik**: 2023-02 "Wikipedia + Tiktok = infinite scroll of random wikipedia articles", 2스타 — [GitHub](https://github.com/BaptisteDri/wikitik) [원문 확인]
- **WikTok (wiktok.org, HN 사용자 b3n)**: 2023-05-22 "Show HN: WikTok – A Recommendation UI for Wikipedia", 73점·댓글 11개. 스와이프나 화살표 키로 "random and recommended articles (based on the previous articles you interacted most with)"를 오가는 주말 해킹 프로젝트였다. 2026-11-18 현재 wiktok.org는 wikitok.net으로 리다이렉트된다 — [HN 36028940](https://news.ycombinator.com/item?id=36028940) [원문 확인]; 리다이렉트는 curl로 확인 [원문 확인]
- **WikiTok (Gemal)**: 2025-02-04, Q1 참조.
- **wikitok.net(Gemal과 무관)**: 2026-11-18 메타 설명은 "A TikTok style feed for Wikipedia"이고, 메뉴에 bookmarks, movietok, poemtok, quotetok, facttok가 있다(여러 "~tok" 파생). Gemal은 이 도메인이 "sniped"됐다고 밝혔다 — [wikitok.net](https://wikitok.net) [원문 확인]; [Gemal 회고](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- **wikitok.cc/wiktok.cc (dev.to 글)**: 2025-02-10 dev.to 글. "forked the project"라고 썼지만 원작자 이름은 없다. 지연 로딩, 캐싱 등 — [dev.to](https://dev.to/jianping_liu/wiktok-tiktok-style-endless-wikipedia-discovery-1omf) [원문 확인]
- **wikideck.org**: 2025-02-16 "Learn with random Wikipedia cards — Swipe. Learn. Repeat.", 2스타 — [GitHub](https://github.com/ritchiemwewa/wikideck.org) [원문 확인]
- **Show HN: WikiScroll (TikTok-Style Wikipedia)**: 2025-02-27, 7점 — [HN 43198348](https://news.ycombinator.com/item?id=43198348) [원문 확인]
- **Tinder형 변종**: swipegeist(2025-05, React Native), wikipedia-tinder(2026-02, "Swipe right if you want a similar article"), rabbit-hole(2026-09), WikiFlick(2025-04) 등. 모두 0~2스타 — [GitHub 검색 "wikipedia swipe"](https://github.com/search?q=wikipedia+swipe&type=repositories) [원문 확인]
- **WikWok (terrakok)**: 2025-05-08 생성, Kotlin Multiplatform(iOS/Android/macOS/Windows/Linux/Web), "Completely Free: No subscriptions, no ads", Buy Me a Coffee 후원. 165스타·10포크, 마지막 push 2026-06-18 — [GitHub](https://github.com/terrakok/WikWok) [원문 확인]
- **QuickQuack (quack.sdan.io, Surya Dantuluri/sdan)**: 2026-01-09 "Show HN: Scroll Wikipedia like TikTok" 330점·댓글 88개. Gemini 3 Flash로 각 포스트의 HTML/Canvas를 실시간 생성하고, Cloudflare Durable Objects로 댓글/DM을 처리했다. AI 음성과 음악도 들어 있다. 창작자는 "Wikitok에서 영감"을 받았다고 했다 — [HN 46557029](https://news.ycombinator.com/item?id=46557029) [원문 확인]
  - GeekNews 게시는 **2026-01-12**("위키피디아를 틱톡처럼 스크롤하는 QuickQuack", 4점). 브리프에 있던 "~2026-10"은 착오로 보인다. 페이지에는 "10달전"으로 표시된다 — [GeekNews 25735](https://news.hada.io/topic?id=25735) [원문 확인]
  - 창작자는 GeekNews와 HN에서 "Wikwok"으로 리브랜딩할 계획이라고 했고, 진지한 제품이라기보다 재미용 프로젝트라고 언급했다 — [GeekNews 25735](https://news.hada.io/topic?id=25735) [원문 확인]
  - **피벗**: 2026-11-18 사이트 메타는 "A self-improving feed. QuickQuack is a TikTok-style feed of short educational videos, ranked by what gets watched."로 바뀌었다. 위키 텍스트에서 교육 영상 + 시청 기반 랭킹으로 전환한 것이다 — [quack.sdan.io](https://quack.sdan.io) [원문 확인]
- **Xikipedia (Lyra Rebane/rebane2001)**: 2026-02-01 저장소 생성. 2026-02-02 Show HN 441점·댓글 142개. Simple Wikipedia(278,000+ 문서) 기반의 "pseudo social media feed"로, 비ML 로컬 알고리즘이고 데이터는 기기 밖으로 나가지 않는다. 오프라인·PWA 설치를 지원하고 NSFW 경고가 있다. GitHub 1,147스타·77포크, 마지막 커밋 2026-05-27(외부 PR) — [HN 46850803](https://news.ycombinator.com/item?id=46850803), [GitHub](https://github.com/rebane2001/xikipedia), [Engadget 2026-02-02](https://www.engadget.com/apps/a-developer-turned-wikipedia-into-a-social-media-style-feed-174924280.html) [원문 확인]
  - 알고리즘(README 원문): 각 포스트의 카테고리 = Wikipedia 카테고리 트리 + 본문 링크. 점수는 지나치기 −5, 좋아요 50+4×(마지막 좋아요 이후 포스트 수), 문서 클릭 75, 이미지 클릭 100. 이미지가 있으면 기본 +5, 이미 본 포스트는 (3^본횟수−1)×−5000. 다음 포스트는 무작위 10,000개 후보에서 고르는데, 40% 확률로 점수 가중 랜덤, 42%로 최고점, 18%로 완전 랜덤이다. "given names/surnames" 카테고리는 −1000에서 시작 — [README](https://github.com/rebane2001/xikipedia) [원문 확인]
  - 시작 시 카테고리를 고르는 온보딩("Pick some categories to get started (optional)")과 Profiles/Stats 탭이 있다 — [xikipedia.org](https://xikipedia.org) [원문 확인]
  - 파생: Android 버전, Supabase 백엔드로 저장 기능을 붙인 포크(my-xikipedia, 2026-05) 등 — [GitHub 검색](https://github.com/search?q=xikipedia&type=repositories) [원문 확인]
- **byigitt/wikiscroll (ws.baris.world)**: 2026-02-02 "TikTok-style scrolling platform for Wikipedia facts. Features smart recommendation algorit…", 2스타. Xikipedia가 뜬 날 같이 나온 클론 — [GitHub](https://github.com/byigitt/wikiscroll) [원문 확인]
- **2026 하반기 신규**: Golps/WikiScroll(wikiscroll.com, 2026-10-22, "mindful Wikipedia and Wikivoyage reader"), judemont/FactsFlow(2026-11-16, "Doomscrolling, but you learn something."), Doompedia(2026-02~11 활동), dogbro2/wikiscroll-zh(2026-10, 중국어). 아이디어가 2026-11에도 계속 재발명되고 있다 — [GitHub 검색](https://github.com/search?q=wikipedia+doomscroll&type=repositories) [원문 확인]
- **Local Wikipedia (edjefferson)**: 2026-10-22 HN 1,725점, "Wikipedia, but only for things a half hour walk from you". 피드형은 아니지만 위키 재포장 아이디어 중 2026년 HN 최고 반응이었다(위치 기반 큐레이션) — [HN 50202285](https://news.ycombinator.com/item?id=50202285) [원문 확인]

**모바일 앱(미국 App Store / Google Play, 2026-11-18 조회)**
- **"WikiTok - Scroll, Read & Learn" (id6584225756, Ahmadi Tech)**: 최초 출시 **2024-08-22**로 Gemal의 WikiTok보다 먼저 나왔다. 최신 v2.7(2026-05-01), 평점 4.11(57개), 무료, 영어만, 장르 Entertainment/Education — [iTunes Lookup](https://apps.apple.com/us/app/wikitok-scroll-read-learn/id6584225756) [원문 확인]. Gemal은 이 앱을 "the iphone app that doesn't work"라고 불렀다(2025-02-27) — [Gemal 회고](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- **WikiScroll: Scroll & Learn (Burak Kose)**: 2025-02-26 출시, 2026-11-16 업데이트, 평점 3.58(19개) — [App Store](https://apps.apple.com/us/app/id6742419984) [원문 확인]
- **WikiTok - Swipe & Learn (Gokhan Navruz)**: 2025-03-08 출시, 2025-03-31 이후 업데이트 없음, 평점 0개 — [App Store](https://apps.apple.com/us/app/id6742821727) [원문 확인]
- **Wiki-Tik: Bite-Sized Learning (MINERVA K.K.)**: 2025-04-25 출시, 2025-05-08 이후 업데이트 없음, 평점 0개 — [App Store](https://apps.apple.com/us/app/id6744751835) [원문 확인]
- **WikiTok: Daily Fun Facts (samet bilgin)**: 2026-02-24 출시, 2026-11-12 업데이트, 평점 0개 — [App Store](https://apps.apple.com/us/app/id6759473073) [원문 확인]
- **DeepSwipe: Knowledge Feed**: 2026-04-07 출시, 평점 4.86(7개) — [App Store](https://apps.apple.com/us/app/id6761348532) [원문 확인]
- **TikWiki (dev.ragoose.tikwiki, Flutter+Firebase+Gemini)**: Google Play 다운로드 100+, 평점 4.7, 2026-07-05 업데이트. 기능은 스와이프 피드, 길게 눌러 여는 마인드맵, Gemini 요약/챗, 오프라인 저장, "Recommendation Scoring Engine", "Category Spacing & Attenuation"(같은 주제 반복을 줄여 피로 방지). 설명 문구는 "home of guilt-free doomscrolling" — [Google Play](https://play.google.com/store/apps/details?id=dev.ragoose.tikwiki), [GitHub](https://github.com/daveragos/tik_wiki) [원문 확인]
- **Play Store "rip off"(com.arikassia.wikitok)**: 2026-11-18 조회 시 "Not Found"로 삭제된 상태 — [Google Play](https://play.google.com/store/apps/details?id=com.arikassia.wikitok) [원문 확인]
- **비교군: Deepstash: Smarter Every Day!**(아이디어 카드 스와이프): 2019-02-23 출시, 평점 4.70(**93,991개**). **Mindsnap: Daily Micro Learning**: 4.57(297개). 둘 다 2026-09~11 업데이트 — [App Store Deepstash](https://apps.apple.com/us/app/id1445023295), [Mindsnap](https://apps.apple.com/us/app/id6499518703) [원문 확인]

**Fandom/기타 위키 기반 피드**
- Fandom 위키를 TikTok식 피드로 만든 제품은 GitHub/HN/App Store 검색에서 찾지 못했다(아래 Gaps).

### Inferences
- "위키를 스와이프 피드로" 만드는 일은 진입장벽이 0에 가깝다(2시간, 수백 줄). 그래서 제품 자체는 해자가 되지 못한다. 실제로 살아남은 차별화 축은 ① 추천(Xikipedia의 로컬 점수제), ② 큐레이션/소스 선택(Simple Wikipedia, Wikivoyage, 위치 기반), ③ AI 재가공(QuickQuack, TikWiki) 정도다. namutok의 "지금 편집 중인 문서" 소스는 이 목록 어디에도 없는 축(실시간 편집 활동 = 화제성 신호)이다.
- 네이티브 앱 클론은 거의 다 평점 0~60개 수준으로 실패하거나 방치됐다. 반면 웹/PWA + HN 런칭이 주목을 끈 경로였다. WikiTok, Xikipedia, QuickQuack 모두 웹 우선이다. namutok의 PWA 전략은 이 패턴과 맞는다.
- QuickQuack이 1년도 안 돼 위키 텍스트에서 "시청 기반 랭킹 교육 영상"으로 피벗한 것은, 위키 텍스트 랜덤 피드만으로는 지속적인 참여를 만들기 어렵다는 신호로 읽힌다. 다만 피벗 이유가 공개되지 않아 추정이다.
- wiktok.org(2023 WikTok)가 지금 wikitok.net으로 리다이렉트되는 것으로 보아, 2023 WikTok 운영자가 wikitok.net(Gemal이 "sniped"라고 부른 도메인)을 운영할 가능성이 있다. 소유자는 확인하지 못했다.

### Gaps
- Xikipedia의 방문자 수와 리텐션은 공개된 수치가 없다(Stats 탭은 로컬 개인 통계). Rebane의 fedi/bluesky 게시물은 확인하지 못했다.
- WikTok 2023(b3n)의 이후 지표와 종료 시점, wikitok.net 운영 주체는 확인하지 못했다.
- Fandom 기반 피드, "Wikipedia Short-form video" 같은 제3자 영상 클론은 검색에서 나오지 않았다.
- Google Play 클론들의 다운로드 수는 TikWiki 외에는 수집하지 못했다(Play 페이지 스크레이핑 한계).
- Product Hunt "wikitok-3" 페이지가 있다는 것만 확인했고 리뷰는 0건이다 — [Product Hunt](https://www.producthunt.com/posts/wikitok-3) [검색 스니펫]

## Q3. Wikipedia/Wikimedia 자체의 피드·탐색·숏폼 실험(2021–2026)

### Takeaway
Wikimedia는 TikTok식 경험을 직접 시험하고 있다. ① TikTok·Instagram·YouTube 숏폼 영상(2024-10~2025-01 187만 뷰), ② Future Audiences "Scrollipedia"(FY25-26, 별도 한시 앱 계획, 결과 미공개), ③ 앱 Explore 피드를 개인화 "Home"(For You/Community)으로 재설계(Android 2026-05~06). 가장 강한 정량 증거는 ③이다. 개인화 탭과 관심사 선택이 재방문을 끌어올렸고(Android 재방문 47.4% vs 42.9%), "랜덤 문서"는 사전 조사에서 가장 덜 중요하게 여겨진 기능이었다.

### Cited Findings
- **숏폼 영상 실험(Future Audiences)**: Wikipedia 콘텐츠를 "fun fact" 영상으로 재가공해 TikTok·Instagram·YouTube에 게시. 2024-10~2025-01 "a total of 1.87M views and 1.51M unique users reached". 도구는 2024-08 해커톤에서 개발자 1명과 커뮤니케이션 담당 1명이 1주 만에 만들었다 — [Signpost 2025-05-01](https://signpost.news/2025-05-01/News_from_the_WMF) [원문 확인]
  - 비판(토론 페이지, HaeB): 같은 4개월 동안 Wikimedia 인간 페이지뷰가 600억 회를 넘었으니 영상 기여는 0.005% 미만이고, "at scale"이라는 주장은 근거가 약하다 — [Signpost 2025-05-01](https://signpost.news/2025-05-01/News_from_the_WMF) [원문 확인]
  - FY25-26 목표는 2025-12까지 자체 채널 숏폼 500만 뷰 — [Meta-Wiki 실험 트래커 등](https://meta.wikimedia.org/wiki/Wikimedia_Futures_Lab/Dashboard/Experiment_Tracker/Wikipedia_Marketing_Campaigns) [검색 스니펫]
- **Scrollipedia(Future Audiences, FY25-26)**: "serendipitous browsing and curation"을 TikTok·YouTube·Instagram·Pinterest처럼 피드형으로 시험해 젊은 모바일 사용자에게 맞는지 보는 실험. 여러 프로토타입 → 제한 사용자 테스트 → 별도 한시(time-limited) 앱 출시 → 본 앱 통합이나 단독 앱 여부 결정 순서다. 근거로 "49% of Gen Z users expect algorithms to 'serve them content/products that they want'"를 인용했다. 2026-11-14 최종 편집 기준으로 출시일, 메커니즘, 지표는 공개되지 않았다 — [Meta-Wiki Scrollipedia](https://meta.wikimedia.org/wiki/Future_Audiences/Scrollipedia) [원문 확인]
- **Explore Feed Refresh(앱 팀)**: 목표는 "encourages curiosity, learning, and daily returns". 가설은 "재설계 시 14일 내 로그아웃 독자의 다회 세션 Explore 참여 10% 증가". 일정은 Phase 0(조사) 2025-11~2026-01, Phase 1(비주얼 재설계) 2026-02~06, Phase 2(신규 콘텐츠·개인화) 2026-06~08. 기존 모듈은 Trivia game, On this day, Because you read, Places, Picture of the day, Featured article, Suggested edits, Top read. 페이지는 모던 피드를 "immersive, swipeable, and visually engaging full-screen experiences"로 묘사한다 — [mediawiki.org Explore Feed Refresh](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh) [원문 확인]
- **Phase 1 사전 조사(2025-12)**: 인앱 설문 1,184명. 기존 사용자는 개인화와 인터랙티브 콘텐츠를 원했다. 게임은 가장 덜 쓰이지만 개선 요청은 가장 많은 기능 중 하나였고, 피드를 커스터마이즈할 수 있다는 걸 모르는 사용자가 많았다. 인터뷰에서는 신규/비앱 사용자가 관련성 단서가 없는 피드를 평가하기 어려워했고, **On This Day는 "approachable and finite"해서 좋은 반응**을 얻었다. 프로토타입 14명 테스트에서 Focus(몰입형 전체화면)와 Streams(스크롤 카드) 선호가 50:50으로 갈렸다 — [Explore Feed Refresh/Phase 1](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1) [원문 확인]
- **Android A/B(14일, 2026-05~06 출시)**: 신규·기존 설치 50%를 "Home"(For You/Community 2탭)에 배정. 결과:
  - 다일(multi-day) 로그아웃 참여 +10.5%(목표 10%)
  - 재방문 사용자: Home 47.4%(268,165/565,497) vs 기존 42.9%(374,707/873,441)
  - 1일 코호트 14일 누적 리텐션 +8%, 앱 전체 재방문율 +18%
  - 참여율: Explore DAU 대비 57.5% → Home 68.5%
  - **문서 클릭률 −6.3%**: 피드 안에서 더 머물고 원문으로는 덜 넘어갔다
  - For You 세션 평균 22.4초 vs Community 6.4초(3.5배). Continue Reading, Based on Your Interests, Because You Read가 견인했다
  - 관심사 선택 화면에 도달한 사용자의 30%가 1개 이상 선택(기존 커스터마이즈율 1% 미만)
  - 정성: 지원 메일과 Play 리뷰는 부정적이었다. 주된 불만은 **Random Article이 후속 릴리스로 밀린 것**(Phase 0에서 가장 덜 중요한 기능 중 하나로 꼽혔는데도)과 검색창 제거였다
  - 출처: [Phase 1 결과](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1) [원문 확인]
- **iOS A/B Part 1(2026-08~09)**: 2주차 리텐션 −0.1%(유의하지 않음, 목표 +8% 미달). 신규 사용자 이탈은 32.2% vs 34.1%(상대 5.6% 감소). 관심사 선택자 9.2%. **관심사 선택자는 건너뛴 사용자 대비 피드 참여가 +1050%**. 팀은 iOS 효과가 약한 원인으로 피드 지연(latency)을 의심하고 있다(T437621) — [Phase 1 결과](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1) [원문 확인]
- **Phase 2 모듈 후보 사용성 테스트**: 9명 대상 "return intent"에서 Personalized New Articles 1위(평균 1.44/5), Creator Videos 3위(2.44/5) — [Phabricator T432407](https://phabricator.wikimedia.org/T432407) [원문 확인]; 1.44 수치는 [검색 스니펫](https://phabricator.wikimedia.org/T430184)
- **Creator Videos("Watch & Learn") 모듈**: 2026-07-16 생성된 T432407. Android Explore 피드에 Commons 크리에이터 영상을 하루 3개(영어 피드만), 30~50개 풀에서 랜덤으로 보여주는 A/B 계획이었다. 2026-08-13 "Deprioritizing in favor of Text to speech"로 백로그 이동, 2026-10-02 우선순위 Low — [Phabricator T432407](https://phabricator.wikimedia.org/T432407) [원문 확인]
- **Wikistories(2021-07~2024-06, Inuka팀)**: 편집자가 만드는 짧은 시각적 "스토리" 포맷. 인도네시아어 위키백과 베타에서만 운영됐다. 2022-07~2023-06 스토리 946개·신규 편집자 244명, 2023-07~2024-06 스토리 2,714개(캠페인 효과)였지만 공유를 통한 스토리 조회는 76회에 그쳤다. 교훈: 활동 대부분이 단기 캠페인에서 나왔고, 편집자 약 24%가 Wikistories만 했다. 독자 테스트를 더 일찍 했어야 했다. "Final update: Project completed." 팀은 2024-06 해체 — [mediawiki.org Wikistories](https://www.mediawiki.org/wiki/Wikistories_for_Wikipedia) [원문 확인]
- **Wikimania 2026 세션 "The edit button nobody clicks: short-form video…"**: 숏폼 영상 문제는 운동 내부에서 일부러 논쟁적으로 다뤄지고 있고, 품질 관리, 플랫폼 종속, 폐쇄 포맷을 이유로 반대가 있다 — [Wikimania 2026](https://wikimedia.eventyay.com/wm/wikimania2026/talk/7T7BBR/) [검색 스니펫]

### Inferences
- Wikimedia 자체 데이터는 "개인화(관심사 선택 + 읽던 것 이어보기) > 랜덤"을 지지한다. 그러나 관심사를 실제로 고르는 사용자는 9~30%뿐이고, 고른 사람과 안 고른 사람의 참여 차이는 매우 크다(+1050%, 선택 편향 포함). namutok에서는 가입 없는 가벼운 관심사 선택(카테고리 칩)과 로컬 저장이 비용 대비 효과가 좋은 레버로 보인다.
- 그래도 "Random Article"을 빼자 장기 사용자 불만이 컸다. 랜덤은 핵심 지표를 끌어올리지는 못하지만 열성 사용자의 정체성 기능이 될 수 있다. namutok의 "랜덤 탭"은 유지하고 주 피드는 화제성/개인화 쪽에 두는 구성이 합리적이다.
- "On This Day"가 "approachable and finite"해서 반응이 좋았다는 점은 끝없는 피드보다 "오늘의 N개"처럼 끝이 있는 묶음이 신규 사용자에게 덜 부담스럽다는 신호다. 롱블랙의 하루 1편과 같은 맥락이다.
- 문서 클릭률 −6.3%는 피드 몰입이 원문 방문을 잠식할 수 있다는 증거다. namutok이 나무위키 원문으로 보내는 것을 중요하게 본다면(저작권·출처 존중), 카드에서 원문으로 가는 링크 노출을 설계 지표로 둬야 한다.

### Gaps
- Scrollipedia 프로토타입과 별도 앱이 실제 출시됐는지, 결과는 무엇인지 확인하지 못했다(2026-11-14 기준 페이지에 결과 없음).
- Explore 피드 Phase 2(New Articles by Topic A/B, 2026-08-20 베타 예정) 결과는 찾지 못했다.
- Wikipedia 앱의 기존 "Random" 모듈 사용률 수치는 공개 페이지에서 찾지 못했다.

## Q4. 텍스트 기반 지식 숏폼 서비스(글로벌·한국): 스와이프 카드 포맷의 성공 사례와 랜덤 vs 개인화 리텐션 증거

### Takeaway
지식 카드/요약 포맷으로 크게 성공한 사례(Headway, Blinkist, Deepstash, Imprint)는 모두 위키 원문 랜덤이 아니라 큐레이션·편집된 콘텐츠를 쓰고, 목표 설정, 스트릭, 일일 루틴 같은 습관 장치를 붙였다. 한국에서는 롱블랙의 "하루 한 편 + 시간 제한" 모델이 5년간 월간 독자 약 20만 명으로 지속됐다. 랜덤 피드의 리텐션을 직접 측정한 공개 데이터는 거의 없고, 가장 가까운 증거는 Q3의 Wikimedia A/B(개인화 우위)다.

### Cited Findings
**글로벌**
- **Headway**(우크라이나, 비상장·부트스트랩): Sensor Tower 기준 2020-09 Blinkist를 넘어 해당 니치 다운로드 1위(2021-08 보도) — [AIN.ua 2021-08-26](https://en.ain.ua/2021/08/26/headway-is-1-in-the-world-by-the-number-of-downloads) [검색 스니펫]
  - "Blinkist built a library. Headway built a ritual."이라는 분석이 있고, Headway의 추정 매출이 Blinkist의 4배 이상이라는 주장도 있다(2차 자료, 감사받지 않은 수치) — [behindthefeature substack](https://behindthefeature.substack.com/p/a-ukrainian-engineer-wrote-a-note) [검색 스니펫]
  - Headway는 자사 페이지에서 5,000만 명 이상이 가입했다고 주장한다. 제3자 매출 추정치는 월 $850K부터 <$10K까지 수 배씩 엇갈린다 — [AppStoreSpy](https://appstorespy.com/android-google-play/com.headway.books-trends-revenue-statistics-downloads-ratings), [apptail](https://apptail.io/app/headway-daily-micro-learning-crr/czechia) [검색 스니펫]
- **Blinkist**: 논픽션을 15분 오디오/텍스트로 요약한다. 투자 $35M, 2023년 Go1에 인수 — [behindthefeature substack](https://behindthefeature.substack.com/p/a-ukrainian-engineer-wrote-a-note) [검색 스니펫]
- **Imprint (Polywise)**: "Visual Micro Learning". 제3자 추정 매출 약 $250K, 설치 350K(추정치, 시점 불명) — [검색 결과 트래커](https://screensdesign.com/categories/podcast-summary-apps/) [검색 스니펫]
- **Deepstash**: 아이디어 카드형. 미국 App Store 평점 4.70, 93,991개(2026-11-18), 2019-02 출시 후 계속 업데이트 중 — [App Store](https://apps.apple.com/us/app/id1445023295) [원문 확인]
- 기관 사례: TED가 2025-05 앱에 세로 숏폼 영상 피드 "TED Shorts"를 추가했다. 네이버웹툰은 2025-09-01 세로 숏폼 애니메이션 "컷츠"를 정식 출시했다 — [디자인컴퍼스 TED](https://designcompass.org/2025/05/23/ted-shorts/), [Asiae 2025-08-25](https://www.asiae.co.kr/en/article/2025082509281628472) [검색 스니펫]

**한국**
- **롱블랙**(타임앤코): 2021-09-28 첫 노트. 월~토 자정에 '오늘의 노트' 1편을 공개하고, 5년간 일요일 외에는 발행을 거른 날이 없다. 2026-09-11 기준 누적 노트 1,803편, 인터뷰 인물 700명 이상, 독자가 저장한 문장 누적 633만 개, **월간 독자 약 20만 명**. 2026-03 '롱블랙 셀렉션', 2026-04 무제한 플랜 출시 — [벤처스퀘어 2026-09-12](https://www.venturesquare.net/?p=1112804) [원문 확인]
  - "하루 한 편 발행, 24시간 지나면 열람 제한"이 핵심 콘셉트이고, 월 4,900원으로 시작했다(2021 기사). 2024 LG U+ 제휴 보도에서는 MAU 30만, 2022 보도에서는 월별 재결제율 87%(회사 발표). 누적 조회는 2,500만~3,000만 회 이상(시점별 보도) — [기자협회보 50281](https://journalist.or.kr/news/article.html?no=50281), [기자협회보 54421](https://www.journalist.or.kr/m/m_article.html?no=54421), [LG 보도자료](https://www.lg.co.kr/media/release/27475) [검색 스니펫]
- **뉴닉**: "구독자 150만"을 확보하고 수익화에 성공했다는 기사 제목만 확인했다 — [eopla](https://eopla.net/magazines/33956) [검색 스니펫]
- **한국 "지식 숏폼(텍스트 카드 스와이프)" 전용 앱**: 2025~2026 출시 사례를 검색했지만 특정 서비스를 찾지 못했다. 근접 사례는 위의 컷츠, TED Shorts, 외산 카드 앱("ask - learn random facts"가 한국 App Store에 등록) 정도다 — [App Store KR ask](https://apps.apple.com/kr/app/ask-learn-random-facts/id6746559417?l=ko) [검색 스니펫]

**랜덤 vs 개인화 리텐션 증거**
- Wikimedia Android A/B: 개인화 For You 세션 22.4초 vs Community 6.4초, 재방문 47.4% vs 42.9%. iOS에서 관심사 선택자는 피드 참여 +1050% — [Explore Feed Refresh/Phase 1](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1) [원문 확인]
- Wikipedia 앱 Phase 0 조사에서 Random Article은 "least-valued features" 중 하나였다(그러나 빼자 불만이 나왔다) — [같은 출처](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1) [원문 확인]
- Xikipedia는 "비ML 로컬 알고리즘도 빠르게 학습한다"는 시연이 목적이다. 단, HN 사용자 sebastiennight는 "10분 스와이프했는데 얼마나 학습하는지 모르겠다, 전기 문서를 클릭한 적이 없는데 계속 나온다"고 했다(2026-02-02) — [README](https://github.com/rebane2001/xikipedia), [HN 46850803](https://news.ycombinator.com/item?id=46850803) [원문 확인]
- HN janalsncm(2025-03-25): "'Random' is an algorithm… good for an 'explore' phase… But eventually most people…"(개인화로 넘어간다는 취지) — [HN 43468491](https://news.ycombinator.com/item?id=43468491) [원문 확인]

### Inferences
- 성공한 지식 숏폼은 "콘텐츠 편집(요약·재가공) + 루틴 장치(하루 1편, 스트릭, 목표)"가 핵심이고, 무한 랜덤은 핵심이 아니다. 롱블랙(하루 1편, 시간 제한)과 Wikipedia의 On This Day(유한·접근 쉬움)가 같은 방향을 가리킨다.
- namutok은 무료·비상업이라 Headway식 유료 습관 루프는 해당되지 않는다. 다만 "오늘 가장 많이 편집된 문서 Top N" 같은 유한 묶음은 무료로도 루틴 장치 역할을 할 수 있다(추정).
- 랜덤 피드와 개인화 피드의 리텐션을 직접 비교한 독립 연구는 찾지 못했다. 현재 근거는 Wikimedia 자체 A/B(개인화 우위, 표본 큼)와 HN 정성 의견뿐이다.

### Gaps
- 퍼블리(유료 콘텐츠 → 커리어 플랫폼 전환), 오렌지레터의 구독자와 리텐션 수치는 이번 조사에서 확보하지 못했다.
- Imprint, Headway의 리텐션(D1/D30) 공개 수치는 없다. 제3자 매출·설치 추정치는 트래커마다 수 배씩 차이가 난다.
- 한국 "지식 숏폼" 앱 중 스와이프 카드형으로 성공한 사례는 확인하지 못했다(존재하지 않는다는 뜻은 아님).

## Q5. 이런 피드의 공통 실패 패턴(근거 포함)

### Takeaway
반복적으로 확인된 실패 패턴은 ① 바이럴 직후 창작자 이탈과 유지보수 중단, ② 랜덤 문서의 저품질·맥락 부족("재미없다/관련 없다"), ③ NSFW 노출, ④ 초기 로딩과 성능(Xikipedia 40MB), ⑤ 개인화 부재에 대한 반복 요청, ⑥ 클론과 도메인 선점에 따른 브랜드 오염, ⑦ "공식 랜덤 문서와 뭐가 다르냐"는 차별성 부재, ⑧ 캠페인이 끝나면 사라지는 참여(Wikistories)다. 다만 "신기함이 사라진 뒤 트래픽이 얼마나 줄었는지"를 측정한 공개 데이터는 없다.

### Cited Findings
- **창작자 이탈/방치**: Gemal은 공개 3주 뒤(2025-02-27) "not much… only reviewing simple pull requests"라고 했고, 마지막 커밋은 2025-03-18이다. 2025-05 "404 not found", 2026-06 "Build a native mobile app experience" 이슈는 응답 없이 열려 있다 — [Gemal 회고](https://www.aizk.sh/posts/reflecting-on-wikitok), [GitHub issues](https://github.com/IsaacGemal/wikitok/issues) [원문 확인]. 앱스토어 클론 WikiTok - Swipe & Learn(2025-03-31 이후), Wiki-Tik(2025-05-08 이후)도 업데이트가 멈추고 평점이 0개다 — [App Store](https://apps.apple.com/us/app/id6742821727) [원문 확인]
- **바이브코딩 유지보수 우려**: "how those 'vibe-coded' products will fare when faced with actually maintaining the code"(timkq, 2025-03-25) — [HN 43468491](https://news.ycombinator.com/item?id=43468491) [원문 확인]
- **랜덤 저품질/무관함**:
  - 세부적인 기술 문서는 맥락 없이 이해하기 어렵다(duxup, 2025-02-04) — [HN 42936723](https://news.ycombinator.com/item?id=42936723) [원문 확인]
  - QuickQuack에 대해 "the content is really irrelevant and uninteresting (I'm assuming it uses a random article? It should aim for the most popular instead)"(thiht), "the content needs to be more useful"(alexpadula), 축구 콘텐츠 말고 태그를 팔로우하게 해 달라(cons0le). 2026-01-09~10 — [HN 46557029](https://news.ycombinator.com/item?id=46557029) [원문 확인]
  - GeekNews 댓글: 랜덤 샘플링이 지루하니 인기 주제 위주로 큐레이션해 달라, 태그 팔로우와 주제 검색을 넣어 달라(2026-01) — [GeekNews 25735](https://news.hada.io/topic?id=25735) [원문 확인]
  - Xikipedia: "Man wikipedia is full of trash"(reader9274), "add some ranking criteria to surface good quality articles that maximize the 'I learnt something new today' factor"(abhinai). 2026-02-02 — [HN 46850803](https://news.ycombinator.com/item?id=46850803) [원문 확인]
- **NSFW**: WikiTok 첫 카드에서 노골적인 이미지가 나왔다는 보고(golergka, 2025-02-04). Xikipedia는 진입 시 "you will likely see NSFW content" 경고를 띄우고, Engadget도 "explicit material" 가능성을 지적했다(2026-02-02) — [HN 42936723](https://news.ycombinator.com/item?id=42936723), [HN 46850803](https://news.ycombinator.com/item?id=46850803), [Engadget](https://www.engadget.com/apps/a-developer-turned-wikipedia-into-a-social-media-style-feed-174924280.html) [원문 확인]
- **성능/초기 로딩**: Xikipedia는 시작할 때 약 40MB를 내려받는다. "make me wait 5 mins before the first view"(abhinai), "Please fix the loading issue and I'll return!"(pinkmuffinere, HN 최다 하위 댓글 스레드). iOS에서는 메모리 제한으로 로딩 중 크래시 가능성을 사이트가 스스로 경고한다 — [HN 46850803](https://news.ycombinator.com/item?id=46850803), [xikipedia.org](https://xikipedia.org) [원문 확인]
- **콘텐츠 신선도**: Simple Wikipedia 덤프 기반이라 최신 정보가 빠진다(뮤지션의 최근 앨범 2장 누락) — [Engadget 2026-02-02](https://www.engadget.com/apps/a-developer-turned-wikipedia-into-a-social-media-style-feed-174924280.html) [원문 확인]
- **개인화 부재 → 반복 요청**: WikiTok GitHub에 "Filters", "topic selection", "swipe left to see related articles" 이슈(2025-02-04~08), 다수의 DM과 이메일 — [GitHub issues](https://github.com/IsaacGemal/wikitok/issues), [Gemal 회고](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- **피드 → 원문 단절**: "Clicking the card takes you away from the feed, instead of creating e.g. some kind of a path of interest"(stck, Xikipedia). 모바일에서 원문 링크를 누르면 표시가 나쁘다(WikiTok, beardyw). Wikipedia Home 피드는 문서 클릭률이 −6.3% — [HN 46850803](https://news.ycombinator.com/item?id=46850803), [HN 42936723](https://news.ycombinator.com/item?id=42936723), [Phase 1 결과](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1) [원문 확인]
- **스와이프 자체에 대한 회의**: 뇌를 망가뜨리는 건 콘텐츠가 아니라 스와이프 행위와 맥락 전환이라 교육용 숏폼도 같은 단점이 있다(kykeonaut). 사람들은 둠스크롤하러 앱을 여는 게 아니라 메시지를 확인하러 연다는 반론(barcodehorse). 2026-02-02 — [HN 46850803](https://news.ycombinator.com/item?id=46850803) [원문 확인]
- **차별성 부재**: "How is this different from Wikipedia's own 'random article' feature?"(2025-02-04) — [HN 42936723](https://news.ycombinator.com/item?id=42936723) [원문 확인]
- **클론/도메인 오염**: wikitok.net 선점, 해외 기사 5건 이상이 URL을 잘못 표기, "작동하지 않는" iOS 앱, Play 스토어 복제 앱(현재 삭제), 밈코인 — [Gemal 회고](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]. Gemal은 BI에서 질 낮은 클론과 거리를 둘 방법이 없다고 했다 — [BI/AOL](https://www.aol.com/news/infinite-wikipedia-scroll-created-mere-090002486.html) [원문 확인]
- **캠페인 의존 참여**: Wikistories는 활동 대부분이 단기 캠페인에서 나왔고, 공유를 통한 조회는 1년간 76회였다 — [Wikistories](https://www.mediawiki.org/wiki/Wikistories_for_Wikipedia) [원문 확인]
- **리텐션 불확실(iOS)**: 개인화 Home도 iOS에서는 2주차 리텐션 개선 0(−0.1%, 유의하지 않음). 피드 지연이 원인으로 의심된다 — [Phase 1 결과](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1) [원문 확인]

### Inferences
- "신기함이 사라진다"는 정량 증거는 없지만, 간접 지표가 일관된다. 창작자가 측정 자체를 멈췄고, HN 스파이크 이후 후속 HN 언급은 회고 1회뿐이며, 앱 클론은 평점 0~60개다. 위키 랜덤 피드는 "한 번 해 보는 장난감"으로 소비되는 경향이 강하다.
- namutok에 특히 위험한 패턴은 ② 저품질 문서, ③ 민감 콘텐츠, ④ 로딩이다. 나무위키에는 성인·논란·인물 비방성 문서와 서술이 많을 수 있으므로(확인 필요) 카테고리와 키워드 필터가 필수로 보인다. "편집 중인 문서" 소스는 반달·편집 분쟁 문서를 끌어올 수 있으므로 같은 문서 연속 노출 제한, 짧은 문서 제외 같은 품질 필터가 필요하다(추정).

### Gaps
- 바이럴 이후 주간/월간 활성 사용자 감소 곡선(WikiTok, Xikipedia, QuickQuack)은 어느 쪽도 공개하지 않았다.
- 학술 연구에서 "교육용 숏폼 피드의 학습 효과/리텐션"을 다룬 근거는 이번 범위에서 수집하지 못했다(HN 댓글이 링크한 cyberpsychology 문헌은 미확인).

## Q6. namutok에 주는 교훈(종합)

### Takeaway
위키 스와이프 피드는 만들기 쉽고, 한 번은 뜨지만, 남기는 어렵다. namutok의 차별점인 "지금 편집 중인 문서"는 이 카테고리의 최대 약점인 "랜덤은 지루하고 무관하다"에 대한 구조적 답이 될 수 있다. 여기에 로컬 경량 개인화, 끝이 있는 일일 묶음, NSFW와 품질 필터, 빠른 첫 화면을 더하는 것이 글로벌 사례가 가리키는 최소 조합이다.

### Cited Findings
- 마찰 0 + 웹/PWA + 시의적절한 런칭이 WikiTok 바이럴의 조건이었다(백엔드 없음, 트윗 직후 공개, X→HN→언론 경로) — [Gemal 회고](https://www.aizk.sh/posts/reflecting-on-wikitok) [원문 확인]
- 사용자의 첫 요구는 알고리즘, 필터, 주제 선택이었다(WikiTok 이슈와 DM, QuickQuack·GeekNews 댓글) — [GitHub issues](https://github.com/IsaacGemal/wikitok/issues), [GeekNews 25735](https://news.hada.io/topic?id=25735) [원문 확인]
- 비ML 로컬 점수제(Xikipedia)는 서버와 사용자 데이터 없이 개인화를 구현한 선례다. 단, 18% 완전 랜덤을 섞어 필터 버블을 피한다 — [Xikipedia README](https://github.com/rebane2001/xikipedia) [원문 확인]
- 관심사 선택 + "이어 읽기/관심 기반" 모듈이 재방문을 끌어올렸다(Android 47.4% vs 42.9%). 그래도 랜덤을 없애면 반발이 있다 — [Wikimedia Phase 1 결과](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1) [원문 확인]
- 유한한 묶음(On This Day "approachable and finite", 롱블랙 하루 1편)이 신규 사용자와 루틴 형성에 유리했다 — [Phase 1](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1), [벤처스퀘어 2026-09-12](https://www.venturesquare.net/?p=1112804) [원문 확인]
- 수익화를 포기한 이유로 Gemal은 CC 라이선스 충돌을 들었다 — [BI/AOL](https://www.aol.com/news/infinite-wikipedia-scroll-created-mere-090002486.html) [원문 확인]
- Korean 관련: WikiTok은 한국어 위키백과(ko)를 지원한다. HN에서 한국어 학습 자료용으로 한국어 추가 요청이 있었다(2025-02-04). QuickQuack은 GeekNews에 소개됐지만 4점에 그쳤다(2026-01-12) — [languages.ts](https://github.com/IsaacGemal/wikitok), [HN 42936723](https://news.ycombinator.com/item?id=42936723), [GeekNews 25735](https://news.hada.io/topic?id=25735) [원문 확인]

### Inferences
- **차별화 메시지**: "공식 랜덤 문서와 뭐가 다른가"라는 첫 질문에 "지금 한국 인터넷이 고치고 있는 문서 = 실시간 화제"로 답한다. 랜덤 탭은 보조로 두되 없애지 않는다(Wikimedia 반발 사례).
- **품질 필터**: 썸네일/요약이 빈약한 문서 제외(WikiTok도 썸네일 없는 문서를 뺐다), 같은 문서 반복 노출 제한(Xikipedia의 본 문서 감점), 성인·민감 분류 필터(NSFW 사고 사례). 이것들은 런칭 전에 필요하다.
- **경량 개인화**: 가입 없이 localStorage 기반 카테고리 점수(지나침 −, 좋아요/열람 +)와 일정 비율 랜덤을 섞는 방식이면 서버 비용 없이 Xikipedia식 학습이 가능하다. 온보딩 관심사 칩은 선택 사항으로 둔다(선택률은 9~30%로 낮을 것).
- **유한 묶음**: "오늘 가장 많이 편집된 10개", "지금 편집 전쟁 중" 같은 끝이 있는 섹션으로 재방문 이유를 만든다.
- **성능**: 첫 카드까지의 시간을 최우선 지표로 삼는다(Xikipedia 40MB 교훈). 데이터는 지연 로딩한다.
- **런칭과 브랜드**: 도메인과 유사 이름(namutok.com/.kr/.app 등)을 먼저 확보한다. 런칭은 GeekNews, X, 커뮤니티에 동시에 하되, GeekNews에서는 위키 피드라는 콘셉트만으로는 반응이 약했다(QuickQuack 4점). 한국 맥락에서 공감을 끄는 지점(나무위키 편집 문화, 실시간 화제)을 전면에 둔다.
- **바이럴 이후 계획**: WikiTok은 측정과 유지보수를 3주 만에 멈췄다. 포트폴리오 목적이라도 리텐션 측정(익명 집계)과 소규모 반복 업데이트 계획을 미리 세워 두면 "스파이크 후 방치" 패턴과 구별되는 서사(지속 운영)를 만들 수 있다.
- **라이선스와 접근**: Wikipedia는 CORS가 열린 공개 API 덕분에 백엔드 없이 가능했다. 나무위키는 공개 API 제공 여부, 크롤링 정책, CC BY-NC-SA 라이선스 조건이 다를 수 있으므로 별도 확인이 필요하다(이번 조사 범위 밖, 미확인).

### Gaps
- 나무위키의 API·크롤링 정책과 라이선스 세부(출처 표기, 비상업 조건)는 이 노트의 범위가 아니어서 확인하지 않았다. 다른 조사에서 반드시 확인해야 한다.
- 한국 사용자 대상 위키 피드의 반응 데이터(국내 유사 서비스 지표)는 찾지 못했다.
