import styled from "styled-components";
import { BREAKPOINT, THEME_COLOR } from "@assets/constant";

export const MyPageConstantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-top: 2.5rem;
`;

export const MyPageLabel = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5em 0rem;
`;

export const MyPageEntry = styled.div`
  width: 100%;
  font-size: 1.5rem;
  height: 4rem;
  outline: none;
  border: 1px solid ${THEME_COLOR.GRAY};
  border-radius: 0.7rem;
  background-color: white;
  padding: 0.5rem 1rem;
  :focus {
    border: 0.15rem solid ${THEME_COLOR.PRIMARY};
  }
`;