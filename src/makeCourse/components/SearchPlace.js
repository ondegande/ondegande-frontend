import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import "../styles/searchPlace.css";

export default function SearchPlace({ searchPlaces }) {
  return (
    <div className="search column gap-20 bg-ffffff br-12">
      <h1 className="f-18">장소 검색</h1>
      <div className="row gap-10">
        <input
          type="text"
          id="keyword"
          className="search__input br-12"
          placeholder="카페, 식당, 관광지 등을 검색하세요."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchPlaces();
            }
          }}
        />
        <button
          className="search__button row j-center a-center gap-4 bg-155dfc br-12 c-ffffff f-14 w-400 cursor"
          onClick={searchPlaces}
        >
          검색
          <FontAwesomeIcon className="searchplace__icon" icon={faCircleRight} />
        </button>
      </div>
    </div>
  );
}
