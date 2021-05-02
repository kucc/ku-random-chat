import styled from 'styled-components';
import { THEME_COLOR } from '@assets/constant';

export const ModalHeaderText = styled.div`
  display: flex;
  margin-top: 3rem;
  font-weight: 500;
  font-size: 2.1rem;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 3rem 0rem;
`;

export const ChatRoomInfoInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  height: 4rem;
  outline: none;
  border: 1.5px solid ${THEME_COLOR.GRAY};
  border-radius: 0.7rem;
  padding: 0.5rem 1rem;
  :focus {
    border: 0.15rem solid ${THEME_COLOR.PRIMARY};
  }
`;
export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 3.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;
