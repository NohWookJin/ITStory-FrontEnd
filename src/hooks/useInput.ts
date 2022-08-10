import { ChangeEvent, useState } from 'react';

interface Props {
  initialValue?: string;
}

export default function useInput({ initialValue = '' }: Props) {
  const [titleValue, setTitleValue] = useState<string>(initialValue);
  const [contentValue, setcontentValue] = useState<string>(initialValue);

  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitleValue(e.target.value);
  }
  function onChangeContent(e: ChangeEvent<HTMLInputElement>) {
    setcontentValue(e.target.value);
  }
  function clearInput() {
    setTitleValue('');
    setcontentValue('');
  }

  return { titleValue, contentValue, onChangeTitle, onChangeContent, clearInput };
}
