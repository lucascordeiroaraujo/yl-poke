import styled, { css } from 'styled-components';

export default styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1260px;
  margin: 50px auto 0px auto;
  > h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${props => props.theme.colors.text};
    text-transform: uppercase;
    border-bottom: 4px solid ${props => props.theme.colors.primary};
    padding: 0px 40px 10px 0px;
    ${props =>
      props.theme.name === 'dark' &&
      css`
        text-shadow: 2px 2px ${props => props.theme.colors.primary};
      `}
  }
`;

export const PokeList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 50px 0px;
  article {
    width: 23.5%;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
    @media (min-width: 993px) {
      &:not(:nth-child(4n)) {
        margin-right: 2%;
      }
    }
    @media (min-width: 769px) and (max-width: 992px) {
      width: 32%;
      &:not(:nth-child(3n)) {
        margin-right: 2%;
      }
    }
    @media (min-width: 577px) and (max-width: 768px) {
      width: 49%;
      &:not(:nth-child(2n)) {
        margin-right: 2%;
      }
    }
    @media (max-width: 576px) {
      width: 100%;
      margin-right: 0px;
    }
  }
`;
