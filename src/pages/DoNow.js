import { useState, useEffect } from "react";

import SearchLocation from "../doNow/components/SearchLocation";
import LocationResults from "../doNow/components/LocationResults";
import Category from "../doNow/components/Category";
import Range from "../doNow/components/Range";
import PlaceResults from "../doNow/components/PlaceResults";
import NoPlaces from "../doNow/components/NoPlaces";

export default function DoNow() {
  const [distance, setDistance] = useState(1500);
  const [category, setCategory] = useState("sightseeing");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [places, setPlaces] = useState([]);

  const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

  const getContentTypeId = (category) => {
    switch (category) {
      case "food":
        return "39";
      case "sightseeing":
        return "12";
      case "accommodation":
        return "32";
      default:
        return "12";
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  };

  useEffect(() => {
    const loadKakaoMap = () =>
      new Promise((resolve, reject) => {
        if (window.kakao?.maps) return resolve();
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`;
        script.onload = () => {
          window.kakao.maps.load(() => {
            resolve();
          });
        };
        script.onerror = () => reject(new Error("Kakao Maps API 스크립트 로드 오류"));
        document.head.appendChild(script);
      });

    loadKakaoMap()
      .then(() => {
        getCurrentLocation();
      })
      .catch((error) => console.error(error));
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedLocation({ lat: latitude, lng: longitude });
          setSearchResults([]);

          if (window.kakao && window.kakao.maps) {
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.coord2Address(longitude, latitude, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const address = result[0].address.address_name;
                setLocation(address);
              }
            });
          }
        },
        (error) => {
          console.error("위치를 가져오는 중 오류 발생:", error);
          if (error.code === error.PERMISSION_DENIED) {
            console.log("위치 불러오기를 허용하지 않았습니다.");
          }
        }
      );
    } else {
      alert("현재 위치를 지원하지 않는 브라우저입니다.");
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    const proxyUrl = "https://busan-ondegande.netlify.app/.netlify/functions/proxy";
    const fetchPlaces = async (lat, lng) => {
      const apiUrl = `https://apis.data.go.kr/B551011/KorService2/locationBasedList2?serviceKey=${SERVICE_KEY}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=ondegande&_type=json&arrange=A&mapX=${lng}&mapY=${lat}&radius=${distance}&contentTypeId=${getContentTypeId(
        category
      )}`;

      try {
        const response = await fetch(`${proxyUrl}?url=${encodeURIComponent(apiUrl)}`);
        const data = await response.json();
        const items = data?.response?.body?.items?.item || [];

        const filteredItems = items
          .filter((item) => item.firstimage)
          .map((item) => {
            return {
              ...item,
              firstimage: item.firstimage.replace(/^http:/, "https:"),
            };
          });

        setPlaces(filteredItems);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    if (selectedLocation) {
      fetchPlaces(selectedLocation.lat, selectedLocation.lng);
    }
  }, [selectedLocation, category, distance, SERVICE_KEY]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDistanceChange = (event) => {
    const newDistance = event.target.value;
    debounce(() => setDistance(newDistance), 500)();
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const handleSearch = () => {
    if (!location.trim()) {
      console.error("주소를 입력해주세요.");
      return;
    }

    if (!window.kakao) {
      console.error("Kakao Map API가 로드되지 않았습니다.");
      return;
    }

    const kakao = window.kakao;
    const geocoder = new kakao.maps.services.Geocoder();

    document.getElementById("places").style = "display: block";

    geocoder.addressSearch(location, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        if (Array.isArray(result) && result.length > 0) {
          setSearchResults(result.slice(0, 5));
          const { y, x } = result[0];
          setSelectedLocation({ lat: y, lng: x });
        } else {
          setSearchResults([]);
        }
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        searchNearbyPlaces(location);
      } else {
        console.error("위치를 찾을 수 없습니다. 상태:", status, "입력된 주소:", location);
        setSearchResults([]);
      }
    });
  };

  const searchNearbyPlaces = (query) => {
    if (!window.kakao || !window.kakao.maps) return;

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(query, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setSearchResults(data.slice(0, 5));
      } else {
        setSearchResults([]);
      }
    });
  };

  const handleSelectLocation = (lat, lng, address) => {
    setSelectedLocation({ lat, lng });
    setLocation(address);
    document.getElementById("places").style = "display: none";
  };

  const handlePlaceClick = async (placeName) => {
    window.open(`https://map.kakao.com/link/search/${placeName}`, "_blank");
  };

  return (
    <div className="default-padding column a-center gap-32">
      <div className="width-100 column gap-10">
        <h1 className="f-36 w-600">주변 놀거리 찾기</h1>
        <h2 className="f-18 w-400 c-555555">주변의 맛집, 관광지, 숙소를 쉽게 찾아보세요</h2>
      </div>

      <div className="donow__locate width-100 column">
        <SearchLocation
          location={location}
          handleLocationChange={handleLocationChange}
          handleSearch={handleSearch}
          getCurrentLocation={getCurrentLocation}
        />

        <LocationResults searchResults={searchResults} handleSelectLocation={handleSelectLocation} />
      </div>

      <div className="category width-100 row j-space-between a-center bg-ffffff br-12">
        <Category category={category} handleCategoryClick={handleCategoryClick} />

        <Range distance={distance} handleDistanceChange={handleDistanceChange} />
      </div>

      <div className="width-100 column gap-20">
        <h1 className="f-24 w-600">주변 관광지 ({places.length}개)</h1>
        <div className="place__result grid-3 gap-20">
          {places.length > 0 ? (
            places.map((place) => (
              <PlaceResults key={place.contentid} place={place} handlePlaceClick={handlePlaceClick} />
            ))
          ) : (
            <NoPlaces location={location} selectedLocation={selectedLocation} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}
