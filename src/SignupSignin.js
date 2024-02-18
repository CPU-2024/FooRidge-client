import logo from './img/logo.png';
import './SignupSignin.css';
import { Link } from 'react-router-dom';
export default function SignupSignin(){
    return(
        <div>
            <Logo></Logo>
            <h2>Welcome to FOORIDGE</h2>
            <div className="button">
            <button className='signup'>Sign up</button>
            <button className='signin'>Sign in</button>
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