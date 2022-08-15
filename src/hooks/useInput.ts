import { ChangeEvent, useState } from 'react';

interface Props {
  initialValue?: string;
}

export default function useInput({ initialValue = '' }: Props) {
  const [titleValue, setTitleValue] = useState<string>(initialValue);
  const [contentValue, setcontentValue] = useState<string>(initialValue);
  const [category, setCategory] = useState<string>(initialValue);

  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitleValue(e.target.value);
  }
  function onChangeContent(e: ChangeEvent<HTMLTextAreaElement>) {
    setcontentValue(e.target.value);
  }
  function onChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    let box = e.target.value;
    setCategory(box.toUpperCase());
  }

  function clearInput() {
    setTitleValue('');
    setcontentValue('');
    setCategory('');
  }

  return {
    titleValue,
    contentValue,
    category,
    setcontentValue,
    onChangeTitle,
    onChangeContent,
    onChangeCategory,
    clearInput,
  };
}
