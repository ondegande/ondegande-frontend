import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Youtuber() {
  return (
    <div className="default-padding column j-center">
      <div className="column j-center a-center gap-16">
        <FontAwesomeIcon className="f-48 c-ff2b2b" icon={faCircleExclamation} />
        <h1 className="f-48 w-600">유튜바 코스</h1>
        <p className="f-20 w-400 c-777777">서비스 중단 안내</p>

        <div className="youtuber column gap-20 width-100 bg-ffffff br-12">
          <div className="row gap-10">
            <FontAwesomeIcon className="c-ff2b2b" icon={faXmark} />
            <div className="column gap-10">
              <h3 className="f-18">서비스가 중단되었습니다</h3>
              <h4 className="w-400 c-777777">유튜바 코스 서비스는 2024년 말부로 더 이상 제공되지 않습니다.</h4>
            </div>
          </div>
          <div className="divLine"></div>

          <div className="column gap-16">
            <h3 className="f-18">대신 이용할 수 있는 서비스</h3>
            <div className="row gap-10">
              <div className="c-155dfc">→</div>
              <h4>코스 짜보이소</h4>
              <p className="w-400 c-777777">- 일정과 장소를 직접 추가하여 나만의 코스 제작</p>
            </div>
            <div className="row gap-10">
              <div className="c-155dfc">→</div>
              <h4>인자 머하노?</h4>
              <p className="w-400 c-777777">- 내 주변 관광지, 맛집, 숙소 탐색</p>
            </div>
            <div className="row gap-10">
              <div className="c-155dfc">→</div>
              <h4>코스 짜보이소</h4>
              <p className="w-400 c-777777">- 부산의 추천 코스 확인, 랜덤 코스를 통한 P의 여행</p>
            </div>
          </div>

          <div className="youtuber__buttons row gap-10">
            <Link
              to="/gothis"
              className="recommend__button row j-center a-center width-100 bg-155dfc br-12 c-ffffff cursor flex justify-center items-center"
            >
              부산 여행 추천 보러가기
            </Link>

            <Link
              to="/"
              className="home__button row j-center a-center width-100 bg-f9f8f8 br-12 cursor flex justify-center items-center"
            >
              홈으로 돌아가기
            </Link>
          </div>
          <div className="divLine"></div>

          <div className="column gap-16">
            <h3 className="f-18">자주 묻는 질문</h3>

            <div className="column gap-8">
              <h4 className="w-400">Q. 유튜바 코스는 왜 중단되었나요?</h4>
              <p className="f-14 w-400 c-777777">
                유튜바 코스 기능은 백엔드 API 서버 종료로 인해 더 이상 제공되지 않습니다.
              </p>
            </div>
            <div className="column gap-8">
              <h4 className="w-400">Q. 언제 새로운 기능이 추가되나요?</h4>
              <p className="f-14 w-400 c-777777">현재로서는 추가 기능 계획은 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
