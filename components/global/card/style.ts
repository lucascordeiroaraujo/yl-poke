import styled, { css } from 'styled-components';

import { IgenerateBgType } from '~/utils/poke-list';

interface IProps {
  bgType: IgenerateBgType;
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
  .card-favorite {
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
      background: ${props =>
        `linear-gradient(to bottom, #b06ab3, ${props.theme.colors.dark})`};
    `}
  ${props =>
    props.bgType === '2' &&
    css`
      background: #16bffd;
      background: ${props =>
        `linear-gradient(to bottom, #16bffd, ${props.theme.colors.dark})`};
    `}
  ${props =>
    props.bgType === '3' &&
    css`
      background: #f56217;
      background: ${props =>
        `linear-gradient(to bottom, #f56217, ${props.theme.colors.dark})`};
    `}
  ${props =>
    props.bgType === '4' &&
    css`
      background: #89253e;
      background: ${props =>
        `linear-gradient(to bottom, #89253e, ${props.theme.colors.dark})`};
    `}
  ${props =>
    props.bgType === '5' &&
    css`
      background: #536976;
      background: ${props =>
        `linear-gradient(to bottom, #536976, ${props.theme.colors.dark})`};
    `}
  ${props =>
    props.bgType === '6' &&
    css`
      background: #94716b;
      background: ${props =>
        `linear-gradient(to bottom, #94716b, ${props.theme.colors.dark})`};
    `}
  ${props =>
    props.bgType === '7' &&
    css`
      background: #2c3e50;
      background: ${props =>
        `linear-gradient(to bottom, #2c3e50, ${props.theme.colors.dark})`};
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
