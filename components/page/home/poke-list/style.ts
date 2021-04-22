import styled from 'styled-components';

export default styled.section`
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
