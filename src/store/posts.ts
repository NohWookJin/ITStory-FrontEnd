import { atom } from 'recoil';

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
