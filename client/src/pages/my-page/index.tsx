import React, { useEffect, useState } from "react";
import * as S from "./styles";
import InfoInput from "@components/info-input";
import Header from "@components/header";
import MyPageInput from "@components/my-page-input";
import { InfoInputContainer } from "../info/styles";

const MyPage = () => {
    const [isIdChecked, setIdChecked] = useState(true);
  const [isPasswordChecked, setPasswordChecked] = useState(true);
  const [isConfirmedPasswordChecked, setConfirmedPasswordChecked] = useState(
    true
  );
  const [isEmailChecked, setEmailChecked] = useState(true);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const checkId = () => {
    setIdChecked(false);
  };

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    if (password.length >= 6 && password.length <= 15) {
      setPassword(password);
      setPasswordChecked(true);
    } else {
      setPasswordChecked(false);
    }
  };

  const checkConfirmedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmedPassword = e.target.value;
    if (password === confirmedPassword) {
      setConfirmedPasswordChecked(true);
    } else {
      setConfirmedPasswordChecked(false);
    }
  };

  return (
    <S.MyPageContainer>
      <Header/>
      <S.InputContainer>
        <MyPageInput
          label="아이디"
          placeholder="appie701"
          type="text"
          text="이미 사용 중인 아이디입니다"
          checkInput={checkId}
          isChecked={isIdChecked}
        />
        <MyPageInput
          label="새 비밀번호"
          placeholder="6 글자 이상 15 글자 이하로 입력"
          type="password"
          text="6 ~ 15 글자로 입력해 주세요"
          checkInput={checkPassword}
          isChecked={isPasswordChecked}
        />
        <MyPageInput
          label="새 비밀번호 확인"
          type="password"
          text="비밀번호가 일치하지 않습니다"
          checkInput={checkConfirmedPassword}
          isChecked={isConfirmedPasswordChecked}
        />
      </S.InputContainer>
      <InfoInputContainer>
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
      </InfoInputContainer>
      <S.ModifyButton>수정하기</S.ModifyButton>
      <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
    </S.MyPageContainer>
  );
}

export default MyPage;