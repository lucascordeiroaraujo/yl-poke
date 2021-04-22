import styled, { keyframes } from 'styled-components';

const floatingAnimation = keyframes`
  from {
      -webkit-transform: translate(0, 0px);
    }
    65% {
      -webkit-transform: translate(0, -15px);
    }
    to {
      -webkit-transform: translate(0, 0px);
    }
`;

export default styled.div`
  position: fixed;
  z-index: 50;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  background: ${props => props.theme.colors.dark};
  img {
    margin-bottom: 20px;
    animation: ${floatingAnimation} 5s ease-in-out infinite;
  }
  p {
    color: ${props => props.theme.colors.light};
    font-size: 20px;
  }
`;
