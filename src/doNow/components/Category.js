import "../styles/category.css";

export default function Category({ category, handleCategoryClick }) {
  return (
    <div className="column gap-20">
      <h1 className="f-18">카테고리</h1>
      <div className="row gap-10">
        <button
          className={`category__button br-12 f-14 w-400 cursor ${category === "sightseeing" ? "active" : ""}`}
          onClick={() => handleCategoryClick("sightseeing")}
        >
          🏛️ 관광지
        </button>
        <button
          className={`category__button br-12 f-14 w-400 cursor ${category === "food" ? "active" : ""}`}
          onClick={() => handleCategoryClick("food")}
        >
          🍽️ 맛집
        </button>
        <button
          className={`category__button br-12 f-14 w-400 cursor ${category === "accommodation" ? "active" : ""}`}
          onClick={() => handleCategoryClick("accommodation")}
        >
          🏨 숙소
        </button>
      </div>
    </div>
  );
}
