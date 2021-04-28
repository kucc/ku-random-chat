import styled from 'styled-components';

export const ChatRoomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
  height: 3rem;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  & + & {
    margin-top: 1rem;
  }
`;

export const ChatRoomTitle = styled.div`
  display: flex;
`;

export const ChatRoomText = styled.div``;

export const ChatRoomMemberCount = styled.div`
  display: flex;
`;
