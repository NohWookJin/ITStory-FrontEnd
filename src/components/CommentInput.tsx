import React, { FormEvent } from 'react';

//hooks
import useComments from '../hooks/api/useComments';
import useCommentInput from '../hooks/useCommentInput';

//css
import styled from 'styled-components';
import { colors } from '../styles/Colors';

export default function CommentInput() {
  const { createComments } = useComments();
  const { commentName, commentContent, onChangeCommentName, onChangeCommentContent, clearCommentInput } =
    useCommentInput({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (commentName.length == 0 || commentContent.length == 0) {
      alert('이름 또는 내용이 비어있습니다.');
    } else {
      createComments(commentName, commentContent);
      clearCommentInput();
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <CommentWriter placeholder="이름" value={commentName} onChange={onChangeCommentName} />
        <CommentContent placeholder="내용" value={commentContent} onChange={onChangeCommentContent} />
        <CommentSubmit>등록</CommentSubmit>
      </Form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: 0 20rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 1150px) {
    padding: 0 10rem;
  }
  @media screen and (max-width: 700px) {
    padding: 0 7.5rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1.8rem;
  }
`;
const Form = styled.form`
  padding-top: 1rem;
  display: flex;
  width: 100%;
`;
const CommentWriter = styled.input`
  width: 15%;
  height: 3vh;
  border: none;
  border-bottom: 0.08rem solid rgba(0, 0, 0, 0.1);
  margin-right: 0.3rem;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 1150px) {
    width: 10%;
  }
  @media screen and (max-width: 700px) {
    width: 10%;
  }
  @media screen and (max-width: 500px) {
    width: 10%;
  }
  background-color: ${({ theme }) => theme.mode.bgColor};
  color: ${({ theme }) => theme.mode.color};
`;
const CommentContent = styled.input`
  width: 77.5%;
  height: 3vh;
  border: none;
  border-bottom: 0.08rem solid rgba(0, 0, 0, 0.1);
  margin-right: 0.8rem;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 1150px) {
    width: 70%;
  }
  @media screen and (max-width: 700px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 70%;
  }
  background-color: ${({ theme }) => theme.mode.bgColor};
  color: ${({ theme }) => theme.mode.color};
`;
const CommentSubmit = styled.button`
  opacity: 0.6;
  border: none;
  background-color: white;
  font-size: 0.8rem;
  :hover {
    opacity: 1;
    color: ${colors.main};
  }
  background-color: ${({ theme }) => theme.mode.bgColor};
  color: ${({ theme }) => theme.mode.color};
`;
