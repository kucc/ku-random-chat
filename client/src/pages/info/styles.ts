import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@assets/constant";


export const InfoTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    width: 90%;
    margin-top: 1rem;
    font-size: 2.5rem;
    font-weight: 600;
    border-bottom: 1px solid gray;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${THEME_COLOR.GRAY};
`;

export const InfoCarrier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 90%;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 27%;
  }
`;


export const InfoInputCarrier = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const ModifyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 4rem;
  font-weight: 500;
  font-size: 2rem;
  color: white;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1.5rem;
`;

export const Copyright = styled.div`
  font-size: 1.2rem;
  margin-top: 2rem;
  width: 100%;
`;