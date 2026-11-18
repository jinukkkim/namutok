# 3단계 — 경쟁·시장 조사 (2026-11-18)

> 근거 자료: 종합 보고서 1개, 심층 노트 3개, 1차 노트 3개(공백 확인용). 경로는 11절에 있다. 기획자가 2026-11-18 직접 확인한 약관·robots.txt·응답 헤더 사실도 넣었다(7.4절).
> 표기: `[원문 확인]`은 페이지, 스토어 API, 저장소, curl·dig 응답을 직접 연 것이다. `[검색 스니펫]`은 검색 결과 요약으로만 본 것이라 인용 전에 다시 확인해야 한다. 수치는 따로 적지 않으면 2026-11-18 조회값이다. 리뷰 앞 날짜는 작성일이다. Play "설치 추정치"는 Play 페이지에 내장된 비공개 필드를 읽은 값이라 규모로만 쓴다. namu.wiki 문서는 커뮤니티 서술이고 운영사 공식 입장이 아니다. Similarweb·Semrush·Ahrefs는 추정치이고 방법론이 달라 서로 비교하면 안 된다.
> 자료끼리 어긋나면 더 새롭고 깊은 노트를 따르고 "(정정: …)"을 붙였다.

## 1. 한눈에 보기

- 나무위키 문서를 세로 스와이프 카드로 보여 주는 **직접 경쟁 제품은 없다**(앱·웹·확장·봇 기준 신뢰도 상, 소셜 계정까지 넣으면 중). "최근 변경"을 나무위키 밖에서 보여 주는 제품도 설치 149건짜리 Raycast 텍스트 목록 하나뿐이다.
- 간접 경쟁은 세 겹이다. 뷰어 앱(최대 설치 추정 14만), 실검 '왜 떴나' 해설(아카라이브 구독 30,053, 쇼츠 최고 54만 회), 링크 레이싱 게임(장르 합계 1,000명 미만)이다. 해외 WikiTok류는 수십 개지만 GitHub 1,000스타를 넘긴 것은 둘뿐이고, 한국 스토어 평가는 0건이다.
- 빈자리는 **"지금 한국 인터넷이 고치고 있는 문서"라는 실시간 편집 신호 + 왜 편집되는지 맥락 + 원문으로 돌아가는 동선**이다. 세계 어느 위키 피드도 편집 활동을 소스로 쓰지 않는다.
- 해자는 약하다. 포맷과 데이터(`sidebar.json`)가 모두 공개돼 있어 개인 개발자는 며칠이면 따라 한다. 더 큰 위협은 경쟁사가 아니라 운영사 umanle의 접근 정책(2026-10 실검 API 폐기, Cloudflare 차단)과 재무 불안(2026-11 은행 정리)이다.
- 그래서 성공 지표는 첫 주 방문이 아니라 재방문·공유·원문 클릭률이고, 데이터 소스 폴백은 부가 기능이 아니라 출시 조건이다.

## 2. 경쟁 비교표

| 서비스 | 유형(직접/간접/대체재) | 대상 | 핵심 기능 | namutok 핵심 기능(편집 중 문서 스와이프 피드) 지원 여부 | 가격 | 지표 | 주요 불만 |
|---|---|---|---|---|---|---|---|
| **나무위키 공식앱** (umanle) | 간접 | 나무위키 모바일 이용자 전체 | 웹뷰 열람, 홈 실검 1~5위 썸네일, 홈 "연관 문서" 가로 이미지 카드, 랜덤 버튼, 오프라인 저장 | 없음. "연관 문서" 캐러셀은 가로형이고 실시간 편집 소스가 아니다 | 무료, 광고 포함, 인앱 구매 없음 | Android 1.7★·리뷰 516·10만+(설치 추정 142,252) / iOS KR 1.89★·144 ([Play](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR), [iTunes lookup](https://itunes.apple.com/lookup?id=1623510780&country=kr)) [원문 확인] (정정: 02-demand의 "2.6★·30개"는 옛 스냅샷이다) | 뒤로가기 버튼 제거, 실검 썸네일 강제 노출, 2026-10 이후 401·"보안 확인 중" 장애, iPad 미지원, 개발자 답변 0/150 |
| **나무뷰어** (iOS, Geun-hyeok Jang) | 간접 | iOS 헤비 유저 | 경량 웹뷰(1.1MB), 뒤로·앞으로, 즐겨찾기, 목차, 홈 아이콘 롱프레스 랜덤, 원격 셀렉터 업데이트 | 없음 | 무료, 광고·인앱 구매·데이터 수집 없음 | 4.08★·평가 365(KR), 다운로드 비공개 ([iTunes lookup](https://itunes.apple.com/lookup?id=993035669&country=kr)) [원문 확인] (정정: 02-demand의 "4.1★·347개"는 옛 값이다) | 사이트 광고 차단 무력화(2024~), 2026-10~11 보안 확인 무한 새로고침, 데이터 과다·사진 깨짐 |
| **나무뷰어 - 리팩** (Android, MonthlyPub) | 간접 | Android 헤비 유저 | 간이 렌더링, 목차·각주 패널, "나중에 볼 문서", 실검 자동완성, 랜덤 | 없음 | 무료, 끌 수 있는 하단 배너 | 4.2★·리뷰 304·5만+(설치 추정 52,542), 개발자 답변 99/150 ([Play](https://play.google.com/store/apps/details?id=com.monpub.namuwiki.repack&hl=ko&gl=KR)) [원문 확인] | 2026-10-04 이후 실검 미표시, Cloudflare "you have been blocked", 모바일 데이터 접속 불가, 사이트가 바뀔 때마다 고장 |
| **Raycast "Namuwiki"** (123period) | 간접(같은 소스의 유일한 외부 선례) | macOS Raycast 사용자(개발자층) | 문서 검색, 최근 변경 목록(`sidebar.json`), 실검 | 부분. 같은 소스지만 텍스트 목록뿐이다(썸네일·발췌·스와이프 없음) | 무료, MIT | 설치 149, 사용자 이슈 0 ([Raycast Store](https://www.raycast.com/123period/namuwiki)) [원문 확인] | 사용자 리뷰 없음. 실검 명령은 `search.namu.wiki` DNS 소멸로 고장 |
| **아카라이브 "나무위키 실검 알려주는 채널"** | 간접(맥락 층) | 실검 키워드가 궁금한 커뮤니티 이용자 | 키워드별 "실검에 오른 이유" 글, 주제 탭, Tampermonkey 연동 스크립트 | 없음. 키워드 해설만 한다 | 무료(사이트 광고) | 구독 30,053·알림 1,338(2026-11-16) ([namu.wiki 문서](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EC%8B%A4%EA%B2%80%20%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94%20%EC%B1%84%EB%84%90)) [원문 확인] | "투기장" 비판, 정치·인방 탭 댓글 금지, 운영진 갈등(2026-05~07), 모바일 스크립트 설치 장벽 |
| **YouTube @나무위키실검** | 대체재(영상) | 쇼츠 시청자 | 실검 1위 이유 쇼츠, 1편 = 키워드 1개 | 없음 | 무료 | 구독 734·영상 80, 최고 조회 544,006회(2026-01-22) ([YouTube](https://www.youtube.com/@%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%EC%8B%A4%EA%B2%80/shorts)) [원문 확인] (정정: 보고서의 "카광 4.9만"은 최고치가 아니다) | 업로드 불규칙(2026-07-02 이후 3개월 공백) |
| **"나무위키 실검, 왜 떴지?"** (크롬 확장, scjang0123) | 간접 | PC 크롬의 나무위키 이용자 | 대문 실검 옆 '이유' 버튼 → 아카라이브 해설 글 | 없음 | 무료 | 147 사용자, 5.0★(2), v1.3.0(2026-11-14) ([CWS](https://chromewebstore.google.com/detail/lkeohnkcjiniaeahjneenijngejohhnb)) [원문 확인] (정정: 최대 실검 확장은 보고서의 47명짜리 링커가 아니라 이것이다. 링커 47, 실검 이유 25) | PC 크롬 전용, 채널 최근 2페이지에 글이 없으면 비활성 |
| **링크 레이싱 게임** (나무위키런, 링키런, 스피드런 확장, 나무타기, 레이스 도우미, WikiRunner 등) | 간접(보완재) | 링크 타기를 즐기는 헤비 유저 | 랜덤 시작 문서에서 목표 문서까지 링크만으로 이동, 오늘의 문제, 순위, 도전장 링크 | 없음. 능동 놀이다 | 무료(앱 2종은 광고 포함) | 나무위키런 설치 추정 352, 링키런 214, 스피드런 확장 321명. 장르 합계 1,000명 미만 [원문 확인, 조사자 합산] (3.6절) | "너무 어렵다", 없는 문서 출제, 앱은 출시 1~2개월 뒤 업데이트 정지 |
| **WikiTok** (wikitok.io, Isaac Gemal) | 간접(해외, 포맷 원형) | 전 세계. 한국어 위키백과 포함 48개 언어 | 위키백과 랜덤 20개씩, 썸네일 필수, 도입부 5문장, 좋아요 로컬 저장 | 없음. 위키백과 랜덤이다 | 무료, 무광고, 후원 링크 | HN 1,459점, ★1,321, 약 50만 명 상호작용(창작자 추정), 마지막 push 2025-03-18 ([GitHub](https://github.com/IsaacGemal/wikitok)) [원문 확인] | 랜덤 품질("US place names"), NSFW, 개인화 없음, "공식 랜덤과 뭐가 다르냐" |
| **Xikipedia** (rebane2001) | 간접(해외) | 영어권 | Simple Wikipedia 덤프, 비ML 로컬 점수 추천, 카테고리 칩 온보딩, 오프라인 PWA | 없음. 덤프는 2026-02-06 이후 갱신이 없다 | 무료, 무광고, 분석 없음 | HN 441점, ★1,147 ([GitHub](https://github.com/rebane2001/xikipedia)) [원문 확인] | 약 36MB 선다운로드, iOS 크래시, NSFW, 신선도, "관심 없는 관련 문서" |
| **WanderWiki** (iOS, Lagerland Apps) | 간접(해외, 한국어 위키백과 지원) | iOS 사용자 | 랜덤, Browse(16개 주제), For You·Today in History(프리미엄), 32개 언어 | 없음 | 무료는 하루 20문서. 월 $1.99·연 $8.99·평생 $24.99 | 2026-02-07 출시, 2026-11-08 업데이트, 평점 확인 못 함 ([lagerland.app](https://lagerland.app/apps/wanderwiki/)) [원문 확인] | 확인 못 함 |
| **기타 WikiTok 클론** (WikiScroll, WikiUp, 백과사전(LEAN ASIA), WikWok, QuickQuack, TikWiki 등) | 간접(해외) | 앱·웹 사용자 | 랜덤, AI 요약(QuickQuack, TikWiki), 좌우 스와이프, 추천 | 없음 | 대부분 무료. WikiUp 월 $1.49, 백과사전은 전 기능 Pro 유료 | KR 스토어 평가 전부 0건. US 최다 "WikiTok - Scroll, Read & Learn" 4.11★(57). WikWok ★165. QuickQuack HN 330점 뒤 영상 피드로 피벗 [원문 확인] (6.4절) | "content is really irrelevant and uninteresting", 태그 팔로우 요구 |
| **네이버 지식백과 모바일 홈** | 대체재(국내 대형) | 네이버 이용자 | 제휴 백과 카드 세로 스크롤("지금 떠오르는 주제", "이미지로 보는 지식", 주간 조회수 TOP 10) | 없음. 소스가 제휴 백과이고 풀스크린 스와이프가 아니다 | 무료 | 확인 못 함 ([m.terms.naver.com](https://m.terms.naver.com/)) [원문 확인] | 확인 못 함 |
| **위키백과 공식 앱 탐색 피드·Home** | 대체재 | 위키백과 앱 이용자 | 시사, 인기 기사, 역사 속 오늘, 읽은 기사 기반 추천. 개인화 Home은 2026-06 Android 50%에 배포 | 없음. 위키백과 소스다 | 무료 | Android 4.3★·리뷰 69.5만·5,000만+(전 세계), iOS KR 4.18★(84) ([Play](https://play.google.com/store/apps/details?id=org.wikipedia&hl=ko&gl=KR), [App Store](https://apps.apple.com/kr/app/id324715238)) [원문 확인] | Home 개편 때 Random Article 후순위·검색창 제거 불만(6.1절) |
| **YouTube 쇼츠·인스타 릴스** | 대체재(행동) | 10~30대 전체 | 세로 영상 숏폼 | 없음 | 무료(광고) | 숏폼 이용 전 연령 90% 이상, 일평균 42분, 10대 주 이용 쇼츠 87%·릴스 77%(메조미디어 2026) [원문 확인] (7.2절) | 중독성 87.1%, "글 이해가 어려워짐" 37.5%(2024-10) [원문 확인] |

## 3. 경쟁사별 상세 프로필

> 2절 표에 있는 기본 지표와 가격은 반복하지 않고, 표에 없는 사실만 적는다. 앱은 내려받거나 실행하지 않았고 스토어 스크린샷·버전 기록·리뷰로 기능 흐름을 재구성했다.

### 3.1 나무위키 공식앱 / 나무위키 뷰어 (umanle S.R.L.)

**운영사·출시일·투자/매출**
- umanle S.R.L.(파라과이 아순시온)이 운영한다. Android 2022-05-12, iOS 2022-05-15 출시다 ([Google Play](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR), [iTunes lookup](https://itunes.apple.com/lookup?id=1623510780&country=kr)) [원문 확인]. namu.wiki 문서상 umanle가 직접 만든 세 번째 앱이고, 한국어·스페인어·영어·일본어를 지원하며, 2025-12-19 기준 다운로드는 "5만회 이상"이었다 ([namu.wiki 나무위키 뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EB%B7%B0%EC%96%B4)) [원문 확인].
- 앱 매출은 공개된 적이 없다. 운영사 수익원은 광고로 알려져 있다. 정치권의 "국내 연 순이익 최소 100억 원" 주장은 검증되지 않았다 ([허프포스트코리아](https://www.huffingtonpost.kr/article/239894)) [원문 확인].

**실제 기능 흐름**
1. 앱을 열면 자체 홈이 뜬다. 맨 위에 실검 1~5위가 썸네일과 함께 나오고 "펼쳐보기"로 확장한다. 그 아래 광고 슬롯, 이어서 **"연관 문서" 가로 이미지 카드 캐러셀**(새로고침 버튼)이 있다 [원문 확인 — App Store 스크린샷, 등록일 미확인].
2. 하단에 검색창과 아이콘 4개(홈, 랜덤, 새로고침, 설정)가 있다. 랜덤 버튼은 2026-08-23 v1.2.0에서 뒤로가기 버튼 자리에 들어갔다.
3. 검색창을 누르면 썸네일 실검 목록이 먼저 뜬다. 개편 뒤 최근 검색 기록에 접근하기 어려워졌다(iOS 리뷰 2026-09-17, 09-24).
4. 문서는 웹뷰로 열고 링크로 이동한다. 뒤로 가기 **버튼은 없다.** iOS는 좌우 스와이프 제스처로 뒤로 갈 수 있지만(2026-08-29 ★5 "옆으로 넘기면 뒤로가기 됍니다"), Android 사용자는 같은 방법이 없다고 호소한다(2026-11-09 ★1) ([iTunes RSS](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=1623510780/sortby=mostrecent/json), [Play 리뷰](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR&showAllReviews=true)) [원문 확인].
5. 점 세 개 메뉴에서 오프라인 다운로드와 페이지 내 찾기를 쓴다. 로그인하면 편집할 수 있지만 모바일 사진 업로드는 안 된다(Play 리뷰 2025-11-04, 2026-11-15).
- 개편 때 사라진 것: 뒤로가기 버튼, 홈 "순위 위젯", 검색 기록, 실험실 "파도타기" 게임, Android 딥링크('지원되는 웹 주소'). iPad는 지원하지 않는다 [원문 확인 — App Store 호환성 표기, 리뷰 2026-10-05].

**가격**: 무료, 광고 포함, 인앱 구매 없음. iOS 개인정보 라벨은 "타사 광고" 목적으로 기기 ID·사용 데이터·광고 데이터를 수집하고 추적한다고 적는다. Play 데이터 보안 섹션은 데이터 삭제 요청이 불가능하다고 적는다 [원문 확인]. 배너인지 전면 광고인지는 확인 못 함.

**지표** (2절 외)
- 버전 기록(릴리스 노트 원문): 1.0.4(2024-06-03) "네비게이션 버튼 커스텀 기능 추가 - 오프라인 기능 추가", 1.0.8(2025-04-28) "실험실 추가", 1.0.9(2025-09-04) "프레임워크 업데이트", **1.2.0(2026-08-23) "1. 내부 시스템 개선 2. UI 업데이트"**, 1.2.1(2026-10-22) "패키지 업그레이드, 시스템 충돌 수정 및 성능 최적화", 1.2.2(2026-10-30) "UI 누락 수정" ([App Store](https://apps.apple.com/kr/app/id1623510780)) [원문 확인]. (정정: 프로필 노트의 "1.0.5(2024-07-12)", "1.0.9 실험실"은 진입자 노트의 원문표와 다르다. 원문표를 따른다.)
- 리뷰 집계 ①: iOS KR 최신 100건(2025-06-15~2026-11-15) 중 "뒤로" 48건, "랜덤/임의" 9건, "실검/썸네일" 6건, "위젯" 4건 ([iTunes RSS](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=1623510780/sortby=mostrecent/json)) [원문 확인, 조사자 집계].
- 리뷰 집계 ②: v1.2.0 이후(2026-08-23~11-16) iOS KR 69건 중 ★1 60건, "뒤로" 47건. Play 81건 중 ★1 64건, "뒤로" 3건, 접속·오류·401·보안·인증 19건. Play 최근 150건(2025-10-16~2026-11-16) 중 개발자 답변 0건 [원문 확인, 조사자 집계]. → iOS(시스템 뒤로가기 없음)는 뒤로가기, Android는 접속 장애가 불만 축이다(추론).

**리뷰 인용**
- 헤비 유저·편집자: 2026-08-23 ★3 iOS "내가 아는 정보가 있으면 편집하기도 하는 애용자인데요 이번 업데이트가 된 이후로 뒤로가기 버튼이 사라져 매우 불편합니다" ([iTunes RSS](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=1623510780/sortby=mostrecent/json)) [원문 확인]
- 장기 헤비 유저(링크 타기): 2026-08-25 ★1 iOS "나무위키 10년썻는데 그만 쓸랍니다 … 링크타고 보고 다시 돌아와서 보다가 링크타고 하는게 나무위키의 묘미인데" ([App Store](https://apps.apple.com/kr/app/id1623510780)) [원문 확인]
- 이미지에 민감한 사용자: 2026-08-27 ★1 iOS "실시간 검색어 썸네일이 무조건적으로 노출되는 것(특히나 지금같이 여러 사건 사고가 많을 때 혐오감이나 공포심 유발)" ([App Store](https://apps.apple.com/kr/app/id1623510780)) [원문 확인]
- 라이트 유저(긍정): 2026-11-13 ★5 "나무위키자주보는 사람으로썬 이만한앱도없다 브라우저안들어가도되서 시간단축굿" ([Play 리뷰](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR&showAllReviews=true)) [원문 확인]

**최근 동향**
- v1.2.1·1.2.2 뒤에도 뒤로가기 버튼은 돌아오지 않았다(리뷰 2026-11-02, 11-10, 11-15) [원문 확인].
- 2026-10 접속 장애가 이어졌다. "갑자기 왜 접속이 안되는 거죠"(10-11), 업데이트 뒤 다운로드 문서 소실(10-13), 401 에러(10-29), "보안 확인 중"(11-05), "인증 요청이 만료"(11-11). 공식앱도 2026-10-04 실검 API 교체와 보안 강화의 영향을 받았다는 정황이다(추론) [원문 확인 — Play 리뷰].

**namutok 대비 약점/기회**
- 가장 가까운 잠재 경쟁 기능은 홈 "연관 문서" 이미지 카드다. umanle가 이를 세로 피드로 키우면 포맷 차별점은 사라진다. 지금은 홈 하단 가로 캐러셀이고 소스도 실시간 편집이 아니다.
- 랜덤을 내비게이션 자리에 넣다가 반발을 샀다. namutok은 랜덤을 별도 탭으로 두고, 피드 위치를 지키는 뒤로 가기를 보장한다.
- 이미지 강제 노출에 대한 반감이 크다. Android에서도 "실검 이미지좀 안뜨게 해주세요 하다못해 끄고 켤 수 있는 옵션을 만들어주세요"(2026-10-24 ★2)가 나왔다 ([Play 리뷰](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR&showAllReviews=true)) [원문 확인]. 이미지 흐림·끄기 토글을 출시 조건으로 둔다.

### 3.2 나무뷰어 (iOS, id993035669)

**운영사·출시일·투자/매출**: Geun-hyeok Jang(namu.wiki 표기 "윈컴이/wincomi") 개인 개발이고 2016-05-02 출시다. 리그베다 시절 iOS 유일 뷰어였던 "리그베다 뷰어"의 나무위키판이며 초기 Objective-C 소스가 공개돼 있다 ([namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4), [wincomi/ios-namuViewer-1](https://github.com/wincomi/ios-namuViewer-1)) [원문 확인]. 광고·인앱 구매가 없어 매출은 0으로 추정한다(확인 못 함).

**실제 기능 흐름**
1. 앱을 열면 나무위키 대문이 웹뷰로 뜬다. 상단 바에 뒤로·앞으로, 제목, 새로고침이 있다.
2. 하단 플로팅 버튼(즐겨찾기, 목차, 검색, 목록, 더 보기)으로 즐겨찾기, 목차 점프, 검색을 한다.
3. 링크를 길게 누르면 미리보기와 공유가 뜬다(2.1.1, 2022-01-04). 홈 화면 아이콘을 길게 누르면 랜덤 문서로 바로 간다.
4. 사이트 구조가 바뀌어 버튼이 고장 나면 설정 > 데이터 업데이트로 셀렉터 데이터를 원격으로 받아 앱 업데이트 없이 고친다(2.3, 2026-06-02).
5. 테마·다크 모드, 블루투스 키보드 단축키, URL Scheme, iCloud 동기화를 지원한다 ([App Store](https://apps.apple.com/kr/app/id993035669)) [원문 확인].

**가격**: 무료. 앱 내 광고·인앱 구매가 없고 개인정보 라벨은 "데이터가 수집되지 않음"이다 [원문 확인]. "나무위키 사이트의 광고 차단까지!"를 내세우지만 2024년 이후 여러 번 무력화됐다.

**지표** (2절 외): 용량 1.1MB(공식앱 60.7MB의 1/55), 최소 iOS 15.0, 연령 12+. 최종 업데이트 2026-09-16 v3.0.1(iOS 27 대응). 2.2(2024-06-09) 이후 약 2년 공백 뒤 2.3(2026-06-02) → 3.0(2026-09-15, 두 손가락 확대) → 3.0.1이 나왔다 ([iTunes lookup](https://itunes.apple.com/lookup?id=993035669&country=kr)) [원문 확인]. 다운로드는 App Store가 공개하지 않는다.

**리뷰 인용** (모두 [iTunes RSS](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=993035669/sortby=mostrecent/json) [원문 확인])
- 장기 헤비 유저: 2026-09-15 ★5 "10년 가까이 아주 잘 사용하고 있습니다. … 이번 업데이트로 전부 해결되어서 너무 기쁩니다."
- 라이트 유저(접근 편의): 2025-09-25 ★5 "네이버 들어가서 나무위키 들어가기 번거로웠는데 너무 편합니다!"
- iPad 사용자: 2026-04-23 ★3 "아이패드에서 사용중인데 글자 크기 조절이 안되어서 매우 불편하네요" (3.0에서 확대 기능 추가)
- 모바일 데이터 사용자(장애): 2026-10-22 ★3 "알뜰폰 … 사용 시 통신 오류로 인해 약 10초간 무한 새로고침을 반복"

**최근 동향**: 2026-06 원격 셀렉터를 넣고 2026-09 3.0 개편과 iOS 27 대응을 했다. 2026-10~11 보안 확인·무한 새로고침 장애가 모바일망에서 두드러진다(2026-11-02 ★3 "보안확인 수행이나 통신오류 알림 뜨면서 무한 새로고침", "느리면 한 20초"). 2026-08 사진 깨짐(★1 "최근에 사진 다 깨짐")이 3.0에서 고쳐졌는지는 확인 못 함 [원문 확인].

**namutok 대비 약점/기회**
- 가치 제안이 "웹을 더 가볍게(1.1MB, 무광고, 무수집)"에 머문다. 발견 기능은 롱프레스 랜덤뿐이다.
- 2022~2024 버전 기록 대부분이 "사이트 변경으로 인한 수정"이다. 원격 셀렉터 업데이트는 namutok 데이터 소스 폴백 설계에 참고할 패턴이다(6.7절).
- 광고 차단을 핵심 가치로 둬서 운영사와 충돌하는 구조다. namutok은 광고를 건드리지 않고 원문으로 보내 이 리스크를 피한다.

### 3.3 나무뷰어 - 리팩 (Android, com.monpub.namuwiki.repack)

**운영사·출시일·투자/매출**: MonthlyPub, 한국 1인 개인 개발자다. 같은 개발자의 다른 앱은 "스밍찍R", "쌤쌤찍 - 리팩"이다. 최초 출시 2015-05-29(namu.wiki 기준), 키를 잃어버려 2022-08-15 새 패키지로 재등록했다 ([Google Play](https://play.google.com/store/apps/details?id=com.monpub.namuwiki.repack&hl=ko&gl=KR)) [원문 확인]. 매출은 확인 못 함. iOS 나무뷰어와는 다른 앱이다.

**실제 기능 흐름**
1. 대문이 뜨고 상단 검색창이 실검 랭킹과 자동완성을 보여 준다(2026-10 이후 실검 고장).
2. 문서는 웹페이지 일부만 잘라 낸 간이 UI로 렌더링한다. 편집은 외부 브라우저로 넘긴다. 설명에 "웹페이지의 변경이 있으면 정상 동작하지 않을수 있"다고 적혀 있다.
3. 오른쪽에서 당기면 목차·각주 인덱스 패널과 방문 기록이 나온다.
4. 링크 문서를 하단에 **"나중에 볼 문서"로 임시 저장**하고, 재실행 뒤에도 남는다. 사용자가 핵심 장점으로 꼽는다(2026-10-09 리뷰).
5. 랜덤, 낮·밤, 폰트(Pretendard 등), 각주 팝업, 이미지 뷰어, "웹 데이터 초기화"(2026-10 Cloudflare 대응)를 지원한다 [원문 확인 — 설명, 리뷰].

**가격**: 무료. 앱이 붙이는 광고는 설정에서 끌 수 있는 하단 배너다. 본문 안 광고는 나무위키 사이트 광고다. 개발자는 이를 지우지 않는 이유를 "솔직히 없애는건 어렵지 않은데요, 나무쪽에서 가만있지 않을꺼 같아서요"(2024-02-09 답변)라고 밝혔다 ([Play 리뷰](https://play.google.com/store/apps/details?id=com.monpub.namuwiki.repack&hl=ko&gl=KR&showAllReviews=true)) [원문 확인]. "기기 또는 기타 ID"를 수집해 제3자와 공유한다(광고 SDK로 추정).

**지표** (2절 외): 버전 5.5.17(페이지 표기), 최종 업데이트 2026-11-18 "웹 데이터 초기화 기능을 추가했습니다." 2026년 장애 흐름은 2026-01-23~31 목차 장애(리뷰 약 25건) → 01-31 수정, 2026-05-21~31 링크 터치 먹통(Android System WebView 원인), 2026-10-04~11-16 실검·Cloudflare 장애다 [원문 확인 — Play 리뷰 API].

**리뷰 인용** (모두 [Play 리뷰](https://play.google.com/store/apps/details?id=com.monpub.namuwiki.repack&hl=ko&gl=KR&showAllReviews=true) [원문 확인])
- 헤비 유저(일상 사용): 2026-01-28 ★5 "몇년째 쭉 매일 한번은 거의 쓴 꺼무위키뷰어 너무 잘 사용하고 있습니다."
- 실검 맥락을 원하는 사용자: 2025-10-19 ★5 "혹시 실검챈 스크립트 같은 기능 추가해주실 생각 없으신지 궁금합니다." ← 뷰어 안에서 "왜 떴나"를 원하는 직접 증거다.
- 캐주얼(시간 죽이기): 2026-06-30 ★4 "시간 죽이거나, 밈 찾아보거나 할때 자주 사용하는데 … 하이퍼링크나 각주가 안 눌리는 문제"
- 장애 피해자: 2026-10-26 ★3(유용 20) "요즘 실검이 안 뜨고 문서 검색할 때마다 reloading page가 뜨는 등의 문제"

**최근 동향**: 2026-10-04 실검 미표시 → 10-08 Cloudflare "you have been blocked"/"Attention Required!" → 개발자 "나무쪽 웹페이지 업데이트 되면서 상태 꼬인게 있나봅니다"(웹 데이터 삭제 기능 추가) → 10-14 "바꾼게 없어서 구글이나 나무 쪽 문제일텐데 기다려보시죠" → 11-16 "실검 방식 바꿔봤어요. 업데이트 받아보세요" → 11-18 업데이트. 실검 복구 여부는 확인 못 함. 앞서 2025-10-17에는 "나무 서버에서 vpn 주소는 막아서 그럴거에요"라고 답했다 [원문 확인].

**namutok 대비 약점/기회**
- 해자는 1인 개발자의 빠른 대응(답변 99/150)이다. 하지만 HTML을 긁는 구조라 2026년에만 1월·10월에 깨졌다. namutok이 본문 HTML 파싱에 기대면 같은 운명이다. og 태그만 쓴다.
- "나중에 볼 문서"는 피드 소비와 링크 타기를 잇는 장치다. namutok의 저장 기능 우선순위를 높인다.
- "실검챈 스크립트" 요청은 실검과 이유 링크를 한 화면에 묶는 수요가 실재한다는 뜻이다.
- VPN 주소 차단(2025-10)과 모바일망 차단(2026-10) 정황은 namutok 서버 프록시(A10, 데이터센터 IP)의 리스크다.

### 3.4 Raycast "Namuwiki" 확장 (123period)

**운영사·출시일·투자/매출**: Jonggil Song(123period) 개인, MIT 라이선스다. CHANGELOG 첫 버전은 2025-02-07이고, PR #16873이 2025-02-26 승인되고 스토어에 게시됐다 ([PR #16873](https://github.com/raycast/extensions/pull/16873)) [원문 확인]. 매출은 없다(Raycast 게시 보상 굿즈 크레딧만).

**실제 기능 흐름** (소스 코드 기준)
1. Raycast 런처에서 명령 3개 중 하나를 고른다. 설정은 필요 없다.
2. Search Documents: 입력할 때마다 `namu.wiki/Search?target=title_content&q=…` HTML을 받아 cheerio로 `section div h4 a`를 파싱해 제목·발췌 목록을 보여 준다. Enter를 누르면 브라우저로 원문이 열린다.
3. View Recently Changed Documents: `namu.wiki/sidebar.json`을 받아 문서명과 편집 시각(UNIX → 로컬 시각) 목록을 보여 준다. 썸네일·발췌·편집 이유는 없다.
4. View Trending Searches: `search.namu.wiki/api/ranking` 배열을 순위 목록으로 보여 준다 ([소스](https://github.com/raycast/extensions/tree/main/extensions/namuwiki)) [원문 확인].

**가격**: 무료, 광고 없음. Raycast 무료 플랜으로 쓸 수 있다 ([Raycast Store](https://www.raycast.com/123period/namuwiki)) [원문 확인].

**지표** (2절 외): 2025-02-26 머지 이후 작성자의 기능 변경은 없다. 이후 커밋 6건(2025-11-03~2026-11-17)은 모두 Raycast 쪽 일괄 갱신이다. raycast/extensions에서 "namuwiki" 사용자 이슈는 0건이고 스토어에 평점·리뷰 표시가 없다 ([commits](https://github.com/raycast/extensions/commits/main/extensions/namuwiki)) [원문 확인].

**리뷰 인용**: 사용자 리뷰가 없다(리뷰 기능 없음, 블로그·X 언급도 찾지 못함). 개발자 피드백 2건만 있다.
- Raycast 리뷰어: 2025-02-24 "missing `isLoading`" → 2025-02-26 "Looks good to me, approved" ([PR #16873](https://github.com/raycast/extensions/pull/16873)) [원문 확인]
- 자동 코드 리뷰(greptile): 2025-02-24 "Using indexOf for rank is inefficient and error-prone with duplicates." (같은 곳) [원문 확인]

**최근 동향**: **실검 명령은 고장 난 것으로 보인다.** `search.namu.wiki`는 2026-11-18 `dig` 결과가 비고 curl이 실패한다(HTTP 000). namu-trending README의 "옛 실검 API가 2026-10-04 DNS에서 사라짐"과 일치한다 ([namu-trending](https://github.com/OnlyReadOneBook/namu-trending)) [원문 확인]. `sidebar.json`과 `/Search`는 curl로 정상 응답했지만 Raycast 안에서 실행하지는 않았다. 2026-11-17 Raycast가 설명을 일괄로 다시 썼지만 작성자는 활동하지 않았다.

**namutok 대비 약점/기회**
- "최근 변경"을 외부에 보여 주는 유일한 선례지만 텍스트 목록이다. 149명은 `sidebar.json` 신호에 대한 수요라기보다 "macOS 런처 검색" 수요다.
- 실검 API 폐기로 명령 셋 중 하나가 죽었다. `sidebar.json`에도 같은 일이 생길 수 있다. 소스별 헬스체크와 폴백이 필수다.
- 응답 구조(`document`, `status`, `date`)와 파싱 코드가 MIT로 공개돼 있다. namutok도 참고할 수 있지만 경쟁자에게도 똑같이 열려 있다(9절).

### 3.5 실검 '왜 떴나' 생태계 (아카라이브 채널, @나무위키실검, 크롬 확장)

**운영사·출시일·투자/매출**
- 아카라이브 채널(/b/namuhotnow): 사용자 운영(주딱·파딱 체제)이고 2024-01-25 개설했다. 개설 초기 아카라이브 "유저 광고 기능"으로 홍보해 1주일 만에 3,000명을 모았다 ([namu.wiki 문서](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EC%8B%A4%EA%B2%80%20%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94%20%EC%B1%84%EB%84%90), 최근 수정 2026-11-16) [원문 확인]. 플랫폼 아카라이브는 umanle가 운영하는 것으로 알려져 있다 ([itwiki: Umanle S.R.L.](https://itwiki.kr/w/Umanle_S.R.L.)) [검색 스니펫].
- YouTube @나무위키실검: 채널명 "나무위키 실검 알려주는 채널", 설명 "오늘의 실검 1위 이유를 알아가세요!". 아카라이브 채널과 같은 주체인지는 확인 못 함. 노출된 쇼츠 48개 중 가장 오래된 것은 2025-10-17 업로드다 ([RSS](https://www.youtube.com/feeds/videos.xml?channel_id=UCwY1UcL-9eKudIcu4DeckHw)) [원문 확인].
- 크롬 확장: "나무위키 실검, 왜 떴지?"(scjang0123) 147명, "실검 아카라이브 링커"(jellive) 47명, "나무위키 실검 이유" 25명(2026-04-21 업데이트) ([CWS 링커](https://chromewebstore.google.com/detail/fhmagpkcdpcnmbihkgdcmabidcmdmpgl), [CWS 실검 이유](https://chromewebstore.google.com/detail/ahjiddcgeaggnabpeejmhhmohlonaapg)) [원문 확인]. 모두 투자·매출 없음.

**실제 기능 흐름**
- 채널: ① 나무위키 실검에서 낯선 키워드를 본다 → ② 채널에서 키워드를 검색하거나 탭(일반/인방/커뮤/정치/스포츠/TV)을 둘러본다 → ③ 출처 링크가 붙은 "실검에 오른 이유" 글 한 편을 읽는다 → ④ 일반·커뮤 탭은 댓글로 토론하고, 정치·인방 탭은 "수정사항 이외 댓글 영구 금지"다(2024-09-28, 2024-12-28~무기한). 공지 외에는 "이유" 글만 허용해서 의도치 않게 한국에서 거의 유일한 실검 아카이브 역할을 한다 [원문 확인].
- Tampermonkey 스크립트: 나무위키 실검 옆에 이유 링크를 달고 채널 안에도 실검 순위를 보여 준다. 모바일은 Firefox, Kiwi, 유료 AdGuard 같은 브라우저가 필요하다. 2026-07 이후 다중 탭 표시를 지원한다 [원문 확인].
- "왜 떴지?" 확장: 대문 실검 옆 '이유' 버튼 → 아카라이브 해설 글. 채널 최근 2페이지에 글이 없으면 버튼이 비활성된다 ([CWS](https://chromewebstore.google.com/detail/lkeohnkcjiniaeahjneenijngejohhnb)) [원문 확인].
- 쇼츠: "OO 실검 1위 이유" 또는 "오늘의 실검 1위는 OO입니다" 세로 영상 1편이 키워드 1개다.

**가격**: 모두 무료다. 아카라이브는 사이트 광고, YouTube는 플랫폼 광고가 붙는다. 채널 수익화 여부는 확인 못 함. 확장은 무료·무광고다.

**지표** (2절 외)
- 쇼츠 상위: "송형주, 박민정 실검 1, 2위 이유" 544,006회(2026-01-22), "유병장수girl" 150,827(2026-01-28), "트롤야" 19만, "올리버쌤" 105,179(2026-02-09). 2025-10~2026-01 "오늘의 실검 1위는…" 시리즈는 대부분 1천~4천 회였고, 2026년 "OO 실검 1위 이유" 형식은 다수가 1만~5만 회다 ([YouTube](https://www.youtube.com/@%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%EC%8B%A4%EA%B2%80/shorts)) [원문 확인].
- 업로드: 최근 15편(2026-01-22~10-24)이 1월 4, 2월 3, 3월 1, 6월 3, 7월 1, 10월 3편으로 불규칙하다 [원문 확인].
- 대조군: 랜덤 문서 낭독 채널 @나무위키랜덤읽기는 구독 12명, 대표 영상 조회 203이다 ([YouTube](https://www.youtube.com/@%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%EB%9E%9C%EB%8D%A4%EC%9D%BD%EA%B8%B0/shorts)) [원문 확인]. "나무위키 읽어주는 여자"(389명), "나무읽기"(10명), "1분 나무위키"(1명)도 소규모다 [원문 확인]. **같은 형식이라도 화제성(실검)이 붙으면 조회 수만~수십만, 랜덤이면 수백이다.** namutok이 랜덤보다 편집 신호를 앞세울 국내 근거다.
- 아카라이브 직접 지표(일일 글·방문)는 Cloudflare 403으로 확인 못 함.

**리뷰 인용**
- 나무위키 헤비 유저(확장): 2026-01-06 "나무위키 자주보는데 실시간검색어에서 바로 아카라이브로 이동할수있으니 너무 좋네요." ([CWS 링커 리뷰](https://chromewebstore.google.com/detail/fhmagpkcdpcnmbihkgdcmabidcmdmpgl/reviews)) [원문 확인]
- 뷰어 사용자(통합 요구): 2025-10-19 리팩 리뷰 "실검챈 스크립트 같은 기능"(3.3절)
- 개발자 커뮤니티(회의적): 2026-04 "이미 아카라이브 실검챈이 있지 않았나요?" ([GeekNews whydem.com](https://news.hada.io/topic?id=28263)) [원문 확인]
- 커뮤니티 비판(위키 서술): "종합 이슈 기반의 투기장이 되어버렸다는 비판이 나오고 있다." ([namu.wiki 문서](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EC%8B%A4%EA%B2%80%20%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94%20%EC%B1%84%EB%84%90), 2026-11-16 수정본) [원문 확인]
- YouTube 댓글은 확인 못 함.

**최근 동향**
- 2026-05-02 주딱이 공개 모집 글을 올렸다. 사유는 "시스템 개선은 어렵다고 하면서 사측 운영자가 대놓고 월권 행세를 하는 모습을 보고 현타가 와서"였다. 2026-05-10 새 주딱이 뽑혔고, 2026-07-31 '티~원 드립' 금지에 반발이 일자 사퇴했다 [원문 확인].
- 2026-10-04 실검 API 교체가 Tampermonkey 스크립트에 준 영향은 확인 못 함. 같은 기능의 확장 "왜 떴지?"는 2026-11-14 v1.3.0으로 갱신됐다.
- YouTube는 2026-07-02 이후 3개월 넘게 쉬다가 2026-10-23~24에 3편을 올렸다.
- 실검 해설 독립 웹 whydem.com은 멈췄다(4.5절). 숲(namu-soup)과 NamuWiki Trend Monitor(2026-10-15)는 서비스 작동·스토어 배포를 확인 못 함 ([namu-soup](https://github.com/anteater333/namu-soup), [TrendMonitor](https://github.com/Seoyoungeun/NamuWikiTrendMonitor)) [원문 확인].

**namutok 대비 약점/기회**
- 수요는 크지만 접근 마찰이 높다. 채널까지 가야 하고, 모바일 스크립트는 특수 브라우저가 필요하고, 확장은 PC 크롬 전용이다. 모바일 PWA 카드 안에서 "왜 떴나" 링크를 한 번에 주면 이 마찰이 없어진다.
- 채널은 실검 Top 10 키워드만 다룬다. `sidebar.json`은 실검 전후로 편집이 몰리는 문서까지 잡는다. 겹치면 연결하고(실검챈 링크), 안 겹치면 독자 영역으로 둔다.
- 댓글은 투기장이 되기 쉽다. namutok은 댓글 없이 원문·해설 링크만 둔다.
- 운영진이 "사측 운영자 월권"을 이유로 이탈했다. umanle 생태계 안의 2차 서비스는 플랫폼 정책에 휘둘린다.

### 3.6 2026 나무위키 링크 레이싱 게임 (통합)

**운영사·출시일·투자/매출·지표**

| 제품 | 운영 | 출시 | 형태 | 지표(2026-11-18) | 최종 업데이트 | 출처 |
|---|---|---|---|---|---|---|
| 나무위키런 | (유)포파이터스(서울 법인) | Play 2026-03-23(추정), iOS 2026-03-24 | 앱 | iOS 5.0★(4), Play 5.0★·리뷰 6·100+(설치 추정 352) | 2026-04-01 | [App Store](https://apps.apple.com/kr/app/id6760975716), [Play](https://play.google.com/store/apps/details?id=com.pawfighters.namuwiki_speedrun&hl=ko&gl=KR) [원문 확인] |
| 링키런 | deeronthewall(개인사업자) | Play 2026-04-18(추정), iOS 2026-05-05 | 앱 + 소개 웹 | iOS 5.0★(1), Play 100+(설치 추정 214) | 2026-05-12 | [App Store](https://apps.apple.com/kr/app/id6766291857), [Play](https://play.google.com/store/apps/details?id=com.linkyrun.app&hl=ko&gl=KR), [웹](https://deeronthewall.com/linkyrun) [원문 확인] |
| 나무위키 스피드런 | bm011011(개인) | 미상, v2.1 | 크롬 확장 | 321명, 4.6★(5) | 2026-05-28 | [CWS](https://chromewebstore.google.com/detail/jogdlkcjfodcoiicdneelonihooakkkj) [원문 확인] |
| 나무위키 레이스 도우미 | 개인 | v1.9.0 | 크롬 확장 | 17명, 5.0★(1) | 2026-11-12 | [CWS](https://chromewebstore.google.com/detail/cdlcmcpihomfmnebgjakgmaecegmphap) [원문 확인] |
| 나무위키 스피드런 익스텐션 | Depel Rang(개인) | v1.2.0 | 확장 + 포털 | 13명 | 2026-11-14 | [CWS](https://chromewebstore.google.com/detail/ciaehedbdghkjfbbdedehpninmmjloph) [원문 확인] |
| 나무타기 | l4n14ke4(개인, MIT) | 2026-10-28 생성 | 크롬 확장 | 10명, 5.0★(1), GitHub ★2 | 2026-11-09 | [CWS](https://chromewebstore.google.com/detail/fiadjnefijhjdngbdcaoahcdhkbnckfi), [GitHub](https://github.com/L4N14KE4/namu-tagi) [원문 확인] |
| namuwiki-rush | eopseum0(개인) | v0.1.6 | 크롬 확장 | 9명, 4.0★(2) | 2026-05-16 | [CWS](https://chromewebstore.google.com/detail/faffobpaphhjekoohfanifpkgangjlpo) [원문 확인] |
| WikiRunner | deepria(개인) | 2026-07-27~08-14 | Next.js 웹 + 확장 | GitHub ★0, 웹 200 | 2026-08-14 | [웹](https://wikirunner-web.vercel.app), [GitHub](https://github.com/deepria/wikirunner) [원문 확인] |

- 합계: 앱 설치 약 566(추정), 확장 사용자 약 370명이다. **장르 전체가 1,000명이 안 된다** [조사자 합산]. 웹판도 2개 더 있다(tree-speed.vercel.app, [Jeongchaehojun/Namuwiki_Speedrun](https://github.com/Jeongchaehojun/Namuwiki_Speedrun) 2026-04-06 ★0) [원문 확인].
- 투자·매출은 모두 확인 못 함. 포파이터스 홈페이지는 "Now building: Mimoshot"을 내세우고 나무위키런은 메인에서 빠졌다 ([pawfighters.com](https://www.pawfighters.com)) [원문 확인].

**실제 기능 흐름**
- 나무위키런: 시작 → 랜덤 시작 문서와 목표 키워드를 받는다 → 본문 링크만 탄다(외부 링크 금지, **뒤로가기 반칙**) → 목표에 닿으면 시간이 기록되고 키워드별 리더보드(2026-04-01 v1.0.4)에 오른다.
- 링키런: 튜토리얼 → "오늘의 도전"(자정 갱신, 전원 동일 페어) 또는 랜덤 모드(430여 페어) → 본문 링크만 클릭(분류·틀·파일·외부 금지) → 홉 수·시간 기록, 오늘의 순위. 막히면 "전구 힌트"(카테고리 흐름)를 보지만 힌트를 쓴 판은 일일 기록에서 빠진다. "오프라인에서도 플레이 가능"이라고 적혀 있다.
- 나무타기: 오늘의 문제 / 직접 출제 / 무작위(난이도 4단계, 분야 48개) → 랜덤 문서에서 시작 → 진행 막대·경로 표시 → 검색창·랜덤·편집 링크 차단, 탭을 30초 넘게 떠나거나 개발자 도구를 열면 패배 → 하드(뒤로가기·틀·허브 금지), 익스트림(분류·각주·재방문 금지) 규칙 → 도착하면 **"도전장" 링크**로 친구와 같은 문제를 겨룬다. 계정 없이 로컬에 저장한다.
- 레이스 도우미·WikiRunner·namuwiki-rush: 방을 만들거나 방 코드로 참가해 실시간 멀티플레이를 하고, 클릭 수·시간을 자동 기록한다. "오늘의 챔피언" 같은 일일 문제와 랭크 모드가 있다 [원문 확인 — 스토어·CWS 설명].

**가격**: 앱 2종은 무료·"광고 포함", 인앱 구매 없음. Play 데이터 보안 표기는 나무위키런 "수집·공유 데이터 없음", 링키런 "기기 또는 기타 ID" 제3자 공유·데이터 삭제 불가다. 확장은 모두 무료·무광고다. 나무타기는 "판매하거나 수익을 얻지 않습니다"라고 명시한다 [원문 확인].

**리뷰 인용**
- 소셜 플레이어: 2026-03-25 ★5 iOS "재밌습니다. 친구와 경쟁하게 되네요." ([나무위키런 RSS](https://itunes.apple.com/kr/rss/customerreviews/page=1/id=6760975716/sortby=mostrecent/json)) [원문 확인]
- 몰입형 헤비 유저: 2026-11-11 CWS "너무 재밌어서 시간 가는 줄 모르겠어요ㅜㅜㅜ 평생 업데이트 해주세요" ([레이스 도우미 리뷰](https://chromewebstore.google.com/detail/cdlcmcpihomfmnebgjakgmaecegmphap/reviews)) [원문 확인]
- 캐주얼(난이도 장벽): 2026-11-14 ★4 Play "너무 어렵다.." ([링키런 Play 리뷰](https://play.google.com/store/apps/details?id=com.linkyrun.app&hl=ko&gl=KR&showAllReviews=true)) [원문 확인]
- 콘텐츠 품질 버그: 2026-04-29 CWS "없는 문서를 찾으라고 하면 어떡해요? 3번 했는데 3번다 없는단어 나왔어요." → 개발자 2026-08-29 "수정했습니다!" ([스피드런 리뷰](https://chromewebstore.google.com/detail/jogdlkcjfodcoiicdneelonihooakkkj/reviews)) [원문 확인]

**최근 동향**: 앱 2종은 출시 1~2개월 뒤 업데이트가 멈췄다(2026-04-01, 05-12). 포파이터스는 다른 제품으로 옮겨 갔다. 반대로 크롬 확장은 2026-11에도 활발하다(11-09, 11-12, 11-14). 나무타기는 반칙 방지와 난이도 규칙을 정교화하는 중이다. 공통 패턴은 "오늘의 문제 + 순위 + 공유 링크"이고, Wordle형 일일 루틴이 장르 표준이 됐다(추론). 2026-10 Cloudflare·실검 API 변경이 레이싱 게임에 영향을 줬다는 리뷰는 찾지 못했다.

**namutok 대비 약점/기회**
- 헤비 유저의 링크 타기 습관을 능동 놀이로 바꾼 장르다. 수동 피드와 정반대라 직접 경쟁이 아니라 보완재다. v1.1 토끼굴·놀이 모드로 이 습관을 흡수할 수 있다.
- 모두 namu.wiki 페이지를 웹뷰·확장으로 직접 렌더링한다. 카드, 발췌, 편집 신호를 쓰는 제품은 없다.
- 일일 문제·순위·도전장 링크는 namutok의 "오늘 가장 많이 편집된 10개"와 공유 카드 설계에 참고한다(6.6절).
- "없는 문서" 버그는 소스 품질 문제다. 문서 존재·리다이렉트 검증이 필요하다.

### 3.7 WikiTok (wikitok.io, Isaac Gemal)

**운영사·출시일·투자/매출**: Isaac Gemal 개인, MIT다. 2025-02-03 Tyler Angert가 X에 "all of wikipedia on a single, scrollable page"라고 쓰자 자정 무렵 시작해 **2시간 만에** bun+React+TypeScript로, 백엔드 없이 만들었다. Wikipedia API가 CORS를 허용한다는 사실은 Claude가 알려줬다고 한다. 2025-02-04 공개 ([Gemal 회고 "Reflecting on WikiTok", 2025-02-27](https://www.aizk.sh/posts/reflecting-on-wikitok)) [원문 확인]. 매출은 없다. About 모달의 "buy me a coffee" 링크가 유일한 수익원이다(금액 확인 못 함) [원문 확인 — wikitok.io 번들].

**실제 기능 흐름** (배포 번들 기준)
1. wikitok.io를 연다. 가입·설치가 없고 PWA로 설치할 수 있다.
2. 국기 메뉴에서 언어를 고른다. README는 "14 languages"라고 적지만 실제 `languages.ts`는 한국어를 포함한 48개다. 선택은 `localStorage("lang")`에 저장된다.
3. 위키백과 API `generator=random`으로 **20개씩**, 썸네일 800px, 도입부 5문장을 받아 세로 스냅 카드로 보여 준다. 썸네일 없는 문서는 아예 뺀다.
4. "Read more"는 위키백과 원문으로 간다. 하트는 Likes 목록(`localStorage("likedArticles")`)에 저장되고 상단 모달에서 다시 본다. 공유·링크 복사가 있다.
5. 추천·필터·계정은 없다. 분석은 Vercel Web Analytics뿐이다 [원문 확인 — 번들].

**가격**: 완전 무료, 무광고, 계정 없음.

**지표** (2절 외): 포크 174, 열린 이슈+PR 26. Gemal은 Business Insider 에세이(2025-02-13)에서 **약 50만 명이 상호작용했다**고 추정했고, 마지막 기록 피크는 "about 200,000 total"이었다. Vercel 애널리틱스 크레딧이 떨어져 그 뒤 수치는 없다 ([BI/AOL 재게재](https://www.aol.com/news/infinite-wikipedia-scroll-created-mere-090002486.html)) [원문 확인]. 회고 게시물은 HN 158점이었다 ([HN 43468491](https://news.ycombinator.com/item?id=43468491)) [원문 확인]. wikitok.io와 wikitok.vercel.app은 2026-11-18 200 응답이다. 현재 트래픽은 확인 못 함.

**리뷰 인용**
- 몰입 사용자: 2025-02-04 "Wow this is surprisingly addictive :)", "One of the rare website i added to my android homescreen." ([HN 42936723](https://news.ycombinator.com/item?id=42936723)) [원문 확인]
- 콘텐츠 품질 불만(캐주얼): 2025-02-04 "I got a ton of US place names, which can be a downer." / "add an option to exclude people and places" (같은 곳) [원문 확인]
- 차별성 의문: 2025-02-04 "How is this different from Wikipedia's own 'random article' feature?" (같은 곳) [원문 확인]
- 개발자(API 매너): 2025-02-04 "you put contact info in the user-agent or Api-User-Agent header" (같은 곳) [원문 확인]
- 한국 커뮤니티: 2026-06-23 다모앙 소개 글 "위키백과를 틱톡(또는 SNS피드)스타일로 즐기기.webapp". 댓글에 모바일 사파리에서 "read more" 버튼이 하단 툴바에 가린다는 지적이 있다 ([다모앙](https://damoang.net/free/6539037)) [검색 스니펫, 원문 403]

**최근 동향**: 2026년 커밋은 0건이다. 2026-06-23 모바일 상태바 수정 PR #120은 머지되지 않고 06-25 닫혔다. #119(2025-12-13), #121 "Build a native mobile app experience"·#122(2026-06-24)는 답이 없다. "Filters", "topic selection", "swipe left to see related articles" 이슈도 열린 채다 ([GitHub issues](https://github.com/IsaacGemal/wikitok/issues)) [원문 확인]. Gemal은 앞으로 "not much… only reviewing simple pull requests"라고 선언했고, NASA 이미지 피드 spacetok.io를 만들었으며, WikiTok을 만든 이유 중 하나가 이력서였다고 했다 ([회고](https://www.aizk.sh/posts/reflecting-on-wikitok)) [원문 확인]. 2026-02-17 Wikipedia Signpost는 Xikipedia를 다루며 "the infinite scrolling, but random WikiTok"과 대비했다 ([Signpost](https://signpost.news/Single/2026-02-17)) [원문 확인]. 2026에도 랜덤 피드의 기준점으로 인용된다.

**namutok 대비 약점/기회**
- 알고리즘 없는 랜덤이라 "미국 지명 투성이" 같은 품질 불만이 구조적으로 안 풀린다. namutok은 "사람들이 지금 고치는 문서"로 화제성 필터를 기본으로 건다.
- 한국어 위키백과는 지원하지만 나무위키는 없다. 문체와 서브컬처 콘텐츠 면에서 namutok이 대체재가 된다.
- 따라 할 점: 20개 묶음 요청, 썸네일 필수, 도입부 발췌, localStorage 좋아요, 최소 측정, 후원 링크 같은 비상업 모델.
- 모바일 사파리 하단 툴바가 원문 버튼을 가린 사례는 Safe Area 배치에서 피한다.

### 3.8 Xikipedia (xikipedia.org, rebane2001)

**운영사·출시일·투자/매출**: Lyra Rebane(rebane2001) 개인, AGPL-3.0이다. 저장소 2026-02-01 생성, Show HN 2026-02-02 ([GitHub](https://github.com/rebane2001/xikipedia)) [원문 확인]. 사이트와 README에 후원·광고·분석 스크립트가 없다(관련 문자열 0건) [원문 확인 — xikipedia.org HTML].

**실제 기능 흐름**
1. 접속하면 "Loading…"과 함께 Simple Wikipedia 전체 데이터를 내려받는다. `smoldata.json.br` 압축 크기 35,953,875바이트(약 36MB), 원본 228,005,406바이트다 [원문 확인 — curl HEAD]. (정정: 보고서의 "약 40MB"는 근사치다.)
2. 로딩 중 "Pick some categories to get started (optional)"에서 카테고리 칩을 고르거나 직접 추가한다.
3. "you will likely see NSFW content" 경고에 "I'm an adult, continue"를 눌러야 들어간다.
4. 피드에서 행동하면 점수가 카테고리에 쌓이고 다음 포스트가 그 점수로 정해진다(점수 규칙은 6.3절).
5. 카드를 누르면 Simple Wikipedia(설정 시 영어 위키백과) 원문이 열린다. Profiles(여러 프로필), Stats(Top/Bottom 카테고리, 좋아요한 포스트), Settings("Store data" 끄기, 테마, 알고리즘 초기화, 전체 삭제)가 있다.
6. 한 번 로딩하면 완전히 오프라인으로 쓰고 PWA로 설치한다 ([xikipedia.org](https://xikipedia.org)) [원문 확인].

**가격**: 완전 무료, 무광고, 계정 없음. 데이터가 기기 밖으로 나가지 않는다.

**지표** (2절 외): 포크 77, HN 댓글 142. 마지막 커밋 2026-05-27(외부 PR #28 머지), 작성자 본인의 마지막 기능 커밋은 2026-02-06이다. 데이터 Last-Modified 2026-02-06 이후 갱신이 없다 [원문 확인]. 보도: Engadget(2026-02-02), Boing Boing(2026-02-02), stuff.co.za(2026-02-03), Signpost(2026-02-17), Tildes 토론 ([Engadget](https://www.engadget.com/apps/a-developer-turned-wikipedia-into-a-social-media-style-feed-174924280.html), [Signpost](https://signpost.news/Single/2026-02-17)) [원문 확인] / ([Boing Boing](https://boingboing.net/2026/02/02/wikipedia-made-doomscrollable.html)) [검색 스니펫]. 방문자·리텐션은 분석 도구가 없어 알 수 없다.

**리뷰 인용**
- 헤비 유저(SNS 대체): 2026-02-12 "I did about 3 hours of scrolling yesterday (as I am using this app instead of all other social media apps)." ([GitHub #21](https://github.com/rebane2001/xikipedia/issues/21)) [원문 확인]
- 잡지처럼 읽는 사용자: 2026-02-02 "once I was in I found it like reading a magazine." ([HN 46850803](https://news.ycombinator.com/item?id=46850803)) [원문 확인]
- 캐주얼(추천 불만): 2026-02-02 "it started giving me a bunch of related articles I have no interest in" ([Tildes](https://tildes.net/~tech/1sgv/xikipedia)) [원문 확인]
- 성능 불만: 2026-02-02 "Please fix the loading issue and I'll return!"(HN 최다 스레드), 작성자 답 "The loading issue is just a hug of death" (같은 곳) [원문 확인]

**최근 동향**: 2026-05-20~08-04 외부 PR 9건(React Native판, 피드 안 문서 패널 등) 중 1건 머지, 2건 닫힘, 6건이 열려 있다. **NSFW 필터 PR #31은 2026-09-22 머지되지 않고 닫혔다.** Simple Wikipedia 카테고리에 성인 키워드가 없어 필터가 안 먹힌다는 지적이 있었다 ([PR #31](https://github.com/rebane2001/xikipedia/pull/31)) [원문 확인]. 다국어 요청 #14에는 "considering this, not sure how exactly i'd do it yet"라고 답했다. iOS 로딩 크래시(#8)는 "apple memory" 문제로 사이트에 경고가 남아 있다. 2026-05 Android판·Supabase 포크 같은 파생과 당일 클론(byigitt/wikiscroll ★2)이 나왔다.

**namutok 대비 약점/기회**
- 36MB 선다운로드와 덤프 신선도(2026-02에서 멈춤)가 구조적 약점이다. 뮤지션의 최근 앨범 두 장이 빠졌다는 지적도 있었다 ([Engadget](https://www.engadget.com/apps/a-developer-turned-wikipedia-into-a-social-media-style-feed-174924280.html)) [원문 확인]. namutok은 "몇 분 전 편집"으로 정반대 축에서 이긴다.
- 영어 Simple Wikipedia 한정이고 다국어는 미정이라 한국어 경쟁자가 아니다.
- 로컬 점수제는 "3시간 스크롤" 헤비 유저를 만들었지만 "관심 없는 관련 문서" 반응도 있다. 경량 개인화를 넣으면 좋아요를 유도하는 UI와 수동 관심사 편집(#21)이 필요하다.
- 카테고리 기반 NSFW 필터가 실패했다. 나무위키 성인·사건사고 분류의 커버리지를 미리 검증한다.
- AGPL-3.0이라 코드를 가져오면 공개 의무가 생긴다. 알고리즘 아이디어만 쓴다.

## 4. 대형·잠재 진입자와 철수 사례

### 4.1 운영사 umanle: 피드를 직접 낼 수 있나

- **동기**: 광고 모델이라 피드는 광고 지면을 늘린다. `sidebar.json`·RecentChanges·실검 데이터를 직접 갖고 있다. 2026-08 랜덤 버튼과 썸네일 실검으로 "발견형" UI를 실험했다. 실검 해설 생태계(아카라이브)도 자기 플랫폼 안에 있다.
- **반대 근거**: 유일한 피드 서비스 나무뉴스를 2026-06에 닫았다(4.5절). 앱 릴리스는 최소 유지보수 수준이고 평점은 1.7~1.9다. 2026-08 개편은 큰 반발을 불렀다(3.1절). 2026-11 결제 차질로 재무가 불확실하다(7.5절). 채용 공고는 0건이고 [검색 스니펫], umanle.net은 "IT service management agency, based in Asuncion … founded in 2016"과 블록체인·빅데이터 설명만 있는 정적 페이지다 ([umanle.net](https://umanle.net)) [원문 확인]. 나무위키 공식 SNS 계정도 찾지 못했다 [검색 스니펫].
- "관련 문서 추천"은 앱 설명이 아니라 namu.wiki '나무위키' 문서의 커뮤니티 서술("나무위키 뷰어가 존재한다. 읽기 기능이나 관련 문서 추천 기능 등이 있다.")이다. App Store 설명과 버전 기록에는 없다 ([나무위키 문서](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4)) [원문 확인]. 다만 앱 홈의 "연관 문서" 캐러셀은 스크린샷으로 확인된다(3.1절). 웹 헤더에는 `/random` 링크(title="아무 문서로 이동")가 있고, "오늘의 문서" 같은 큐레이션 피드는 없다 [원문 확인].
- **결론**: 12개월 안에 앱에 "최근 변경·인기 문서 카드 섹션" 같은 작은 기능이 생길 가능성은 **중**, namutok과 같은 풀스크린 스와이프 피드는 **하**다. umanle가 움직이면 진입보다 데이터 접근 차단(2026-10 Cloudflare 같은 방식)이 namutok에 더 큰 영향을 준다.

### 4.2 국내 대형 플랫폼

- **네이버**
  - 지식백과 모바일 홈은 이미 카드형 세로 스크롤 피드다. "새로 들어온 매거진", "새로 올라온 지식", "지금 떠오르는 주제", "이미지로 보는 지식"이 있고, 상단에 "[11월 2주차] 주간별(10/29~11/11) 조회수 TOP 10 지식"이 있다. 카드는 제목·발췌·출처·좋아요로 구성되고 영상 카드("1분 요리 팁")도 섞인다. 풀스크린 스와이프는 아니고 소스는 제휴 백과다 ([m.terms.naver.com](https://m.terms.naver.com/)) [원문 확인]. 2026년 지식백과 피드 개편 보도는 없다 [검색 스니펫].
  - 클립: DAU가 2025-09부터 1,000만을 넘었고, 2025년 3분기 10~30대 방문자는 전년 대비 +70%, 체류시간은 +202%였다 ([CEO스코어데일리 2025-12-27](https://www.ceoscoredaily.com/page/view/2025122616552924245)) [원문 확인]. 2026-03-08 수익화 대상을 "텍스트와 이미지가 결합된 게시물"까지 넓히고 클립 탭을 '탐색·구독·내클립판'으로 개편한다고 발표했다 ([바이라인네트워크 2026-03-09](https://byline.network/2026/03/09_naver_clip/)) [원문 확인]. 카드뉴스형 지식 게시물이 올라올 구조가 생겼다.
  - AI: 큐:·클로바X는 2026-04-09 종료됐다(4.5절). AI 브리핑은 2026년 안 전체 검색의 약 40% 영역으로 확대할 계획이다 ([CEO스코어데일리 2026-04-16](https://www.ceoscoredaily.com/page/view/2026041616583694010)) [원문 확인]. (정정: 보고서의 "약 20%까지"는 이전 계획의 [검색 스니펫] 수치다.)
  - 판단: 나무위키를 소스로 쓸 가능성은 **하**다(경쟁 트래픽원, 비상업 라이선스, 규제 리스크). "짧은 지식 카드·트렌드 요약·숏폼"이라는 사용 맥락 흡수는 **중**이다.
- **카카오·다음**: 카카오톡은 2025-09-23 친구탭을 피드형으로 바꿨다가 1점 리뷰가 몰려 2025-12-16 친구 목록을 기본 화면으로 복원했다 ([뉴시스 2025-12-16](https://www.newsis.com/view/NISX20251216_0003442706)) [원문 확인]. 카나나 앱은 2026-10-15 종료됐다(MAU 69,631 → 10,488, −85%) ([헤럴드경제 2026-09-22](https://v.daum.net/v/W2VFKLx2H2)) [원문 확인]. 다음은 2026-05-07 업스테이지 인수가 확정돼 AI 포털로 전환 중이고, 게임온다음은 2026-05-28 종료됐다 ([다음뉴스 2026-05-16](https://v.daum.net/v/20260516000237142), [IB토마토 2026-06-02](https://www.ibtomato.com/mobile/mExternalView.aspx?no=18456&type=1)) [원문 확인]. 진입 확률 **하**.
- **크리에이터(유튜브·인스타·스레드)**: 유명인이 나무위키를 읽으면 조회가 크게 나온다. 사이버 윤석민 "친한 선수들 나무위키 검증해봤습니다" 626,087(약 2026-10), 우정잉 "나무위키에서 가장 유명한 SCP 문서 읽어보기" 339,928(약 2026-09), 나예 "나무위키 읽기" 67,611(약 2025-12), 슈말코 "연도별 다윈상 나무위키" 63,560(약 2026-02) [원문 확인 — YouTube 검색]. "나무위키 문서 자체가 볼거리"라는 증거지만 형식은 롱폼 영상이다. 실검 요약 쇼츠·카드뉴스 계정이 늘 가능성은 **중**이고, 이들은 경쟁자이자 유입 채널 후보다.

### 4.3 글로벌 대형 플랫폼

- **Wikimedia**: 피드형 한시 앱 실험 Scrollipedia는 2026-01-12 Future Audiences 사이드바에 "Current"로 올라갔다가 **2026-08-26 "Previous"로 내려갔다.** 출시일·지표·결론은 끝내 게시되지 않았다. 토론 페이지 첫 의견은 "this should become part of the Wikipedia app, not a standalone app"(2026-02-09)이었다 ([Template:Future Audiences](https://meta.wikimedia.org/wiki/Template:Future_Audiences), [Scrollipedia](https://meta.wikimedia.org/wiki/Future_Audiences/Scrollipedia)) [원문 확인]. 후속은 진짜·가짜 문서 카드 수집 게임 World of Wikipedia(일본 WikiGacha에서 출발)와 Share card다(6.2절). 니치 진입 **하**, 한국어 위키백과 Home 피드가 생길 가능성 **중**.
- **Google Discover**: 2025-10-13 트렌딩 주제 AI 미리보기("brief previews that you can expand … plus links")를 미국·한국·인도에 먼저 냈다 ([Search Engine Journal](https://www.searchenginejournal.com/google-adds-ai-previews-to-discover-sports-feed-coming/558156/)) [원문 확인]. "지금 뜨는 주제를 짧게 설명"하는 맥락 층과 겹친다. 흡수 **중**, 나무위키 피드 진입 **하**.
- **OpenAI**: ChatGPT Pulse는 2025-09-25 Pro 미리보기로 나와 **2026-06-17 종료를 발표**하고 예약 작업으로 대체했다. OpenAI의 교훈은 "proactive experiences are most useful when they're personalised, action-oriented, and steerable by the user"다 ([digit.in](https://www.digit.in/news/general/openai-is-retiring-chatgpt-pulse-and-replacing-it-with-scheduled-tasks-here-is-why.html), [AlternativeTo 2026-06-18](https://alternativeto.net/news/2026/6/chatgpt-launches-new-scheduled-tasks-and-prepares-to-sunset-pulse/)) [원문 확인]. Sora 앱은 2026-03-24 종료를 발표했다. 다운로드는 2025-11 약 333만에서 2026-02 약 113만으로 줄었고 누적 인앱 매출은 약 210만 달러였다. TechCrunch는 "there was not sustained interest in an AI-only social feed"라고 분석했다 ([TechCrunch 2026-03-24](https://techcrunch.com/?p=3105737)) [원문 확인]. 진입 **하**. 다만 한국 ChatGPT MAU는 약 1,280만(2025-09)에서 약 1,799만(2026-09)으로 늘어(모바일인덱스) "물어보면 답하는" 대체 경로로는 강하다 ([헤럴드경제 2026-10-15](https://mbiz.heraldcorp.com/article/10904102)) [원문 확인]. (정정: 보고서의 "2,293만→약 2,470만"은 집계가 다른 [검색 스니펫] 수치다.)
- **Perplexity**: 한국 MAU 594,599(2026-09), 전년 대비 −29.1%다 (같은 기사) [원문 확인]. Discover의 한국어 지원은 확인 못 함. 진입 **하**.

### 4.4 진입자별 12개월 진입 확률

기준 니치: 나무위키 문서를 세로 스와이프 카드로, 실시간 편집·랜덤 소스로 보여 주는 제품.

| 진입자 | 확률 | 근거 |
|---|---|---|
| 개인·소규모 개발자(클론) | **상** | 2026년 나무위키 놀이형 2차 제품이 최소 8개 나왔다. WikiTok급은 2시간이면 만든다. `sidebar.json`은 공개돼 있다. 다만 Cloudflare 차단(2026-10)이 진입 비용을 올린다 |
| umanle(공식앱 내 기능) | **하~중** | 작은 카드 섹션은 중, 풀스크린 스와이프 피드는 하(4.1절) |
| 아카라이브 실검챈 운영진·이용자 | **중**(인접 니치) | "왜 떴나" 해설은 이미 이곳의 기능이고 스크립트 배포 이력도 있다. 피드 UI까지 만들 동기는 약하다 |
| 유튜브·인스타·스레드 크리에이터 | **중**(대체 콘텐츠) | 유명인 나무위키 영상 수십만 회(2026-09~10), 실검 쇼츠 존재. 형식은 영상·카드뉴스이고 앱 피드가 아니다 |
| 네이버(지식백과·클립·AI 브리핑) | 나무위키 소스 **하**, 맥락 흡수 **중** | 지식백과 카드 피드와 "지금 떠오르는 주제"가 이미 있다. 클립은 2026-03부터 텍스트·이미지 게시물을 받는다. 나무위키는 비상업 라이선스이자 경쟁 트래픽원이다 |
| 카카오·다음 | **하** | 피드 개편 롤백(2025-12), 카나나 종료(2026-10), 다음 매각(2026-05)과 콘텐츠 실험 종료 |
| Wikimedia | 니치 **하**, 한국어 위키백과 Home 피드 **중** | Scrollipedia 종료(2026-08-26), 카드 게임·공유 카드로 전환. Home 피드의 언어 확대는 미확인 |
| Google Discover | 니치 **하**, 트렌딩 요약 흡수 **중** | 한국은 트렌딩 AI 미리보기 1차 출시국(2025-10-13) |
| OpenAI(ChatGPT) | **하** | Pulse 철수(2026-06-17), Sora 앱 철수(2026-03-24) |
| Perplexity | **하** | 한국 MAU −29.1%(2026-09) |

### 4.5 철수·종료 사례와 이유

| 대상 | 날짜 | 무엇이 됐나 | 이유(출처 기준) | 출처 |
|---|---|---|---|---|
| **나무뉴스**(umanle) | 2020-07-10 시작 → 2026-05-31경 진입점 제거 → 2026-06-23 종료 | 종료, 모든 데이터 파기, HTTP 410 | 공지에 사유 없음. 나무위키·아카라이브 우측 하단 탭을 없애자 댓글이 "아예 없거나 1~2개"로 급감했고 3주 뒤 닫았다. 2025-03 방문 566만, 추천 유입의 약 63%가 namu.wiki, 약 27%가 arca.live로 자사 노출에 기댔다. 독성 댓글·관리 부실로 "나무위키 이미지에 악영향"이라는 평가 | [namu.news](https://namu.news), [namu.wiki 나무뉴스](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EB%89%B4%EC%8A%A4) [원문 확인], [Semrush](https://vi.semrush.com/website/namu.news/overview) [검색 스니펫] |
| Wikimedia **Scrollipedia** | Current 2026-01-12 → Previous 2026-08-26 | 실험 종료(출시 미확인) | 사유·결과 미공개. 후속은 카드 게임 World of Wikipedia | Template 리비전 [원문 확인] |
| Wikimedia **Wikistories** | 2024-06 Inuka 팀 해체 | 개발 중단, 인도네시아어 베타만 유지 | 캠페인 의존 공급(2023-09 캠페인 10일 2,148개 vs 평시 전체 1,106개), 공유를 통한 조회 76회(2023-07~2024-06), 편집자 24%는 이것만 하고 평균 1.6일 활동 | [mediawiki.org](https://www.mediawiki.org/wiki/Wikistories_for_Wikipedia) [원문 확인] |
| Wikimedia Creator Videos 모듈 | 2026-08-13 | 우선순위 하향 | "Deprioritizing in favor of Text to speech" | [Phabricator T432407](https://phabricator.wikimedia.org/T432407) [원문 확인] |
| **whydem.com**(실검 해설 웹) | 2026-04-06 GeekNews 출시 → 2026-11-18 DNS 실패 | 사실상 중단 | 공개 사유 없음. 도메인은 2027-04-05까지 유효하지만 A 레코드가 삭제됐다. GeekNews 반응은 "이미 실검챈이 있지 않나"(5점, 댓글 3). Wayback 캡처 0건 | whois·dig [원문 확인], [GeekNews](https://news.hada.io/topic?id=28263) [원문 확인] |
| **QuickQuack**(sdan) | 2026-01-09 Show HN, GeekNews 2026-01-12 → 피벗 2026-06-07~07-16 사이 | 위키 텍스트 피드 → 교육 영상 피드 | 공식 사유 없음. Wayback상 06-07까지 "Scroll Wikipedia like TikTok.", 07-16에는 "TikTok-style feed of short educational videos, ranked by what gets watched". HN 피드백 "content is really irrelevant and uninteresting". (정정: 보고서는 피벗 시점을 적지 않았다) | Wayback [원문 확인], [HN 46557029](https://news.ycombinator.com/item?id=46557029), HN 48535443 [원문 확인] |
| WikTok(2023, b3n) | 2023-05-22 Show HN | 방치, wiktok.org → wikitok.net 리다이렉트 | 주말 프로젝트. wikitok.net은 Gemal HN 다음 날(2025-02-05) 등록됐고 Gemal은 도메인을 "sniped"당했다고 밝혔다. 동일 소유 여부 미확인 | curl·whois [원문 확인], [HN 36028940](https://news.ycombinator.com/item?id=36028940) [원문 확인] |
| 나무위키 미러들 | 2016-07-05, 2020-05-27, 2022-05-03, 2023-01-29 | 갱신 중단 | reCAPTCHA("갱신오류: reCaptcha detected!"), 크롤링 차단. 무나키위 2016-03-31 종료. namu.moe는 "2026년 기준 유일하게 접속이 되는 미러"지만 방치 | [namu.wiki 나무위키 미러](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EB%AF%B8%EB%9F%AC), [나무모에 미러](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EB%AA%A8%EC%97%90%20%EB%AF%B8%EB%9F%AC) [원문 확인] |
| 비공식 뷰어·봇 | 나무위키 브라우저 2025-02-25 접속 불가 등 | 종료·방치 | "비공식 앱" 오류(나무위키 브라우저). 모아바·트리위키·오프라인 리더는 한국 스토어 설치 불가, 리그베다 뷰어 삭제, MDict는 덤프 중단으로 2021년 데이터만. 텔레그램 NamuWikiBot 마지막 push 2022-12-11, 카톡 파싱봇 2019-10-04 정지 | [namu.wiki 나무위키/뷰어](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4), [NamuWikiBot](https://github.com/HelloWorld017/NamuWikiBot) [원문 확인] |
| 대형 플랫폼 독립 실험 | 네이버 큐:·클로바X 2026-04-09, 지식iN '지식이' 2026-05-24(예정 보도), 다음 게임온다음 2026-05-28, NAVER TV 2026-09-30, 카나나 앱 2026-10-15, 카톡 피드형 친구탭 2025-09-23→12-16 롤백, Sora 앱 2026-03-24·ChatGPT Pulse 2026-06-17 발표 | 종료 또는 핵심 앱으로 흡수 | "선택과 집중", 카나나 MAU −85%, 카톡 1점 리뷰 폭주, 지식이는 사람 간 Q&A 정체성(약 100만 건 답변, 채택률 약 33%), Sora는 지속 관심 부족, Pulse는 개인화·사용자 제어 필요 | 4.2·4.3절 출처, [뉴시스 지식이](https://www.newsis.com/view/NISX20260427_0003608405) [원문 확인] |
| 국내 "지식 숏폼" 전용 앱 | - | - | 종료 사례 자체가 없다. 견인력 있는 국내 지식 카드 스와이프 앱이 애초에 없었다 | [검색 스니펫] |

**철수 사례가 공통으로 말하는 것**
1. 자사 트래픽에 기대던 부가 피드(나무뉴스)는 노출을 끊는 순간 죽는다.
2. 캠페인과 신기함으로 만든 공급·수요(Wikistories, Sora, WikiTok류)는 지속되지 않는다.
3. 대형 플랫폼은 2026년에 독립 실험 앱을 접고 핵심 앱 안 기능으로 흡수한다(큐:, 카나나, NAVER TV, Pulse, Scrollipedia). 대형 플랫폼이 "나무위키 전용 스와이프 피드" 같은 틈새 단독 서비스를 낼 가능성은 낮다.
4. 실검 해설 웹(whydem)은 기존 커뮤니티(실검챈)와의 차별성을 증명하지 못했다. namutok도 "실검챈과 뭐가 다르냐"에 답해야 한다.
5. 나무위키 콘텐츠를 통째로 복제하거나 광고를 우회한 제품(미러, 광고 차단 뷰어)은 운영사의 기술적 차단에 반복해서 막혔다.

## 5. 직접 경쟁자 존재 여부 판정

- **판정: 없다.** 나무위키 문서를 제목·발췌·이미지 카드로 세로 스와이프하게 보여 주는 제품은 찾지 못했다.
- **신뢰도**: 앱·웹·확장·봇 같은 "제품"으로 한정하면 **상**이다. 사람이 운영하는 소셜 카드형 계정까지 넣으면 **중**이다. 인스타그램·X·스레드·틱톡 내부 검색은 로그인·JS·402 장벽 때문에 검색엔진 색인으로만 봤다.
- **확인한 채널** (모두 2026-11-18)
  - 스토어: iTunes KR 검색어 10개("나무위키", "namuwiki", "나무뷰어", "wikitok", "위키 숏폼", "지식 피드" 등). 나무위키 콘텐츠 앱은 공식앱·나무뷰어·나무위키런·링키런 4개뿐이고 피드형은 모두 위키백과 기반이었다 ([iTunes Search](https://itunes.apple.com/search?term=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4&country=kr&entity=software)) [원문 확인]. Google Play KR도 공식앱·위키게시판 뷰어·리팩·나무위키런·링키런이 전부였다 ([Play 검색](https://play.google.com/store/search?q=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4&c=apps&hl=ko&gl=KR)) [원문 확인].
  - 확장: 크롬 웹 스토어 "나무위키" 상위 10개는 검색 단축·레이싱·실검 이유·분류 랜덤·가독성·"나무위키 끄기"뿐이다 ([CWS 검색](https://chromewebstore.google.com/search/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4?hl=ko)) [원문 확인]. 가장 큰 확장은 오히려 나무위키를 안 보게 하는 "Turn Off namuwiki"(1,000명)다 ([CWS](https://chromewebstore.google.com/detail/dgdifdnmamleoebgfbfeckefhhhplmdn)) [원문 확인]. 파이어폭스 애드온도 확인했다.
  - 코드: GitHub 저장소 검색 "namuwiki feed/tiktok/shorts", "나무위키 숏폼/피드" 0건. `namuwiki twitter/discord/kakao/feed/shorts/reels/swipe/card`도 0건. 코드 검색 `"namu.wiki/sidebar"` 5건(Raycast, 개인 트렌드 수집기, uBlock 필터, 개인 연습 폴더 등), `"namu.wiki/random"` 19건(봇·레이싱), `"namu.wiki/RecentChanges"` 66건(대부분 수업 과제) ([GitHub code search](https://github.com/search?q=%22namu.wiki%2Fsidebar.json%22&type=code)) [원문 확인]. (정정: 보고서의 sidebar 4건은 이후 1건 늘었다. 새 히트도 제품이 아니다.)
  - 커뮤니티: GeekNews, koreanbots, 디스코드 봇 목록(top.gg, discordbotlist, discord.bots.gg), 디스콰이엇, 요즘IT, velog(GraphQL로 "나무위키"·"namu.wiki"·"namuwiki" 제목 약 4,900건 전수 필터), 티스토리, 브런치, OKKY, 인프런, 프로그래머스, 네이버 블로그·카페·뉴스 [원문 확인 / 검색 스니펫].
  - 호스팅: vercel.app, netlify.app, pages.dev, github.io, web.app에서 `site:` 15개 조합. 피드형 클론이 쓸 법한 서브도메인 19개(namutok, namufeed, namushorts, namuswipe, namureels, namuwikitok, wikitok-ko, treetok 등)를 4개 호스트에서 직접 확인했고 모두 404 또는 DNS 없음 [원문 확인].
  - 소셜·메신저: 인스타그램·스레드·틱톡 `site:` 색인, X 도메인 제한 검색, 텔레그램 핸들 12개 직접 확인, 카카오 웹 노출 검색. HN Algolia("나무위키" 0건, "namuwiki"·"namu.wiki" 히트는 모두 댓글 인용), YouTube 채널 검색, 웹 검색("namutok OR 나무톡 나무위키", "나무위키 스와이프 숏폼 웹앱 틱톡처럼").
  - 근처에서 찾은 것(모두 피드 아님): 인스타 @namu.wiki.kr(팔로워 0, 이름 선점) [원문 확인], @sportsnamuwiki(팔로워 3,430, 이름만 빌린 스포츠 계정) [검색 스니펫], X @namumascot_tree(비공식 마스코트 봇, 내용 미확인) [검색 스니펫], 틱톡 #나무위키(인물·밈 UGC, "3.2M명 시청") [검색 스니펫], 텔레그램 @namuwikiBot(검색 봇) [원문 확인].
- **확인하지 못한 채널**: 인스타그램 해시태그·프로필 상세, X 검색·프로필(402), 스레드 내부 검색, 틱톡 검색·계정 영상 목록(JS 로딩), 카카오톡 오픈채팅 검색(앱 전용), 텔레그램 디렉터리 TGStat(Cloudflare), Product Hunt 자체 검색(403, 스니펫으로만 부분 확인), 디스콰이엇·OKKY·요즘IT 자체 검색(네이버 색인으로 대체), 회원 전용 네이버 카페, 디스코드 서버 내부, 비공개 베타·개인 로컬 프로젝트.
- **판정을 바꿀 것**
  1. 색인되지 않은 도메인이나 비공개 베타 PWA가 공개되는 경우. 아카라이브·디시 홍보 글로 드러날 것이다.
  2. 카카오톡 오픈채팅 봇이 실검·최근 변경 카드를 정기 발송하고 있는 경우.
  3. 인스타·X·스레드·틱톡에서 나무위키 문서 카드 계정이 수천 명 이상 팔로워를 모은 경우. 특히 @namumascot_tree 내용 확인이 필요하다.
  4. 공식앱이 피드를 넣는 경우(4.1절).
  5. GitHub에 `sidebar.json`·RecentChanges에 스와이프 UI를 붙인 저장소가 생기는 경우. 월 1회 코드 검색 `"namu.wiki/sidebar"`로 감시한다.

## 6. 해외·대체재에서 배울 점

### 6.1 Wikimedia 앱 A/B: 개인화가 랜덤을 이기지만 원문 클릭은 줄었다
- 앱 팀 Explore Feed Refresh는 모던 피드를 "immersive, swipeable, and visually engaging full-screen experiences"로 규정하고 2025-11~2026-08 피드를 재설계했다 ([Explore Feed Refresh](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh)) [원문 확인].
- 사전 조사(2025-12, 인앱 설문 1,184명): 기존 사용자는 개인화를 원했다. 인터뷰에서 **On This Day는 "approachable and finite"해서 반응이 좋았다.** 프로토타입 14명 테스트에서 몰입형 전체화면(Focus)과 스크롤 카드(Streams) 선호가 50:50이었다.
- Android A/B(14일, 2026-05~06): 개인화 Home(For You/Community) 쪽 재방문 사용자 **47.4%(268,165/565,497) vs 기존 42.9%(374,707/873,441)**, 다일 참여 +10.5%, 1일 코호트 14일 누적 리텐션 +8%, 앱 전체 재방문율 +18%, For You 세션 22.4초로 Community 6.4초의 3.5배, 관심사 선택 화면 도달자의 30%가 1개 이상 선택(기존 커스터마이즈율 1% 미만). 그러나 **문서 클릭률 −6.3%**였다. 정성 반응은 부정적이었고, 가장 큰 불만은 사전 조사에서 "least-valued"였던 **Random Article이 후속 릴리스로 밀린 것**과 검색창 제거였다.
- iOS A/B(2026-08~09): 2주차 리텐션 −0.1%(유의하지 않음). 관심사 선택자 9.2%, 이들의 피드 참여는 건너뛴 사용자 대비 +1050%(선택 편향 포함). 팀은 피드 지연을 원인으로 의심한다 ([Phase 1 결과](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1)) [원문 확인]. Phase 2 사용성 테스트(9명) 재방문 의향은 Personalized New Articles가 1위였다 ([T430184](https://phabricator.wikimedia.org/T430184)) [검색 스니펫].
- namutok 적용: 가입 없는 관심사 칩 + 로컬 점수가 비용 대비 큰 레버다. 랜덤은 지표를 끌어올리진 못해도 열성 사용자의 정체성 기능이라 보조 탭으로 남긴다. 피드 몰입이 원문 방문을 깎을 수 있으니 **원문 클릭률을 설계 지표로 둔다.** 첫 카드 지연은 리텐션을 죽인다.

### 6.2 Future Audiences: "찾게 하지 말고 골라서 밀어라", 공유 카드는 트래픽을 만든다
- 숏폼 영상: 2024-10~2025-01 187만 뷰·151만 순 도달 ([Signpost 2025-05-01](https://signpost.news/2025-05-01/News_from_the_WMF)) [원문 확인]. 같은 기간 인간 페이지뷰 600억 회의 0.005% 미만이라는 내부 비판이 있었다. 누적은 "over 4 million viewers, mostly 18-24, in October 2024-July 2025"다 ([Future Audiences](https://meta.wikimedia.org/w/index.php?title=Future_Audiences&action=raw), 2026-11-03 편집) [원문 확인].
- 결론: Discord 봇, Citation Needed 같은 검색형 실험은 생성 영상, Roblox 같은 큐레이션형 발견 실험만큼 성공하지 못했다. 그래서 "curate and push specific content"가 "expect user to know what they want to find"보다 낫다고 정리했다 (같은 곳) [원문 확인]. 편집 신호로 골라 밀어 주는 namutok 방식을 뒷받침한다.
- **Share card**: 목표 완료율 33%에 실제 18.0%, 리텐션 28.8% vs 28.7%로 차이가 없었다. 대신 공유 링크로 **월 약 210만, 연 약 2,500만 페이지뷰**가 추정된다 ([Share card](https://meta.wikimedia.org/wiki/Future_Audiences/Share_card)) [원문 확인]. 공유 카드는 리텐션 장치가 아니라 유입 장치로 설계한다.
- World of Wikipedia: 진짜·가짜 문서 카드를 가려 모으는 게임이다. 일본 개발자의 WikiGacha(2026-02)에 Wikimedia TikTok이 반응하면서 시작됐다 ([World of Wikipedia](https://meta.wikimedia.org/wiki/Future_Audiences/World_of_Wikipedia)) [원문 확인]. 피드에서 수집·게임으로 옮겨 간 흐름이 국내 레이싱 붐과 같은 방향이다.
- Wikistories의 공유 조회 76회(4.5절)는 공급자 콘텐츠에 기대는 피드의 한계다. namutok은 편집자를 새로 모을 필요 없이 이미 일어나는 편집을 쓴다.

### 6.3 Xikipedia의 로컬 점수제: 서버 없이 되는 개인화
- 규칙: 지나치기 −5, 좋아요 50+α, 문서 클릭 75, 이미지 클릭 100점을 카테고리에 준다. 이미 본 포스트는 크게 감점한다. 다음 포스트는 무작위 후보 10,000개 중 **40% 점수 가중 랜덤, 42% 최고점, 18% 완전 랜덤**으로 고른다. 시작 때 카테고리 칩 선택(선택 사항) ([README](https://github.com/rebane2001/xikipedia)) [원문 확인].
- 효과와 한계: "3시간 스크롤", "잡지 같다"는 사용자와 "관심 없는 관련 문서", "클릭한 적 없는 전기 문서가 계속 나온다"는 사용자가 갈렸다(3.8절, [HN 46850803](https://news.ycombinator.com/item?id=46850803)) [원문 확인]. "'Random' is an algorithm… good for an 'explore' phase"라는 반론도 있었다 ([HN 43468491](https://news.ycombinator.com/item?id=43468491), 2025-03-25) [원문 확인].
- namutok 적용: 나무위키 분류로 localStorage 점수를 쌓고 일정 비율은 완전 랜덤으로 둔다. 점수가 좋아요에 크게 기대므로 좋아요 UI를 눈에 띄게 둔다. 코드는 AGPL이라 가져오지 않는다.

### 6.4 해외 클론 지형: 진입장벽 0, 견인력도 0에 가깝다
- 2021년 이후 반복: WikiScroll(2021-12, HN 13·56점, ★36), wikistroll(2022-01, HN 12점), WikTok(2023-05, HN 73점), WikiTok(2025-02), wikitok.cc(원작자 표기 없는 포크), wikideck(★2), Show HN WikiScroll(2025-02, 7점), Tinder형 변종 4종(★0~2), WikWok(Kotlin 멀티플랫폼, ★165, 2026-06-18 push), QuickQuack(2026-01, Gemini로 포스트 실시간 생성, HN 330점), Xikipedia(2026-02), 2026-10~11 신규(wikiscroll.com, FactsFlow, Doompedia, wikiscroll-zh, "Doomscrolling, but you learn something.") ([GitHub 검색](https://github.com/search?q=wikipedia+doomscroll&type=repositories), [HN 29930856](https://news.ycombinator.com/item?id=29930856), [WikWok](https://github.com/terrakok/WikWok)) [원문 확인]. GitHub "wikitok" 검색만 51개 저장소이고, 1,000스타를 넘긴 것은 WikiTok(1,321)과 Xikipedia(1,147) 둘뿐이다.
- 앱 클론(US): "WikiTok - Scroll, Read & Learn"(2024-08-22, Gemal보다 먼저) 4.11★(57), WikiScroll 3.58★(19), DeepSwipe 4.86★(7). WikiTok - Swipe & Learn, Wiki-Tik, WikiTok: Daily Fun Facts는 평점 0개. Gemini 요약에 "Category Spacing & Attenuation"을 넣은 TikWiki는 Play 100+. Gemal이 "rip off"라고 부른 Play 복제 앱은 삭제됐다 ([App Store](https://apps.apple.com/us/app/wikitok-scroll-read-learn/id6584225756), [TikWiki](https://play.google.com/store/apps/details?id=dev.ragoose.tikwiki)) [원문 확인].
- KR 스토어: WikiScroll(2026-11-16 v1.3), WikiUp(월 $1.49), 백과사전(LEAN ASIA, 2026-04-21, 전 기능 Pro), WikiTok: 오늘의 역사, Swipe Wiki, WanderWiki가 있지만 **KR 평가는 모두 0건**이다 ([iTunes Search "wikitok"](https://itunes.apple.com/search?term=wikitok&country=kr&entity=software), [WikiUp](https://apps.apple.com/kr/app/id6748560689), [백과사전](https://apps.apple.com/kr/app/id6760022581)) [원문 확인]. 포맷만으로는 한국에서 견인력이 증명되지 않았다.
- 대조군: 큐레이션된 아이디어 카드 Deepstash는 4.70★(93,991), Mindsnap 4.57★(297)이다 ([Deepstash](https://apps.apple.com/us/app/id1445023295)) [원문 확인]. 살아남은 차별화 축은 추천, 소스 큐레이션, AI 재가공이고, **실시간 편집 활동을 소스로 쓴 제품은 하나도 없다.**

### 6.5 실패 모드 여섯 가지 (근거 인용은 3.7·3.8절)
1. 랜덤 품질: 세부 전문 문서, "US place names", "Man wikipedia is full of trash", "add some ranking criteria" ([HN 46850803](https://news.ycombinator.com/item?id=46850803)) [원문 확인]. 대응: 편집 신호 + 썸네일·개요 빈약 문서 제외.
2. 개인화 부재: WikiTok HN 최대 스레드 중 하나가 "short media apps… eventually learn what you like… could help with the stickiness"였다 ([HN 42936723](https://news.ycombinator.com/item?id=42936723)) [원문 확인].
3. NSFW·민감 콘텐츠: WikiTok 첫 카드 노출 보고, Xikipedia 진입 경고, Engadget의 "explicit material" 지적 [원문 확인]. 나무위키에서는 사건사고 썸네일이 같은 문제다(3.1절).
4. 성능: Xikipedia 36MB 로딩과 iOS 크래시. 첫 카드까지의 시간을 최우선 지표로 둔다.
5. 피드–원문 단절: "Clicking the card takes you away from the feed", 모바일 원문 링크 표시 불량 [원문 확인]. 반대 방향으로는 Wikipedia Home의 원문 클릭률 −6.3%(6.1절).
6. 차별성: "How is this different from Wikipedia's own 'random article' feature?"가 출시 당일 나왔다. 스와이프 자체가 문제라는 회의론도 있다 ([HN 46850803](https://news.ycombinator.com/item?id=46850803), 2026-02-02) [원문 확인].
- 바이럴 이후 주간·월간 활성 사용자 감소는 WikiTok·Xikipedia·QuickQuack 어느 쪽도 공개하지 않았다. "신기함이 사라진다"는 판단은 간접 지표(커밋 정지, 피벗)에 기댄 것이다.

### 6.6 일일 퍼즐·끝이 있는 묶음·루틴
- 국내 레이싱 장르의 표준은 "오늘의 문제(전원 동일) + 순위 + 도전장 링크"다(링키런, 나무타기, 3.6절). 유입과 재방문을 같은 장치로 만든다.
- On This Day의 "approachable and finite"(6.1절), 롱블랙의 "하루 한 편, 24시간 뒤 열람 제한"(2021-09-28 첫 노트, 2026-09-11 누적 1,803편, 월간 독자 약 20만 명) ([벤처스퀘어 2026-09-12](https://www.venturesquare.net/?p=1112804)) [원문 확인]이 같은 방향이다.
- Headway는 Sensor Tower 기준 2020-09 Blinkist를 넘어 니치 다운로드 1위가 됐고, "Blinkist built a library. Headway built a ritual."이라는 분석이 있다 ([AIN.ua](https://en.ain.ua/2021/08/26/headway-is-1-in-the-world-by-the-number-of-downloads)) [검색 스니펫].
- namutok 적용: 무한 피드 위에 "오늘 가장 많이 편집된 10개" 같은 끝이 있는 묶음과 결과 공유 카드를 얹는다. 놀이 모드(후보 6)는 같은 틀에 넣는다.

### 6.7 바이럴과 운영에서 배울 점
- WikiTok 경로는 "twitter → hacker news → mainstream news outlets → reddit / youtube"였고, Gemal은 HN 댓글 대응에 집중했으며 Vercel CEO의 인용 트윗이 컸다고 썼다 ([회고](https://www.aizk.sh/posts/reflecting-on-wikitok)) [원문 확인]. 보도는 Ars Technica, Tubefilter, PC Gamer, PopSci 등으로 이어졌지만 한국어 보도는 없었다 [검색 스니펫].
- 바이럴의 부작용: DM 약 200건과 가짜 TechCrunch 기자 피싱, 크립토 펌프앤덤프 제안, 살해 협박, "wikitok" 밈코인, wikitok.net 도메인 선점, 해외 기사 5건 이상의 URL 오기 ([회고](https://www.aizk.sh/posts/reflecting-on-wikitok)) [원문 확인]. 유사 도메인은 먼저 잡는다(10절).
- GeekNews에서는 "위키 피드" 콘셉트만으로 4점(QuickQuack, 2026-01-12)이었다 ([GeekNews 25735](https://news.hada.io/topic?id=25735)) [원문 확인]. 한국에서는 나무위키 편집 문화와 실시간 화제를 앞세워 커뮤니티와 X에 동시에 공개하는 편이 낫다.
- 운영: 나무뷰어의 원격 셀렉터(3.2절)처럼 소스 파서 설정을 배포 없이 바꿀 수 있게 하고, 리팩처럼 광고를 건드리지 않는다(3.3절). API 매너로 User-Agent에 연락처를 넣는다(3.7절 bawolff 지적). WikiTok은 3주 만에 측정과 유지보수를 멈췄다. 익명 리텐션 집계와 소규모 반복 업데이트가 포트폴리오 서사를 만든다.

## 7. 시장 배경

### 7.1 나무위키 수요: "무너지는 중"이 아니라 "고원에서 소폭 하락"

| 지표 | 값 | 출처 |
|---|---|---|
| 월 방문(Similarweb, 2026-10) | **314.5M**(전월 +3.66%), 글로벌 113위, 한국 7위, 한국 '소셜미디어 네트워크' 1위, 체류 7분 37초, 방문당 5.01페이지, 이탈 39.03% | [Similarweb](https://www.similarweb.com/website/namu.wiki/) [원문 확인] |
| 월 방문(Semrush, 2026-10) | **309.73M**(9월 247.31M, 8월 303.12M), 한국 5위, 체류 **11분 37초**, 방문당 3.43페이지 | [Semrush](https://www.semrush.com/website/namu.wiki/overview/) [원문 확인] (정정: 02-demand의 "2.79억(2026-02)", "12분 26초"는 옛 값이다) |
| 1년 전 비교 | Similarweb 2025-10 345.8M이 맞다면 약 −9%. Semrush는 과거치를 소급 보정해 시계열을 만들 수 없다 | [Similarweb](https://www.similarweb.com/website/google.co.kr/competitors) [검색 스니펫] |
| 이용자 구성 | 남성 76.9%, 최대 연령층 18~24세, 한국 94.97%(Similarweb). 한국 내 모바일 60.21%(Semrush) | 위 두 출처 [원문 확인] |
| 규모 | 문서 8,766,817개(자기 서술). 2021년 최고 일 이용자 200만·일 PV 4,500만. 2024-10 문서 수 한국어 위키백과의 2.2배, 트래픽 7.2배 | [나무위키 문서](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4), [Wikipedia: Namuwiki](https://en.wikipedia.org/wiki/Namuwiki) [원문 확인, 구자료] |
| 이용 이유 | 청년층 응답자 76%가 나무위키로 후보자 정보를 검색한 적이 있고, 과반이 "가독성과 집약성"을 꼽았다(표본 수 비공개) | [대학알리 2026-05-28](https://univalli.com/news/article.html?no=25899) [원문 확인] |

- 오락용 탐독 비율을 직접 측정한 공신력 있는 설문은 없다. 긴 체류, 방문당 다수 페이지, '소셜미디어' 분류가 문서 사이를 옮겨 다니는 열람의 정황이다.

### 7.2 숏폼·정보 소비 행동
- 메조미디어(만 15~59세 1,000명, 2026-03-17~27): 숏폼은 "전 연령대에서 90% 이상이 이용", 일평균 42분(10대 58분, 20대 49분, 30대 41분), 10대 주 이용 플랫폼은 쇼츠 87%·릴스 77% ([메조미디어 PDF](https://cdn.cjmezzomedia.com/attach-file/insight-m/01_MezzoMedia_2026_Digital_Lifestyle_Report_Shortform_20260528134817.pdf)) [원문 확인].
- 나스미디어 2026 NPR: 숏폼 시청자 82.5%가 하루 1회 이상, 온라인 동영상 시청시간의 39.6%, 62.6%가 시청 뒤 검색 ([나스미디어 2026-04-02](https://blog.nasmedia.co.kr/entry/2026NPRusersurveyinsight-1shortform)) [원문 확인]. Z세대 평일 숏폼 시청 126.6분(2022년 75.8분) ([대학내일20대연구소](https://www.20slab.org/Archives/38305)) [검색 스니펫].
- 정보 소비: 2025 언론수용자 조사에서 숏폼 뉴스 이용률 11.1% → 22.9%, 포털 뉴스 66.5%, 종이신문 열독률 8.4% ([기자협회보 2026-01-04](https://www.journalist.or.kr/news/article.html?no=60017)) [원문 확인].
- 피로: 2024-10 조사에서 87.1%가 "중독성이 있다", 37.5%가 "글 이해가 어려워짐"을 느꼈지만 재미(89.2%) 때문에 평가는 긍정이 우세했다 ([기자협회보 2024-10-31](https://www.journalist.or.kr/news/article.html?no=56994)) [원문 확인, 구자료]. 2026년 숏폼 피로를 직접 잰 대규모 조사는 없다.
- 텍스트형 짧은 콘텐츠: 스레드 국내 사용자 798만(2026-07, +29.6% YoY, 100만 명 이상 SNS 중 증가율 1위) ([MTN 2026-09-10](https://news.mtn.co.kr/news-detail/2026091016192841238)) [검색 스니펫]. 모바일인덱스는 2026-05 665만으로 기관마다 다르다.

### 7.3 유입 구조와 AI 검색
- Ahrefs 2026-10 검색 트래픽 **41M**(전월 −8.5M, 한국 96%). 2025-07 약 57M 대비 약 −28%(계산값, Ahrefs는 변동성이 큼) ([Ahrefs](https://ahrefstop.com/websites/namu.wiki)) [원문 확인]. Semrush 오가닉은 168.61M(−1%)으로 도구 판단이 엇갈린다.
- 데스크톱 유입: Semrush 구글 오가닉 45.29%, 직접 29.02%, 유료 0. Similarweb 오가닉 검색 73.06% ([Semrush](https://www.semrush.com/website/namu.wiki/overview/), [Similarweb](https://www.similarweb.com/website/namu.wiki/)) [원문 확인]. (정정: 02-demand의 "방문의 약 70%가 구글 검색(Semrush)"은 Similarweb 데스크톱 수치와 맞고, Semrush 구글 오가닉은 45.29%다.)
- AI 플랫폼 직접 유입은 미미하다(최근 6개월 Gemini 47K, ChatGPT 7K) [원문 확인]. 대신 AI 요약이 클릭을 깎는다: WMF 사람 페이지뷰 2025년 약 −8% ([AI타임스](https://www.aitimes.com/news/articleView.html?idxno=203274)) [검색 스니펫], 제로클릭 56%(2024-05) → 69%(2025-05), AI Overviews 검색 클릭률 8% vs 일반 15%(Pew) ([디지털투데이](https://www.digitaltoday.co.kr/news/articleView.html?idxno=637248)) [검색 스니펫], 네이버 AI 브리핑 40% 확대 계획(4.2절).

### 7.4 플랫폼 접근 조건 (기획자 직접 확인 포함)
- **이용약관** [원문 확인, 2026-11-18 기획자 확인]: [namu.wiki/Policy](https://namu.wiki/Policy)는 스페인어 "Política de privacidad y Términos de uso"(약 7,130자, 1~2조)다. 크롤링, 스크래핑, 자동 접근, 복제, 재배포, 상업적 이용을 금지하는 조항은 **없다.** 내용은 개인정보와 기여 규칙(신고 시 30일 게시 중단, reCAPTCHA 고지)이다. 1.4조는 비영리 협업 사이트이고 정보를 본래 목적 외로 쓰면 안 된다고 모호하게 적는다. (정정: 보고서의 "이용약관은 JS로 렌더링돼 미확인"은 해소됐다.)
- **robots.txt** [원문 확인]: 기본 `Disallow: /` 아래 `/w/`, `/sidebar.json`, `/RecentChanges`, `/backlink/`, `/Search`를 허용한다. `/random`과 `/raw/`는 허용하지 않는다. 특정 AI 봇 차단 규칙이나 Crawl-delay는 없다 ([robots.txt](https://namu.wiki/robots.txt)).
- **응답** [원문 확인, 기획자 확인]: 가정집 IP에서 서버 측 curl로 랜덤 `/w/` 10건이 10건 모두 HTTP 200, 캡차 없음. 페이지는 Vue SSR(약 250KB)이고 `og:title`·`og:description`·`og:image`가 있다. `/w/`에는 CORS 헤더가 없고, `/sidebar.json`은 JSON에 `Access-Control-Allow-Origin: *`다. `X-Frame-Options: SAMEORIGIN`이라 iframe은 안 된다. i.namu.wiki 이미지는 외부 Referer로도 뜬다. `og:description` 10건 중 4건이 "파일:", "분류:", 표 머리글로 시작했다. `sidebar.json` 응답 예: `[{"document":"조시 앨런","status":"normal","date":1794988541}, …]` ([sidebar.json](https://namu.wiki/sidebar.json)) [원문 확인].
- **기술 차단 이력**: 운영사는 소송·테이크다운 대신 기술로 대응해 왔다. reCAPTCHA로 미러 중단(2016, 2020), 크롤링 차단으로 namu.moe 갱신 중단(2022-05-03, 2023-01-29), 2019-09 엔진 업데이트로 NamuFix 정지, 2025 광고 차단 시 콘텐츠 숨김, DB 덤프는 2021년이 마지막이다 ([나무위키/비판 및 문제점](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B9%84%ED%8C%90%20%EB%B0%8F%20%EB%AC%B8%EC%A0%9C%EC%A0%90)) [원문 확인]. 가장 최근에는 **2026-10-04 실검 API가 DNS에서 사라지고 서명 헤더·암호화 응답으로 바뀌었고** ([namu-trending](https://github.com/OnlyReadOneBook/namu-trending)) [원문 확인], 2026-10-08 전후 Cloudflare 차단이 시작돼 비공식 뷰어 실검이 고장 났다(3.3절). VPN 주소 차단 정황도 있다(2025-10-17 리팩 개발자 답변).
- **라이선스**: 문서는 CC BY-NC-SA 2.0 KR이고 "라이선스가 명시된 일부 문서 및 삽화"는 제외다. 위키백과 CC BY-SA 4.0과 호환되지 않는다 ([기본방침](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4:%EA%B8%B0%EB%B3%B8%EB%B0%A9%EC%B9%A8)) [원문 확인]. 비공식 앱 금지 조항은 없고 뷰어 문서는 문의를 제작자에게 하라고만 안내한다.

### 7.5 규제·운영사 리스크
- 2026-11-18 현재 나무위키 전체 접속 차단이나 과징금은 없다. 방심위는 2024-10-16 특정 문서에 처음 접속차단을 의결했고, 2024-10-21 국감에서 "일시적으로 전체 차단하는 방안도 검토" 발언이 있었지만 2년간 실행 선례가 없다 ([방심위 제재 문서](https://namu.wiki/w/%EB%B0%A9%EC%86%A1%ED%86%B5%EC%8B%A0%EC%8B%AC%EC%9D%98%EC%9C%84%EC%9B%90%ED%9A%8C%EC%9D%98%20%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EC%A0%9C%EC%9E%AC)) [원문 확인].
- 개인정보위는 **2025-11-26 umanle 고발을 의결**했고(개인정보보호법 제63조로 기업을 고발한 첫 사례) 2025-12 경찰청에 고발장을 냈다. 구글 광고비 압류 제안도 나왔다 ([아시아경제](https://view.asiae.co.kr/article/2026011216243233712)) [원문 확인]. 울산경찰청은 2026-04 파라과이에 국제형사사법공조를 요청했고, 2026-06-13 기준 수사 결과는 공개되지 않았다 ([itwiki](https://itwiki.kr/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4_%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B3%B4%ED%98%B8%EB%B2%95_%EC%9C%84%EB%B0%98_%EA%B3%A0%EB%B0%9C_%EC%82%AC%EA%B1%B4)) [원문 확인]. 2026-03-30 파라과이 등록 주소가 불 꺼진 가정집이라는 '유령회사' 의혹이 나왔다 ([한국경제](https://www.hankyung.com/article/2026033058197)) [원문 확인].
- 입법: '나무위키 투명화법'(2024-11-21)과 '해외플랫폼 투명화법'(2025-06-26)이 2025-12-10~2026-04-21 다섯 차례 소위에 올랐지만 통과 기록이 없다 [원문 확인]. 게시 중단 요청은 2024년 300건 이상, 2025년 251건이었다 ([파이낸셜뉴스](https://www.fnnews.com/news/202604252356473948)) [원문 확인]. 조사 노트 판단으로 향후 6~12개월 전체 차단 가능성은 낮다.
- **가까운 위험은 운영사 재무다.** 2026-11-02 파라과이 중앙은행이 우에노 은행 정리 절차를 의결했고, umanle는 협력업체에 미지급 대금 일정을 따로 연락하겠다며 "기존 서비스가 중단되지 않도록 협조"를 요청했다 ([아이뉴스24 2026-11-06](https://m.inews24.com/v/2023259)) [원문 확인]. 분석 기사는 "'폐쇄 확정'이 아니라 '운영비 결제의 불확실성 확대'"로 정리했다 ([뉴스스페이스 2026-11-07](https://www.newsspace.kr/news/article.html?no=16576)) [원문 확인]. 2026-11 실제 접속 장애 보도는 없다.
- umanle는 2016-05-07부터 광고로 영리 운영한다. **원문으로 트래픽을 보내는 구조는 운영사 이익과 맞고, 본문을 피드 안에서 길게 보여 주면 광고 노출을 빼앗아 마찰을 부른다.**

### 7.6 why now (양날의 칼)
- 기회: AI 검색이 "사실 하나 확인" 조회를 가져가면(검색 유입 −28% 추정) 위키에 남는 가치는 읽는 재미, 꼬리물기, 덕질 정보다. 세로 스와이프는 전 연령 습관이라 새 행동을 가르칠 필요가 없다. 나무위키는 여전히 월 3억 방문, 18~24세 최대, 모바일 60%다.
- 위험: 실검 API 폐기(10-04), Cloudflare 차단(10-08), 운영사 결제 차질(11-02)이 한 달 사이에 겹쳤다. 플랫폼 의존 리스크가 지금 가장 높다. 정부 차단보다 운영사의 조용한 접근 정책 변경이 namutok을 먼저 멈출 가능성이 크다.

## 8. 경쟁사가 비워둔 기회

| 빈자리 | 지금 상태 | namutok 대응 | 근거 |
|---|---|---|---|
| 소스 | 해외는 랜덤·추천·AI, 국내는 실검 키워드 10개 | `sidebar.json` 편집 피드를 메인, 랜덤은 보조 탭 | 실검 쇼츠 수만~54만 vs 랜덤 낭독 203(3.5절), 랜덤 제거 반발(6.1절) |
| 맥락 | 실검챈은 "왜 떴나"만, 뷰어는 본문만, 확장은 PC 크롬 전용 | 카드에 "왜 편집되는지"(실검 연동, 실검챈 링크) 1탭 | 구독 30,053, "왜 떴지?" 147명, 리팩 "실검챈 스크립트" 요청(3.3·3.5절) |
| 원문 연결 | 공식앱이 뒤로가기를 없앴고, 위키 피드는 카드→원문 단절 | 탭하면 원문, 피드 위치 보존, 원문 클릭률을 지표로 | "뒤로" 48/100건(3.1절), Home 원문 클릭률 −6.3%(6.1절) |
| 이미지 안전 | 공식앱이 사건사고 썸네일을 강제 노출 | 이미지 흐림·끄기 토글, 민감 분류 필터 | "혐오감이나 공포심", "끄고 켤 수 있는 옵션"(3.1절), NSFW 사례(6.5절) |
| 품질 | 랜덤 저품질("trash", "irrelevant") | 메타로 시작하는 요약 정제, 하위 문서·틀·분류·파일 제외, 반복 노출 제한, 편집 분쟁 표시 | og 요약 4/10 메타(7.4절), WikiTok 썸네일 필수, Xikipedia 본 문서 감점 |
| 저장 | 피드형 제품엔 없음 | "나중에 보기"로 피드와 링크 타기를 잇는다 | 리팩 "나중에 볼 문서" 호평(3.3절) |
| 개인화 | WikiTok은 거절, 대부분 없음 | 가입 없는 localStorage 분류 점수 + 일정 비율 랜덤, 선택형 관심사 칩 | Xikipedia 18% 랜덤(6.3절), 관심사 선택률 9~30%(6.1절) |
| 루틴·공유 | 무한 피드뿐 | "오늘 가장 많이 편집된 10개" 같은 끝이 있는 묶음, 공유 카드 | On This Day, 롱블랙, Share card 월 210만 PV(6.2·6.6절) |
| 성능 | Xikipedia 36MB 초기 로딩 | 첫 카드까지의 시간을 최우선 지표로, 지연 로딩 | "Please fix the loading issue and I'll return!", iOS 지연 의심 |
| 기기 | 공식앱 iPad 미지원 | PWA로 iPad·데스크톱 즉시 지원 | 3.1절 |
| 신뢰 | 공식앱 타사 광고 추적·삭제 불가 | 무광고·무수집, 단 사이트 광고는 건드리지 않고 원문으로 보냄 | 3.1·3.3절 |
| 접근 안정성 | 뷰어 실검 고장, Raycast 1/3 고장 | 소스별 헬스체크, `sidebar.json` 실패 시 RecentChanges·제목 풀 폴백, 장애 안내 화면 | 7.4절 |

## 9. 포지셔닝과 차별점

**포지셔닝**: "지금 한국 인터넷이 고치고 있는 나무위키 문서를, 왜 고치는지와 함께 넘겨 보고, 탭 한 번으로 원문에 갔다 돌아오는 피드." 나무위키 헤비 유저(10~30대)를 위한 재미 상품이다. 경쟁 상대는 비슷한 앱이 아니라 두 습관(링크 꼬리물기, 실검 "왜 떴나" 확인)과 하나의 플랫폼(umanle)이다.

**무엇이 새로운가, 그리고 왜 쉽게 따라 할 수 있는가** (솔직한 평가)

| 차별점 | 새로운 점 | 따라 하기 | 해자 |
|---|---|---|---|
| 실시간 편집 신호를 피드 소스로 | 세계 위키 피드 중 편집 활동을 쓴 제품이 없다(6.4절) | **매우 쉽다.** `sidebar.json`은 공개 JSON에 CORS `*`이고 robots.txt도 허용한다. Raycast가 MIT로 파싱 코드를 공개했다. umanle는 이 데이터를 원래 갖고 있다 | **약** |
| "왜 편집되는지" 맥락(실검·실검챈 연결) | 모바일 카드 안 1탭은 처음이다. 기존은 커뮤니티 방문·PC 확장 | 쉽다. 확장 3종이 이미 링크 로직을 쓴다. 단 실검 API가 2026-10-04 암호화돼 누구에게나 어려워졌다(namutok 포함) | **약~중**(매칭 정확도는 쌓이는 노하우) |
| 원문 동선(피드 위치 보존, 광고 비침해) | 공식앱이 버린 뒤로가기를 피드 수준에서 지킨다 | UX 디테일이라 쉽다 | 기술 해자 **약**. 다만 운영사 이익과 맞아 차단을 덜 부르는 "생존 해자"는 **중** |
| 카드 품질 정제 | 메타 요약 4/10 문제를 푼 나무위키 카드는 없다 | 반복 튜닝이 필요해 하루 클론은 품질이 낮다 | **약~중** |
| 이미지 토글·경량 개인화·끝이 있는 묶음·공유 카드 | 국내 나무위키 제품엔 없다 | 공개 패턴(Xikipedia README, Share card)이라 쉽다 | **약** |
| 나무위키 문체·서브컬처 콘텐츠 | 해외 클론(위키백과)과 확실히 다르다 | 국내 클론은 같은 소스를 쓴다 | 해외 대비 **강**, 국내 대비 **없음** |
| 선점·지속 운영 서사 | 2차 앱 대부분이 1~2개월 뒤 방치됐다(3.6절) | 시간이 필요하다 | **중**(포트폴리오 관점) |

- **결론**: 포맷과 데이터는 모두 공개돼 있어 기술 해자는 없다. 남는 것은 실행 속도, 품질 튜닝, 지속 운영뿐이다. 1주 포트폴리오에는 이 정도로 충분하다. 먼저 내고 계속 고치는 것이 전략이다.
- **따라 하기 어려운 쪽**: 해외 WikiTok류는 나무위키 `/w/`에 CORS가 없어 서버 프록시가 필요하고 한국 맥락이 없다. 대형 플랫폼은 비상업 라이선스와 경쟁 트래픽 문제로 나무위키를 소스로 쓰기 어렵다(4.4절). umanle는 능력은 있지만 동기가 약하다(4.1절). umanle가 따라 하면 그 자체로 콘셉트 검증이 되지만, namutok의 존재 이유는 사라진다.

## 10. 이름·브랜드 확인

> 법률 자문이 아니다. 2026-11-18 공개 조회 결과이고, 상표 사용 전에는 전문가 확인이 필요하다.

| 대상 | 결과 | 근거 |
|---|---|---|
| 웹 검색 "namutok" | 제품·서비스 없음. 다음 "검색결과가 없습니다", 네이버는 무관한 웹소설 카탈로그 1건 | [원문 확인] |
| 웹 검색 "나무톡" | 소프트웨어 제품 없음. 히노끼 목재 브랜드의 네이버 블로그 "히노끼나라편백나라 - 나무톡 블로그"(구독 약 740, 게시물 약 690)가 쓴다 | [검색 스니펫] |
| 앱스토어 "나무톡" | 해당 앱 없음 | [검색 스니펫] |
| 도메인 | namutok.com·.net(Verisign RDAP 404), .app(Google Registry 404), .io(404), .kr·.co.kr(KISA whois 미등록), 나무톡.com·나무톡.kr 모두 **미등록**. 대조군 google.com·get.app·github.io는 200 | [원문 확인] |
| 호스팅·코드·패키지 | namutok·namu-tok 서브도메인(vercel·netlify·github.io·web.app) 404, pages.dev DNS 없음. GitHub 사용자·조직 404, 저장소 0건. npm 404. 텔레그램 @namutok 미사용 | [원문 확인] |
| KIPRIS 상표 | `TN=[namutok+나무톡+namu?tok+나무?톡]` 국내 0건, `나무톡`·`namutok` 국내·해외 각 0건. 대조군 `카카오톡` 68건으로 검색 정상. `나무위키`도 0건 | [원문 확인 — 브라우저, 비로그인] |
| 미확인 | TMview·WIPO 국제 상표(봇 차단), "~톡" 접미어 상표가 많은 카카오 계열과의 유사성, umanle의 "나무위키" 브랜드 사용 정책 | - |

- 해석: 2026-11-18 기준 직접 충돌(등록 상표, 도메인, 동명 제품)은 없다. "나무톡" 블로그는 업종·형태가 달라 혼동 가능성이 낮아 보인다. 이름이 "나무위키"를 연상시키므로 About에 "비공식, umanle와 무관"을 적는다. WikiTok의 도메인 선점 사례(6.7절)를 보면 쓸 도메인은 일찍 잡는다(가격은 미확인).

## 11. 출처

**조사 파일** (모두 `docs/planning/` 아래)
- `reports/나무위키 숏폼 피드 경쟁 조사.md` — 종합 보고서(약 86KB)
- `research_notes/나무위키 숏폼 피드 경쟁 조사 심층 조사/competitor_profiles.md` — 경쟁사 프로필 8종
- `research_notes/나무위키 숏폼 피드 경쟁 조사 심층 조사/entrants_and_shutdowns.md` — 대형·잠재 진입자와 철수 사례, 12개월 진입 확률
- `research_notes/나무위키 숏폼 피드 경쟁 조사 심층 조사/market_sweep.md` — 직접 경쟁자 최종 스윕, 이름 충돌 점검
- `research_notes/나무위키 숏폼 피드 경쟁 조사/direct_competitors_namuwiki.md`, `global_analogs_wikitok.md`, `market_regulatory_background.md` — 1차 노트(공백 확인용)
- 맥락: `00-overview.md`, `02-demand.md`, `04-feasibility.md`

**핵심 URL** (본문 인용 외 대표 출처)
- 나무위키 접근: [Policy](https://namu.wiki/Policy), [robots.txt](https://namu.wiki/robots.txt), [sidebar.json](https://namu.wiki/sidebar.json), [namu-trending README](https://github.com/OnlyReadOneBook/namu-trending)
- 국내 경쟁: [공식앱 Play](https://play.google.com/store/apps/details?id=net.umanle.namuwiki&hl=ko&gl=KR), [공식앱 App Store](https://apps.apple.com/kr/app/id1623510780), [나무뷰어](https://apps.apple.com/kr/app/id993035669), [리팩](https://play.google.com/store/apps/details?id=com.monpub.namuwiki.repack&hl=ko&gl=KR), [Raycast](https://www.raycast.com/123period/namuwiki), [실검 채널 문서](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%20%EC%8B%A4%EA%B2%80%20%EC%95%8C%EB%A0%A4%EC%A3%BC%EB%8A%94%20%EC%B1%84%EB%84%90), [@나무위키실검](https://www.youtube.com/@%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4%EC%8B%A4%EA%B2%80/shorts), [왜 떴지?](https://chromewebstore.google.com/detail/lkeohnkcjiniaeahjneenijngejohhnb), [나무뷰어 문서](https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4/%EB%B7%B0%EC%96%B4)
- 해외: [WikiTok GitHub](https://github.com/IsaacGemal/wikitok), [Gemal 회고](https://www.aizk.sh/posts/reflecting-on-wikitok), [HN 42936723](https://news.ycombinator.com/item?id=42936723), [Xikipedia](https://github.com/rebane2001/xikipedia), [HN 46850803](https://news.ycombinator.com/item?id=46850803), [QuickQuack HN](https://news.ycombinator.com/item?id=46557029), [WanderWiki](https://lagerland.app/apps/wanderwiki/)
- Wikimedia: [Explore Feed Refresh Phase 1](https://www.mediawiki.org/wiki/Wikimedia_Apps/Team/Explore_Feed_Refresh/Phase_1), [Scrollipedia](https://meta.wikimedia.org/wiki/Future_Audiences/Scrollipedia), [Share card](https://meta.wikimedia.org/wiki/Future_Audiences/Share_card), [Wikistories](https://www.mediawiki.org/wiki/Wikistories_for_Wikipedia)

## 12. 반대 의견

1. **핵심 소스가 하루아침에 끊길 수 있다.** umanle는 2026-10-04 실검 API를 예고 없이 없애고 암호화했다. Raycast 확장은 그날 명령 셋 중 하나를 잃었다(3.4절). 2026-10-08 Cloudflare 차단으로 뷰어가 고장 났고, VPN 주소 차단 정황도 있다(3.3절). 데이터센터 IP 테스트는 아직 안 했다(A10). namutok이 뜰수록 요청이 늘고 차단 확률도 오른다. 성공 시나리오와 차단 시나리오가 겹친다.
2. **헤비 유저의 핵심 습관은 수동 피드가 아니라 능동 링크 타기다.** 가장 생생한 리뷰는 "링크타고 보고 다시 돌아와서 … 링크타고 하는게 나무위키의 묘미"였고(3.1절), 공식앱 리뷰에서 랜덤 언급은 9건, 뒤로가기는 48건이었다. 2026년 2차 제품 붐도 피드가 아니라 레이싱 게임이었다. 넘기기만 하는 피드는 이 습관과 부딪칠 수 있다.
3. **"편집 중 문서"는 사건사고·논란·생존 인물로 쏠린다.** 실검 쇼츠 상위는 사건·논란형(54만)이고, 실검 문서에는 편집 분쟁과 반달이 잦다 ([실시간 검색어 문서](https://namu.wiki/w/%EC%8B%A4%EC%8B%9C%EA%B0%84%20%EA%B2%80%EC%83%89%EC%96%B4)) [원문 확인]. 편집 도중의 반달 상태가 카드에 찍힐 수 있다. 공식앱은 바로 이런 썸네일로 "혐오감이나 공포심" 리뷰를 받았다. 개인정보위 고발 이슈와 엮이면 포트폴리오로도 논쟁거리다. `sidebar.json`의 갱신 빈도와 항목 수, 사소한 편집 비중도 아직 모른다.
4. **포맷의 한국 견인력은 증명된 적이 없다.** 해외 위키 피드의 KR 평가는 0건이고, GeekNews에서 "위키 피드"는 4점이었다. 나무위키 2차 제품은 가장 큰 것도 수백 명이고(레이싱 장르 1,000명 미만), 랜덤 낭독 채널은 구독 12명이다. 바이럴 이후 리텐션을 공개한 해외 사례도 없다. Sora, Pulse, Scrollipedia처럼 대형 플랫폼의 피드 실험도 연달아 접혔다.
5. **"원문으로 보내 운영사와 이익을 맞춘다"는 논리가 실제로는 성립하지 않을 수 있다.** Wikimedia Home은 피드 몰입이 늘자 원문 클릭률이 −6.3% 줄었다. namutok 카드가 재미있을수록 원문 방문은 줄고 광고 노출을 빼앗는 구조가 될 수 있다. 그러면 운영사가 막을 동기가 생긴다.
6. **차별점은 하루면 복제된다.** 9절대로 기술 해자가 없다. 개인 클론 진입 확률은 상이고, 공식앱 홈에는 이미 "연관 문서" 카드가 있다. 운영사가 은행 정리로 흔들리면(7.5절) 경쟁 이전에 소스 자체가 사라질 수도 있다.
