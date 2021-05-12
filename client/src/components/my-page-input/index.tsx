import React from "react";
import * as S from "./styles";
import MyPageInputProps from "./types";

const MyPageInput = (props: MyPageInputProps) => {
  const { label, type, placeholder, text, checkInput, isChecked } = props;

  return (
    <S.MyPageInputContainer>
      <S.MyPageLabel>{label}</S.MyPageLabel>
      <S.MyPageInput
        placeholder={placeholder}
        type={type}
        onChange={checkInput}
      />
      <S.MyPageText isChecked={isChecked}>{text}</S.MyPageText>
    </S.MyPageInputContainer>
  );
};

export default MyPageInput;
