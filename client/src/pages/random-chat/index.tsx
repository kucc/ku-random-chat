import React, { useState } from 'react';
import * as S from './styles';
import { Sentry } from 'react-activity';
const RandomChatPage = () => {
  const [isLoading, toggleIsLoading] = useState<boolean>(true);
  return (
    <S.MainContainer>
      {isLoading ? (
        <S.LoadingContainer>
          <S.Logo>RANDOM CHAT</S.Logo>
          <Sentry size={50} color="white" />
          <S.LoadingText>상대 찾는 중..</S.LoadingText>
        </S.LoadingContainer>
      ) : (
        <div>매칭시작</div>
      )}
    </S.MainContainer>
  );
};

export default RandomChatPage;
