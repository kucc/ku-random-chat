import React from "react";
import * as S from "./styles";
import InfoInputProps from "./types";

const InfoInput = (props: InfoInputProps) => {
  const { label, placeholder , onChange } = props;

  return (
    <S.InfoInputContainer>
      <S.InfoLabel>{label}</S.InfoLabel>
      <S.InfoInput
        placeholder={placeholder}
        type="text"
        onChange = {onChange}
      />
    </S.InfoInputContainer>
  );
};

export default InfoInput;