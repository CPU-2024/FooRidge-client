import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io"; 
import { AiFillPlusCircle } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import '../Main/Main.css';


function BottomBar() {

  const navigate = useNavigate();

  const handlePlusButtonClick = () => {
    navigate('');
  }

  const handleMypageClick = () => {
    navigate('/mypage');
  }

  const handelHomeButtonClick = () =>{
    navigate('/home')
  }
    
  return (
    <div className='bottom_bar'>
      <IoHomeOutline size='25' onClick={handelHomeButtonClick} />
      <IoMdSearch size='25' />
      <AiFillPlusCircle size='25' color='#3faf43' onClick={handlePlusButtonClick} />
      <IoChatbubblesOutline size='25' />
      <CgProfile size='25' onClick={handleMypageClick} />
    </div>
  );
}

export default BottomBar;
