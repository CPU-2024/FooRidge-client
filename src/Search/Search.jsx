import React, { useState, useEffect } from "react";
import '../Search/Search.css';
import fastfoodIcon from '../assets/fastfoodIcon.png'; import cafeIcon from '../assets/cafeIcon.png'; import restaurantIcon from '../assets/restaurantIcon.png';
import fruitIcon from '../assets/fruitIcon.png'; import marketIcon from '../assets/marketIcon.png'; import petIcon from '../assets/petIcon.png';
import paikdabang from '../assets/paikdabang.png'; import fruitstore from '../assets/fruitstore.png'; import hamberger from '../assets/hamberger.png';
import dunkin from '../assets/dunkin.png'; import bagette from '../assets/bagette.png'; import waffleuniversity from '../assets/waffleuniversity.png';
import { BiSearchAlt } from "react-icons/bi"; import { BsBookmark } from "react-icons/bs";
import BottomBar from'../Main/BottomBar';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const storepost =[
    {
      name: '푸르츠 스토어',
      description: '엄청 싱싱하지는 않지만 상태 괜찮은 딸기 10000원 판매 합니다.',
      image: fruitstore
    },
    {
      name: '빽다방',
      description: '다음주 금요일까지 30%할인 이벤트 진행합니다.',
      image: paikdabang
    },
    {
      name: '맥도날드',
      description:'햄버거 10개 나눔 합니다. 내용을 확인해주세요.',
      image: hamberger
    }
  ];

  const famousstore=[
    {
      name:'던킨도넛츠',
      image:dunkin
    },{
      name:'파리바게트',
      image:bagette
    },{
      name:'와플대학',
      image:waffleuniversity
    }
  ]
  
  useEffect(() => {
    const func_1 = () => {
      const mapContainer = document.getElementById('map');
      const mapOption = { 
        center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울의 위도와 경도 (초기값)
        level: 3
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: map.getCenter()
      });

      // 마커를 지도에 표시합니다
      marker.setMap(map);

      // 브라우저가 geolocation을 지원하는지 확인합니다
      if (navigator.geolocation) {
        // geolocation을 사용하여 현재 위치를 가져옵니다
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            // 마커의 위치를 현재 위치로 설정합니다
            marker.setPosition(new window.kakao.maps.LatLng(userLat, userLng));
            // 지도의 중심을 현재 위치로 이동합니다
            map.setCenter(new window.kakao.maps.LatLng(userLat, userLng));
          },
          (error) => {
            console.error("사용자 위치를 가져오는 중 오류 발생:", error.message);
          }
        );
      } else {
        console.error("이 브라우저에서는 지오로케이션을 지원하지 않습니다.");
      }
    };

    func_1();
  }, []);

  const shortenDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return `${description.substring(0, maxLength)}...`;
    }
  };

  return (
    <div className="search">
        <div className="searchbar">
          <BiSearchAlt className="searchIcon" />
          <input
            type="text"
            className="searchbarInput"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      
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
      <div className="searchfullcontents">
        <div className="searchdetail">
          <p className="title">가장 가까운</p>
          <p className="more">더보기</p>
        </div>
        {storepost.map((store, index) => (
          <div key={index} className="detailbutton">
            <button className="detail">
              <img src={store.image} alt={store.name} /><br />
              <div className="detailtext">
                <p className="storename">{store.name}</p>
                <p className="storedetail">{shortenDescription(store.description,15)}</p>
              </div>
            </button>
          </div>
        ))}

        <div className="searchdetail">
          <p className="title">가장 인기있는</p>
          <p className="more">더보기</p>
        </div>
        {famousstore.map((store, index) => (
          <div key={index} className="detailbutton">
            <button className="detail">
              <img src={store.image} alt={store.name} /><br />
              <div className="detailtext">
                <p className="storename">{store.name}</p>
              </div>
              <div className="bookmark"><BsBookmark /></div>
            </button>
          </div>
        ))}
        
        <div className='bottom_bar'>
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default Search;