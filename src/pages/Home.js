import { useEffect, useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCompass, faMap, faSquareCaretRight } from "@fortawesome/free-regular-svg-icons";
import Hero from "../components/Hero";
import "../styles/Home.css";

const API_URL = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr";
const API_KEY = process.env.REACT_APP_SERVICE_KEY;

const monthFestivals = {
  1: [440, 449, 2136],
  2: [440, 449, 502, 503],
  3: [497, 499],
  4: [403, 441, 523, 1432],
  5: [329, 403, 404, 405, 406, 442, 1432, 2373],
  6: [329, 330, 807, 2368],
  7: [253, 1705, 1897, 1961],
  8: [71, 1698, 1699, 1705, 1807, 1961],
  9: [427, 470, 500, 524, 1694, 1699, 1705, 1961],
  10: [331, 407, 411, 414, 427, 1705],
  11: [395, 427],
  12: [440],
};

export default function Home() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    const currentMonth = moment().month() + 1;

    async function fetchFestivals() {
      try {
        const response = await fetch(`${API_URL}?serviceKey=${API_KEY}&pageNo=1&numOfRows=38&resultType=json`);
        const data = await response.json();

        const currentFestivals = data?.getFestivalKr?.item;
        if (!currentFestivals) return;

        const currentMonthFestivals = monthFestivals[currentMonth].map(String);
        const filteredFestivals = currentFestivals.filter((festival) =>
          currentMonthFestivals.includes(String(festival.UC_SEQ))
        );

        setFestivals(filteredFestivals);
      } catch (error) {
        console.error("Error fetching festival data:", error);
      }
    }

    fetchFestivals();
  }, []);

  const cleanTitle = (title) => (title ? title.replace(/\(.*?\)/, "").trim() : "");

  return (
    <div className="home">
      <Hero />

      <div className="home__guide">
        <h1 className="home__title">부산 여행 플래닝</h1>
        <h2 className="home__subtitle">당신의 여행 스타일에 맞춘 완벽한 가이드</h2>
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

      <div className="home__festival">
        <h1 className="home__title">축제 정보</h1>
        <h2 className="home__subtitle">현재 부산에서 진행 중인 축제들</h2>
        <div className="home__festival__features">
          {festivals.map((festival, index) => (
            <div key={index} className="festival__features__feature">
              {festival.MAIN_IMG_NORMAL && (
                <img className="features__feature__img" src={festival.MAIN_IMG_NORMAL} alt={festival.FESTIVAL_NM} />
              )}
              <div className="features__feature__txt">
                <h3 className="features__feature__title">{cleanTitle(festival.MAIN_TITLE)}</h3>
                <p className="features__feature__subtitle">{festival.USAGE_DAY_WEEK_AND_TIME}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
