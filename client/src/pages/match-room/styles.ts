import styled from "styled-components";
import { THEME_COLOR } from "@assets/constant";

export const MatchRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${THEME_COLOR.GRAY};
`;

export const ListLabel = styled.div`
    display: flex;
    font-size: 2rem;
    font-weight: 1000;
    width: 96%;
    height: 4rem;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    border-bottom: 1px solid gray;
`;

export const ChatRoomListContainer = styled.div`
    float: left;
    display: flex;
    flex-direction: column;
    width: 94%;
    margin-top: 0.1rem;

`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 25rem;
    height: 4rem;
    font-size: 2rem;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: ${THEME_COLOR.PRIMARY};
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 2rem;
`;

export const Copyright = styled.div`
  font-size: 1.2rem;
  margin-top: 8rem;
`;