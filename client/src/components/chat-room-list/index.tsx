import roomAPI from '@/common/lib/api/room';
import Room from '@/common/model/room';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ChatRoom from '../chat-room/index';
import * as S from './styles';

function ChatRoomList() {
  const [chatRoomList, setChatRoomList] = useState<Room[]>([]);
  const history = useHistory();
  useEffect(() => {
    getChatRoomList();
  }, []);

  const getChatRoomList = async () => {
    const roomList = await roomAPI.getRoomList();
    setChatRoomList(roomList);
  };

  return (
    <S.ChatRoomListContainer>
      {chatRoomList.length === 0 ? (
        <span>개설된 채팅방이 없습니다!</span>
      ) : (
        chatRoomList.map((room) => (
          <ChatRoom
            title={room.roomTitle}
            key={room.roomId}
            memberCount={1}
            onClick={() => {
              history.push(`/chat/${room.roomId}`);
            }}
          />
        ))
      )}
    </S.ChatRoomListContainer>
  );
}

export default ChatRoomList;
