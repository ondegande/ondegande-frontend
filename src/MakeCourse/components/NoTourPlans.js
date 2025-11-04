import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import "../styles/noTourPlans.css";

export default function NoTourPlans() {
  return (
    <div className="plans column a-center gap-16 br-12">
      <FontAwesomeIcon className="f-48 c-155dfc" icon={faSquarePlus} />
      <h1 className="f-24 w-600">여행 일정을 시작하세요</h1>
      <p className="f-18 w-400 c-777777">일정 관리의 "Day 추가" 버튼을 클릭하여 첫 번째 날을 만들어보세요</p>
    </div>
  );
}
