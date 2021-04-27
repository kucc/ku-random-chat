import React from "react";
import * as S from "./styles";
import SignInInputProps from "./types";

const SignInInput = (props: SignInInputProps) => {
  const { placeholder, type } = props;

  return <S.SignInInput placeholder={placeholder} type={type} />;
};

export default SignInInput;
