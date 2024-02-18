/*global kakao*/
import { useEffect, useState } from "react";
import '../Location/location.css';

const Location = () => {
    const [state, setState] = useState({
        center: { lat: 37.365264512305174, lng: 127.10676860117488 },
        isPanto: false,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    initializeMap(userLat, userLng);
                },
                (error) => {
                    console.error("사용자 위치를 가져오는 중 오류 발생:", error.message);
                    initializeMap(state.center.lat, state.center.lng);
                }
            );
        } else {
            console.error("이 브라우저에서는 지오로케이션을 지원하지 않습니다.");
            initializeMap(state.center.lat, state.center.lng);
        }
    }, [state.center.lat, state.center.lng]);

    const initializeMap = (initialLat, initialLng) => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(initialLat, initialLng), // Use window.kakao.maps.LatLng
            level: 5
        };

        const map = new window.kakao.maps.Map(container, options); // Use window.kakao.maps.Map
        const markerPosition = new window.kakao.maps.LatLng(initialLat, initialLng); // Use window.kakao.maps.LatLng
        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            draggable: true
        });
        marker.setMap(map);

        // 클릭 이벤트 리스너 추가
        window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            // 클릭한 좌표로 마커의 위치 업데이트
            marker.setPosition(mouseEvent.latLng);
        });

        // 드래그 이벤트 리스너 추가
        window.kakao.maps.event.addListener(marker, 'dragend', function () {
            // 마커의 새로운 위치로 지도 중심 이동
            map.setCenter(marker.getPosition());
        });
    };

    return (
        <div className="location">
            <p>회원가입</p><hr />
            <div className="map" id="map" style={{ width: "328px", height: "536px" }}></div>
        </div>
    );
}

export default Location;