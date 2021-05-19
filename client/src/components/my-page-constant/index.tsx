import React from "react";
import * as S from "./styles";
import MyPageConstantProps from "./types";

const MyPageConstant = (props: MyPageConstantProps) => {
  const { label, userId } = props;

  return (
    <S.MyPageConstantContainer>
      <S.MyPageLabel>{label}</S.MyPageLabel>
      <S.MyPageEntry>{userId}</S.MyPageEntry>
    </S.MyPageConstantContainer>
  );
};

export default MyPageConstant;
