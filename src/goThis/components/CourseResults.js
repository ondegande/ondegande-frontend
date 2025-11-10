import "../styles/courseResults.css";

export default function CourseResults({ index, result, cleanTitle, handleImagePopup }) {
  return (
    <div key={index} className="course bg-ffffff br-12">
      <img src={result.mainImgNormal} alt={result.mainTitle} className="course__main__image width-100" />
      <div className="course__info__section column gap-10">
        <div className="course__title f-18 w-600">{cleanTitle(result.mainTitle)}</div>
        <p className="course__subtitle">{result.subTitle}</p>
        <button
          className="info__button width-100 row j-center gap-10 bg-155dfc br-12 f-14 w-400 c-ffffff cursor"
          onClick={() => handleImagePopup(result.mainImgNormal, result.itemCntnts, result.mainTitle, result.subTitle)}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
}
