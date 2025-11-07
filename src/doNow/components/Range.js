import "../styles/range.css";

export default function Range({ distance, handleDistanceChange }) {
  return (
    <div className="range column gap-20">
      <h1 className="f-18" htmlFor="distance">
        검색 범위: {distance}m
      </h1>

      <input
        id="distance"
        type="range"
        min="500"
        max="2500"
        step="100"
        value={distance}
        onChange={handleDistanceChange}
        className="range__slider"
      />
      <div className="row j-space-between">
        <div className="f-14 w-300 c-777777">500m</div>
        <div className="f-14 w-300 c-777777">2.5km</div>
      </div>
    </div>
  );
}
