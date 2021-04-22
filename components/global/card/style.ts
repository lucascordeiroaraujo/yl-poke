import styled, { css } from 'styled-components';

interface IProps {
  bgType: '1' | '2' | '3' | '4';
}

export default styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background: ${props => props.theme.colors.dark};
`;

export const CardImage = styled.div<IProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  pointer-events: none;
  img {
    min-height: 220px;
    max-height: 220px;
    max-width: 96%;
  }
  ${props =>
    props.bgType === '1' &&
    css`
      background: #4568dc;
      background: -webkit-linear-gradient(to right, #b06ab3, #4568dc);
      background: linear-gradient(to right, #b06ab3, #4568dc);
    `}
  ${props =>
    props.bgType === '2' &&
    css`
      background: #43c6ac;
      background: -webkit-linear-gradient(to right, #191654, #43c6ac);
      background: linear-gradient(to right, #191654, #43c6ac);
    `}
  ${props =>
    props.bgType === '3' &&
    css`
      background: #ffafbd;
      background: -webkit-linear-gradient(to right, #ffc3a0, #ffafbd);
      background: linear-gradient(to right, #ffc3a0, #ffafbd);
    `}
    ${props =>
    props.bgType === '4' &&
    css`
      background: #3a6186;
      background: -webkit-linear-gradient(to right, #89253e, #3a6186);
      background: linear-gradient(to right, #89253e, #3a6186);
    `}
`;

export const CardInfo = styled.div`
  width: 100%;
  padding: 20px;
  .card-title {
    font-size: 26px;
    font-weight: 900;
    color: ${props => props.theme.colors.light};
    text-shadow: 2px 2px ${props => props.theme.colors.primary};
  }
  .card-types {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    span {
      padding: 5px 15px;
      color: ${props => props.theme.colors.light};
      font-size: 12px;
      border-radius: 5px;
      margin-right: 10px;
      background: ${props => props.theme.colors.primary};
    }
  }
`;
