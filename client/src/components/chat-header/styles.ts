import styled from 'styled-components';
import { THEME_COLOR } from '@assets/constant';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${THEME_COLOR.PRIMARY};
`;

export const ExitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
`;
export const ExitButton = styled.img`
  color: white;
  height: 100%;
  width: 60%;
`;
export const Title = styled.div`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ReportButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 3rem;
`;

export const ReportButton = styled.img`
  height: 100%;
  width: 60%;
`;
