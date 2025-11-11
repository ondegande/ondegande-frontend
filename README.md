# 🛳️ 부산광역시 관광 서비스 프로젝트

> 2024 관광데이터 활용 공모전 출품 및 **장려상** 수상<br/>
> 부산광역시 관광특화 서비스로 구축한 웹사이트<br/>
> 한국관광공사, 부산광역시 Tour API, Kakao Map API 등 외부 공공데이터 및 오픈 API 적극 활용<br/>
> UI/UX 및 코드 품질 개선을 위해 **2025년 리팩토링** 진행

## 📷 프로젝트 소개

### 🗂️ 홈 - 대시보드

<img width="600" alt="대시보드" src="https://github.com/user-attachments/assets/45f410f7-b354-4cd5-9162-2c9e7c515bb8" />

- **React Router (Link)** 를 이용하여 각 주요 페이지로 이동 가능
- **기능 개요**:
  - <code>코스 짜보이소</code>: 나만의 여행 코스 설계
  - <code>인자 머하노?</code>: 현위치 기반 여행지 추천
  - <code>이래 가보이소</code>: 지역·테마별 추천 코스
  - <code>유튜바 코스</code>: 유튜버 여행 코스 제공

---

### 🎇 홈 - 축제 정보

<img width="600" alt="축제정보" src="https://github.com/user-attachments/assets/59fbb931-f4f2-434f-9bf9-1bf9be7dde77" />

- **부산광역시\_부산축제정보 서비스 API**를 통해 실시간 축제 데이터 수집
- **moment.js**로 현재 날짜 기준 월별 축제 자동 필터링
- 사용자에게 이달의 축제 정보를 직관적으로 제공

---

### 🗺️ 코스 짜보이소 - 지도

<img width="600" alt="코스짜보이소" src="https://github.com/user-attachments/assets/1bfe5aac-ca17-4926-90c0-d634f92b85a8" />

- **Kakao Map API**를 활용해 지도 및 장소 검색 기능 구현
- 검색된 장소의 **이름·주소·좌표**를 기반으로 마커 표시

---

### 📑 코스 짜보이소 - 일정 관리

<img width="600" alt="여행일정" src="https://github.com/user-attachments/assets/3516f1fa-3445-4c83-a78a-ee192584941e" />

- **Clipboard API**를 활용하여 일정 복사 기능 제공
- 동선 확인 버튼을 통해 Kakao Map 상에서 전체 이동 경로 시각화
- **드래그 앤 드롭 (Drag & Drop)** 으로 코스 순서 조정 가능

---

### 🎡 인자 머하노?

<img width="600" alt="인자머하노" src="https://github.com/user-attachments/assets/806f980d-85b7-4026-a22a-e44a48973866" />

- **Geolocation API**로 사용자의 현재 위치를 감지
- **Kakao Map API**를 통해 인근 관광지, 맛집, 숙소 검색
- **한국관광공사 Tour API (국문 관광정보 서비스)** 를 활용해 실제 거리 기반 데이터 표시
- 검색 반경 지정 기능으로 사용자 맞춤형 추천 결과 제공

---

### 🖼️ 이래 가보이소

<img width="600" alt="이래가보이소" src="https://github.com/user-attachments/assets/e7f43ca3-9c15-4936-8c93-44d99d3eafe1" />

- **부산광역시\_부산테마여행정보 서비스 API** 활용
- 지역별·테마별 필터링 기능 제공
- **랜덤 코스** 기능으로 사용자가 선택한 조건 내에서 랜덤으로 코스 추천

---

### 📹 유튜바코스

 <img width="600" alt="유튜바코스" src="https://github.com/user-attachments/assets/aed8762c-1cdf-48c8-8ecf-4da3ff78022b" />

- **초기 버전 (리팩토링 전)**:
  - 부산을 여행한 유튜버들의 영상을 기반으로 한 코스 제공 기능 구현
  - **Kakao Map API**로 영상 내 장소를 시각화하고 동선 표시
  - 조회수 정렬로 인기 코스 탐색 가능
- ⚠️ **현재 상태**:
  - 해당 기능은 백엔드 API 서비스 중단으로 인해 더 이상 제공되지 않음
  - 향후 기능 대체 또는 백엔드 API 서비스 재개 검토 중

---

### 🛠️ 기술 스택

- **HTML**: 시맨틱 태그를 활용한 구조적 마크업 및 접근성 개선
- **CSS**: 반응형 레이아웃 구현, 모듈화된 스타일 관리, Flex/Grid 활용
- **React.js**: 컴포넌트 기반 구조 설계, 상태 관리(<code>useState</code>, <code>useEffect</code>), 외부 API 연동 및 라우팅(<code>react-router-dom</code>) 구현

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React.js](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)

</div>

---

### 💡 배운점

- **공공데이터 API 통합**: 다양한 기관의 Open API를 조합하여 일관된 데이터 구조로 가공 및 렌더링
- **지도 UX 설계 능력**: Kakao Map을 활용한 마커·동선·검색 기능 구현을 통해 지도 UI/UX에 대한 이해도 강화
- **협업 중심의 개발 프로세스**: GitHub를 통한 버전 관리, API 문서 기반 협업, 공모전 제출용 문서 정리
- **코드 구조화 및 리팩토링 경험**: 2025년 리팩토링 과정에서 컴포넌트 구조 개선, CSS 모듈화, 상태 관리 최적화
