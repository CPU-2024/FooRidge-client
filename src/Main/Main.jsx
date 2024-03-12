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
import bagette from '../assets/bagette.png';
import hamberger from '../assets/hamberger.png';
import { useNavigate } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io"; 
import { AiFillPlusCircle } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import '../Main/Main.css';

export default function Main() {
  const navigate = useNavigate();

  const handleMore = () => {
    navigate(''); // 회원가입 페이지로 이동
  };
  
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
                    <IoHomeOutline size='25'/>
                    <IoMdSearch size='25'/>
                    <AiFillPlusCircle size='25' color='#3faf43'/>
                    <IoChatbubblesOutline size='25'/>
                    <CgProfile size='25'/>
              </div>
        </div>
    </div>
  );
}



