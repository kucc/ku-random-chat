import React from 'react';
import * as S from './styles';
import { ChatRoomProps } from './types'


function ChatRoom({ room } : ChatRoomProps){
    return(
        <S.ChatRoomWrapper >
            <S.ChatRoomInfo>
                <S.ChatRoomTitle>
                    <S.ChatRoomTitleValue>{room.title}</S.ChatRoomTitleValue>
                </S.ChatRoomTitle>
                <S.ChatRoomMemberCount>
                    <S.ChatRoomMemberCountValue>{room.memberCount}</S.ChatRoomMemberCountValue>
                </S.ChatRoomMemberCount>
            </S.ChatRoomInfo>
            <S.LatestChat>
                <S.LatestChatText>{room.latest}</S.LatestChatText>
            </S.LatestChat>
        </S.ChatRoomWrapper>
    );
}

export default ChatRoom;