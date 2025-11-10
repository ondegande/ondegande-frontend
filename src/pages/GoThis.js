import { useState } from "react";

import LocationSelect from "../goThis/components/LocationSelect";
import CourseButton from "../goThis/components/CourseButton";
import ThemeSelect from "../goThis/components/ThemeSelect";
import NoCourse from "../goThis/components/NoCourse";
import CourseResults from "../goThis/components/CourseResults";
import Popup from "../goThis/components/Popup";

import { regions } from "../goThis/data/regions";
import { themes } from "../goThis/data/themes";
import { themeToSEQ } from "../goThis/data/themeToSEQ";

function GoThis() {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [results, setResults] = useState([]);
  const [popup, setPopup] = useState(null);
  const [randomCourse, setRandomCourse] = useState(null);

  const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

  const handleRegionToggle = (region) => {
    if (region === "전체") {
      setSelectedRegions(selectedRegions.length === regions.length - 1 ? [] : regions.slice(1));
    } else {
      setSelectedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]));
    }
  };

  const handleThemeToggle = (theme) => {
    if (theme === "전체") {
      setSelectedThemes(selectedThemes.length === themes.length - 1 ? [] : themes.slice(1));
    } else {
      setSelectedThemes((prev) => (prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]));
    }
  };

  const fetchResults = async () => {
    if (selectedRegions.length === 0) {
      alert("지역을 선택해주세요.");
      return;
    }

    if (selectedThemes.length === 0) {
      alert("테마를 선택해주세요.");
      return;
    }

    const urls = [
      `https://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=106`,
      `https://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${SERVICE_KEY}&pageNo=2&numOfRows=106`,
    ];

    const fetchData = async (url) => {
      const response = await fetch(url);
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "application/xml");
      return Array.from(xmlDoc.getElementsByTagName("item"));
    };

    const page1Items = await fetchData(urls[0]);
    const page2Items = await fetchData(urls[1]);

    const allItems = [...page1Items, ...page2Items];

    const resultsArray = allItems.map((item) => {
      const ucSeq = item.getElementsByTagName("UC_SEQ")[0]?.textContent || "";
      const mainTitle = item.getElementsByTagName("MAIN_TITLE")[0]?.textContent || "";
      const gugunNm = item.getElementsByTagName("GUGUN_NM")[0]?.textContent || "";
      const trfcInfo = item.getElementsByTagName("TRFC_INFO")[0]?.textContent || "";
      const hldyInfo = item.getElementsByTagName("HLDY_INFO")[0]?.textContent || "";
      const mainImgNormal = item.getElementsByTagName("MAIN_IMG_NORMAL")[0]?.textContent || "";
      const itemCntnts = item.getElementsByTagName("ITEMCNTNTS")[0]?.textContent || "";
      const subTitle = item.getElementsByTagName("TITLE")[0]?.textContent || "";

      return { ucSeq, mainTitle, gugunNm, trfcInfo, hldyInfo, mainImgNormal, itemCntnts, subTitle };
    });

    const filteredResults = resultsArray.filter(
      (result) =>
        selectedThemes.some((theme) => themeToSEQ[theme].includes(result.ucSeq)) &&
        selectedRegions.includes(result.gugunNm)
    );

    setResults(filteredResults);
    setRandomCourse(null);
  };

  const handleSubmit = () => {
    fetchResults();
  };

  const handleRandomCourse = () => {
    if (selectedRegions.length === 0) {
      alert("지역을 선택해주세요.");
      return;
    }

    if (selectedThemes.length === 0) {
      alert("테마를 선택해주세요.");
      return;
    }

    if (results.length > 0) {
      const randomIndex = Math.floor(Math.random() * results.length);
      setRandomCourse(results[randomIndex]);
    } else {
      alert("먼저 모든 코스를 확인해주세요.");
    }
  };

  const handleImagePopup = (imgUrl, textContent, mainTitle, subTitle) => {
    setPopup({ imgUrl, textContent, mainTitle, subTitle });
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  const cleanTitle = (title) => {
    return title.replace(/\(.*?\)/, "").trim();
  };

  return (
    <div className="default-padding column gap-32">
      <div className="column gap-10">
        <h1 className="f-36 w-600">부산 여행 코스 추천</h1>
        <h2 className="f-18 w-400 c-555555">나만의 맞춤 여행 코스를 찾아보세요</h2>
      </div>

      <div className="grid-3 gap-20">
        <LocationSelect regions={regions} selectedRegions={selectedRegions} handleRegionToggle={handleRegionToggle} />

        <CourseButton handleSubmit={handleSubmit} handleRandomCourse={handleRandomCourse} />

        <ThemeSelect themes={themes} selectedThemes={selectedThemes} handleThemeToggle={handleThemeToggle} />
      </div>

      {results.length === 0 && <NoCourse />}
      <div className="grid-3 gap-20">
        {(results.length > 0 || randomCourse) &&
          (randomCourse ? [randomCourse] : results).map((result, index) => (
            <CourseResults index={index} result={result} cleanTitle={cleanTitle} handleImagePopup={handleImagePopup} />
          ))}
      </div>

      {popup && <Popup handleClosePopup={handleClosePopup} popup={popup} cleanTitle={cleanTitle} />}
    </div>
  );
}

export default GoThis;
