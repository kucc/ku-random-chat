import React from 'react';
import * as S from './styles';
import SignInInputProps from './types';

const SignInInput = (props: SignInInputProps) => {
  const { placeholder, type, onChange } = props;

  return (
    <S.SignInInput placeholder={placeholder} type={type} onChange={onChange} />
  );
};

export default SignInInput;
