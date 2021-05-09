import React from "react";
import * as S from "./styles";
import arrow from "@assets/arrow.png";
import alarm from "@assets/alarm.png";

const ChatHeader = () => {
  return (
    <S.HeaderContainer>
      <S.ExitButtonContainer>
        <S.ExitButton src={arrow} />
      </S.ExitButtonContainer>
      <S.Title>익붕챗</S.Title>
      <S.ReportButtonContainer>
        <S.ReportButton src={alarm} />
      </S.ReportButtonContainer>
    </S.HeaderContainer>
  );
};

export default ChatHeader;
