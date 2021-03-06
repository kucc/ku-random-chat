import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SignUpInput from '@components/sign-up-input';
import authAPI from '@/common/lib/api/auth';
import { useHistory } from 'react-router';
import EmailVerificationModal from '@components/email-verification-modal';

const SignUp = () => {
  const [isIdChecked, setIdChecked] = useState(true);
  const [isPasswordChecked, setPasswordChecked] = useState(true);
  const [isConfirmedPasswordChecked, setConfirmedPasswordChecked] =
    useState(true);
  const [isEmailChecked, setEmailChecked] = useState(true);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal);
    history.replace('/');
  };

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
    setShowModal(true);
  };

  return (
    <S.SignUpContainer>
      <S.InputContainer>
        <SignUpInput
          label="?????????"
          placeholder="2 ?????? ?????? 12 ?????? ????????? ??????"
          type="text"
          text="?????? ?????? ?????? ??????????????????"
          checkInput={checkId}
          isChecked={isIdChecked}
        />
        <SignUpInput
          label="????????????"
          placeholder="6 ?????? ?????? 15 ?????? ????????? ??????"
          type="password"
          text="6 ~ 15 ????????? ????????? ?????????"
          checkInput={checkPassword}
          isChecked={isPasswordChecked}
        />
        <SignUpInput
          label="???????????? ??????"
          type="password"
          text="??????????????? ???????????? ????????????"
          checkInput={checkConfirmedPassword}
          isChecked={isConfirmedPasswordChecked}
        />
        <SignUpInput
          label="?????? ?????????"
          placeholder="example@korea.ac.kr"
          type="text"
          text="???????????? ?????? ???????????????"
          checkInput={checkEmail}
          isChecked={isEmailChecked}
        />
      </S.InputContainer>
      <S.SignUpButton onClick={signUp}>????????????</S.SignUpButton>
      <S.Copyright>??? KU RANDOM CHAT All rights reserved.</S.Copyright>
      <EmailVerificationModal show={showModal} onToggleModal={closeModal} />
    </S.SignUpContainer>
  );
};

export default SignUp;
