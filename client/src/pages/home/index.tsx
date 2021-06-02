import React, { useState } from 'react';
import * as S from './styles';
import Header from '@components/header';
import homeMain from '@assets/home-main.png';
import homeRandom from '@assets/home-random.png';
import homeMatchRoom from '@assets/home-match-room.png';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();

  const [randomIsHover, setRandomIsHover] = useState(false);
  const [matchIsHover, setMatchIsHover] = useState(false);

  const randomHoverOn = () => {

  }

  const randomHoverOut = () => {

  }

  const matchHoverOn = () => {

  }

  const matchHoverOut = () => {

  }
  return (
    <S.HomeContainer>
      <S.HomeCarrier>
        <Header />
        <S.ImageContainer src={homeMain} />
        <S.ModeSelectLabel>모드를 선택하세요!</S.ModeSelectLabel>
        <S.AllModeContainer>
          <S.EachModeContainer>
            <S.ModeImgContainer src={homeRandom}/>
            <S.ButtonContainer
              onMouseOver={()=>setRandomIsHover(true)}
              onMouseOut={()=>setRandomIsHover(false)}
              onClick={() => {
                history.push('/random-chat');
              }}
            >
              랜덤매칭
            </S.ButtonContainer>
          </S.EachModeContainer>
          <S.EachModeContainer>
            <S.ModeImgContainer src={homeMatchRoom}/>
            <S.ButtonContainer
              onMouseOver={()=>setMatchIsHover(true)}
              onMouseOut={()=>setMatchIsHover(false)}
              onClick={() => {
                history.push('/match-room');
              }}
            >
              방채팅
            </S.ButtonContainer>
          </S.EachModeContainer>
        </S.AllModeContainer>
        <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
      </S.HomeCarrier>
    </S.HomeContainer>
  );
};

export default Home;
