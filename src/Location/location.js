import React, { useEffect, useState } from "react";
import '../Location/location.css';

const Location = () => {
    const [state, setState] = useState({
        center: { lat: 37.365264512305174, lng: 127.10676860117488 },
        isPanto: false,
        userLocation: null
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
            center: new window.kakao.maps.LatLng(initialLat, initialLng),
            level: 3
        };

        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(initialLat, initialLng);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            draggable: true
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            marker.setPosition(mouseEvent.latLng);
        });

        window.kakao.maps.event.addListener(marker, 'dragend', function () {
            map.setCenter(marker.getPosition());
        });
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    setState(prevState => ({
                        ...prevState,
                        userLocation: { lat: userLat, lng: userLng }
                    }));
                    getAddressFromCoordinates(userLat, userLng);
                },
                (error) => {
                    console.error("사용자 위치를 가져오는 중 오류 발생:", error.message);
                }
            );
        } else {
            console.error("이 브라우저에서는 지오로케이션을 지원하지 않습니다.");
        }
    };

    const getAddressFromCoordinates = (lat, lng) => {
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.display_name) {
                    const address = data.display_name;
                    setState(prevState => ({
                        ...prevState,
                        userLocation: { lat, lng, address }
                    }));
                } else {
                    console.error("주소를 찾을 수 없습니다.");
                }
            })
            .catch(error => {
                console.error("주소를 가져오는 중 오류 발생:", error.message);
            });
    };

    return (
        <div className="location">
            <p>회원가입</p><hr />
            <div className="map" id="map" style={{ width: "328px", height: "536px" }}></div>
            <button onClick={getUserLocation} className='get_location'>현재 위치</button>
            {state.userLocation && (
                <>
                    <div className="get_adress">
                        <p>{state.userLocation.address}</p>
                    </div>
                </>
            )}
            <button className="location_storage">내 위치 저장</button>
        </div>
    );
}

export default Location;