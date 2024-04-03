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
        profilePicture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fkr%2Ffree-icon%2Fprofile_3135823&psig=AOvVaw1smAnoSiZkrlHELN-CM0se&ust=1712187406689000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCBg6PZpIUDFQAAAAAdAAAAABAT'
    };

    return(
        <div className='page'>
            <div className='top'>
                <div className='page-top'>
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
            </div>
                <hr />
                <div className='bookmark-bar'>
                    <div className='bookmark-name'>
                        <BsBookmark color= "#3faf43" size={17} strokeWidth={0.7}/>즐겨찾기
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
