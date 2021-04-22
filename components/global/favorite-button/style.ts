import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.1) }
  100% { transform: scale(1) }
`;

export default styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  color: ${props => props.theme.colors.secondary};
  text-shadow: 2px 2px ${props => props.theme.colors.primary};
  font-size: 30px;
  opacity: 0.3;
  transition: 0.5s;
  cursor: pointer;
  border: none;
  background: none;
  &:hover {
    opacity: 1;
    animation: ${pulseAnimation} 1s linear infinite;
  }
`;
