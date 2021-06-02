import styled from "styled-components";
import { THEME_COLOR } from "@assets/constant";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  font-size: 1.9rem;
  color: white;
  height: 5rem;
  outline: none;
  background-color: ${THEME_COLOR.PRIMARY};
`;

export const InfoButton = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 2.5rem;
  max-height: 2.5rem;
  margin-right: 2.5rem;
  outline: none;
  color: white;
  background-color: ${THEME_COLOR.PRIMARY};
  border-radius: 50%;
  cursor: pointer;
`;

