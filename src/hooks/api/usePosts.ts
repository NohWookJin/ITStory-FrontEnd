/* eslint-disable */

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postValueState } from '../../store/posts';
import { instance } from '../../libs/api';

interface IGetPosts {
  postId: number;
  postTitle: string;
  postContent: string;
  createTime: string;
}

export default function usePosts() {
  const [postValue, setPostValue] = useRecoilState(postValueState);

  async function refreshPosts() {
    const response = await instance.get<{}, IGetPosts[]>('post/list');
    setPostValue(response);
  }
  useEffect(() => {
    refreshPosts();
  }, []);

  async function createPost(titleValue: string, contentValue: string) {
    await instance.post('post/new', { postTitle: titleValue, postContent: contentValue });
    refreshPosts();
  }

  async function deletePost(postId: number) {
    await instance.delete(`/post/list/${postId}`);
    refreshPosts();
  }

  return { postValue, refreshPosts, createPost, deletePost };
}
