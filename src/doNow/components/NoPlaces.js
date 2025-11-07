import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import "../styles/noPlaces.css";

export default function NoPlaces({ location, selectedLocation, category }) {
  return (
    <div className="no__place bg-ffffff br-12">
      {location.trim() === "" ? (
        <div className="column a-center gap-20">
          <FontAwesomeIcon className="search__icon c-777777" icon={faCompass} />
          <h4 className="f-24 w-600">위치를 선택해주세요</h4>
          <p className="f-18 w-400 c-555555">위의 검색창에서 위치를 입력하거나 현재위치 버튼을 클릭하세요</p>
        </div>
      ) : (
        <div className="column a-center gap-20">
          <h4 className="f-24 w-600">
            {selectedLocation &&
              (category === "sightseeing"
                ? "주변 관광지가 없습니다."
                : category === "food"
                ? "주변 맛집이 없습니다."
                : "주변 숙소가 없습니다.")}
          </h4>
          <p className="f-18 w-400 c-555555">위의 검색창에서 다른 위치를 입력해주세요</p>
        </div>
      )}
    </div>
  );
}
