import roomAPI from '@/common/lib/api/room';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Modal from '../common/modal';
import * as S from './styles';
import { CreateChatRoomModalProps } from './types';

const CreateChatRoomModal = ({
  show,
  onToggleModal,
}: CreateChatRoomModalProps) => {
  const history = useHistory();
  const [chatRoomTitle, setChatRoomTitle] = useState<string>('');
  const chatRoomTitleInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatRoomTitleInput.current) chatRoomTitleInput.current.focus();
  }, [show]);

  const createNewRoom = async () => {
    const newRoom = await roomAPI.createNewRoom(chatRoomTitle);
    history.push(`/chat/${newRoom.roomId}`);
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomTitle(e.target.value);
  };

  return (
    <Modal show={show} onToggle={onToggleModal}>
      <S.ModalHeaderText>채팅방 만들기</S.ModalHeaderText>
      <S.ModalBody>
        <S.ChatRoomInfoInput
          placeholder={'채팅방 이름'}
          onChange={onChangeInputHandler}
          ref={chatRoomTitleInput}
        />
        <S.ModalButtonContainer>
          <S.ModalButton onClick={createNewRoom}>방 만들기</S.ModalButton>
          <S.ModalButton onClick={onToggleModal}>취소</S.ModalButton>
        </S.ModalButtonContainer>
      </S.ModalBody>
    </Modal>
  );
};

export default CreateChatRoomModal;
