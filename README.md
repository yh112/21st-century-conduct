# 🏛️ 21세기 행실도 (React)
![Image](https://github.com/user-attachments/assets/f9c6b507-019e-4207-b176-6ae6c0ae9dc5)
이 프로젝트는 **React.js**로 제작된 전시/소개형 웹 애플리케이션입니다. 애니메이션 효과, 정보성 페이지, 모달 인터페이스, 라우팅 시스템 등으로 구성되어 사용자가 다양한 콘텐츠를 탐색할 수 있도록 설계되었습니다.

⚠️ 2560*1440 해상도에 최적화된 프로젝트입니다. 

👉 체험해보기: https://capstonedesign.vercel.app/ 👈

---

## 🚀 주요 특징

* 🎬 **페이지 전환 애니메이션** (`FadeInWrapper`)
* 🧭 **네비게이션 바**를 통한 간편한 이동
* 💬 **모달 팝업 UI** 지원 (규정/설명 등)
* 🧱 **컴포넌트 기반 아키텍처**
* 🔀 **React Router**를 통한 다중 페이지 구성

---

## 📁 폴더 구조

```
src/
├── components/           # 재사용 가능한 UI 컴포넌트
│   ├── Door.jsx          # 입장 애니메이션 컴포넌트
│   ├── Navigation.jsx    # 상단 네비게이션 바
│   ├── Modal.jsx         # 일반 모달 컴포넌트
│   ├── ConductModal.jsx  # 행동강령 모달 전용
│   ├── OverviewContent.jsx # Overview 설명 박스
│   └── House.jsx         # 시각적 상징 요소
│
├── pages/                # 라우팅 대상 페이지들
│   ├── Landing.jsx       # 앱 최초 인트로 페이지
│   ├── Home.jsx          # 메인 대시보드
│   ├── Overview.jsx      # 서비스 개요
│   ├── Conduct.jsx       # 행동 지침 안내
│   ├── PastandPresent.jsx # 과거와 현재 비교
│   └── Background.jsx    # 서비스 배경 설명
│
├── router/               # 라우팅 설정
│   ├── router.js         # Route 정의
│   └── FadeInWrapper.js  # 페이지 전환 애니메이션 래퍼
│
├── App.css / index.css   # 전체 스타일
├── index.js              # 앱 진입점
└── reportWebVitals.js    # 성능 측정 유틸리티
```

---

## 📄 페이지 소개

| 페이지              | 설명                                      |
| ---------------- | --------------------------------------- |
| `Landing`        | 앱 최초 진입 시 표시되는 인트로 페이지. 자동으로 홈으로 이동     |
| `Home`           | 메인 진입 페이지. `Door` 컴포넌트를 포함한 애니메이션 효과 제공 |
| `Overview`       | 프로젝트 또는 전시 개요 설명 페이지                    |
| `Conduct`        | 행동 강령, 규칙 등을 모달 형태로 안내                  |
| `PastandPresent` | 과거와 현재의 비교 설명을 위한 섹션                    |
| `Background`     | 프로젝트의 배경 정보 소개 페이지                      |

---

## 🧩 주요 컴포넌트

* `Navigation`: 모든 페이지에서 사용되는 상단 메뉴
* `Modal`: 기본 모달 UI
* `ConductModal`: 고정된 규칙 설명용 모달
* `Door`: 화면 입장 애니메이션 처리
* `FadeInWrapper`: 페이지 전환 시 `fade-in` 효과 적용

---

## 🛠 실행 방법

```bash
npm install
npm start
```

기본 포트: [http://localhost:3000](http://localhost:3000)

---

## 🛠 기술 스택

* React 18+
* React Router DOM
* Custom Animation (FadeInWrapper)
* 모듈형 CSS 구성

---

## ✅ TODO 또는 확장 아이디어

* 📱 반응형 레이아웃 최적화
* 🌐 다국어 지원 (i18n)
* 🧪 컴포넌트별 테스트 추가
