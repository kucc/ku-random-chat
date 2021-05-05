import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@assets/constant";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${THEME_COLOR.GRAY};
`;

export const InfoLabel = styled.div`
    display: flex;
    float: left;
    align-items: center;
    justify-content: center;
    width: 20%;
`;

export const InfoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModifyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 4rem;
  font-weight: 500;
  font-size: 2rem;
  color: white;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1.5rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4rem;
  }
`;

export const Copyright = styled.div`
  font-size: 1.2rem;
  margin-top: 2rem;
`;