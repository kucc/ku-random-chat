import React from "react";
import * as S from "./styles";
import Header from "@components/header";
import realzz from "@assets/front.png";


const Home = () => {
  return (
      <S.HomeContainer>
        <Header/>
        <S.ImageContainer src = {realzz}/>
        <S.ButtonContainer>랜덤매칭 입장하기</S.ButtonContainer>
        <S.ButtonContainer>방채팅</S.ButtonContainer>
        <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
      </S.HomeContainer>
  );
};

export default Home;
