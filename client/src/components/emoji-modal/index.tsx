import Picker from 'emoji-picker-react';
import React, { useCallback, useState, useEffect } from 'react';
import Modal from '../common/modal';
import * as S from './styles';
import { EmojiModalProps } from './types';
import type { IEmojiData } from 'emoji-picker-react';

const EmojiModal = ({
  show,
  onToggleModal,
  message,
  setMessage,
}: // setEmoji,
EmojiModalProps) => {
  const [chosenEmoji, setChosenEmoji] = useState<IEmojiData | null>(null);

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
    <Modal show={show} onToggle={onToggleModal}>
      <S.ModalBody>
        <Picker onEmojiClick={onEmojiClick} />
        <S.ModalButton onClick={onToggleModal}>닫기</S.ModalButton>
      </S.ModalBody>
    </Modal>
  );
};

export default EmojiModal;
