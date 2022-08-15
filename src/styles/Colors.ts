export const colors = {
  main: '#d9bcee',
  white: '#fff',
  black: '#111',
} as const;

export const lightTheme = {
  bgColor: '#fff',
  textColor: '#222',
} as const;

export const darkTheme = {
  bgColor: '#282c35',
  textColor: '#fff',
} as const;

export const theme = {
  lightTheme,
  darkTheme,
} as const;
