import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import "../styles/noCourse.css";

export default function NoCourse() {
  return (
    <div className="no__courses column a-center gap-16 br-12">
      <FontAwesomeIcon className="f-48 c-9810fa" icon={faMap} />
      <h1 className="f-24 w-600">추천 코스를 확인하세요</h1>
      <p className="f-18 w-400 c-777777">원하는 지역과 테마를 선택해 코스를 확인해보세요</p>
    </div>
  );
}
