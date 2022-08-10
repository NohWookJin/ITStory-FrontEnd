import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import usePosts from '../hooks/api/usePosts';

//css
import styled from 'styled-components';

export default function InputSection() {
  const { createPost } = usePosts();
  const { titleValue, contentValue, onChangeTitle, onChangeContent, clearInput } = useInput({});
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createPost(titleValue, contentValue);
    clearInput();
    navigate('/');
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <TitleInput placeholder="제목" value={titleValue} onChange={onChangeTitle} />
        <ContentInput placeholder="내용" value={contentValue} onChange={onChangeContent} />
        <SubmitBtn>등록</SubmitBtn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const TitleInput = styled.input`
  line-height: 3rem;
  padding: 0.5rem 0;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-bottom: none;
  border-radius: 0.1rem;
  padding-left: 0.1rem;
`;
const ContentInput = styled.input`
  line-height: 20rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.1rem;
  margin-bottom: 1rem;
  padding-left: 0.1rem;
`;
const SubmitBtn = styled.button`
  border: none;
  width: 15%;
  padding: 0.5rem 0;
`;
