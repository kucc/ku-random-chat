import React from 'react';

export default interface SignInInputProps {
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
