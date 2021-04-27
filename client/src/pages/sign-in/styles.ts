import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@assets/constant";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${THEME_COLOR.GRAY};
`;

export const Logo = styled.div`
  font-size: 2.8rem;
  font-weight: 900;
  color: ${THEME_COLOR.PRIMARY};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
`;

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 70%;
  width: 70%;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 25%;
  }
`;

export const SignInButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  font-weight: 500;
  font-size: 2rem;
  color: white;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 0.5rem;
  cursor: pointer;
`;
