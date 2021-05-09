import ChatHeader from "@/components/chat-header";
import React from "react";
import * as S from "./styles";
import messages from "./dummy-messages";
import Message from "@/components/chat-message";

const Chat = () => {
  return (
    <S.ChatContainer>
      <ChatHeader />
      <S.ChatScreen>
        {messages.map((message) => (
          <Message
            key={message.objectId}
            userName={message.userName}
            message={message.message}
            isItMe={message.isItMe}
            time={message.time}
          />
        ))}
      </S.ChatScreen>
      <S.MessageContainer>
        <S.EmojiButton>😀</S.EmojiButton>
        <S.MessageInput type="text" />
        <S.SendButton>전송</S.SendButton>
      </S.MessageContainer>
    </S.ChatContainer>
  );
};

export default Chat;
