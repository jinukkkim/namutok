# 아이디어 백로그 (조사 중 발견한 인접 문제)

- [2026-11-18] 나무위키 공식 앱 평가가 낮음(iOS 2.6/5, 30개). 비공식 뷰어 나무뷰어는 4.1/5(347개) → 더 나은 나무위키 리더 앱 수요. 단, 광고 차단은 운영사 수익과 충돌 — 출처: namutok 2단계, https://apps.apple.com/kr/app/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4-%EA%B3%B5%EC%8B%9D%EC%95%B1/id1623510780
- [2026-11-19] (namutok Kill에서 이동) **나무위키 피드 브라우저 확장·유저스크립트**: 나무위키 사이트 위에서 사용자 브라우저가 같은 출처로 문서를 받아 요약·이미지 카드 피드를 만든다. 서버 프록시가 없어 Workers/Vercel 차단과 무관. 약점: PC 중심(나무위키 모바일 약 60%), 설치 장벽, 기존 실검 확장들도 수백 명 규모 — 출처: `docs/planning/00-overview.md` Kill 기록
- [2026-11-19] (namutok Kill에서 이동) **검색 API 스니펫 카드**: `sidebar.json`의 실시간 편집 신호 + 네이버·카카오 검색 API의 나무위키 스니펫을 요약으로 쓴다. 미검증: 방금 편집된 문서의 색인 지연과 스니펫 품질, 이미지 소스 없음, 약관(출처·원본 링크 표시, 기기 24시간·서버 21일 보관 제한) — 출처: https://api.ncloud-docs.com/docs/naver-api-hub-search-webkr, https://www.tokenpost.kr/news/ai/403521
