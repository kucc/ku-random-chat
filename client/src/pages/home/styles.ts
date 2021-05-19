import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@assets/constant";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${THEME_COLOR.GRAY};
`;

export const HomeCarrier = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 27%;
    }
`;

export const ImageContainer = styled.img`
    display: flex;
    width: 50%;
    height: 25%;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`;


export const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    height: 4rem;
    font-size: 2rem;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: ${THEME_COLOR.PRIMARY};
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 3rem;
`;

export const Copyright = styled.div`
  font-size: 1.2rem;
  margin-top: 8rem;
`;