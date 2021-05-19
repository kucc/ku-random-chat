import styled from 'styled-components';
import { THEME_COLOR } from '@assets/constant';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 5rem 0rem;
  background-color: ${THEME_COLOR.PRIMARY};
`;

export const Logo = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  margin-top: 2rem;
  color: #f5e8e8;
`;

export const Image = styled.img`
  height: 17rem;
  width: 17rem;
  margin-top: 4rem;
  animation: bounce 0.8s infinite alternate;
  @keyframes bounce {
    from {
      transform: translateY(0rem);
    }
    to {
      transform: translateY(-0.8rem);
    }
  }
`;

export const ImageShadow = styled.div`
  height: 2rem;
  width: 10rem;
  background-color: #2f0707;
  border-radius: 100%;
  opacity: 0.2;
  margin-bottom: 4rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 5rem;
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 2rem;
  color: black;
  background-color: #dfcecf;
  border-radius: 1.5rem;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
`;
