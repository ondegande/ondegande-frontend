import "../styles/locationSelect.css";

export default function LocationSelect({ regions, selectedRegions, handleRegionToggle }) {
  return (
    <div className="location__select column gap-20 bg-ffffff br-12">
      <div className="row a-center gap-10">
        <p className="p__number bg-155dfc br-100 f-14 w-600 c-ffffff">1</p>
        <h3 className="f-18">지역 선택</h3>
      </div>
      <div className="grid-3 gap-10">
        {regions.map((region) => (
          <button
            key={region}
            className={`location__select__button bg-f6f3f4 br-12 w-400 cursor ${
              selectedRegions.includes(region) ? "selected" : ""
            }`}
            onClick={() => handleRegionToggle(region)}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
