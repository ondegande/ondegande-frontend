import "../styles/popup.css";

export default function Popup({ handleClosePopup, popup, cleanTitle }) {
  return (
    <div className="popup row j-center a-center" onClick={handleClosePopup}>
      <div className="popup__content column bg-ffffff br-12" onClick={(e) => e.stopPropagation()}>
        <div className="popup__top row j-space-between a-center bg-ffffff">
          <h1 className="f-24">상세 정보</h1>
          <button className="popup__close f-24 cursor" onClick={handleClosePopup}>
            x
          </button>
        </div>

        <div className="popup__bottom column gap-32">
          <img src={popup.imgUrl} alt="popup-image" className="width-100 br-12" />
          <div className="column gap-10">
            <h1 className="f-24 w-600">{cleanTitle(popup.mainTitle)}</h1>
            <h2 className="f-18 w-400 c-777777">{popup.subTitle}</h2>
          </div>
          <div className="popup__text w-400">
            <div dangerouslySetInnerHTML={{ __html: popup.textContent }} />
          </div>
        </div>
      </div>
    </div>
  );
}
