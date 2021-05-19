import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { STATIC_URL } from '@assets/constant';

const Main = () => {
  return (
    <S.MainContainer>
      <S.Logo>RANDOM CHAT</S.Logo>
      <S.Image src={STATIC_URL.TIGER}></S.Image>
      <S.ImageShadow />
      <S.Buttons>
        <S.Button to="sign-in">로그인</S.Button>
        <S.Button to="sign-up">회원 가입</S.Button>
      </S.Buttons>
    </S.MainContainer>
  );
};

export default Main;
