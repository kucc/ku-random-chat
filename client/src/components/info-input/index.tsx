import React from "react";
import * as S from "./styles";
import InfoInputProps from "./types";

const InfoInput = (props: InfoInputProps) => {
  const { label, value, onChange } = props;

  return (
    <S.InfoInputContainer>
      <S.InfoLabel>{label}</S.InfoLabel>
      <S.InfoInput
        placeholder={value}
        type="text"
        onChange = {onChange}
      />
    </S.InfoInputContainer>
  );
};

export default InfoInput;