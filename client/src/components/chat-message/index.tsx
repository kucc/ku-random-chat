import React from "react";
import * as S from "./styles";
import MessageProps from "./types";
import chopin from "@assets/chopin.jpeg";

const Message = (props: MessageProps) => {
  const { userName, message, isMessageOwner, time } = props;

  return (
    <S.MessageContainer isMessageOwner={isMessageOwner}>
      <S.ProfileImg src={chopin} />
      <S.MessageContentContainer>
        <S.UserName isMessageOwner={isMessageOwner}>{userName}</S.UserName>
        <S.MessageContent isMessageOwner={isMessageOwner}>
          {message}
        </S.MessageContent>
      </S.MessageContentContainer>
      <S.TimeStamp>{time}</S.TimeStamp>
    </S.MessageContainer>
  );
};

export default Message;
