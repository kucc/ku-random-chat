import React, { useCallback, useState } from 'react';
import * as S from './styles';
import ChatRoomList from '@components/chat-room-list';
import Header from '@components/header';
import CreateChatRoomModal from '@components/create-chatroom-modal';
import { useOpenModal } from '@/contexts/toggleModalContext';

const MatchRoom = () => {
  const openModal = useOpenModal();
  const openButtonPressed = useCallback(
    () => openModal(<CreateChatRoomModal />),
    [],
  );

  return (
    <>
      <S.MatchRoomContainer>
        <Header />
        <S.ListLabel>개설된 채팅방</S.ListLabel>
        <S.ChatRoomListContainer>
          <ChatRoomList />
        </S.ChatRoomListContainer>
        <S.ButtonContainer onClick={openButtonPressed}>
          방만들기
        </S.ButtonContainer>
      </S.MatchRoomContainer>
      <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
    </>
  );
};

export default MatchRoom;
