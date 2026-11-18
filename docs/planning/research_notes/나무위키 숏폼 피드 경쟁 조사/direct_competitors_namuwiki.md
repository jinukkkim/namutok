# 나무위키 콘텐츠의 외부 소비 및 피드형 탐색 제품: 직접 경쟁자 조사 (한국, 2026-11-18 기준)

> 표기 규칙: 모든 사실 뒤에 [날짜, 원문 확인] 또는 [날짜, 검색 스니펫]을 붙였다. "원문 확인"은 페이지, 스토어 API 또는 저장소를 직접 열어 본 것이다. 스토어 수치(평점, 리뷰 수, 다운로드)와 리뷰 원문은 2026-11-18에 직접 수집했다. Google Play 리뷰는 Play 웹페이지가 쓰는 리뷰 데이터 엔드포인트로, App Store 리뷰는 iTunes KR RSS(customerreviews)로 받았다. 리뷰를 쓴 날짜는 각 인용문 앞에 적었다.
> namu.wiki 문서를 근거로 한 내용은 커뮤니티가 쓴 위키 문서를 WebFetch로 열어 요약한 것이므로 운영사의 공식 입장이 아니다.

## Q1. "나무위키를 세로 스와이프 피드로 보여주는" 직접 경쟁자가 이미 있는가? (전체 인벤토리 요약)

### Takeaway
2026-11-18 기준, 나무위키 문서를 카드(제목, 발췌, 이미지) 형태의 세로 스와이프 피드로 보여주는 제품은 찾지 못했다. 앱스토어, 구글 플레이, GitHub, 크롬 웹 스토어, 파이어폭스 애드온, GeekNews, 웹 검색을 모두 확인했다. 가장 가까운 것들은 다섯 갈래로 나뉜다. ① "최근 변경 문서"를 나무위키 밖에서 보여주는 유일한 제품인 Raycast 확장(149 설치). ② 랜덤 문서 진입 버튼(뷰어 앱, 공식앱). ③ 실검 "왜 떴나" 설명 생태계(아카라이브 채널 구독자 3만, 유튜브 쇼츠, 크롬 확장). ④ 2026년에 급증한 나무위키 링크 레이싱 게임들. ⑤ 나무위키가 아닌 위키백과 기반 한국어 스와이프 앱들.

### Cited Findings
**확인한 검색 경로와 결과(직접 경쟁자 부재의 근거)**
- iTunes KR 검색("나무위키", "namuwiki", "namu wiki", "나무뷰어", "위키 스크롤", "wikitok", "위키백과 랜덤", "wiki swipe", "위키 숏폼", "지식 피드"): 나무위키 콘텐츠를 다루는 앱은 공식앱, 나무뷰어, 나무위키런, 링키런 4개뿐이었다. 피드형 앱은 모두 위키백과 기반이다 [2026-11-18, 원문 확인] — [iTunes Search API](https://itunes.apple.com/search?term=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4&country=kr&entity=software)
- 구글 플레이 KR 검색("나무위키", "나무위키뷰어", "namuwiki viewer", "나무위키 브라우저", "링키런", "나무위키런"): 나무위키 관련 앱은 공식앱(net.umanle.namuwiki), 위키게시판 뷰어(wiki.namu.board.android), 나무뷰어-리팩(com.monpub.namuwiki.repack), 나무위키런(com.pawfighters.namuwiki_speedrun), 링키런(com.linkyrun.app)이 전부였다 [2026-11-18, 원문 확인] — [Google Play 검색](https://play.google.com/store/search?q=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4&c=apps&hl=ko&gl=KR)
- GitHub 저장소 검색("namuwiki", "namu.wiki", "나무위키", "namuwiki random/feed/tiktok/shorts/trending/extension/app/viewer", "나무위키 숏폼/피드/랜덤/최근 변경")에서 스와이프 피드나 숏폼 프로젝트는 0건이었다. 코드 검색 `"namu.wiki/sidebar.json"`은 4건(Raycast 확장, 개인 트렌드 수집기, uBlock 필터 등)이었고, `"namu.wiki/random"`은 19건(슬랙 봇, 디스코드 봇, 레이싱 게임 등)이었다 [2026-11-18, 원문 확인] — [GitHub code search](https://github.com/search?q=%22namu.wiki%2Fsidebar.json%22&type=code)
- 크롬 웹 스토어 "나무위키" 검색 결과 10개는 모두 검색 단축, 레이싱 게임, 실검 이유, 분류 랜덤, 추천, 가독성, "나무위키 끄기" 확장이었다. 피드형은 없었다 [2026-11-18, 원문 확인] — [Chrome Web Store 검색](https://chromewebstore.google.com/search/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4?hl=ko)
- 웹 검색 "namutok OR 나무톡 나무위키"와 "나무위키 스와이프 숏폼 웹앱 틱톡처럼"에서는 관련 제품이 나오지 않았다 [2026-11-18, 검색 스니펫] — [검색 결과 예: Daring Fireball의 WikiTok 소개](https://daringfireball.net/linked/2025/02/12/wikitok)

**인벤토리 요약표 (자세한 내용은 Q2~Q3)**

| 분류 | 제품 | 운영 | 상태(2026-11) | 핵심 지표 |
|---|---|---|---|---|
| 공식앱 | 나무위키(뷰어) Android/iOS | umanle S.R.L. | 운영 중 | Android 1.7★·리뷰 516·10만+ / iOS KR 1.89★·144 |
| 비공식 앱 | 나무뷰어 (iOS) | Geun-hyeok Jang(윈컴이) | 운영 중 | 4.08★·365 평가, 2016~ |
| 비공식 앱 | 나무뷰어 - 리팩 (Android) | MonthlyPub | 운영 중(2026-10 이후 실검 장애) | 4.2★·리뷰 304·5만+ |
| 비공식 앱 | 위키 이로하 (Android) | Leuchten | 불명 | 2013~ |
| 비공식 앱 | 나무위키 브라우저 (Android) | Maclunak | 종료(2025-02-25부터 "비공식 앱" 오류) | - |
| 비공식 앱 | 모아바, 트리위키, 나무위키 오프라인 리더 등 | 개인 | 종료/한국 미제공 | - |
| 데스크톱 | NamuWikiViewer (Windows) | airtaxi | 운영 | MS Store |
| 데스크톱 | Raycast "Namuwiki" | 123period | 운영 | 149 설치, 최근 변경·실검 |
| 공식 부가 | 위키게시판 뷰어 | umanle | 2023-09 이후 업데이트 없음 | 3.8★·9·500+ |
| 공식 부가 | 나무뉴스 | umanle | 2026-06-23 종료 | - |
| 실검 해설 | 아카라이브 "나무위키 실검 알려주는 채널" | 사용자 운영(아카라이브) | 운영 | 구독 30,053 |
| 실검 해설 | YouTube @나무위키실검 | 개인 | 운영 | 구독 734·영상 80 |
| 실검 해설 | whydem.com | 개인(laniakea) | 사망 추정(DNS 없음) | 2026-04 출시 |
| 실검 해설 | 숲(namu-soup) | anteater333 | 웹 페이지만 응답 | - |
| 실검 해설 확장 | 실검 아카라이브 링커 / 실검 이유 / TrendMonitor | 개인 | 운영 | 47 / 25 / 미배포 |
| 레이싱 게임 | 나무위키런, 링키런, 나무타기, 나무위키 스피드런(확장), WikiRunner, namupado | 개인/소기업 | 운영 | 100+ 다운로드 / 321 사용자 등 |
| 봇 | 텔레그램 NamuWikiBot, 카톡 파싱봇, 슬랙 "랜덤 나무위키", 디스코드 봇 | 개인 | 대부분 방치 | - |
| 미러/포크 | 나무위키 미러, 무나키위, namu.moe, 더위키 | 익명 | 대부분 종료, namu.moe 방치 | - |

### Inferences
- "나무위키 + 세로 스와이프 카드 피드"와 "지금 편집되는 문서 피드"라는 조합은 2026-11-18 기준 공개된 제품으로는 비어 있는 자리로 보인다. 같은 축에 가장 가까운 Raycast 확장도 macOS 런처 안의 텍스트 목록일 뿐이고 설치 수는 149다.
- 다만 같은 사용자층을 겨냥한 "놀이형" 나무위키 2차 제품(레이싱 게임, 실검 해설)이 2026년에만 최소 8개 새로 나왔다. 개인 개발자들이 이 틈새를 동시에 노리고 있다는 뜻이고, 언제든 피드형이 나타날 수 있다.

### Gaps
- 인스타그램과 틱톡 계정은 검색 엔진에 거의 걸리지 않았고 로그인 없이 확인할 수 없어 조사하지 못했다. 웹 검색 "틱톡 나무위키 실검 계정 OR 인스타그램 나무위키 실검"은 무관한 결과만 냈다.
- 카카오톡 오픈채팅 봇, 텔레그램 채널, X(트위터) 실검 봇은 공개 목록이 없어 확인하지 못했다.
- 비공개 베타나 로컬에서만 도는 개인 프로젝트는 확인할 수 없다.

## Q2. 앱(공식, 비공식 뷰어): 운영자, 출시일, 기능, 지표, 리뷰, 약점

### Takeaway
나무위키 뷰어 앱 시장은 작다. 공식 Android 앱이 10만+ 다운로드, 비공식 Android 뷰어 최대치가 5만+, 비공식 iOS 뷰어가 평가 365건이다. 공식앱은 2026-08 UI 개편에서 "뒤로가기" 자리에 "랜덤 문서" 버튼을 넣고 실검에 썸네일을 붙였는데, 이 때문에 평점이 크게 떨어졌다(Android 1.7, iOS KR 1.89). 비공식 뷰어는 광고 차단, 가벼움, 뒤로가기 같은 기본기로 이탈 사용자를 받고 있다. 하지만 2026-10에 나무위키가 실검 API와 접근 보안을 바꾸면서 비공식 뷰어도 실검 표시 장애와 Cloudflare 차단을 겪고 있다.

### Cited Findings
**A. 나무위키 공식앱 (Android "나무위키", iOS "나무위키 공식앱"), 운영 umanle S.R.L.(파라과이)**
- Android: 개발자 umanle S.R.L., "광고 포함", 평점 1.7, 리뷰 516개, 다운로드 10만+, 업데이트 2026-10-29(새 기능: "UI 누락 수정"), 출시 2022-05-12, 설명은 "나무위키 공식 어플리케이션입니다." 한 줄뿐이다. 지원 메일은 support+aos@namu.wiki이다 [2026-11-18, 원문 확인] — [Google Play](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR)
- iOS(KR): 평점 1.89, 평가 144개, 버전 1.2.2, 최신 업데이트 2026-10-30, 출시 2022-05-15, 무료, 최소 iOS 16.4 [2026-11-18, 원문 확인] — [App Store](https://apps.apple.com/kr/app/id1623510780). 다른 스토어는 US 1.0★(1건), JP 3.67★(3건)이다 [2026-11-18, 원문 확인]. 사전 정보였던 "2.6/5, 30 ratings"는 과거 스냅샷이거나 다른 스토어 수치로 보인다(검색 스니펫에서도 "2.6점(30개 평가)"로 나옴) [검색 스니펫].
- namu.wiki 문서에 따르면 공식앱은 umanle가 직접 만든 세 번째 앱이다. 출시는 2022-05-12, 지원 언어는 한국어, 스페인어, 영어, 일본어이고, 2025-12-19 기준 다운로드는 "5만회 이상"이었다 [원문 확인] — [namu.wiki 나무위키 뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EB%B7%B0%EC%96%B4)
- 기능(같은 문서 기준): 하단 검색에서 실시간 검색어 표시, 홈, 새로고침, 페이지 내 찾기, 오프라인 다운로드(이미지 포함 또는 텍스트만)가 있다. 왼쪽 화살표 뒤로가기 버튼은 업데이트로 사라졌고 이유는 알려지지 않았다. 2025년 만우절 업데이트로 "파도타기" 게임이 추가됐다가 이후 UI 업데이트에서 빠졌다 [원문 확인] — [namu.wiki 나무위키 뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EB%B7%B0%EC%96%B4)
- umanle가 Play에 올린 다른 앱은 "아카라이브"(1.4★), "SSOVPN", "위키게시판 뷰어"(3.8★)다 [2026-11-18, 원문 확인] — [Google Play 개발자 섹션](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR)

**공식앱 2026-08 개편(iOS v1.2.0 / Android 동시기)에서 사용자가 지적한 변경점** [원문 확인 — 리뷰 원문]
- iOS KR 최신 리뷰 100건(2025-06-15~2026-11-15)을 세어 보니 "뒤로" 언급 48건, "랜덤/임의" 9건, "실검/실시간/썸네일" 6건, "위젯" 4건이었다 [2026-11-18 집계, 원문 확인] — [iTunes RSS 리뷰](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=1623510780/sortby=mostrecent/json)
- 2026-08-24 ★1 (iOS v1.2.0) "뒤로 버튼 없애고 랜덤문서 버튼을 그 자리에 쳐 넣는 건 무슨 발상임? 크롬으로 보는게 훨씬 낫네" — [App Store](https://apps.apple.com/kr/app/id1623510780)
- 2026-08-25 ★1 (iOS) "이전 문서 버튼 자리에 뜬금없이 랜덤 문서 버튼이 들어간 이유를 전혀 모르겠네요 랜덤 문서보다 이전 문서가 더 중요도 필요도가 높은 것 같은데" — [App Store](https://apps.apple.com/kr/app/id1623510780)
- 2026-08-27 ★1 (iOS) "실시간 검색어 썸네일이 무조건적으로 노출되는 것(특히나 지금같이 여러 사건 사고가 많을 때 혐오감이나 공포심 유발)과 최근 검색어 접근이 어려워지고, 뒤로가기 삭제 등…" — [App Store](https://apps.apple.com/kr/app/id1623510780)
- 2026-09-18 ★1 (iOS) "랜덤문서 버튼은 왜 쓰지도 않는데 대문짝만하게 놨는지도 모르겠고 잠깐 나갔다 들어오면 회색화면에 아무것도 안 보이고" — [App Store](https://apps.apple.com/kr/app/id1623510780)
- 2026-10-18 ★1 (iOS) "랜덤문서 쓰는 놈이 얼마나 있다고 뒤로가기 자리에 그딴걸 집어넣은거임?" — [App Store](https://apps.apple.com/kr/app/id1623510780)
- 2026-08-25 ★1 (iOS) "나무위키 10년썻는데 그만 쓸랍니다 … 이거 저거 보면서 링크타고 보고 다시 돌아와서 보다가 링크타고 하는게 나무위키의 묘미인데" — [App Store](https://apps.apple.com/kr/app/id1623510780)
- 2026-08-24 ★1 (iOS) "순위 위젯 돌려주세요. 잘 쓰고 있었는데 업뎃 후 위젯이 사라졌네요" — [App Store](https://apps.apple.com/kr/app/id1623510780)
- 2026-10-23 ★1 (iOS) "뒤로가기 있는 나무뷰어로 감ㅅㄱ" — [App Store](https://apps.apple.com/kr/app/id1623510780)

**공식앱 Google Play 리뷰 인용(날짜순)** — [Google Play 리뷰](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR&showAllReviews=true) [2026-11-18 수집, 원문 확인]
- 2025-11-04 ★3 (유용 46) "업데이트 되면서 화면도 깔끔하고 예뻐서 보기 좋고 미니게임도 있어서 좋은데요 … 사진을 올릴 수가 없습니다"
- 2026-08-25 ★3 "위젯으로 놓고 검색할 때마다 편했는데 위젯이 갑자기 사라지고 앱 내에서 사용하는 것도 조금 불편하고요"
- 2026-09-07 ★1 (유용 32) "UI가 별로고 자잘하게 불편해졌어요 … 검색창 누르면 실검 갱신이 안되거나 … 그냥 웹 나무위키 쓸래요."
- 2026-10-16 ★3 (유용 42) "어짜피 크롬에서 보는거랑 별 차이도 없구만 그냥 냅두지 뭘 또 업데이트를 합니까"
- 2026-10-17 ★3 "실험실 파도타기 게임 삭제됨?"
- 2026-10-24 ★2 "실검 이미지좀 안뜨게 해주세요 하다못해 끄고 켤 수 있는 옵션을 만들어주세요"
- 2026-10-29 ★1 "업데이트 이후 401 에러가 뜨는 등의 버그가 자주 발생합니다"
- 2026-11-05 ★1 "실검에 이미지는 왜 집어넣어가지고 검색 기록도 안 뜨고 … 이제는 새로 앱 켤 때마다 검색하면 보안 확인 중 떠서 검색한거 씹혀서"
- 2026-11-08 ★1 (유용 93) "공유 버튼이 전혀 동작하지 않고, 확대 축소를 하기 위해 크롬에서 열고 싶은데 크롬에서 여는 방법도 전혀 없습니다."
- 2026-11-11 ★1 "실행을 할수록 인증 요청이 만료되었거나 올바르지 않습니다 라고 하는 게 계속 뜨는데"
- 긍정 리뷰: 2026-10-25 ★5 "나무위키는 활자중독자한테 ㄹㅇ 최적화되어있음" / 2026-11-13 ★5 "브라우저안들어가도되서 시간단축굿"
- 개편 전 리뷰: 2025-07-03 ★1 (iOS v1.0.8) "실검 목록 접히고 검색할 때 6위까지밖에 안 보여서 개 불편한 거" — [App Store](https://apps.apple.com/kr/app/id1623510780)

**B. 나무뷰어 (iOS, 비공식), Geun-hyeok Jang(namu.wiki 표기는 "윈컴이/wincomi")**
- 평점 4.08, 평가 365개(KR), 버전 3.0.1, 최신 업데이트 2026-09-16(iOS 27 대응, 페이지 내 찾기 강화, 목차 로직 개선), 첫 출시 2016-05-02, 무료, "앱 내 광고 없음! 나무위키 사이트의 광고 차단까지!"를 내세운다. 기능은 즐겨찾기, 목차, 테마/다크모드, "홈 화면 앱 아이콘을 길게 눌러 바로 랜덤 문서로 이동", 블루투스 키보드 단축키, URL Scheme이다. 설명에 "이 앱은 나무위키 공식 앱이 아니며"라고 적혀 있다 [2026-11-18, 원문 확인] — [App Store](https://apps.apple.com/kr/app/id993035669)
- namu.wiki에 따르면 리그베다 시절 iOS 유일 뷰어였던 "리그베다 뷰어"의 나무위키판이다. 출시 2016-05-03, 상단 바에 랜덤/편집/역링크/역사/토론/야간 모드 버튼이 있다 [원문 확인] — [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4). 초기 Objective-C 소스는 GitHub에 공개돼 있다 [원문 확인] — [wincomi/ios-namuViewer-1](https://github.com/wincomi/ios-namuViewer-1)
- 리뷰(iOS KR, 원문 확인) — [iTunes RSS](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=993035669/sortby=mostrecent/json)
  - 2024-06-25 ★3 "광고차단이 안되네요 파워링크가 버젓이 떠있습니다 … 이러면 공식앱과 차별점이 무엇인지.."
  - 2024-12-23 ★5 "언젠가부터 광고차단 기능이 적용이 되지 않습니다."
  - 2025-09-15 ★5 "아이패드에선 공식 앱의 문제가 많아서 대신 유용하게 쓰고 있습니다 … 언젠가부터 업데이트가 끊긴 것 같던데"
  - 2026-09-15 ★5 "10년 가까이 아주 잘 사용하고 있습니다."
  - 2026-10-22 ★3 "통신 오류로 인해 약 10초간 무한 새로고침을 반복하다가 겨우 접속되거나 사람 인증 메뉴로 연결되다가 다시 무한 새로고침에 빠집니다."
  - 2026-11-02 ★3 "검색 시 자주 보안확인 수행이나 통신오류 알림 뜨면서 무한 새로고침이 생겨요."
- 약점: 2024~2025년 광고 차단이 무력화됐고(사이트 쪽 변경 추정), 업데이트 공백이 있었으며, 2026-10 이후 보안 확인과 무한 새로고침 문제가 생겼다(위 리뷰).

**C. 나무뷰어 - 리팩 (Android, 비공식), MonthlyPub** (iOS "나무뷰어"와는 다른 앱이다. Google Play에 있는 "나무뷰어"는 이 앱이다.)
- "광고 포함", 평점 4.2, 리뷰 304개, 다운로드 5만+, 업데이트 2026-11-18, 현재 패키지 등록일 2022-08-15("키 잃어버려서 새로 등록합니다"). 기능은 랜덤, 자동완성, 낮/밤, 폰트, 인덱스, 방문 기록, 나중에 볼 문서, 각주 팝업, 이미지 뷰어 등이다. 설명에 "나무 웹페이지 구조에서 특정 부분을 따와서 뷰어를 구성하기 때문에 웹페이지의 변경이 있으면 정상 동작하지 않을수 있으니"라고 적혀 있다 [2026-11-18, 원문 확인] — [Google Play](https://play.google.com/store/apps/details?id=com.monpub.namuwiki.repack&hl=ko&gl=KR)
- namu.wiki에 따르면 최초 출시는 2015-05-29이다. 엔하위키 미러 뷰어로 시작해 1인이 개발해 왔다. 2022-03-19에 접속 불가였다가 업데이트로 복구됐고, the seed 4.13.0 이후로는 임시방편으로 간헐 작동 중이다 [원문 확인] — [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4)
- 리뷰(Google Play, 원문 확인) — [Google Play 리뷰](https://play.google.com/store/apps/details?id=com.monpub.namuwiki.repack&hl=ko&gl=KR&showAllReviews=true)
  - 2024-02-05 ★5 (유용 10) "진짜 이건 개발자가 거의 봉사하는 수준임 … 공식앱이 워낙 메롱이라 본인 편하자고 혼자 만들어"
  - 2026-10-04 ★5 "요즘 실검 랭킹이 표시가 안 되네요..."
  - 2026-10-08 ★5 "최근 업데이트 후에 검색하면 클라우드플레어 페이지(Sorry, you have been blocked You are unable to access namu.wiki ) 가 나오는데 … 바탕 하얀 깜빡임 대응 옵션 끄니까 해결됐습니다."
  - 2026-10-09 ★5 "10월 8일자로 … 'you have been blocked' 페이지가 뜹니다 … 크롬 또는 공식 뷰어, 또는 와이파이 환경에서는 접속이 잘 되지만 데이터로 사용할 때는 접속이 안됩니다"
  - 2026-10-21 ★5 "공식뷰어 꼬라지 때문에 이걸로 환승함. 이제부터는 이 앱이 공식입니다."
  - 2026-10-25 ★1 (유용 25) "실검 표시 안 되는 버그, 목차 링크 클릭 먹통 …"
  - 2026-11-16 ★5 "그 어떤 방법을 동원해봐도 실검 안뜨는 오류가 고쳐지지 않습니다"

**D. 기타 비공식 앱 (대부분 종료)** — 출처: [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4) [원문 확인]
- 나무위키 브라우저 (Android, Maclunak): 스토어에서 삭제됐고 "2025년 2월 25일부터 비공식 앱이라는 오류 메시지만 뜨고 접속이 불가하다." 누가 왜 막았는지는 문서에 나오지 않는다.
- 모아바 (Android 2020-02 / iOS 2019-04, Moava): 나무위키 뷰어 기능 추가(2020-10/11). 현재 스토어 링크가 삭제됐거나 접속 불가.
- 나무위키 (iOS, HanYeong Lee, 2015-06-11), 트리위키 (iOS, Sisuc Lee, 2015-10-01), 나무위키 오프라인 리더 (iOS, Yeonwoon Jung, 2016-03-04, 랜덤 기능 있었음): 한국 스토어에서 설치 불가 또는 차단. 사유는 문서에 없음.
- 리그베다 뷰어 (iOS): 리그베다 사유화 사태 이후 삭제.
- 위키 이로하 (Android, Leuchten, 2013-12-20 출시, 2017-01-19 "에네위키 뷰어"에서 이름 변경): 나무위키, 리브레위키, 디시위키, 백괴사전 등 여러 위키를 지원하고 광고가 없다. 문서상 마지막 날짜는 2017년이다 [원문 확인] — [namu.wiki 위키 이로하](https://namu.wiki/w/%EC%9C%84%ED%82%A4%20%EC%9D%B4%EB%A1%9C%ED%95%98). 2026-11-18 Play 검색("위키 이로하")에서는 나오지 않았다 [원문 확인].
- 나무위키 MDict: 오프라인 사전. 덤프 제공이 중단돼 2021년 데이터만 쓸 수 있다 [원문 확인] — [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4)
- modum-app/build-namuwiki-sql: "mainly for iOS offline reader app"용 덤프 변환기(2016~2020) [원문 확인] — [GitHub](https://github.com/modum-app/build-namuwiki-sql)

**E. 데스크톱**
- NamuWikiViewer (Windows, WinUI 3/.NET 10, airtaxi): 2025-12-15 생성, 2026-07-24 푸시, Microsoft Store 배포(9p6t0d0nnn55). "나무위키 및 그 운영진과는 어떠한 제휴나 관련이 없습니다" [원문 확인] — [GitHub](https://github.com/airtaxi/NamuWikiViewer)
- 나무위키 파도타기 namupado (Windows, zero624dev, 2024-05-25 v1.0.0): 설명은 "나무위키 파도타기"뿐이며, 코드에서 namu.wiki/random을 호출한다 [원문 확인] — [GitHub](https://github.com/zero624dev/namupado)

**F. 공식 부가 앱: 위키게시판 뷰어 (Android, umanle)**
- "나무위키 게시판 안드로이드 공식 어플리케이션", 3.8★, 리뷰 9개, 500+ 다운로드, 업데이트 2023-09-20, 페이지에 표시된 최초 날짜는 2021-01-15다 [2026-11-18, 원문 확인] — [Google Play](https://play.google.com/store/apps/details?id=wiki.namu.board.android&hl=ko&gl=KR). namu.wiki는 출시일을 2021-03-21로 적어 날짜가 엇갈린다 [원문 확인] — [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4)

### Inferences
- 공식앱이 넣은 "랜덤 문서 버튼"에 대한 거센 반발은 namutok에 양면으로 읽힌다. ① 헤비 유저에게 무작위 탐색은 우선순위가 낮다(뒤로가기와 링크 타기가 핵심 습관이다). ② 반발의 주원인은 핵심 내비게이션(뒤로가기)을 없앤 데 있지, 랜덤 기능 자체의 존재는 아니다. 그래서 namutok이 랜덤을 메인으로 하더라도 "탭하면 namu.wiki 원문으로" 넘어가는 동선은 지키는 편이 안전하다.
- 실검 썸네일에 대한 불만("혐오감이나 공포심 유발", "끄고 켤 수 있는 옵션")은 이미지 중심 카드 피드에 직접 걸리는 리스크다. 사건사고 문서 이미지를 가리거나 끌 수 있는 옵션이 필요하다는 신호다.
- 비공식 뷰어가 내세우는 가치는 광고 차단, 가벼움, 뒤로가기, 랜덤 단축 같은 기본기다. "새로운 소비 방식(피드)"을 내세운 앱은 없었다.

### Gaps
- 나무뷰어(iOS)의 다운로드 수는 App Store 특성상 확인할 수 없다.
- 공식앱 v1.2.0의 정확한 배포일과 공식 패치노트(랜덤 버튼 도입 이유)는 찾지 못했다. 리뷰 흐름으로 보면 2026-08-23 무렵이다.
- "파도타기"가 링크 서핑형 게임인지 실제 파도타기 미니게임인지는 문서 요약만으로는 판단할 수 없다.

## Q3. 웹, 확장, 봇, 게임, SNS: 나무위키 콘텐츠를 외부에서 보여주는 기타 제품

### Takeaway
나무위키 밖에서 "피드"에 가까운 경험을 주는 제품은 세 군데다. ① 아카라이브 "나무위키 실검 알려주는 채널"(구독 30,053명): 실검 키워드마다 이유를 글 한 편으로 올린다. ② 그 채널을 실검과 이어 주는 크롬 확장들. ③ 유튜브 쇼츠 "OO 실검 1위 이유". 최근 변경 문서를 외부에 노출하는 제품은 Raycast 확장 하나뿐이다. 2026년에는 링크 레이싱 게임이 몰려 나왔다(앱 2, 확장 3, 웹 1). 다만 모두 다운로드 100+, 사용자 수십~수백 명 수준이다.

### Cited Findings
**A. "최근 변경" 및 실검 외부 노출**
- Raycast 확장 "Namuwiki"(작성자 123period, 첫 버전 2025-02-07, MIT): 명령은 "Search Documents", "View Recently Changed Documents", "View Trending Searches" 3개 [원문 확인] — [raycast/extensions package.json](https://github.com/raycast/extensions/tree/main/extensions/namuwiki). 최근 변경 명령은 `namu.wiki/sidebar.json`을 쓴다(코드 검색) [2026-11-18, 원문 확인]. 스토어 표기 설치 수는 149다 [2026-11-18, 원문 확인] — [Raycast Store](https://www.raycast.com/123period/namuwiki)
- namu-trending (OnlyReadOneBook, 2026-10-03 생성, 2026-11-17 푸시): 나무위키 실검을 수집해 Git에 기록하는 도구다. README에 "예전 API `search.namu.wiki/api/ranking` 은 2026-10-04 에 DNS 에서 사라졌고, 지금은 페이지 스크립트가 서명 헤더를 붙여 암호화된 응답을 받아 카드에 그립니다. 그 헤더를 흉내 내지 않고 브라우저가 그린 결과만 읽습니다."라고 적혀 있다 [원문 확인] — [GitHub](https://github.com/OnlyReadOneBook/namu-trending)
- 같은 작성자의 trend-summary(2026-05-23~2026-10-14): Google Trends, YouTube, 커뮤니티를 모아 Gemini로 요약하는 로컬 Flask 앱이며, 소스 중 하나가 sidebar.json이다 [원문 확인] — [GitHub](https://github.com/OnlyReadOneBook/trend-summary)
- 숲(namu-soup, anteater333, 2022-03-17 생성, 2025-10-12 푸시): "나무위키의 실시간 검색어를 빠르게 확인할 수 있고, 왜 지금 이슈가 되고 있는지 모두가 함께 메모할 수 있는 웹 사이트". 실검은 약 30분 간격으로 갱신하고, 메모는 영구 저장하지 않는다 [원문 확인] — [GitHub](https://github.com/anteater333/namu-soup). 2026-11-18 블로그 페이지는 200으로 응답했지만 실제 서비스가 작동하는지는 확인하지 못했다 [원문 확인] — [blog.anteater-lab.link/namu-soup](https://blog.anteater-lab.link/namu-soup/)
- whydem.com: "Show GN: 나무위키 실검 이유 알려주는 서비스", 작성자 laniakea, 2026-04-06. 만든 동기는 "실검에 뜬 키워드가 왜 떴을까 궁금한 불편함이 자주 있었습니다". 댓글에 "이미 아카라이브 실검챈이 있지 않았나요?"라는 반응이 있었다 [원문 확인] — [GeekNews](https://news.hada.io/topic?id=28263). 2026-11-18에는 DNS 조회가 실패해(ENOTFOUND) 서비스가 중단된 것으로 추정된다 [원문 확인].

**B. 아카라이브 "나무위키 실검 알려주는 채널"(사용자 운영, 플랫폼은 umanle의 아카라이브)**
- 개설 2024-01-25, 구독자 30,053명, 알림 수신 1,338명(2026-11-16 기준). 공지 외에는 "실검에 오른 이유" 글만 허용하고, 탭은 운영/일반/인방/커뮤/정치/스포츠/TV다. 개설 1주일 만에 3,000명을 모았다. 실검 항목과 해설 글을 이어 주는 Tampermonkey 스크립트를 배포하며, 사용자들이 만든 크롬 확장도 있다. 키배 성지가 됐다는 비판, 인방과 정치 탭 댓글 금지(2024-09-28, 2024-12-28~무기한), 2026-05~07 운영진 갈등이 있었다 [원문 확인] — [namu.wiki 나무위키 실검 알려주는 채널](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EC%8B%A4%EA%B2%80%20%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94%20%EC%B1%84%EB%84%90)

**C. 크롬/파이어폭스 확장** (사용자 수는 2026-11-18 CWS/AMO 표기, [원문 확인])
- 나무위키 실검 아카라이브 링커 (blog.jell.kr, jellive): 47 사용자, 평점 1개(5.0). 실검 옆에 "왜?" 링크를 달아 아카라이브 실검챈(/b/namuhotnow) 글로 보내고, v1.1에서 실검 변경을 자동 추적한다 — [CWS](https://chromewebstore.google.com/detail/fhmagpkcdpcnmbihkgdcmabidcmdmpgl), [GitHub](https://github.com/jellive/namu_arca_linker)
- 나무위키 실검 이유: 25 사용자. 문서 페이지에 실검챈 해설을 가져와 보여준다 — [CWS](https://chromewebstore.google.com/detail/ahjiddcgeaggnabpeejmhhmohlonaapg)
- NamuWiki Trend Monitor (Seoyoungeun, 2026-10-15): 실검 TOP 10을 팝업으로 보여주고, 새 검색어는 데스크톱 알림과 "NEW" 배지, "이유" 링크(실검챈 검색)로 알려준다. 스토어 배포 여부는 확인하지 못했다 — [GitHub](https://github.com/Seoyoungeun/NamuWikiTrendMonitor)
- 나무위키 분류 랜덤: 5 사용자. 분류 페이지에 랜덤 버튼을 달아 분류 안의 문서를 무작위로 새 탭에 연다 — [CWS](https://chromewebstore.google.com/detail/hjfajebbohiiijembehbjmnmlfkehpbj)
- namu reco - 나무위키 개인화 추천: 3 사용자. 열람 시간을 기반으로 다음 문서를 추천한다 — [CWS](https://chromewebstore.google.com/detail/ndmfdfbdinhapjajelhfohchljncilme)
- 나무위키 문서추천 (WeKia, 2021, 덤프 기반 Doc2Vec): 2026-11-18 CWS 페이지에 내용이 없어 내려간 것으로 추정 [원문 확인] — [GitHub](https://github.com/WeKia/NamuWiki-recommender). 추천에 30~60초가 걸린다는 설명은 [검색 스니펫]이다.
- NamuSearcher - 나무위키 바로 검색: 111 사용자 — [CWS](https://chromewebstore.google.com/detail/aemdgmicdcjcljffaokoapphpkfdeddd). 파이어폭스 "나무위키 검색"(search-namu-wiki, 2024-10-10): 일 사용자 29, 평점 1.0(1건) — [AMO](https://addons.mozilla.org/ko/firefox/addon/search-namu-wiki/)
- 나무위키 텍스트 가독성 향상: 11 사용자 — [CWS](https://chromewebstore.google.com/detail/oiejeihknfnlhnnlpjhhbcodgabkaefm)
- 반(反)나무위키 확장: Turn Off namuwiki 1,000 사용자, 평점 25개 — [CWS](https://chromewebstore.google.com/detail/dgdifdnmamleoebgfbfeckefhhhplmdn). GitHub turnoff-namuwiki는 ★82 — [GitHub](https://github.com/Alex4386/turnoff-namuwiki)
- 광고 제거 유저스크립트 NamuLink (FilteringDev): ★89, 2026-11-17 푸시, "나무위키에만 있는 복잡한 네이버 파워링크 광고를 제거" [원문 확인] — [GitHub](https://github.com/FilteringDev/NamuLink)

**D. 나무위키 링크 레이싱(스피드런) 게임** (출시가 2024~2026년에 몰림)
- 나무위키런 - 나무위키 스피드런 (유한회사 포파이터스/Paw Fighters): iOS 출시 2026-03-24, 5.0★(4), 업데이트 2026-04-01 "키워드별 리더보드 제공" — [App Store](https://apps.apple.com/kr/app/id6760975716). Android는 "광고 포함", 5.0★, 리뷰 6, 100+ 다운로드, 업데이트 2026-04-01. 랜덤 시작 페이지에서 목표 키워드까지 가는 방식이고 뒤로가기는 반칙이다 [2026-11-18, 원문 확인] — [Google Play](https://play.google.com/store/apps/details?id=com.pawfighters.namuwiki_speedrun&hl=ko&gl=KR)
- 링키런 - 나무위키 링크 달리기 (deeronthewall, 개인사업자): iOS 출시 2026-05-05, 5.0★(1), 업데이트 2026-05-12 — [App Store](https://apps.apple.com/kr/app/id6766291857). Android는 "광고 포함", 100+ 다운로드, 업데이트 2026-05-12. 매일 같은 출발/목표를 주는 "오늘의 도전", 430여 페어의 랜덤 모드, 전 세계 순위가 있다 [2026-11-18, 원문 확인] — [Google Play](https://play.google.com/store/apps/details?id=com.linkyrun.app&hl=ko&gl=KR)
- 나무타기 (L4N14KE4, 크롬 확장, 2026-10-28 생성): "나무위키용 비공식 파도타기(위키레이싱) 게임". 오늘의 문제, 무작위 문제, 친구 대결이 있고 "판매하거나 수익을 얻지 않습니다". CWS 10 사용자 [원문 확인] — [GitHub](https://github.com/L4N14KE4/namu-tagi), [CWS](https://chromewebstore.google.com/detail/fiadjnefijhjdngbdcaoahcdhkbnckfi)
- 나무위키 스피드런 (크롬 확장): 321 사용자, 평점 5개 — [CWS](https://chromewebstore.google.com/detail/jogdlkcjfodcoiicdneelonihooakkkj). 같은 이름의 "나무위키 스피드런 익스텐션"은 13 사용자 — [CWS](https://chromewebstore.google.com/detail/ciaehedbdghkjfbbdedehpninmmjloph). "나무위키 레이스 도우미"는 17 사용자 — [CWS](https://chromewebstore.google.com/detail/cdlcmcpihomfmnebgjakgmaecegmphap) [2026-11-18, 원문 확인]
- WikiRunner (deepria, 2026-07-27~08-14): Next.js 웹(방 생성, 순위)과 크롬 확장(이동 검증), Supabase 구성. 웹은 응답했다(200) [2026-11-18, 원문 확인] — [GitHub](https://github.com/deepria/wikirunner), [웹](https://wikirunner-web.vercel.app)
- 그 밖의 GitHub 프로젝트: namugazi(경로 탐색기, ★26, 2017~2022) — [GitHub](https://github.com/chalkpe/namugazi). namu-golf(2026-09-16) — [GitHub](https://github.com/ShapeLayer/namu-golf). 나퀴즈(랜덤 문서 제목 맞히기, 2026-05-06, 개발 중) — [GitHub](https://github.com/Rkda8071/namuwiki-random-quiz) [원문 확인]

**E. 봇**
- NamuWikiBot (텔레그램, HelloWorld017, 2016-01-05 생성, 2022-12-11 푸시, ★15): "A telegram bot which searches namu.wiki." — [GitHub](https://github.com/HelloWorld017/NamuWikiBot) [원문 확인]
- 카카오톡 나무위키 파싱봇 (jungwuk-ryu, 2019-10-04, 이후 업데이트 없음) — [GitHub](https://github.com/jungwuk-ryu/NamuWiki-Parsing-Bot-V2) [원문 확인]
- charming slack bot (m0ai, 2017-12~2018-01): 기능 목록에 "랜덤 나무위키"가 있다(plugins/namu_feed.py) — [GitHub](https://github.com/m0ai/charming-slack-bot) [원문 확인]
- 디스코드: tataru(WoodNeck) cogs/general.py가 namu.wiki/random을 호출한다(코드 검색 결과만 확인) — [GitHub](https://github.com/WoodNeck/tataru). koreanbots "나무위키" 검색 결과는 세피로트(서버 수 표시 없음, "여러분이 가꾸어 나가는 지식의 나무, 디스코드에서."), 디알이(6,130 서버), kpopbot 3개였다. 나무위키 연동 여부는 페이지에서 확인되지 않았다 [2026-11-18, 원문 확인] — [koreanbots](https://koreanbots.dev/search?query=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4)

**F. 유튜브** (2026-11-18 채널 검색, [원문 확인])
- "나무위키 실검 알려주는 채널" @나무위키실검: 구독 734명, 영상 80개. "오늘의 실검 1위 이유를 알아가세요!" 쇼츠 형식("카광 실검 1위 이유" 조회 4.9만, "양홍원 실검 1위 이유" 3.8만) — [YouTube](https://www.youtube.com/@%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%EC%8B%A4%EA%B2%80/shorts)
- "나무위키랜덤읽기" @나무위키랜덤읽기: 구독 12명, 영상 11개(예: "[나무위키랜덤읽기] 굴비 어디까지 아시나요?" 조회 203) — [YouTube](https://www.youtube.com/@%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%EB%9E%9C%EB%8D%A4%EC%9D%BD%EA%B8%B0/shorts)
- "나무위키 읽어주는 여자" 구독 389명, "나무읽기" 구독 10명, "1분 나무위키" 구독 1명 등 소규모 낭독 채널들이 있다 — [YouTube 채널 검색](https://www.youtube.com/results?search_query=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4+%EC%9D%BD%EA%B8%B0&sp=EgIQAg%253D%253D)
- 2020년 기사: "최근 유튜브에서는 '나무위키 읽기' 콘텐츠가 인기를 끌고 있다", 시작은 1theK의 '본인등판' [2020-10-19, 검색 스니펫] — [다음 뉴스](https://v.daum.net/v/20201019001828882)

**G. 미러/포크 (콘텐츠를 복제해 외부에서 제공)**
- 나무위키 미러(namu.mirror.wiki / mirror.wiki): 도메인 생성 2015-04-22. reCAPTCHA 때문에 2016-07-05에 미러링 불가를 공지했고, 2018-04~05에 재개했다가 2020-05-27 "갱신오류: reCaptcha detected!"로 중단됐다. "2024년부터 접속 자체가 안 된다" [원문 확인] — [namu.wiki 나무위키 미러](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EB%AF%B8%EB%9F%AC)
- 무나키위: 2016-03-31 이후 종료 [원문 확인] — 같은 문서
- 나무모에 미러(namu.moe): 2015-11 무렵 생성, HTML을 직접 긁어 오는 방식, 운영자 불명. 2022-05-03과 2023-01-29 등 여러 차례 크롤링이 막혀 갱신이 멈췄다. 2023-10-05부터 트래픽 한도에 걸리고 있다. "2026년 기준 유일하게 접속이 되는 미러 사이트이며, 이마저도 업데이트되지 않고 방치 상태" [원문 확인] — [namu.wiki 나무모에 미러](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EB%AA%A8%EC%97%90%20%EB%AF%B8%EB%9F%AC)
- 더위키(thewiki.kr): namu.wiki에는 "더위키라는 나무위키 포크 사이트가 있다"는 한 줄 언급만 있다 [원문 확인] — [namu.wiki 더 위키](https://namu.wiki/w/%EB%8D%94%20%EC%9C%84%ED%82%A4). Semrush 추정 방문은 6월 22.2만, 7월 30.5만, 8월 61.9만이다(연도는 2025로 추정) [검색 스니펫] — [Semrush](https://cw.semrush.com/website/thewiki.kr/overview)

### Inferences
- 실검 해설 수요는 확실하다(아카라이브 채널 3만, 해설 쇼츠 조회 수만). 하지만 이 수요는 "왜 떴나(맥락)"를 향하고 있고, 문서 본문을 카드로 넘겨 보는 소비와는 다르다. namutok의 "지금 편집되는 문서" 카드에 "왜 편집되는지"(실검 연동, 뉴스, 실검챈 링크) 맥락을 붙이면 기존 생태계와 차별화하면서도 연결할 수 있다.
- 레이싱 게임이 쏟아진 현상은 헤비 유저가 링크 타기 자체를 놀이로 즐긴다는 신호다. 반대로 말하면, 수동적으로 넘기기만 하는 피드는 "링크 타기"라는 핵심 습관과 충돌할 수 있다.
- 모든 외부 제품의 규모가 작다(확장 최대 321명, 게임 100+ 다운로드). 나무위키 2차 제품은 홍보 채널(아카라이브, GeekNews)을 넘어서 확산된 사례가 없다.

### Gaps
- 인스타그램과 틱톡의 "나무위키 실검/요약" 계정은 확인하지 못했다(로그인 필요, 검색 엔진에 노출 안 됨).
- 아카라이브 채널 글 수와 일일 방문 같은 트래픽 지표는 찾지 못했다.
- 크롬 웹 스토어 "나무위키" 검색이 10개만 돌려줘서 더 있을 수 있다.

## Q4. 공식 나무위키(웹, 앱)의 랜덤, 실검, 피드형 기능과 사용자 불만

### Takeaway
나무위키 웹에는 랜덤(/random), 실시간 검색어(사이드바), 최근 변경(/RecentChanges, sidebar.json)이 있다. 공식앱은 2026-08 개편으로 랜덤 버튼을 하단 바 핵심 자리에 올리고 실검에 썸네일을 붙였다. 그러나 umanle가 운영하던 유일한 피드형 서비스 "나무뉴스"는 2026-06-23 종료됐고, 실검은 2025~2026년에 여러 번 장애를 겪었다. "오늘의 문서" 같은 큐레이션 피드는 찾지 못했다.

### Cited Findings
- 웹 랜덤: `https://namu.wiki/random`이 무작위 문서로 302 리다이렉트된다 [2026-11-18, 원문 확인 — curl 응답]
- 최근 변경 목록 sidebar.json: 2026-11-18에 `[{"document":"조시 앨런","status":"normal","date":1794988541}, …]` 형태의 JSON을 돌려줬다 [2026-11-18, 원문 확인] — [namu.wiki/sidebar.json](https://namu.wiki/sidebar.json)
- 실시간 검색어 연혁(namu.wiki 문서 기준) [원문 확인] — [namu.wiki 실시간 검색어](https://namu.wiki/w/%EC%8B%A4%EC%8B%9C%EA%B0%84%20%EA%B2%80%EC%83%89%EC%96%B4)
  - 2020-07 검색창 자동완성 위치로 이동, 나무뉴스와 함께 사이드바에도 배치.
  - 2024-01-26 espejo 스킨이 기본이 되면서 옛 네이버 실검 같은 목록으로 분리.
  - 2025-08-28 점검과 표시 장애, 2025-11-20 일시적으로 4위까지만 표시, 2026-05-17~18 중단 후 복구, 2026-07-31 중단(문서상 복구 기록 없음).
  - 비판: "대중성과는 다소간의 거리가 있다", 실검에 오른 문서에 편집 분쟁과 반달이 잦다, 숨김 옵션이 없다.
  - (모순 메모) 문서에는 2026-07-31 이후 복구 기록이 없지만, 2026-09~11 공식앱 리뷰에 "실검에 이미지", 2026-10 namu-trending README에 "실시간 검색어 카드"가 나온다. 따라서 이후 복구된 것으로 보인다.
- 나무뉴스(umanle, 연합뉴스 중심의 뉴스 피드와 댓글): "2020년 7월 10일부터 2026년 6월 23일까지 서비스를 하였다". 2026-05-31 무렵 나무위키와 아카라이브에서 진입점이 제거됐다. 독성 댓글과 관리 부실 비판이 있었고, "나무위키 이미지에 악영향"을 줬다는 평가가 있다 [원문 확인] — [namu.wiki 나무뉴스](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EB%89%B4%EC%8A%A4)
- 공식앱: 2026-08 v1.2.0에서 뒤로가기 자리에 랜덤 문서 버튼, 실검 썸네일 도입, 순위 위젯 제거, 검색 기록 초기화가 있었다(Q2 리뷰 근거). 2025 만우절 "파도타기" 게임이 추가됐다가 삭제됐다 [원문 확인] — [namu.wiki 나무위키 뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EB%B7%B0%EC%96%B4), [App Store 리뷰](https://apps.apple.com/kr/app/id1623510780)
- 광고: 2026년부터 "문서의 문단 사이에 대뜸 커다란 광고를 넣기 시작하여 가독성이 심각하게 떨어지게 되었다". 2025년에는 광고 차단 시 콘텐츠를 숨기는 코드를 넣었다 [원문 확인] — [namu.wiki 나무위키/비판 및 문제점](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B9%84%ED%8C%90%20%EB%B0%8F%20%EB%AC%B8%EC%A0%9C%EC%A0%90)
- "오늘의 문서"나 추천 피드: 확인한 namu.wiki 문서(뷰어, 실시간 검색어, 나무뉴스, 비판 및 문제점)와 앱 설명 어디에도 나오지 않는다 [2026-11-18, 원문 확인 — 부재 확인]

### Inferences
- 공식 측의 "피드"는 실검(키워드 10개)뿐이다. 문서 단위 큐레이션 피드는 공식에 없어서 namutok과 겹치지 않는다. 다만 공식앱이 랜덤과 썸네일 실검으로 "발견형 소비"를 실험하기 시작했으므로, 앞으로 피드를 추가할 가능성은 배제할 수 없다.
- 공식앱 불만의 핵심은 기본 내비게이션, 버그, 강제 썸네일, 광고다. namutok이 공식앱을 대체하려 하기보다 보조 진입점(탭하면 원문)으로 포지셔닝하면 이 불만을 그대로 물려받지 않는다.

### Gaps
- umanle가 랜덤 버튼과 실검 썸네일을 도입한 이유나 공식 공지는 찾지 못했다.
- 최근 변경(RecentChanges) 페이지의 실제 갱신 빈도와 sidebar.json 항목 수 상한은 이번 조사 범위에서 측정하지 않았다.

## Q5. umanle(나무위키)가 서드파티 뷰어, 미러, 스크레이퍼, 앱에 조치한 이력

### Takeaway
공식 소송이나 테이크다운 공지는 찾지 못했다. 그러나 기술적 차단은 반복적으로 있었다. reCAPTCHA나 크롤링 차단으로 미러들이 멈췄고(2016, 2020, 2022, 2023), DB 덤프 제공이 끊겼고(2021 데이터가 마지막), 광고 차단 대응 코드가 들어갔다(2025). 가장 최근인 2026-10-04에는 실검 API가 폐기되고 서명/암호화 응답으로 바뀌었고, 2026-10-08 전후로 Cloudflare 차단이 시작됐다. 이 때문에 비공식 뷰어의 실검 기능이 지금까지 고장 나 있다. 반면 2026-11-18 robots.txt는 `/sidebar.json`, `/RecentChanges`, `/w/`를 명시적으로 허용한다.

### Cited Findings
- 2016-07-05: 나무위키 미러 관리자가 "나무위키의 reCAPTCHA 적용 때문에 미러링이 불가능"하다고 밝힘. 2020-05-27 "갱신오류: reCaptcha detected!"로 중단. 문서는 나무위키가 미러링용 포크를 차단한 것으로 "보인다"고 추정할 뿐이다 [원문 확인] — [namu.wiki 나무위키 미러](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EB%AF%B8%EB%9F%AC)
- 2022-05-03, 2023-01-29: 나무위키가 크롤링을 막아 namu.moe 갱신이 멈춤(우회 후 재개를 반복) [원문 확인] — [namu.wiki 나무모에 미러](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EB%AA%A8%EC%97%90%20%EB%AF%B8%EB%9F%AC)
- 2019-09: 엔진 업데이트로 NamuFix(브라우저 도구) 작동 중지. 표적 조치였는지는 불명 [원문 확인] — [namu.wiki 나무위키/비판 및 문제점](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B9%84%ED%8C%90%20%EB%B0%8F%20%EB%AC%B8%EC%A0%9C%EC%A0%90)
- DB 덤프: "덤프 제공이 중단되어 2021년 데이터만 사용 가능" [원문 확인] — [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4)
- 2025: "광고 차단 프로그램을 사용할 시 아예 문서, 편집 내역, 문서 역사 등 거의 모든 콘텐츠가 보이지 않도록 하고 있다" [원문 확인] — [namu.wiki 나무위키/비판 및 문제점](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B9%84%ED%8C%90%20%EB%B0%8F%20%EB%AC%B8%EC%A0%9C%EC%A0%90). 나무뷰어(iOS)에도 2024-06~12에 "광고차단이 안되네요" 리뷰가 이어졌다 [원문 확인] — [iTunes RSS](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=993035669/sortby=mostrecent/json)
- 2025-02-25: 비공식 앱 "나무위키 브라우저"(Maclunak)가 "비공식 앱이라는 오류 메시지만 뜨고 접속이 불가". 누가 막았는지는 문서에 나오지 않는다 [원문 확인] — [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4)
- 2026-10-04: `search.namu.wiki/api/ranking`이 DNS에서 사라지고, 페이지 스크립트가 "서명 헤더를 붙여 암호화된 응답"을 받는 구조로 바뀜 [원문 확인] — [namu-trending README](https://github.com/OnlyReadOneBook/namu-trending)
- 2026-10-04~11-16: 나무뷰어-리팩(Android) 사용자들이 실검 미표시를 계속 보고. 2026-10-08에는 Cloudflare "Sorry, you have been blocked", "Attention Required!"가 떴다(모바일 데이터에서 주로 발생, 설정을 바꾸면 해소되는 경우도 있음) [원문 확인] — [Google Play 리뷰](https://play.google.com/store/apps/details?id=com.monpub.namuwiki.repack&hl=ko&gl=KR&showAllReviews=true)
- 2026-10~11: 공식앱조차 "보안 확인 중", "인증 요청이 만료되었거나 올바르지 않습니다", "401 에러" 리뷰가 나옴. 나무뷰어(iOS)는 "보안확인", "무한 새로고침"(2026-10-22, 2026-11-02) [원문 확인] — [Google Play](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR&showAllReviews=true), [iTunes RSS](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=993035669/sortby=mostrecent/json)
- robots.txt(2026-11-18): `User-agent: * / Disallow: /` 아래에 `Allow: /w/`, `/history/`, `/RecentChanges`, `/RecentDiscuss`, `/Search`, `/sidebar.json`, `/_nuxt/`, `/cdn-cgi/` 등이 있다. `/random`은 Allow 목록에 없으므로 기본 Disallow 대상이다 [2026-11-18, 원문 확인] — [namu.wiki/robots.txt](https://namu.wiki/robots.txt)
- 라이선스: "나무위키의 문서는 기본적으로 CC BY-NC-SA 2.0 KR로 배포됩니다", 이미지는 별도 라이선스일 수 있다 [원문 확인] — [namu.wiki 나무위키:기본방침](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4:%EA%B8%B0%EB%B3%B8%EB%B0%A9%EC%B9%A8)
- 공식 입장: 뷰어 문서는 "나무위키에서 관리하지 않으므로" 비공식 앱 문의는 제작자에게 하라고만 안내한다. 비공식 앱을 금지한다는 명시는 없다 [원문 확인] — [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4)
- 일반 법리(참고): 무단 미러링이 위법이라는 판결이 있었다는 서술이 있으나 날짜와 사건명이 없다 [원문 확인] — [namu.moe 미러링](https://namu.moe/w/%EB%AF%B8%EB%9F%AC%EB%A7%81)

### Inferences
- 나무위키의 대응은 "법적 조치"가 아니라 "기술적 차단과 구조 변경"이다. 표적은 대량 복제(미러), 광고 회피, 실검 API 무단 사용 쪽이었다. 문서별로 딥링크(탭하면 namu.wiki 원문)하는 namutok 구조는 트래픽을 원문으로 보내 준다는 점에서 미러나 광고 차단 뷰어보다 리스크가 낮아 보인다.
- 하지만 2026-10 사례처럼 비공식 엔드포인트는 예고 없이 사라질 수 있다. sidebar.json은 현재 robots.txt가 명시적으로 허용하고 응답도 하지만, 실검 API가 폐기된 패턴을 보면 MVP는 sidebar.json이 끊길 때를 대비한 대체 경로(RecentChanges 파싱, 랜덤 /random 폴백)가 필요하다. 발췌와 이미지를 얻으려면 문서 본문을 가져와야 하는데, 이 경로가 Cloudflare 챌린지에 걸릴 가능성이 가장 크다.
- CC BY-NC-SA 2.0 KR이므로 비상업 포트폴리오인 namutok은 라이선스상 유리하다. 발췌를 보여줄 때는 출처(BY)와 동일조건(SA) 표기가 필요하다.

### Gaps
- 나무위키 이용약관(/Policy)은 JS로 렌더링돼 WebFetch와 curl로 읽지 못했다. 크롤링이나 자동화 접근을 금지하는 조항이 있는지 미확인이다. 브라우저로 직접 확인해야 한다.
- "나무위키 브라우저"의 "비공식 앱" 오류가 umanle의 User-Agent 차단 때문인지, 앱 자체의 서비스 종료 메시지인지 확인하지 못했다.
- 비공식 앱이나 미러를 상대로 한 공식 공지, 법적 대응, DMCA 기록은 찾지 못했다(웹 검색 "나무위키 크롤링 차단 umanle 이용약관 스크래핑", "나무위키 미러 사이트 차단 namu.mirror"에서 관련 결과 없음).

## Q6. 한국어 위키백과 등 다른 위키 기반의 "짧은 지식 피드" 앱

### Takeaway
한국어로 현지화된 스와이프형 위키 피드 앱은 여러 개 있다(WikiScroll, WikiUp, 백과사전, WikiTok: 오늘의 역사). 하지만 모두 해외 개인 개발자가 위키백과를 쓰는 다국어 앱이고, KR 평가는 0건이다. 한국어 위키 중 나무위키, 리브레, 오픈나무 콘텐츠로 피드를 만든 앱은 없다. 국내 개발 위키형 앱(미니위키, 미미키, 셀프위키)은 "자기 위키"나 "밈 사전"이고, 나무위키 콘텐츠를 쓰지 않는다.

### Cited Findings
- WikiScroll: 스크롤하며 배우기 (Burak Kose): 출시 2025-02-26, 업데이트 2026-11-16(v1.3: 문서 속 링크, 검색, Random/For You 새로고침), KR 평가 0. 위키백과 랜덤 스와이프, 오늘의 역사 타임라인, 맞춤 피드, 다국어, 위젯을 제공하고 무료다 [2026-11-18, 원문 확인] — [App Store](https://apps.apple.com/kr/app/id6742419984)
- WikiUp – 탐색, 스와이프, 학습 (Sercan ASLI): 출시 2025-07-16, 업데이트 2026-02-08, KR 평가 0. "Instagram Reels 또는 TikTok 스타일" 스와이프에 오늘의 역사, 인기 문서, 오늘의 문서와 사진이 있고, 프리미엄은 월 $1.49, 연 $9.99다 [2026-11-18, 원문 확인] — [App Store](https://apps.apple.com/kr/app/id6748560689)
- 백과사전: 매일 상식과 잡학이 쌓이는 지식 피드 앱 (LEAN ASIA CO., LTD): 출시 2026-04-21, 업데이트 2026-10-26, KR 평가 0. "위키백과를 나만의 지식 피드로 … 틱톡처럼 스와이프"를 내세우고 AI 요약, 퀴즈, 오디오가 있다. 모든 기능이 Pro 유료(주간, 연간, 평생) [2026-11-18, 원문 확인] — [App Store](https://apps.apple.com/kr/app/id6760022581)
- WikiTok: 오늘의 역사 (samet bilgin, 2026-02-24 출시, 2026-11-12 업데이트), WikiTok - Swipe & Learn (2025-03-08), Swipe Wiki, WanderWiki 등: 모두 KR 평가 0인 해외 개발자 앱이다 [2026-11-18, 원문 확인] — [iTunes Search "wikitok"](https://itunes.apple.com/search?term=wikitok&country=kr&entity=software)
- 위키백과 공식 앱(Wikimedia): Android 4.3★, 리뷰 69.5만, 5,000만+ 다운로드(전 세계). "탐색 피드"에 시사, 인기 기사, 역사 속 오늘, 읽은 기사 기반 추천이 있고 다국어를 지원한다 [2026-11-18, 원문 확인] — [Google Play](https://play.google.com/store/apps/details?id=org.wikipedia&hl=ko&gl=KR). iOS KR은 4.18★(84) [원문 확인] — [App Store](https://apps.apple.com/kr/app/id324715238)
- WikiTok(wikitok.io, Isaac Gemal): "TikTok-style interface"로 무작위 위키백과 글을 보여준다(2025-02) [검색 스니펫] — [Daring Fireball](https://daringfireball.net/linked/2025/02/12/wikitok)
- 미니위키 (Wonderers, Inc.): 출시 2026-09-10, 4.79★(19), 업데이트 2026-11-09. "AI와 이야기하면, 나에 대한 위키가 생겨요"라는 자기 위키에 "피드에서 다른 사람의 이야기를 만나요" 기능이 있다. 나무위키 콘텐츠는 쓰지 않는다 [2026-11-18, 원문 확인] — [App Store](https://apps.apple.com/kr/app/id6796207157)
- 미미키 MeMeWiki (Dayeon Moon): 출시 2025-08-19, 4.88★(8). 밈 의미와 유래 검색, 밈 만들기, 퀴즈 [원문 확인] — [App Store](https://apps.apple.com/kr/app/id6751053974). 셀프위키 - 나만의 위키 꾸미기 ((주)버그홀, 2026-09-07, 평가 0) [원문 확인] — [iTunes Search](https://itunes.apple.com/search?term=namuwiki&country=kr&entity=software)
- 리브레 위키, 오픈나무: 전용 앱은 찾지 못했다. 다중 위키 뷰어 "위키 이로하"만 리브레위키를 지원한다(마지막 기록 2017) [원문 확인] — [namu.wiki 위키 이로하](https://namu.wiki/w/%EC%9C%84%ED%82%A4%20%EC%9D%B4%EB%A1%9C%ED%95%98)
- 오늘의위키 (wiki.onul.works, calmlake79, 2025-01-20 Show GN): Gemini가 위키백과를 포크해 문서를 쓰고 갱신하는 "AI 위키". 나무위키는 비교 대상으로만 언급된다 [원문 확인] — [GeekNews](https://news.hada.io/topic?id=18817)

### Inferences
- "위키 + 틱톡 스와이프"라는 포맷은 이미 흔하다(2025~2026 해외 앱 10개 이상). 하지만 한국 사용자 반응(평가 수)은 사실상 없다. 포맷만으로는 한국 시장에서 견인력이 증명되지 않았고, namutok의 차별점은 "나무위키 특유의 문체와 서브컬처 콘텐츠"와 "지금 편집되는 문서라는 실시간성"에 있어야 한다.
- 위키백과 기반 앱들이 흔히 쓰는 "오늘의 역사", "인기 문서", "랜덤" 탭 구성은 namutok의 "최근 편집", "랜덤" 탭 구성과 비슷하다. UI 참고 사례로 쓸 수 있다.

### Gaps
- 이 해외 앱들의 한국 내 다운로드 수는 확인할 수 없다(App Store는 다운로드 비공개, Play 검색에서 한국어 상위 노출 없음).
- 한국어 위키백과 기반으로 한국 개발자가 만든 피드 앱은 찾지 못했다(검색어: "위키 스크롤", "위키백과 랜덤", "위키 숏폼", "지식 피드").
