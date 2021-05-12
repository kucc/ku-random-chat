import React from 'react';
import * as S from './styles';
import { ChatRoomProps } from './types';

function ChatRoom({ title, memberCount, onClick }: ChatRoomProps) {
  return (
    <S.ChatRoomWrapper onClick={onClick}>
      <S.ChatRoomInfo>
        <S.ChatRoomTitle>
          <S.ChatRoomTitleValue>{title}</S.ChatRoomTitleValue>
        </S.ChatRoomTitle>
        <S.ChatRoomMemberCount>
          <S.ChatRoomMemberCountValue>{memberCount}</S.ChatRoomMemberCountValue>
        </S.ChatRoomMemberCount>
      </S.ChatRoomInfo>
    </S.ChatRoomWrapper>
  );
}

export default ChatRoom;
