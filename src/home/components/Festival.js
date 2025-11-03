import useFestival from "../hooks/useFestival";
import "../styles/festival.css";

export default function Festival() {
  const festivals = useFestival();
  const cleanTitle = (title) => (title ? title.replace(/\(.*?\)/, "").trim() : "");

  return (
    <div className="festival column a-center gap-20 bg-eff6ff ">
      <h1 className="f-36 w-600">축제 정보</h1>
      <h2 className="f-18 w-400">현재 부산에서 진행 중인 축제들</h2>
      <div className="festival__features grid-3 gap-24">
        {festivals.map((festival, index) => (
          <div key={index} className="festival__feature column j-space-between gap-24 bg-ffffff br-12">
            {festival.MAIN_IMG_NORMAL && (
              <img className="festival__img" src={festival.MAIN_IMG_NORMAL} alt={festival.FESTIVAL_NM} />
            )}
            <div className="festival__text column gap-8">
              <h3 className="f-20 w-600">{cleanTitle(festival.MAIN_TITLE)}</h3>
              <p className="w-400 c-555555">{festival.USAGE_DAY_WEEK_AND_TIME}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
