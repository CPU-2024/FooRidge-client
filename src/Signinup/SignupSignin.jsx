import logo from '../assets/logo.png';
import '../Signinup/SignupSignin.css'
import {useNavigate } from 'react-router-dom';

export default function SignupSignin(){
  const navigate = useNavigate();

  
  const handleSignInClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

    return(
        <div className='page'>
            <Logo></Logo>
            <h2>Welcome to FOORIDGE</h2>
            <div className="button">
            <button  onClick={handleSignUpClick} className='signup'>Sign up</button>
            <button onClick={handleSignInClick} className='signin'>Sign in</button>
            </div>
        </div>
    );
}
function Logo(){
    return(
      <div className='Logo'>
        <img src={logo}/>
        <img src="img/logo.png" alt="" />
      </div>
    );
}