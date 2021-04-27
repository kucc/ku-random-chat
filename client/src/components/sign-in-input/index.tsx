import React from "react";
import * as S from "./styles";
import SignInInputProps from "./types";

const SignInInput = (props: SignInInputProps) => {
  const { placeholder } = props;

  return <S.SignInInput placeholder={placeholder} />;
};

export default SignInInput;
