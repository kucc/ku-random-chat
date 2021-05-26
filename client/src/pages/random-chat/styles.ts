import styled from 'styled-components';
import { THEME_COLOR } from '@assets/constant';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${THEME_COLOR.PRIMARY};
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: white;
  font-weight: 300;
`;
