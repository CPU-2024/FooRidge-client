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
              <div className='button'>
                  <img src={share} alt="Share" />
                  <img src={low_price} alt="Low_Price" />
              </div>
              <div className='recen'>
                  <h3>최근에 올라온 글</h3>
              </div>
              <div className='more'>
                  <h5 onClick={handleMore}>더보기</h5>
              </div>
              <div className='post'>
                  <img src={dunkin} alt="" />
                  <img src={bagette} alt="" />
                  <img src={hamberger} alt="" />
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

