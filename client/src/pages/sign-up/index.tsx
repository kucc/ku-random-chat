import React from "react";
import * as S from "./styles";
import SignUpInput from "@components/sign-up-input";

const SignUp = () => {
  return (
    <S.SignUpContainer>
      <S.InputContainer>
        <SignUpInput
          label="아이디"
          placeholder="2 글자 이상 12 글자 이하로 입력"
          type="text"
        />
        <SignUpInput label="비밀번호" type="password" />
        <SignUpInput label="비밀번호 확인" type="password" />
        <SignUpInput
          label="학교 이메일"
          placeholder="example@korea.ac.kr"
          type="text"
        />
      </S.InputContainer>
      <S.SignUpButton>가입하기</S.SignUpButton>
      <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
    </S.SignUpContainer>
  );
};

export default SignUp;
