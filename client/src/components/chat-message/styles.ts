import styled from "styled-components";

export const MessageContainer = styled.div<{ isItMe: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isItMe ? "row-reverse" : "row")};
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
`;

export const MessageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0.5rem;
  max-width: 60%;
`;

export const UserName = styled.div<{ isItMe: boolean }>`
  align-self: ${(props) => (props.isItMe ? "flex-end" : "flex-start")};
  margin-bottom: 0.3rem;
`;

export const MessageContent = styled.div<{ isItMe: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: solid 1px;
  border-color: ${(props) => (props.isItMe ? "#00c6ff" : "#dc2430")};
  word-wrap: break-word;
`;

export const TimeStamp = styled.div`
  padding-top: 2rem;
`;
