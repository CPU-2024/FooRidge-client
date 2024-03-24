import React from 'react';
import Slide from '../Main/Slide.jsx';
import logo from '../assets/logo.png'; // 이미지 파일 경로를 맞게 수정해주세요
import about from '../assets/About.png';
import about2 from '../assets/About2.png';
import about3 from '../assets/About3.png';
import about4 from '../assets/About4.png';
import about5 from '../assets/About5.png';
import about6 from '../assets/About6.png';
import share from '../assets/share.png';
import low_price from '../assets/low price.png';
import dunkin from '../assets/dunkin.png';
import { useNavigate } from 'react-router-dom';
import BottomBar from './BottomBar';

import '../Main/Main.css';

export default function Main() {
  const navigate = useNavigate();


  const handleMore = () => {
    navigate(''); // 더보기 페이지로 이동
  };

  const stores = [
    {
      id: 1,
      name: '던킨도너츠',
      description: '도넛 나눔 합니다',
      image: {dunkin}
    },
    {
      id: 2,
      name: '파리바게트',
      description: '빵 남은 것 나눔 합니다'
    },
    {
      id: 3,
      name: '맥도날드',
      description: '햄버거 10개 나눔 합니다'
    }
  ];

  const aboutImages = [about, about2, about3, about4, about5, about6];

  return (
    <div className='main'>
      <h2>FOORIDGE</h2>
        <div className='page'>
              <div className='adver'>
                <Slide images={aboutImages} />
              </div>
              <div className='main_button'>
                <button className='share'>
                    <img src={share} alt='Share' className='mainImage' />
                    <span className='mainText'>Share</span>
                </button>
                <button className='low_price'>
                    <img src={low_price} alt='Low_Price' className='mainImage' />
                    <span className='mainText'>Low Price</span>
                </button>
              </div>
              <div className='recen'>
                  <h3>최근에 올라온 글</h3>
              </div>
              <div className='more'>
                  <h5 onClick={handleMore}>더보기</h5>
              </div>
              <div className='post'>
                {stores.map(store => (
                  <button key={store.id} className='storeButton'>
                    <div className='text'>
                      <span className='largeText'>{store.name}</span>
                      <span className='smallText'>{store.description}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className='bottom_bar'>
                    <BottomBar />
              </div>
        </div>
    </div>
  );
}



