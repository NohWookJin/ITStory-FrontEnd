import { atom } from 'recoil';
import { DefaultTheme } from 'styled-components';

export const postValueState = atom<IPost[]>({
  key: 'postsState',
  default: [],
});

export const postIndiviState = atom<IIndividual[]>({
  key: 'individualState',
  default: [],
});

export const commentState = atom<IComment[]>({
  key: 'commentsState',
  default: [],
});
export const searchValueState = atom<IPost[]>({
  key: 'searchState',
  default: [],
});
export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: false,
});
