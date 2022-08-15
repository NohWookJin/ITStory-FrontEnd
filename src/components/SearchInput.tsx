import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router';
import styled from 'styled-components';
import { instance } from '../libs/api';
import usePosts from '../hooks/api/usePosts';

interface Props {
  initialValue?: string;
}

interface IGetPosts {
  postCategory: string;
  postId: number;
  postTitle: string;
  postContent: string;
  createTime: string;
}

// 해야 될 것
// 1. result를 전역 state에 담는다.
// 2. 전역 state 값을 다른 라우터에서 뿌린다.

export default function SearchInput({ initialValue = '' }: Props) {
  const [search, setSearch] = useState(initialValue);
  const { refreshSearch } = usePosts();
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    refreshSearch(search);
    navigate(`/search/${search}`);
  }

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input value={search} onChange={onChangeSearch} />
        <Button></Button>
      </Form>
    </>
  );
}
const Form = styled.form`
  margin-right: 0.3rem;
`;
const Input = styled.input`
  border: none;
  padding: 0.3rem 0rem;
  padding-left: 0.1rem;
  border-radius: 0.1rem;
  width: 20vw;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 1150px) {
    width: 30vw;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Button = styled.button`
  opacity: 0;
`;
