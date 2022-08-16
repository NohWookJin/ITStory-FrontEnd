import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: {
      color: string;
      bgColor: string;
      main: string;
      border: string;
      link: string;
    };
  }
}
