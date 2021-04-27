import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@assets/constant";

export const SignUpInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin: 0.5rem 0rem;
`;

export const SignUpLabel = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 1rem 0rem;
`;

export const SignUpInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  height: 5rem;
  outline: none;
  border: 1px solid ${THEME_COLOR.GRAY};
  border-radius: 0.7rem;
  padding: 0.5rem 1rem;
  :focus {
    border: 0.15rem solid ${THEME_COLOR.PRIMARY};
  }

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4rem;
  }
`;
