import React from 'react';
import "./chat-room";

function chatRoomList(){
	const roomList = [
    	{
      		id: 1,
      		text: '컴붕이 모여라',
      		members: 1
    	},
    	{
      		id: 2,
      		text: '안암러 모여라',
      		members: 1
    	},
    	{
      		id: 3,
      		text: '자정진 푸념방',
      		members: 2
    	}
  	];
    return(
        <div className = "chatRoomList">
            {
                roomList.length === 0 ? <span>개설된 채팅방이 없습니다!</span>
                : roomList.map(room => (
                    <chatRoom room = {room} key = {room.id}/>
                ))
            }
        </div>
    )
}

export default chatRoomList;