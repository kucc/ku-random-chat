import React from "react";
import * as S from "./styles";
import SignInInput from "@components/sign-in-input";

const SignIn = () => {
  return (
    <S.SignInContainer>
      <S.SignIn>
        <S.Logo>KU RANDOM CHAT</S.Logo>
        <S.Buttons>
          <SignInInput placeholder={"아이디"} />
          <SignInInput placeholder={"비밀번호"} />
          <S.SignInButton>로그인</S.SignInButton>
        </S.Buttons>
      </S.SignIn>
    </S.SignInContainer>
  );
};

export default SignIn;
