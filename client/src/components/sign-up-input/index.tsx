import React from "react";
import * as S from "./styles";
import SignUpInputProps from "./types";

const SignUpInput = (props: SignUpInputProps) => {
  const { label, type, placeholder, text, checkInput, isChecked } = props;

  return (
    <S.SignUpInputContainer>
      <S.SignUpLabel>{label}</S.SignUpLabel>
      <S.SignUpInput
        placeholder={placeholder}
        type={type}
        onChange={checkInput}
      />
      <S.SignUpText isChecked={isChecked}>{text}</S.SignUpText>
    </S.SignUpInputContainer>
  );
};

export default SignUpInput;
