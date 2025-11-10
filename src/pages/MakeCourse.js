import { useState, useCallback } from "react";

import useKakaoMap from "../makeCourse/hooks/useKakaoMap";
import useDaysManager from "../makeCourse/hooks/useDaysManager";
import useClipboard from "../makeCourse/hooks/useClipboard";
import usePlacesSearch from "../makeCourse/hooks/usePlacesSearch";

import PlansManager from "../makeCourse/components/PlansManager";
import SearchPlace from "../makeCourse/components/SearchPlace";
import SearchResults from "../makeCourse/components/SearchResults";
import NoTourPlans from "../makeCourse/components/NoTourPlans";
import TourPlans from "../makeCourse/components/TourPlans";

export default function MakeCourse() {
  const [isMapVisible, setIsMapVisible] = useState(false);

  const { map } = useKakaoMap();
  const { days, dayContainerRef, addDay, deleteDay, addCourse, deleteCourse, onDragEnd } = useDaysManager();
  const { clipboardBtnRef } = useClipboard();
  const { places, searchPlaces } = usePlacesSearch(map);

  const toggleMapVisibility = useCallback(() => {
    if (days.length === 0) return alert("Day를 추가해주세요.");
    setIsMapVisible((prev) => !prev);
  }, [days]);

  return (
    <div className="default-padding column gap-32">
      <div className="column gap-10">
        <h1 className="f-36 w-600">부산 여행 코스 만들기</h1>
        <h2 className="f-18 w-400 c-555555">장소를 검색하고 나만의 완벽한 여행 일정을 만들어보세요</h2>
      </div>

      <div className="grid-3 gap-20">
        <div id="map" className="map br-12"></div>

        <PlansManager
          days={days}
          addDay={addDay}
          clipboardBtnRef={clipboardBtnRef}
          toggleMapVisibility={toggleMapVisibility}
          isMapVisible={isMapVisible}
        />

        <SearchPlace searchPlaces={searchPlaces} />

        <SearchResults places={places} addCourse={addCourse} />
      </div>

      {days.length === 0 && <NoTourPlans />}
      {days.length > 0 && (
        <TourPlans
          onDragEnd={onDragEnd}
          days={days}
          dayContainerRef={dayContainerRef}
          deleteDay={deleteDay}
          isMapVisible={isMapVisible}
          deleteCourse={deleteCourse}
        />
      )}
    </div>
  );
}
