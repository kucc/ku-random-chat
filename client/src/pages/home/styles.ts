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
        width: 24%;
    }
`;

export const ImageContainer = styled.img`
    width: 100%;
    height: 25%;
    border-bottom: 0.5rem solid black;
`;

export const ModeSelectLabel = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    width: 100%;
    height: 3rem;
    margin-top: 5rem;
`;

export const AllModeContainer = styled.div`
    display: flex;
    margin-top: 8rem;
`;

export const EachModeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;

export const ModeImgContainer = styled.img`
    width: 80%;
    height: 65%;

`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 4rem;
    font-size: 2rem;
    font-weight: 600;
    color: white;
    background-color: ${THEME_COLOR.PRIMARY};
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 3rem;
`;

export const Copyright = styled.div`
  font-size: 1.2rem;
  margin-top: 8rem;
  position: absolute;
  bottom: 1rem;
`;