import type { IEmojiData } from 'emoji-picker-react';
import { Dispatch, SetStateAction } from 'react';

export interface EmojiModalProps {
  show: boolean;
  onToggleModal: () => void;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}
