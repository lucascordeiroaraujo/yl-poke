import styled, { css } from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  outline: none;
  position: relative;
  .image-container {
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      max-width: 80%;
      max-height: 430px;
      min-height: 430px;
    }
    @media (max-width: 768px) {
      width: 100%;
      img {
        max-height: 330px;
        min-height: 330px;
      }
    }
  }
`;

export const SliderItemInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${props => props.theme.colors.text};
    ${props =>
      props.theme.name === 'dark' &&
      css`
        text-shadow: 2px 2px ${props => props.theme.colors.primary};
      `}
  }
  .types-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    span {
      padding: 5px 15px;
      color: ${props => props.theme.colors.light};
      font-size: 14px;
      border-radius: 5px;
      margin-right: 10px;
      background: ${props => props.theme.colors.primary};
    }
  }
  .stats-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    p {
      margin: 0px 0px 10px 0px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      svg {
        margin-right: 10px;
      }
      strong {
        margin-right: 10px;
        font-weight: 900;
        color: ${props => props.theme.colors.secondary};
        ${props =>
          props.theme.name === 'dark' &&
          css`
            text-shadow: 2px 2px ${props => props.theme.colors.primary};
          `}
      }
      span {
        font-size: 14px;
        text-transform: uppercase;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    align-items: center;
    text-align: center;
    .types-container {
      justify-content: center;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    .stats-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      p {
        width: 49%;
        justify-content: flex-end;
        &:nth-child(odd) {
          svg {
            order: 3;
            margin: 0px 0px 0px 10px;
          }
          strong {
            order: 2;
            margin: 0px 0px 0px 10px;
          }
          span {
            order: 1;
          }
        }
        &:nth-child(even) {
          justify-content: flex-start;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .stats-container {
      align-items: center;
      p {
        width: 100%;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
