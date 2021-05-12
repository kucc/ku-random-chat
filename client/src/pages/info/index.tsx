import React, { useEffect, useState } from "react";
import * as S from "./styles";
import InfoInput from "@components/info-input";
import Header from "@components/header";

const Info = () => {
    return (
        <S.InfoContainer>
          <Header/>
          <S.InfoTitle>기본정보 입력</S.InfoTitle>
          <S.InfoInputContainer>
            <InfoInput
              label="연령대"
              value="24"
            />
            <InfoInput
              label="학과"
              value="컴퓨터학과"
            />
            <InfoInput
              label="성별"
              value="남"
            />
          </S.InfoInputContainer>
          <S.ModifyButton>입력하기</S.ModifyButton>
          <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
        </S.InfoContainer>
    );
}

export default Info;