import React, { useReducer } from 'react';
import * as S from './styles';
import SignInInput from '@components/sign-in-input';
import authAPI from '@/common/lib/api/auth';
import SignInModel from '@/common/model/sign-in';
import { signInAction } from './types';
import { useHistory } from 'react-router';

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

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'userId', payload: e.currentTarget.value });
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'password', payload: e.currentTarget.value });
  };

  const postSignIn = async () => {
    const result = await authAPI.signIn(signInInfo);
    if (result === 'success') {
      history.replace('/');
    }
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
    </S.SignInContainer>
  );
};

export default SignIn;
