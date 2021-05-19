import React from "react";
import * as S from "./styles";
import MyPageConstantProps from "./types";

const MyPageConstant = (props: MyPageConstantProps) => {
  const { label, text } = props;

  return (
    <S.MyPageConstantContainer>
      <S.MyPageLabel>{label}</S.MyPageLabel>
      <S.MyPageEntry>{text}</S.MyPageEntry>
    </S.MyPageConstantContainer>
  );
};

export default MyPageConstant;
