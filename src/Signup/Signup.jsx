import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Signup/Signup.css'

const EmailInput = ({ onEmailChange }) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailList, setEmailList] = useState([]);

  const frequencyEmails = [
    '@naver.com',
    '@gmail.com',
    '@daum.net',
    '@hanmail.net',
    '@yahoo.com',
    '@outlook.com',
    '@nate.com',
    '@kakao.com',
  ];

  const onChangeEmail = (e) => {
    const inputValue = e.target.value;
    setEmailValue(inputValue);

    const userEmails = frequencyEmails.map((email) =>
      inputValue.includes('@')
        ? inputValue.split('@')[0] + email
        : inputValue + email
    );
    setEmailList(userEmails);

    onEmailChange(inputValue);
  };

  const onSuggestionClick = (suggestion) => {
    setEmailValue(suggestion);
    onEmailChange(suggestion);
  };

  return (
    <>
      <input
        list="email"
        value={emailValue}
        placeholder="이메일을 입력하세요"
        onChange={onChangeEmail}
      />
      <datalist id="email">
        {emailList &&
          emailList.map((email, idx) => (
            <option value={email} key={idx} onClick={() => onSuggestionClick(email)} />
          ))}
      </datalist>
    </>
  );
};

const Signup = () => {

  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Address, setAddress] = useState("");
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const [isFocused, setIsFocused] = useState(false);

  const validatePassword = (password) => {
    const minLength = password.length >= 6;
    const maxLength = password.length <= 20;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    const conditions = [hasUppercase, hasLowercase, hasNumber, hasSpecialChar];
    const conditionsMet = conditions.filter((condition) => condition).length >= 2;

    setPasswordValidation({
      length: minLength,
      uppercase: hasUppercase,
      lowercase: hasLowercase,
      number: hasNumber,
      specialChar: hasSpecialChar,
    });

    return minLength && maxLength && conditionsMet;
  };

  const onPasswordHandler = (event) => {
    const newPassword = event.currentTarget.value;
    setPassword(newPassword);
    setIsFocused(true);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
    setIsFocused(true);
  };

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
    setIsNicknameAvailable(true);
    setIsFocused(true);
  };

  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.value);
    setIsFocused(true);
  };

  const checkNicknameAvailability = async () => {
    // 닉네임 중복 확인 로직
  };

  const onEmailChange = (value) => {
    setEmail(value);
    setIsFocused(true);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // 닉네임 중복 확인 로직
    if (!isNicknameAvailable) {
      alert('이미 사용 중인 닉네임입니다.');
      return;
    }

    // 비밀번호 확인
    if (Password !== ConfirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 비밀번호 유효성 검사
    if (!validatePassword(Password)) {
      alert('6~20글자/대문자, 소문자, 숫자, 특수문자 중 2가지 이상을 조합해 주세요.');
      return;
    }

    // alert("회원가입에 성공하였습니다.");
    console.log("Nickname:", Nickname);
    console.log("Address:", Address);
    console.log("Password:", Password);
    console.log("Email:", Email);
    navigate('/location');
  };

  return (
    <div>
      <p>회원가입</p>
      <hr />
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <div className="signupinput">
          <label>닉네임</label><br />
          <input className='nickname' type='text' value={Nickname} onChange={onNicknameHandler} placeholder="닉네임" />
          <button className='check' type='button' onClick={checkNicknameAvailability}>중복확인</button>
          {!isNicknameAvailable && <p className="nickname-error">이미 사용 중인 닉네임입니다.</p>}<br />
          <div className="email">
            <label>이메일</label><br />
            <EmailInput onEmailChange={onEmailChange} />
          </div>
          <div className="password">
            <label>비밀번호</label><br />
            <input type='password' value={Password} onChange={onPasswordHandler} placeholder="비밀번호" />
            <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="비밀번호 확인" /><br />
            <p className='passwordcondition'>6~20글자/대문자,소문자,숫자,특수문자 중 2가지 이상 조합</p>
          </div>

        </div>
        <br />
        <div className="loginbutton">
          <button className='join' type='submit'>가입하기</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;