import React, { useState, useEffect } from "react";
import styles from './Search.module.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import BottomBar from '../Main/BottomBar';
import fastfoodIcon from '../assets/fastfoodIcon.png';
import cafeIcon from '../assets/cafeIcon.png';
import restaurantIcon from '../assets/restaurantIcon.png';
import fruitIcon from '../assets/fruitIcon.png';
import marketIcon from '../assets/marketIcon.png';
import petIcon from '../assets/petIcon.png';
import paikdabang from '../assets/paikdabang.png';
import fruitstore from '../assets/fruitstore.png';
import hamberger from '../assets/hamberger.png';
import dunkin from '../assets/dunkin.png';
import bagette from '../assets/bagette.png';
import waffleuniversity from '../assets/waffleuniversity.png';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className={styles.searchbar}>
    <BiSearchAlt className={styles.searchIcon} />
    <input
      type="text"
      className={styles.searchbarInput}
      placeholder="검색어를 입력하세요"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

const SearchIcons = () => (
  <div className={styles.searchIcons}>
    <div className={styles.searchIcon}><img src={fastfoodIcon} alt="패스트푸드" /><br /><span>패스트푸드</span></div>
    <div className={styles.searchIcon}><img src={cafeIcon} alt="카페" /><br /><span>카페</span></div>
    <div className={styles.searchIcon}><img src={restaurantIcon} alt="음식점" /><br /><span>음식점</span></div>
    <div className={styles.searchIcon}><img src={fruitIcon} alt="과일 채소" /><br /><span>과일 채소</span></div>
    <div className={styles.searchIcon}><img src={marketIcon} alt="마트" /><br /><span>마트</span></div>
    <div className={styles.searchIcon}><img src={petIcon} alt="반려동물" /><br /><span>반려동물</span></div>
  </div>
);

const SearchLocation = () => {
  useEffect(() => {
    const func_1 = () => {
      const mapContainer = document.getElementById('map');
      const mapOption = { 
        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
        level: 3
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const marker = new window.kakao.maps.Marker({
        position: map.getCenter()
      });

      marker.setMap(map);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            marker.setPosition(new window.kakao.maps.LatLng(userLat, userLng));
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

  return (
    <div className={styles.searchLocation}>
      <div className={styles.map} id="map" style={{ width: "328px", height: "150px" }}></div>
      <button className={styles.locationButton} style={{width:"328px",height:"41px"}}>현위치 설정하기</button>
    </div>
  );
};
const StoreList = ({ title, stores, handleMore, showBookmark = false }) => (
  <div className={styles.searchfullcontents}>
    <div className={styles.searchdetail}>
      <p className={styles.title}>{title}</p>
      <p className={styles.more} onClick={handleMore}>더보기</p>
    </div>
    {stores.map((store, index) => (
      <div key={index} className={styles.detailbutton}>
        <button className={styles.detail}>
          <img src={store.image} alt={store.name} /><br />
          <div className={styles.detailtext}>
            <p className={styles.storename}>{store.name}</p>
            {store.description && <p className={styles.storedetail}>{store.description}</p>}
          </div>
          {showBookmark && <div className={styles.bookmark}><BsBookmark /></div>}
        </button>
      </div>
    ))}
  </div>
);

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate ();

  const handleMore = () => {
    navigate('/Statuspost');
  };

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

  const famousstore =[
    {
      name:'던킨도넛츠',
      image:dunkin
    },
    {
      name:'파리바게트',
      image:bagette
    },
    {
      name:'와플대학',
      image:waffleuniversity
    }
  ];

  return (
    <div className={styles.search}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchIcons />
      <SearchLocation />
      <StoreList title="가장 가까운" stores      ={storepost} handleMore={handleMore} />
      <StoreList title="가장 인기있는" stores={famousstore} handleMore={handleMore} showBookmark />
      <div className={styles.bottom_bar}>
        <BottomBar />
      </div>
    </div>
  );
};

export default Search;

