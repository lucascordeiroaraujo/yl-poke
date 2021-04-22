import styled from 'styled-components';

export default styled.section`
  width: 100%;
  margin: 50px 0px;
  .slick-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    .slick-prev,
    .slick-next {
      position: relative;
      width: auto;
      height: auto;
      &:before {
        font-size: 40px;
        color: ${props => props.theme.colors.text};
        opacity: 0.2;
        transition: 0.5s;
      }
      &:hover:before {
        opacity: 1;
        color: ${props => props.theme.colors.primary};
      }
    }
    .slick-prev {
      left: 0px;
    }
    .slick-next {
      right: 0px;
    }
  }
`;
