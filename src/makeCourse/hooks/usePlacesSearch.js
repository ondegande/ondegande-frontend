import { useState, useCallback } from "react";

export default function usePlacesSearch(map) {
  const [places, setPlaces] = useState([]);
  const [markers, setMarkers] = useState([]);

  const displayMarkers = useCallback(
    (places) => {
      if (!map) return;
      markers.forEach((m) => m.setMap(null));
      const bounds = new window.kakao.maps.LatLngBounds();

      const newMarkers = places.map((place) => {
        const pos = new window.kakao.maps.LatLng(place.y, place.x);
        const marker = new window.kakao.maps.Marker({ position: pos });
        marker.setMap(map);
        bounds.extend(pos);

        window.kakao.maps.event.addListener(marker, "click", () => {
          map.setCenter(pos);
        });
        return marker;
      });

      setMarkers(newMarkers);
      map.setBounds(bounds);
    },
    [map, markers]
  );

  const searchPlaces = useCallback(() => {
    if (!map || !window.kakao?.maps?.services) return;
    const keyword = document.getElementById("keyword").value.trim();
    if (!keyword) return alert("검색어를 입력해주세요.");

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const results = data.slice(0, 5);
        setPlaces(results);
        displayMarkers(results);
      } else {
        alert("검색 결과가 없습니다.");
      }
    });
  }, [map, displayMarkers]);

  return { places, searchPlaces, markers };
}
