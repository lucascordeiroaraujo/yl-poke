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
  position: relative;
  background: ${props => props.theme.colors.dark};
  div.card-favorite {
    top: 10px;
    right: 10px;
    position: absolute;
    button {
      opacity: 1;
    }
  }
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
      background: #b06ab3;
      background: linear-gradient(to bottom, #b06ab3, #32335a);
    `}
  ${props =>
    props.bgType === '2' &&
    css`
      background: #16bffd;
      background: linear-gradient(to bottom, #16bffd, #32335a);
    `}
  ${props =>
    props.bgType === '3' &&
    css`
      background: #f56217;
      background: linear-gradient(to bottom, #f56217, #32335a);
    `}
    ${props =>
    props.bgType === '4' &&
    css`
      background: #89253e;
      background: linear-gradient(to bottom, #89253e, #32335a);
    `}
`;

export const CardInfo = styled.div`
  width: 100%;
  padding: 10px;
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
  .card-stats,
  .card-stats tr,
  .card-stats td {
    border: 1px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.lightDark};
  }
  .card-stats {
    width: 100%;
    margin-top: 20px;
    td {
      width: 50%;
      padding: 8px;
      p {
        color: ${props => props.theme.colors.light};
        font-size: 12px;
        span {
          font-size: 14px;
          font-weight: 900;
          margin-right: 5px;
          color: ${props => props.theme.colors.secondary};
          text-shadow: 2px 2px ${props => props.theme.colors.primary};
        }
      }
    }
  }
`;
