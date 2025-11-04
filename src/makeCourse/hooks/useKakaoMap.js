import { useEffect, useState } from "react";

export default function useKakaoMap() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadKakaoMap = () =>
      new Promise((resolve, reject) => {
        if (window.kakao?.maps) return resolve();
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`;
        script.onload = () => (window.kakao?.maps ? resolve() : reject("Kakao Maps API 로드 실패"));
        script.onerror = () => reject(new Error("Kakao Maps API 스크립트 로드 오류"));
        document.head.appendChild(script);
      });

    const debounce = (func, wait) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
      };
    };

    const initMap = () => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(35.1796, 129.0756),
        level: 5,
      };
      const mapObj = new window.kakao.maps.Map(container, options);

      setMap(mapObj);

      const handleResize = debounce(() => {
        mapObj.relayout();
        mapObj.setCenter(new window.kakao.maps.LatLng(35.1796, 129.0756));
      }, 200);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    };

    loadKakaoMap()
      .then(() => window.kakao.maps.load(initMap))
      .catch((err) => alert(err));
  }, []);

  return { map };
}
