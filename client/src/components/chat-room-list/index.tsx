import { SignIn } from '@/pages/sign-in/styles';
import React from 'react';
import ChatRoom from "../chat-room/index";
import * as S from "./styles"

function ChatRoomList(){
	const roomList = [
    	{
      		id: 1,
      		title: '컴붕이 모여라',
      		memberCount: 1,
			latest: '정연돈 교수님 세미나 되게 유익하지 않았나요?'
    	},
    	{
      		id: 2,
      		title: '안암러 모여라',
      		memberCount: 1,
			latest: '2시에 오거리 할매순대국 같이 갈 사람?'
    	},
    	{
      		id: 3,
      		title: '자정진 푸념방',
      		memberCount: 2,
			latest: '아아아아아아아아아아아아아아아아아아아아아아'
    	}
  	];
    return(
        <S.ChatRoomListContainer>
            {
                roomList.length === 0 ? <span>개설된 채팅방이 없습니다!</span>
                : roomList.map(room => (
                    <ChatRoom room = {room} key = {room.id}/>
                ))
            }
        </S.ChatRoomListContainer>
    )
}

export default ChatRoomList;