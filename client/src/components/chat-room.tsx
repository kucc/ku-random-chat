import React from 'react';

export type chatRoomProps = {
    room: {
    id: number;
    text: string;
    members: number;
  };
}

function chatRoom({ room } : chatRoomProps){
    return(
        <div className = "chatRoom">
            <div className = "roomName">
                <span>{room.text}</span>
            </div>
            <div className = "roomMembers">
                <span>{room.members}</span>
            </div>
        </div>
    );
}

export default chatRoom;