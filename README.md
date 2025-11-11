# 💄 BallaDream

<p align="center">
  <img src="/public/img/logo.png" alt="BallaDream Logo" width="200"/>
</p>

<p align="center">
  <strong>AI 기반 맞춤 화장품 추천 서비스</strong><br/>
  사용자의 피부를 AI로 분석하고, 개인에게 꼭 맞는 화장품을 단계별로 추천합니다.
</p>

<p align="center">
  <a href="https://balladream.shop">🔗 https://balladream.shop</a>
</p>

<br/>

## 📝 프로젝트 소개

**BallaDream**은 사용자의 얼굴 사진을 기반으로 피부 상태를 AI로 분석하고,  
피부 고민에 따라 **성분 중심의 화장품**을 단계별(예방/권고/필수)로 추천하는 웹 서비스입니다.

약 **530만개의 파라미터**로 주름, 여드름, 색소침착 등을 정밀 분석하며,  
약 **20초 만에** 분석 결과를 제공하는 효율적인 서비스입니다.

<br/>

## ✨ 주요 기능

| 기능                    | 설명                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 🔍 **AI 피부 분석**     | 얼굴 이미지를 업로드하면 AI가 이마, 미간, 눈가, 볼, 입술, 턱 등 주요 부위의 주름, 색소침착, 건조, 모공, 탄력을 분석 |
| 💡 **분석 결과 시각화** | 레이더 차트와 피부 맵으로 분석 결과를 직관적으로 표현하고, 부위별 상태를 시각적으로 확인                            |
| 🧴 **3단계 맞춤 추천**  | 분석 결과에 따라 예방/권고/필수 3단계로 나누어 성분 기반 화장품을 추천                                              |
| 🎯 **필터링 기능**      | 가격대, 제형(젤/크림/세럼 등)별로 제품을 필터링하여 선택                                                            |
| 📊 **진단 기록 관리**   | 마이페이지에서 과거 진단 기록과 추천 이력을 날짜별로 확인                                                           |
| ⭐ **관심 제품 저장**   | 추천받은 제품 중 관심 있는 제품을 북마크하여 관리                                                                   |

<br/>

## 🛠️ 기술 스택

### Frontend Core

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"/>
</p>

### State Management & Data Fetching

<p>
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/>
</p>

### Styling & UI

<p>
  <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/Nivo-E91E63?style=for-the-badge&logo=D3.js&logoColor=white"/>
</p>

### Development Tools

<p>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black"/>
</p>

### Deployment & Collaboration

<p>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/>
</p>

### 주요 라이브러리

- **React Hook Form** + **Yup**: 폼 검증 및 관리
- **Axios**: HTTP 클라이언트
- **React Router**: 라우팅
- **Nivo Radar**: 피부 상태 레이더 차트 시각화
- **React Xarrows**: 피부 맵 화살표 연결
- **React Dropdown**: 필터 드롭다운
- **React Loading Skeleton**: 로딩 스켈레톤
- **React Spinners**: 로딩 스피너

<br/>

## 🚀 시작하기

### 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 변수를 설정하세요:

```env
VITE_API_BASE_URL=your_backend_api_url
VITE_AI_API_BASE_URL=your_ai_api_url
```

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/your-username/balladream.git
cd balladream

# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 린트 실행
npm run lint
```

<br/>

## 📁 프로젝트 구조

```
src/
├── api/              # API 요청 로직
├── assets/           # 이미지, 아이콘 등 정적 리소스
├── components/       # 재사용 가능한 컴포넌트
│   ├── common/       # 공통 컴포넌트 (Header, Footer 등)
│   ├── homePage/     # 홈페이지 섹션 컴포넌트
│   ├── resultPage/   # 결과 페이지 컴포넌트
│   ├── myPage/       # 마이페이지 컴포넌트
│   └── modal/        # 모달 컴포넌트
├── constants/        # 상수 정의
├── enums/            # Enum 정의
├── hooks/            # 커스텀 훅
├── layouts/          # 레이아웃 컴포넌트
├── pages/            # 페이지 컴포넌트
├── routes/           # 라우팅 설정
├── slices/           # Redux Toolkit 슬라이스
├── store/            # Redux 스토어 설정
├── types/            # TypeScript 타입 정의
└── utils/            # 유틸리티 함수
```

<br/>

## 🎨 주요 페이지

| 페이지          | 경로                  | 설명                                               |
| --------------- | --------------------- | -------------------------------------------------- |
| **홈**          | `/`                   | 서비스 소개 및 AI 분석 프로세스 안내               |
| **회원가입**    | `/signup`             | 이메일/카카오 회원가입                             |
| **사진 업로드** | `/upload`             | 피부 분석을 위한 얼굴 사진 업로드 (로그인 필요)    |
| **분석 결과**   | `/result/:diagnoseId` | AI 분석 결과 및 화장품 추천 (로그인 필요)          |
| **마이페이지**  | `/my/:tabIndex`       | 진단 기록, 관심 제품, 회원 정보 관리 (로그인 필요) |

<br/>

## 👥 팀원 구성

<table>
  <tr>
    <td align="center" width="150">
      <a href="https://github.com/dykimruby">
        <img src="https://avatars.githubusercontent.com/u/130230167?v=4" width="100" style="border-radius: 50%"/><br/>
        <b>김도연</b>
      </a>
    </td>
    <td align="center" width="150">
      <a href="https://github.com/dohyung001">
        <img src="https://avatars.githubusercontent.com/u/154952683?s=400&u=20655b037117bcd2eaa4bd8a186b8651d22814e4&v=4" width="100" style="border-radius: 50%"/><br/>
        <b>김도형</b>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">Frontend Developer</td>
    <td align="center">Frontend Developer</td>
  </tr>
</table>

<br/>

## 📚 문서 및 리소스

- **[Notion 협업 문서](https://www.notion.so/197a7900ffab80259216de9566d74eda?pvs=13)**  
  프로젝트 기획, 회의록, 코드 컨벤션, API 명세 등

- **[Figma 디자인](https://www.figma.com/design/vm0rPZ2hyQXQsB1kJAeZ4V/BallaDream?node-id=1-37&t=rMVV1zDFzLrnFiHC-1)**  
  UI/UX 디자인 시안 및 프로토타입

<br/>
