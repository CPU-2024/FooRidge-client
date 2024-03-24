import React, { useState, useEffect } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io"; 
import { AiFillPlusCircle } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import '../Main/Main.css';

function BottomBar() {
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 이동이 완료된 후에 activeIcon 상태를 업데이트합니다.
    switch (window.location.pathname) {
      case '/main':
        setActiveIcon('home');
        break;
      case '/post':
        setActiveIcon('plus');
        break;
      case '/mypage':
        setActiveIcon('mypage');
        break;
      default:
        setActiveIcon(null);
    }
  }, [navigate]);

  const handlePlusButtonClick = () => {
    navigate('/post');
  }

  const handleMypageClick = () => {
    navigate('/mypage');
  }

  const handelHomeButtonClick = () => {
    navigate('/main');
  }

  const handleSearchClick = () => {
    setActiveIcon('search');
  }

  const handleChatClick = () => {
    setActiveIcon('chat');
  }

  return (
    <div className='bottom_bar'>
      <IoHomeOutline size='25' color={activeIcon === 'home' ? '#3faf43' : '#000'} onClick={handelHomeButtonClick} />
      <IoMdSearch size='25' color={activeIcon === 'search' ? '#3faf43' : '#000'} onClick={handleSearchClick} />
      <AiFillPlusCircle size='25' color={activeIcon === 'plus' ? '#3faf43' : '#000'} onClick={handlePlusButtonClick} />
      <IoChatbubblesOutline size='25' color={activeIcon === 'chat' ? '#3faf43' : '#000'} onClick={handleChatClick} />
      <CgProfile size='25' color={activeIcon === 'mypage' ? '#3faf43' : '#000'} onClick={handleMypageClick} />
    </div>
  );
}

export default BottomBar;
