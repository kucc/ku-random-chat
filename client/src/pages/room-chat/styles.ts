import styled from 'styled-components';
import { BREAKPOINT, THEME_COLOR } from '@assets/constant';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ChatScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  margin-top: 3rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  overflow-y: scroll;
`;

export const MessageContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
`;

export const EmojiButton = styled.div`
  height: 100%;
  width: 8vh;
  display: flex;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${THEME_COLOR.GRAY};
`;

export const MessageInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  outline: none;
  border: 1px solid ${THEME_COLOR.GRAY};
  padding: 0.5rem 1rem;
  :focus {
    border: 0.15rem solid ${THEME_COLOR.PRIMARY};
  }
`;

export const SendButton = styled.div`
  width: 8vh;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  background-color: #feea0c;
  border: 1px solid ${THEME_COLOR.GRAY};
  position: absolute;
  right: 2rem;
`;
