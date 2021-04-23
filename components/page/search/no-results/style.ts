import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  > strong {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.text};
    svg {
      margin-left: 10px;
    }
  }
  > p {
    margin-top: 10px;
    font-size: 14px;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.text};
  }
`;
