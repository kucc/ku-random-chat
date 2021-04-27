import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@assets/constant";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  background-color: ${THEME_COLOR.GRAY};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 5rem;
  font-weight: 500;
  font-size: 2rem;
  color: white;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 0.5rem;
  cursor: pointer;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4rem;
  }
`;
