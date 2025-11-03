import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCompass, faMap, faSquareCaretRight } from "@fortawesome/free-regular-svg-icons";
import Hero from "../components/Hero";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />

      <div className="home__guide">
        <h1 className="home__guide__title">부산 여행 플래닝</h1>
        <h2 className="home__guide__subtitle">당신의 여행 스타일에 맞춘 완벽한 가이드</h2>
        <div className="home__guide__features">
          <div className="guide__features__feature">
            <div className="features__feature__icons bg-blue">
              <FontAwesomeIcon icon={faPenToSquare} className="feature__icons__icon" />
            </div>
            <h3 className="features__feature__title">코스 짜보이소</h3>
            <p className="features__feature__subtitle">나만의 여행 코스를 직접 만들고 공유</p>
            <div className="features__feature__btn">자세히 보기 →</div>
          </div>
          <div className="guide__features__feature">
            <div className="features__feature__icons bg-orange">
              <FontAwesomeIcon icon={faCompass} className="feature__icons__icon" />
            </div>
            <h3 className="features__feature__title">인자 머하노?</h3>
            <p className="features__feature__subtitle">내 위치 기반 주변 맛집, 관광지, 숙소 추천</p>
            <div className="features__feature__btn">자세히 보기 →</div>
          </div>
          <div className="guide__features__feature">
            <div className="features__feature__icons bg-green">
              <FontAwesomeIcon icon={faMap} className="feature__icons__icon" />
            </div>
            <h3 className="features__feature__title">이래 가보이소</h3>
            <p className="features__feature__subtitle">부산 테마별 추천 여행 코스 모음</p>
            <div className="features__feature__btn">자세히 보기 →</div>
          </div>
          <div className="guide__features__feature">
            <div className="features__feature__icons bg-red">
              <FontAwesomeIcon icon={faSquareCaretRight} className="feature__icons__icon" />
            </div>
            <h3 className="features__feature__title">유튜바 코스</h3>
            <p className="features__feature__subtitle">유튜버들이 방문한 코스와 영상 정보</p>
            <div className="features__feature__btn">자세히 보기 →</div>
          </div>
        </div>
      </div>

      <div className="home__festival"></div>
    </div>
  );
}
