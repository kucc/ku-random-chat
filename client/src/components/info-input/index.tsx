import React from "react";
import * as S from "./styles";
import InfoInputProps from "./types";

const InfoInput = (props: InfoInputProps) => {
  const { label, value } = props;

  return (
    <S.InfoInputContainer>
      <S.InfoLabel>{label}</S.InfoLabel>
      <S.InfoInput
        placeholder={value}
        type="text"
      />
    </S.InfoInputContainer>
  );
};

export default InfoInput;
