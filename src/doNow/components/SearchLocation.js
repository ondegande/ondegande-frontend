import "../styles/searchLocation.css";

export default function SearchLocation({ location, handleLocationChange, handleSearch, getCurrentLocation }) {
  return (
    <div className="donow__search row gap-10 bg-ffffff br-12">
      <input
        type="text"
        placeholder="위치를 입력하세요."
        value={location}
        onChange={handleLocationChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="donow__input br-12 f-14"
      />
      <button onClick={getCurrentLocation} className="current__button br-12 f-14 w-400 cursor">
        현위치
      </button>
      <button onClick={handleSearch} className="place__button bg-155dfc br-12 f-14 w-400 c-ffffff cursor">
        검색
      </button>
    </div>
  );
}
