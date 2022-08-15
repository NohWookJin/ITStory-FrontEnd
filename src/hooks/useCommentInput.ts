import { ChangeEvent, useState } from 'react';

interface Props {
  initialValue?: string;
}

export default function useCommentInput({ initialValue = '' }: Props) {
  const [commentName, setCommentName] = useState<string>(initialValue);
  const [commentContent, setCommentContent] = useState<string>(initialValue);

  function onChangeCommentName(e: ChangeEvent<HTMLInputElement>) {
    setCommentName(e.target.value);
  }
  function onChangeCommentContent(e: ChangeEvent<HTMLInputElement>) {
    setCommentContent(e.target.value);
  }
  function clearCommentInput() {
    setCommentName('');
    setCommentContent('');
  }

  return { commentName, commentContent, onChangeCommentName, onChangeCommentContent, clearCommentInput };
}
