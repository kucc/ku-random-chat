import React from "react";
import * as S from "./styles";
import ChatRoomList from "@components/chat-room-list";
import Header from "@components/header";

const MatchRoom = () => {
    return (
        <S.MatchRoomContainer>
            <Header/>
            <S.ListLabel>개설된 채팅방</S.ListLabel>
            <S.ChatRoomListContainer>
                <ChatRoomList/>
            </S.ChatRoomListContainer>
            <S.ButtonContainer>방만들기</S.ButtonContainer>
            <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
        </S.MatchRoomContainer>
    );
};

export default MatchRoom;