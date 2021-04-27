import React from "react";
import * as S from "./styles";
import SignUpInputProps from "./types";

const SignUpInput = (props: SignUpInputProps) => {
  const { label, type, placeholder } = props;

  return (
    <S.SignUpInputContainer>
      <S.SignUpLabel>{label}</S.SignUpLabel>
      <S.SignUpInput placeholder={placeholder} type={type} />
    </S.SignUpInputContainer>
  );
};

export default SignUpInput;
