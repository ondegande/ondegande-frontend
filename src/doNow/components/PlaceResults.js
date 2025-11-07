import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import "../styles/placeResults.css";

export default function PlaceResults({ place, handlePlaceClick }) {
  return (
    <div key={place.contentid} className="place bg-ffffff br-12">
      <img src={place.firstimage} alt="" className="place__image width-100" />
      <div className="place__info column gap-10">
        <div className="place__title f-18 w-600">{place.title}</div>
        <p className="place__address f-14 w-400 c-777777">{place.addr1}</p>
        <div className="map__button width-100 row j-center gap-10 bg-155dfc br-12 c-ffffff cursor">
          <FontAwesomeIcon className="c-ffffff cursor" icon={faMap} />
          <button className="f-14 w-400 c-ffffff cursor" onClick={() => handlePlaceClick(place.addr1)}>
            지도에서 보기
          </button>
        </div>
      </div>
    </div>
  );
}
