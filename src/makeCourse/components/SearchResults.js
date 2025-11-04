import "../styles/searchResults.css";

export default function SearchResults({ places, addCourse }) {
  return (
    <div className="search__result column gap-20 bg-ffffff br-12">
      <h1 className="f-18">검색 결과</h1>
      <div className="search__result__section row j-center a-center">
        {places && places.length > 0 ? (
          places.map((place, index) => (
            <div
              className={`result__place row a-center ${index !== places.length - 1 ? "place__border" : ""}`}
              key={index}
            >
              <div className="place__section column gap-4">
                <div className="f-18 w-600">{place.place_name}</div>
                <div className="f-14 w-400 c-777777">{place.road_address_name || "주소 없음"}</div>
              </div>
              <button className="plus__button bg-155dfc br-100 c-ffffff cursor" onClick={() => addCourse(place)}>
                +
              </button>
            </div>
          ))
        ) : (
          <p className="c-777777 w-400">검색 결과가 없습니다. 장소를 검색해보세요.</p>
        )}
      </div>
    </div>
  );
}
