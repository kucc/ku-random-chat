import React, { useState } from 'react';
import * as S from './styles';
import ChatRoomList from '@components/chat-room-list';
import Header from '@components/header';
import CreateChatRoomModal from '@components/create-chatroom-modal';

const MatchRoom = () => {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <S.MatchRoomContainer>
        <Header />
        <S.ListLabel>개설된 채팅방</S.ListLabel>
        <S.ChatRoomListContainer>
          <ChatRoomList />
        </S.ChatRoomListContainer>
        <S.ButtonContainer onClick={toggleModal}>방만들기</S.ButtonContainer>
      </S.MatchRoomContainer>
      <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
      <CreateChatRoomModal show={show} onToggleModal={toggleModal} />
    </>
  );
};

export default MatchRoom;
