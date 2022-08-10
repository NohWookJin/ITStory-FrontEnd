import { atom } from 'recoil';

export const postValueState = atom<IPost[]>({
  key: 'postsState',
  default: [],
});
