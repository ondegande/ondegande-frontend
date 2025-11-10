import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCompass, faMap, faSquareCaretRight } from "@fortawesome/free-regular-svg-icons";
import "../styles/feature.css";

export default function Feature() {
  return (
    <div className="feature__explain column a-center gap-16">
      <h1 className="f-36 w-600">부산 여행 플래닝</h1>
      <h2 className="f-18 w-400 c-555555">당신의 여행 스타일에 맞춘 완벽한 가이드</h2>
      <div className="features grid-2 gap-28">
        <Link to="/makecourse">
          <div className="feature column j-space-between gap-40 br-12 cursor">
            <div className="feature__icons br-12 bg-0096ff">
              <FontAwesomeIcon className="feature__icon" icon={faPenToSquare} />
            </div>
            <h3 className="f-24 w-600">코스 짜보이소</h3>
            <p className="w-400 c-555555">나만의 여행 코스를 직접 만들고 공유</p>
            <div className="width-100 c-155dfc">자세히 보기 →</div>
          </div>
        </Link>
        <Link to="donow">
          <div className="feature column j-space-between gap-40 br-12 cursor">
            <div className="feature__icons br-12 bg-ffa200">
              <FontAwesomeIcon className="feature__icon" icon={faCompass} />
            </div>
            <h3 className="f-24 w-600">인자 머하노?</h3>
            <p className="w-400 c-555555">내 위치 기반 주변 맛집, 관광지, 숙소 추천</p>
            <div className="width-100 c-155dfc">자세히 보기 →</div>
          </div>
        </Link>
        <Link to="gothis">
          <div className="feature column j-space-between gap-40 br-12 cursor">
            <div className="feature__icons br-12 bg-07a707">
              <FontAwesomeIcon className="feature__icon" icon={faMap} />
            </div>
            <h3 className="f-24 w-600">이래 가보이소</h3>
            <p className="w-400 c-555555">부산 테마별 추천 여행 코스 모음</p>
            <div className="width-100 c-155dfc">자세히 보기 →</div>
          </div>
        </Link>
        <div className="feature column j-space-between gap-40 br-12 cursor">
          <div className="feature__icons br-12 bg-ff2b2b">
            <FontAwesomeIcon className="feature__icon" icon={faSquareCaretRight} />
          </div>
          <h3 className="f-24 w-600">유튜바 코스</h3>
          <p className="w-400 c-555555">유튜버들이 방문한 코스와 영상 정보</p>
          <div className="width-100 c-155dfc">자세히 보기 →</div>
        </div>
      </div>
    </div>
  );
}
