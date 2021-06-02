import roomAPI from '@/common/lib/api/room';
import { useCloseModal } from '@/contexts/toggleModalContext';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import * as S from './styles';
import { CreateChatRoomModalProps } from './types';

const CreateChatRoomModal = ({}: CreateChatRoomModalProps) => {
  const history = useHistory();
  const [chatRoomTitle, setChatRoomTitle] = useState<string>('');
  const chatRoomTitleInput = useRef<HTMLInputElement>(null);
  const closeModal = useCloseModal();
  useEffect(() => {
    if (chatRoomTitleInput.current) chatRoomTitleInput.current.focus();
  }, []);

  const createNewRoom = async () => {
    closeModal();
    const newRoom = await roomAPI.createNewRoom(chatRoomTitle);
    history.push(`/chat/${newRoom.roomId}`);
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomTitle(e.target.value);
  };

  return (
    <>
      <S.ModalHeaderText>채팅방 만들기</S.ModalHeaderText>
      <S.ModalBody>
        <S.ChatRoomInfoInput
          placeholder={'채팅방 이름'}
          onChange={onChangeInputHandler}
          ref={chatRoomTitleInput}
        />
        <S.ModalButtonContainer>
          <S.ModalButton onClick={createNewRoom}>방 만들기</S.ModalButton>
          <S.ModalButton onClick={closeModal}>취소</S.ModalButton>
        </S.ModalButtonContainer>
      </S.ModalBody>
    </>
  );
};

export default CreateChatRoomModal;
