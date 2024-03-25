import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import BottomBar from "../Main/BottomBar";
import Profile from './Profile';

import '../Mypage/Mypage.css';

export default function Mypage(){
    
    const navigate = useNavigate();

    // 사용자 정보를 가정한 것, 데이터는 여기 넣어주세요!
    const userInfo = {
        name: 'dinmoy',
        profilePicture: 'URL_TO_PROFILE_PICTURE'
    };

    return(
        <div className='page'>
            <div className='top'>
                <div className='setting'>
                    <IoSettingsOutline />
                </div>
                <div className='profile'>
                    <Profile name={userInfo.name} profilePicture={userInfo.profilePicture} />
                </div>
                <div className='recen'>
                    <div className='visit-name'>
                        최근 방문
                    </div>
                    <div className='visit-button'>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className='myfooridge'>
                    <div className='fooridge-name'>
                        나의 푸릿지<BsChevronRight />
                    </div>
                    <div className='fooridge-button'>
                        <button></button>
                    </div>
                </div>
                <div className='bookmark'>
                    <div className='bookmark-name'>
                    <BsBookmark />즐겨찾기
                    </div>
                    <div className='bookmark-button'>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className='bottom-bar'>
                    <BottomBar />
                </div>
            </div>
        </div>
    );
}
