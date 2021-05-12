import styled from 'styled-components';
import { THEME_COLOR } from '@assets/constant';

export const ModalImage = styled.img`
  display: flex;
  width: 7rem;
  height: 7rem;
  margin-top: 5rem;
`;

export const ModalHeaderText = styled.div`
  display: flex;
  margin-top: 3rem;
  font-weight: 600;
  font-size: 2.1rem;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 3rem 0rem;
`;

export const ModalText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  line-height: 130%;
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 3.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: white;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  margin-bottom: 5rem;
`;
