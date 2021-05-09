import styled from "styled-components";
import { THEME_COLOR } from "@assets/constant";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const ChatScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-top: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const MessageContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 3rem;
  border-radius: 0.5rem;
`;

export const EmojiButton = styled.div`
  height: 100%;
  width: 3rem;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${THEME_COLOR.GRAY};
`;

export const MessageInput = styled.input`
  font-size: 1.6rem;
  outline: none;
  border: 1px solid ${THEME_COLOR.GRAY};
  padding: 0.5rem 1rem;
`;

export const SendButton = styled.div`
  width: 4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: #feea0c;
  border: 1px solid ${THEME_COLOR.GRAY};
`;
