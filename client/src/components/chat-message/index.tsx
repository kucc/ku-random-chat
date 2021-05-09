import React from "react";
import * as S from "./styles";
import MessageProps from "./types";
import chopin from "@assets/chopin.jpeg";

const Message = (props: MessageProps) => {
  const { userName, message, isItMe, time } = props;

  return (
    <S.MessageContainer isItMe={isItMe}>
      <S.ProfileImg src={chopin} />
      <S.MessageContentContainer>
        <S.UserName isItMe={isItMe}>{userName}</S.UserName>
        <S.MessageContent isItMe={isItMe}>{message}</S.MessageContent>
      </S.MessageContentContainer>
      <S.TimeStamp>{time}</S.TimeStamp>
    </S.MessageContainer>
  );
};

export default Message;
