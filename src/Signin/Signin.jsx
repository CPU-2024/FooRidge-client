import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../Signin/Signin.css';


export default function Signin() {

  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const navigate = useNavigate();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Email:", userEmail);
    console.log("Password:", userPassword);
  };

  const handleLogin=async()=>{
    const loggedUser={userEmail,userPassword}
    try{
      const response=await axios.post('http://localhost:8080/user/login',loggedUser)
      if(response.status===200){
        alert('로그인 성공')
        navigate('/main');
      }
    }catch(error){
        alert('로그인 실패')
        console.log(error)
    }
  }
  return (
    <div>
      <Logo />
      <div className='fooridge'>
      <h2>FOORIDGE</h2>
      </div>
      <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
        <div className="input">
            <input type='email' value={userEmail} onChange={onEmailHandler} placeholder="이메일" />
            <input type='password' value={userPassword} onChange={onPasswordHandler} placeholder="비밀번호" />
        </div>
        <br />
        <div className="loginbutton">
          <button className='login' onClick={handleLogin} type='submit'>로그인</button>
        </div>
      </form>
    </div>
  );
}

function Logo() {
  return (
    <div className='Logo'>
      <img src={logo} alt="FOORIDGE Logo" />
    </div>
  );
}
