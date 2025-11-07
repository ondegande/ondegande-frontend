import "../styles/locationResults.css";

export default function LocationResults({ searchResults, handleSelectLocation }) {
  return (
    <div className="donow__search__result width-100 column bg-ffffff" id="places">
      {searchResults.length > 0 ? (
        <div className="result__list br-12">
          {searchResults.map((result, index) => (
            <div
              className={`list__place row j-space-between cursor ${
                index !== searchResults.length - 1 ? "list__border" : ""
              }`}
              key={index}
              onClick={() => handleSelectLocation(result.y, result.x, result.place_name)}
            >
              <h4 className="f-18 w-600">{result.place_name || result.address_name}</h4>
              <p className="f-14 w-400 c-777777">({result.address_name || "주소 없음"})</p>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
