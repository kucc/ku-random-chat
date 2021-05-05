import { THEME_COLOR } from '@/assets/constant';
import styled from 'styled-components';

export const ChatRoomWrapper = styled.div`
  align-items: center;
  height: 4rem;
  background-color: white;
  padding: 0.5rem 1rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${THEME_COLOR.GRAY};
  }
`;

export const ChatRoomTitleValue = styled.div`
  color: black;
  font-weight: 900;
`;

export const ChatRoomTitle = styled.div`
  margin-right: 1rem;
`;

export const ChatRoomMemberCountValue = styled.div`
  color: gray;
  justify-component: center;
  align-items: center;
`;

export const ChatRoomMemberCount = styled.div`
  justify-component: center;
  align-items: center;
`;

export const LatestChat = styled.div``;

export const LatestChatText = styled.div`
  color: gray;
`;

export const ChatRoomInfo = styled.div`
  display: flex;
  align-items: space-between;
  margin-bottom: 0.5rem;
`;
