import styled from 'styled-components';
import { THEME_COLOR } from '@assets/constant';

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
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
  margin-top: 2rem;
`;
