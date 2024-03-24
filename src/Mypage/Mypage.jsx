import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

export default function Mypage(){
    const navigate = useNavigate();


    return(
        <div className='page'>
            <div className='top'>
                <div className='setting'>
                    <IoSettingsOutline />
                </div>
                <div className='profile'>
                    <div className='photo'>
                        
                    </div>
                    <div className="name">
                        dinmoy
                    </div>
                </div>
            </div>
        </div>
        
    );
}
