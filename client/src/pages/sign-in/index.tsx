import React, { useReducer, useState } from 'react';
import * as S from './styles';
import SignInInput from '@components/sign-in-input';
import authAPI from '@/common/lib/api/auth';
import SignInModel from '@/common/model/sign-in';
import { signInAction } from './types';
import { useHistory } from 'react-router';
import SignInAlertModal from '@components/sign-in-alert-modal';

const signInReducer = (state: SignInModel, action: signInAction) => {
  switch (action.type) {
    case 'userId':
      return { ...state, userId: action.payload };
    case 'password':
      return { ...state, password: action.payload };
  }
};

const SignIn = () => {
  const [signInInfo, dispatch] = useReducer(signInReducer, {} as SignInModel);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'userId', payload: e.currentTarget.value });
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'password', payload: e.currentTarget.value });
  };

  const postSignIn = async () => {
    const isVerifiedUser = await authAPI.checkVerification(signInInfo.userId);
    if (!isVerifiedUser) {
      setShowModal(true);
    } else {
      const result = await authAPI.signIn(signInInfo);
      if (result === 'success') {
        history.replace('/');
      }
    }
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.SignInContainer>
      <S.SignIn>
        <S.Logo>KU RANDOM CHAT</S.Logo>
        <S.Buttons>
          <SignInInput
            placeholder={'아이디'}
            type="text"
            onChange={onChangeId}
          />
          <SignInInput
            placeholder={'비밀번호'}
            type="password"
            onChange={onChangePassword}
          />
          <S.SignInButton onClick={postSignIn}>로그인</S.SignInButton>
        </S.Buttons>
      </S.SignIn>
      <SignInAlertModal
        show={showModal}
        onToggleModal={closeModal}
        userId={signInInfo.userId}
      />
    </S.SignInContainer>
  );
};

export default SignIn;
