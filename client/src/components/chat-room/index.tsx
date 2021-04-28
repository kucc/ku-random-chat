import React from 'react';
import * as S from './styles';

export type chatRoomProps = {
    room: {
    id: number;
    text: string;
    memberCount: number;
  };
}

function ChatRoom({ room } : chatRoomProps){
    return(
        <S.ChatRoomWrapper >
            <S.ChatRoomTitle>
                <S.ChatRoomText>{room.text}</S.ChatRoomText>
            </S.ChatRoomTitle>
            <S.ChatRoomMemberCount>
                <S.ChatRoomText>{room.memberCount}</S.ChatRoomText>
            </S.ChatRoomMemberCount>
        </S.ChatRoomWrapper>
    );
}

export default ChatRoom;