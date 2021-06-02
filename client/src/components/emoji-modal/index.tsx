import Picker from 'emoji-picker-react';
import React, { useCallback, useState, useEffect } from 'react';
import Modal from '../common/modal';
import * as S from './styles';
import { EmojiModalProps } from './types';
import type { IEmojiData } from 'emoji-picker-react';
import { useCloseModal } from '@/contexts/toggleModalContext';

const EmojiModal = ({ message, setMessage }: EmojiModalProps) => {
  const [chosenEmoji, setChosenEmoji] = useState<IEmojiData | null>(null);
  const closeModal = useCloseModal();
  const closeButtonPressed = useCallback(() => closeModal(), []);

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    setChosenEmoji(emojiObject);
  };

  useEffect(() => {
    if (!chosenEmoji) return;
    addEmoji();
  }, [chosenEmoji]);

  const addEmoji = () => {
    setMessage(message + chosenEmoji?.emoji);
  };

  return (
    <S.ModalBody>
      <Picker onEmojiClick={onEmojiClick} />
      <S.ModalButton onClick={closeButtonPressed}>닫기</S.ModalButton>
    </S.ModalBody>
  );
};

export default EmojiModal;
