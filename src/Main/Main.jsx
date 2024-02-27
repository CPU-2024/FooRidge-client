import React from 'react';
import logo from '../assets/logo.png'; // 이미지 파일 경로를 맞게 수정해주세요
import about from '../assets/About.png';
import share from '../assets/share.png';
import low_price from '../assets/low price.png';
import dunkin from '../assets/dunkin.png';
import bagette from '../assets/bagette.png';
import hamberger from '../assets/hamberger.png';
import home from '../assets/carbon_home.png';
import search from '../assets/tabler_search.png';
import plus from '../assets/plus.png';
import chat from '../assets/chat.png';
import profile from '../assets/profile.png';
import { useNavigate } from 'react-router-dom';
import '../Main/Main.css';


export default function Main() {
  const navigate = useNavigate();

  const handleMore = () => {
    navigate(''); // 회원가입 페이지로 이동
  };

  return (
    <div>
      <h2>FOORIDGE</h2>
        <div className='page'>
              <div className='adver'>
                <About />
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
                <button className='dunkinButton'>
                  <img src={dunkin} alt='Bagette' className='buttonImage' />
                  <div className='text'>
                    <span className='largeText'>던킨도너츠</span>
                    <span className='smallText'>도넛 나눔 합니다</span>
                  </div>
                </button>
                <button className='bagetteButton'>
                  <img src={bagette} alt='Bagette' className='buttonImage' />
                  <div className='text'>
                    <span className='largeText'>파리바게트</span>
                    <span className='smallText'>빵 남은 것 나눔 합니다</span>
                  </div>
                </button>
                <button className='hambergerButton'>
                  <img src={hamberger} alt='Hamberger' className='buttonImage' />
                  <div className='text'>
                    <span className='largeText'>맥도날드</span>
                    <span className='smallText'>햄버거 10개 나눔 합니다</span>
                  </div>
                </button>
              </div>
              <div className='bottom_bar'>
                  <img src={home} alt="" />
                  <img src={search} alt="" />
                  <img src={plus} alt="" />
                  <img src={chat} alt="" />
                  <img src={profile} alt="" />
              </div>
        </div>
    </div>
  );
}

function About() {
  return (
    <div className='About'>
      {/* 이미지를 추가합니다 */}
      <img src={about} alt="About" />
    </div>
  );
}

