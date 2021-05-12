import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SignUpInput from '@components/sign-up-input';
import authAPI from '@/common/lib/api/auth';
import { useHistory } from 'react-router';

const SignUp = () => {
  const [isIdChecked, setIdChecked] = useState(true);
  const [isPasswordChecked, setPasswordChecked] = useState(true);
  const [isConfirmedPasswordChecked, setConfirmedPasswordChecked] = useState(
    true
  );
  const [isEmailChecked, setEmailChecked] = useState(true);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const checkId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    setId(id);
  };

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    if (password.length >= 6 && password.length <= 15) {
      setPassword(password);
      setPasswordChecked(true);
    } else {
      setPasswordChecked(false);
    }
  };

  const checkConfirmedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmedPassword = e.target.value;
    if (password === confirmedPassword) {
      setConfirmedPasswordChecked(true);
    } else {
      setConfirmedPasswordChecked(false);
    }
  };

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const splitted = email.split('@');
    if (splitted[1] === 'korea.ac.kr') {
      setEmail(email);
      setEmailChecked(true);
    } else {
      setEmailChecked(false);
    }
  };

  const signUp = async () => {
    const newUser = await authAPI.signUp(id, password, email);
    history.replace('/');
  };

  return (
    <S.SignUpContainer>
      <S.InputContainer>
        <SignUpInput
          label="아이디"
          placeholder="2 글자 이상 12 글자 이하로 입력"
          type="text"
          text="이미 사용 중인 아이디입니다"
          checkInput={checkId}
          isChecked={isIdChecked}
        />
        <SignUpInput
          label="비밀번호"
          placeholder="6 글자 이상 15 글자 이하로 입력"
          type="password"
          text="6 ~ 15 글자로 입력해 주세요"
          checkInput={checkPassword}
          isChecked={isPasswordChecked}
        />
        <SignUpInput
          label="비밀번호 확인"
          type="password"
          text="비밀번호가 일치하지 않습니다"
          checkInput={checkConfirmedPassword}
          isChecked={isConfirmedPasswordChecked}
        />
        <SignUpInput
          label="학교 이메일"
          placeholder="example@korea.ac.kr"
          type="text"
          text="올바르지 않은 형식입니다"
          checkInput={checkEmail}
          isChecked={isEmailChecked}
        />
      </S.InputContainer>
      <S.SignUpButton onClick={signUp}>가입하기</S.SignUpButton>
      <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
    </S.SignUpContainer>
  );
};

export default SignUp;
