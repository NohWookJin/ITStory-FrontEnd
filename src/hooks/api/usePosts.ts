/* eslint-disable */

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postValueState, searchValueState } from '../../store/posts';
import { instance } from '../../libs/api';
import { useNavigate } from 'react-router-dom';

interface IGetPosts {
  postCategory: string;
  postId: number;
  postTitle: string;
  postContent: string;
  createTime: string;
}

export default function usePosts() {
  const [postValue, setPostValue] = useRecoilState(postValueState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    alert('미완성');
    setIsDarkMode(prev => !prev);
  };

  const navigate = useNavigate();

  async function refreshPosts() {
    setIsLoading(true);
    const response = await instance.get<{}, IGetPosts[]>('post/list');
    setPostValue(response);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }
  useEffect(() => {
    refreshPosts();
    window.scrollTo(0, 0);
  }, []);

  async function refreshSearch(search: string) {
    const result = await instance.get<{}, IGetPosts[]>(`post/list?searchText=${search}`);
    setSearchValue(result);
    console.log(searchValue);
  }

  async function createPost(titleValue: string, contentValue: string, categoryValue: string) {
    await instance.post('post/', { postTitle: titleValue, postContent: contentValue, postCategory: categoryValue });
    refreshPosts();
  }

  async function deletePost(postId: number | undefined) {
    await instance.delete(`/post/${postId}`);
    navigate('/');
    refreshPosts();
  }

  async function patchPost(postId: number | undefined) {
    await instance.patch(`/post/${postId}`);
  }

  return {
    postValue,
    refreshPosts,
    createPost,
    deletePost,
    patchPost,
    isLoading,
    refreshSearch,
    searchValue,
    isDarkMode,
    toggleDarkMode,
  };
}
