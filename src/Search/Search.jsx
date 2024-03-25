import React, { useEffect, useState } from "react";
import '../Search/Search.css';
import fastfoodIcon from '../assets/fastfoodIcon.png';
import cafeIcon from '../assets/cafeIcon.png';
import restaurantIcon from '../assets/restaurantIcon.png';
import fruitIcon from '../assets/fruitIcon.png';
import marketIcon from '../assets/marketIcon.png';
import petIcon from '../assets/petIcon.png';

const Search = () => {
  useEffect(() => {
    initializeMap();
  }, []);

  const initializeMap = () => {
    const container = document.getElementById('map');
    const initialLat = 37.365264512305174;
    const initialLng = 127.10676860117488;
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
      // You can add logic here to handle marker position changes
    });

    window.kakao.maps.event.addListener(marker, 'dragend', function () {
      // You can add logic here to handle marker drag end
    });
  };

  return (
    <div className="search">
      <div className="searchbar">검색창</div><br />
      <div className="searchIcons">
        <div className="searchIcon"> <img src={fastfoodIcon} ></img> <br /><span>패스트푸드</span></div>
        <div className="searchIcon"><img src={cafeIcon}></img><br /><span>카페</span></div>
        <div className="searchIcon"><img src={restaurantIcon}></img><br /><span>음식점</span></div>
        <div className="searchIcon"><img src={fruitIcon}></img><br /><span>과일 채소</span></div>
        <div className="searchIcon"><img src={marketIcon}></img><br /><span>마트</span></div>
        <div className="searchIcon"><img src={petIcon}></img><br /><span>반려동물</span></div>
      </div>
      <div className="searchLocation">
        <div className="map" id="map" style={{ width: "328px", height: "150px" }}></div>
        <button className="locationButton" style={{width:"328px",height:"41px"}}>현위치 설정하기</button>
      </div>
    </div>
  );
};

export default Search;
