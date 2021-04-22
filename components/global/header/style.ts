import styled from 'styled-components';

import { shade } from 'polished';

export default styled.header`
  width: 100%;
  padding: 20px 0px;
  background: #32335a;
  background: -webkit-linear-gradient(top, #32335a 0%, #333333 100%);
  background: linear-gradient(to bottom, #32335a 0%, #333333 100%);
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-logo-container {
      max-width: 260px;
      display: flex;
      flex-direction: column;
      img {
        pointer-events: none;
        &.pokeapi {
          width: 100%;
          height: auto;
        }
        &.yalo {
          margin: -5px 0px 0px 60px;
        }
      }
    }
    .header-actions-continaer {
      width: 100%;
      max-width: 768px;
      display: flex;
      flex-direction: column;
      margin-left: 50px;
    }
  }
`;

export const Menu = styled.nav`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .react-switch-bg div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 14px;
    }
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.light};
        padding: 10px;
        transition: 0.5s;
        svg {
          margin-right: 10px;
          position: relative;
          top: -1px;
        }
      }
      &:hover a {
        color: ${props => shade(0.2, props.theme.colors.light)};
      }
    }
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  position: relative;
  .search-field {
    width: 100%;
    padding-right: 70px;
    background: ${props => props.theme.colors.light};
  }
  .search-button {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0px, -50%);
    cursor: pointer;
    svg {
      font-size: 26px;
      transition: 0.5s;
      color: ${props => props.theme.colors.dark};
    }
    input {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    &:hover svg {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
