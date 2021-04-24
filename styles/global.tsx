import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  input, select, textarea {
    outline: none;
  }
  ol, ul {
    list-style: none;
    padding: 0px;
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none !important;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    overflow-x: hidden;
    transition: 0.5s;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.bg};
    input, select, textarea {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
      border-radius: 30px;
      border: none;
      color: ${props => props.theme.colors.dark};
      padding: 15px;
      transition: 0.5s;
      background: ${props => props.theme.colors.light};
      &::placeholder {
        color: ${props => props.theme.colors.dark};
      }
      &[type='submit'] {
        padding: 0px;
        cursor: pointer;
      }
      &.has-error {
        color: #f00;
        background: #fce8e8;
      }
    }
  }
  #nprogress {
		pointer-events: none;
		.bar {
			position: fixed;
			z-index: 1031;
			top: 0;
			left: 0;
			width: 100%;
			height: 5px;
			background: ${props => props.theme.colors.primary}
		}
	}
  .react-reveal {
		opacity: 0;
  }
  .Toastify__toast{
    box-shadow: none;
  }
`;

export const Container = styled.div`
  width: 96%;
  max-width: 1260px;
  margin: 0px auto;
`;

export const AppBox = styled.div`
  width: 100%;
  max-width: 2560px;
  margin: 0px auto;
  overflow: hidden;
`;

export const SwitchThemeContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 0px;
  width: 100%;
  .center-container {
    display: flex;
    justify-content: flex-end;
    .switch-theme {
      display: flex;
      .react-switch-bg div {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 14px;
        }
      }
    }
  }
`;
