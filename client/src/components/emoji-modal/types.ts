import { Dispatch, SetStateAction } from 'react';

export interface EmojiModalProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}
