import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      lightDark: string;
      light: string;
      text: string;
      bg: string;
    };
  }
}
