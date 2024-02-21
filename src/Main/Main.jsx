import React from 'react';
import logo from '../assets/logo.png'; // 이미지 파일 경로를 맞게 수정해주세요
import about from '../assets/About.png';
import share from '../assets/share.png';
import low_price from '../assets/low price.png';
import { useNavigate } from 'react-router-dom';
import '../Main/Main.css';

export default function Main() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  return (
    <div>
        <div className='page'>
            <h2>FOORIDGE</h2>
            <About />
            <div className="button">
                <Share /><Low_Price />
            <div className="post">
                <h3>최근에 올라온 글</h3>
            </div>
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

function Share() {
    return (
      <div className='Share'>
        {/* 이미지를 추가합니다 */}
        <img src={share} alt="Share" />
      </div>
    );
}

function Low_Price() {
    return (
      <div className='Low_Price'>
        {/* 이미지를 추가합니다 */}
        <img src={low_price} alt="Low_Price" />
      </div>
    );
}