import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: {
      mainBackground: string;
      primaryText: string;
      secondaryText: string;
      border: string;
      background: string;
      themeIcon: string;
    };
  }
}
