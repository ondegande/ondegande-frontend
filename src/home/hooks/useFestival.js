import { useEffect, useState } from "react";
import moment from "moment";

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
export default function useFestival() {
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

  return festivals;
}
