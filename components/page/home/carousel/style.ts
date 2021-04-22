import styled from 'styled-components';

export default styled.section`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SliderContainer = styled.div`
  width: 90%;
  overflow: hidden;
`;

export const SliderControls = styled.button`
  font-size: 40px;
  color: ${props => props.theme.colors.text};
  opacity: 0.2;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  background: none;
  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.primary};
  }
`;
