# MoneyTI: MBTI 기반 실시간 ETF 추천 서비스

> "당신의 투자 성향, 성격에서 찾다."
> 공공데이터포털의 증권 정보를 활용하여 MBTI 별 최적의 ETF를 실시간 시세와 함께 추천합니다.

## 이 프로젝트는?

MoneyTI는 사용자의 MBTI 성격 유형을 분석하여 그에 적합한 투자 스타일을 제시하고, 실제 **금융위원회 공공데이터 API**를 연동하여 해당 스타일에 맞는 ETF의 실시간(혹은 일별) 시세 정보를 제공하는 웹 서비스입니다. 정적인 추천을 넘어, 실제 시장 데이터를 기반으로 한 살아있는 포트폴리오를 제안합니다.

## 목표

- [ ] **MBTI 성향 분석**: 사용자 입력을 통해 16가지 성격 유형 도출 및 투자 페르소나 매칭
- [ ] **Open API 연동**: 공공데이터포털(금융위원회) ETF 시세 정보를 연동하여 실제 가격 데이터 제공
- [ ] **맞춤형 추천**: 성향별 추천 ETF 상품을 매핑하고 상세 정보 시각화

## 기술 스택

| 영역 | 기술 | 선택 이유 |
|------|------|----------|
| Frontend | **Next.js 14** (App Router) | 최신 React 기능 활용 및 API Routes를 통한 오버헤드 없는 API Proxy 구현 |
| Styling | **TailwindCSS** | 빠른 UI 프로토타이핑 및 반응형/다크모드 지원 용이 |
| State | **Zustand** | 가볍고 직관적인 전역 상태 관리 (MBTI 결과 및 API 데이터 캐싱) |
| API | **TanStack Query** | 서버 상태 관리(캐싱, 로딩 처리, 주기적 갱신) 최적화 |
| Data | **Public Data Portal API** | 공신력 있는 ETF 시세 정보 무료 활용 (금융위원회) |
| Deploy | **Vercel** | Next.js 최적화 배포 및 Serverless Function 지원 |

## 문서 목록

| 문서 | 설명 | 상태 |
|------|------|:----:|
| [01_SERVICE_OVERVIEW](./docs/01_SERVICE_OVERVIEW.md) | 서비스 개요 | ✅ |
| [02_FEATURES](./docs/02_FEATURES.md) | 기능 명세 | ✅ |
| [03_DATABASE](./docs/03_DATABASE.md) | 데이터 구조 (Mapping) | ⏳ |
| [04_API](./docs/04_API.md) | API 연동 명세 | ⏳ |
| [05_UI_STRUCTURE](./docs/05_UI_STRUCTURE.md) | 페이지/컴포넌트 구조 | ⏳ |
| [99_DECISIONS](./docs/99_DECISIONS.md) | 주요 의사결정 기록 | ⏳ |

## 시작하려면

```bash
# 의존성 설치
npm install

# 환경 변수 설정 (.env.local)
# NEXT_PUBLIC_API_KEY=your_public_data_portal_key_here

# 개발 서버 실행
npm run dev
```

## 프로젝트 현황

- 📊 진행 상황: [PROGRESS.md](./PROGRESS.md)
- 📝 세션 기록: [SESSION_LOG.md](./SESSION_LOG.md)
- ✅ 할 일: [TODO.md](./TODO.md)

---

*최종 업데이트: 2026-01-15*
