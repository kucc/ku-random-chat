import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@assets/constant";

export const InfoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;

export const InfoLabel = styled.div`
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5em 0rem;
`;

export const InfoInput = styled.input`
    width: 100%;
    font-size: 1.5rem;
    height: 4rem;
    outline: none;
    border: 1px solid ${THEME_COLOR.GRAY};
    border-radius: 0.7rem;
    padding: 0.5rem 1rem;
    :focus {
    border: 0.15rem solid ${THEME_COLOR.PRIMARY};
    }
`;