import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export default function Youtuber() {
  return (
    <div className="default-padding column j-center height-100">
      <div className="column j-center a-center gap-24">
        <FontAwesomeIcon className="f-36" icon={faScrewdriverWrench} />
        <h1 className="f-24 w-600">현재 유튜바 코스를 이용할 수 없습니다.</h1>
        <p className="f-18 w-400 c-777777">서버가 일시적으로 중단되어 데이터를 제공할 수 없습니다.</p>
      </div>
    </div>
  );
}
