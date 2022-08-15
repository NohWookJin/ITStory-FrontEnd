/* eslint-disable */

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { commentState } from '../../store/posts';
import { instance } from '../../libs/api';
import { useParams } from 'react-router';

interface IGetComments {
  commentId: number;
  commentWriter: string;
  commentContent: string;
  createDateTime: string;
}

export default function useComments() {
  const [commentValue, setCommentValue] = useRecoilState(commentState);
  const { postId } = useParams();

  async function refreshComments() {
    const res = await instance.get<{}, IGetComments[]>(`post/${postId}/comment`);
    setCommentValue(res);
  }
  useEffect(() => {
    refreshComments();
  }, []);

  async function createComments(commentName: string, commentContent: string) {
    await instance.post(`post/${postId}/comment`, { commentWriter: commentName, commentContent: commentContent });
    refreshComments();
  }

  async function deleteComments(commentId: number) {
    await instance.delete(`/post/${postId}/comment/${commentId}`);
    refreshComments();
  }

  return { commentValue, createComments, deleteComments };
}
