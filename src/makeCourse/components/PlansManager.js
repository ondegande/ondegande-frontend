import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faCopy, faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import "../styles/plansManager.css";

export default function PlansManager({ days, addDay, clipboardBtnRef, toggleMapVisibility, isMapVisible }) {
  const generateShareText = useCallback(
    () =>
      days
        .map(
          (day) =>
            `${day.title}\n${day.courses
              .map((c) => `${c.order}. ${c.name}\n주소: ${c.road_address_name || "주소 없음"}`)
              .join("\n")}`
        )
        .join("\n\n"),
    [days]
  );

  return (
    <div className="plan__buttons column gap-16 bg-ffffff br-12">
      <h3 className="f-18">일정 관리</h3>
      <div className="plan__buttons__section column gap-10">
        <button className="buttons__day row j-center a-center bg-155dfc br-12 c-ffffff cursor" onClick={addDay}>
          <FontAwesomeIcon className="day__icon c-000000" icon={faCalendarPlus} />
          Day 추가
        </button>
        <button
          className="buttons__clip row j-center a-center c-155dfc bg-ffffff br-12 f-14 w-400 cursor"
          ref={clipboardBtnRef}
          data-clipboard-text={generateShareText()}
        >
          <FontAwesomeIcon className="clip__icon" icon={faCopy} />
          복사
        </button>
        <button
          className="buttons__move row j-center a-center bg-f9f8f8 br-12 f-14 w-400 cursor"
          onClick={toggleMapVisibility}
        >
          <FontAwesomeIcon className="move__icon" icon={isMapVisible ? faEyeSlash : faEye} />
          {isMapVisible ? "동선 숨기기" : "동선 확인"}
        </button>
      </div>
    </div>
  );
}
