import ChatHeader from '@/components/chat-header';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import Message from '@/components/chat-message';
import { useParams } from 'react-router';
import io from 'socket.io-client';
import endpoints from '@/common/endpoints';
import roomMessage from '@/common/model/room-message';
interface ChatRoomId {
  chatRoomId: string;
}

class SocketController {
  public messages: roomMessage[];
  private socket: null | SocketIOClient.Socket;
  private roomId: number;
  public username: string;
  public setRoomMessages: React.Dispatch<React.SetStateAction<roomMessage[]>>;
  constructor(
    roomId: number,
    setRoomMessages: React.Dispatch<React.SetStateAction<roomMessage[]>>,
  ) {
    this.socket = null;
    this.roomId = roomId;
    this.messages = [];
    this.username = Math.random().toString(36).substr(2, 11);
    this.setRoomMessages = setRoomMessages;
  }

  init() {
    this.socket = io(endpoints.API_BASE_URL);
    this.socket.emit('joinRoom', {
      roomId: this.roomId,
      username: this.username,
    });
    this.socket.on('chatToClient', (newMessage: roomMessage) => {
      this.setRoomMessages([...this.messages, newMessage]);
      this.messages.push(newMessage);
    });
  }

  sendMessage(message: string) {
    this.socket?.emit('send message', {
      roomId: this.roomId,
      sender: this.username,
      message,
      time: new Date(),
    });
  }
}

const ChatRoomPage = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState([] as roomMessage[]);
  const { chatRoomId } = useParams<ChatRoomId>();

  const mySocketController = useMemo(
    () => new SocketController(Number(chatRoomId), setMessages),
    [],
  );

  useEffect(() => {
    mySocketController.init();
  }, []);

  const onChangeInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessage = useCallback(() => {
    if (message.length === 0) return;
    mySocketController.sendMessage(message);
    setMessage('');
  }, [message]);

  const sendMessageByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (message.length === 0) return;
      mySocketController.sendMessage(message);
      setMessage('');
    }
  };

  return (
    <S.ChatContainer>
      <ChatHeader />
      <S.ChatScreen>
        {messages.map((message, idx) => {
          return (
            <Message
              key={`message${idx}`}
              sender={message.sender}
              message={message.message}
              isMessageOwner={mySocketController.username === message.sender}
              time={message.time}
            />
          );
        })}
      </S.ChatScreen>
      <S.MessageContainer>
        <S.EmojiButton>😀</S.EmojiButton>
        <S.MessageInput
          type="text"
          onChange={onChangeInputMessage}
          onKeyDown={sendMessageByEnter}
          value={message}
        />
        <S.SendButton onClick={sendMessage}>전송</S.SendButton>
      </S.MessageContainer>
    </S.ChatContainer>
  );
};

export default ChatRoomPage;
