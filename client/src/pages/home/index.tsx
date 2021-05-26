import React from 'react';
import * as S from './styles';
import Header from '@components/header';
import realzz from '@assets/front.png';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  return (
    <S.HomeContainer>
      <S.HomeCarrier>
        <Header />
        <S.ImageContainer src={realzz} />
        <S.ButtonContainer
          onClick={() => {
            history.push('/random-chat');
          }}
        >
          랜덤매칭 입장하기
        </S.ButtonContainer>
        <S.ButtonContainer
          onClick={() => {
            history.push('/match-room');
          }}
        >
          방채팅
        </S.ButtonContainer>
        <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
      </S.HomeCarrier>
    </S.HomeContainer>
  );
};

export default Home;
