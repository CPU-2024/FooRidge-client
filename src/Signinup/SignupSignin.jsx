import React from 'react';
import logo from '../assets/logo.png';
import styles from './SignupSignin.module.css';
import { useNavigate } from 'react-router-dom';

export default function SignupSignin() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  return (
    <div className={styles.body}>
      <Logo />
      <h2>Welcome to FOORIDGE</h2>
      <div className={styles.button}>
        <button onClick={handleSignUpClick} className={styles.signup}>Sign up</button>
        <button onClick={handleSignInClick} className={styles.signin}>Sign in</button>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt="Logo" />
    </div>
  );
}
