import React, { useState, FormEvent, ChangeEvent, useRef } from 'react';
import ReactMde from 'react-mde';
import { useNavigate } from 'react-router-dom';
import * as Showdown from 'showdown';

//hooks
import useInput from '../hooks/useInput';
import usePosts from '../hooks/api/usePosts';

//css
import styled from 'styled-components';
import { colors } from '../styles/Colors';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { text } from 'stream/consumers';

export default function InputSection() {
  const { createPost, patchPost } = usePosts();
  const {
    titleValue,
    contentValue,
    category,
    setcontentValue,
    onChangeTitle,
    onChangeContent,
    onChangeCategory,
    clearInput,
  } = useInput({});
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>('write');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (titleValue.length == 0 || contentValue.length == 0) {
      alert('글 또는 내용이 비어있습니다.');
    } else {
      createPost(titleValue, contentValue, category);
      clearInput();
      navigate('/');
    }
  }

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <TitleInput placeholder="제목을 입력하세요" value={titleValue} onChange={onChangeTitle} />
        <CategoryInput
          placeholder="태그를 입력하세요 (예시. FRONTEND | BACKEND | IOS)"
          value={category}
          onChange={onChangeCategory}
        />
        <ReactMde
          value={contentValue}
          onChange={setcontentValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
          childProps={{
            writeButton: {
              tabIndex: -1,
            },
          }}
          minEditorHeight={500}
        ></ReactMde>
        <BtnContainer>
          <SubmitBtn>등록</SubmitBtn>
          <PatchBtn>수정</PatchBtn>
        </BtnContainer>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 2.3rem;
`;
const TitleInput = styled.input`
  margin-top: 3rem;
  :focus {
    outline: none;
  }
  line-height: 3rem;
  padding: 0;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid rgba(217, 188, 238, 0.6);
  border-radius: 0.1rem;
  padding-left: 0.1rem;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.mode.bgColor};
  color: ${({ theme }) => theme.mode.color};

  @media screen and (max-width: 500px) {
    margin-top: 0.5rem;
  }
`;
const CategoryInput = styled.input`
  border: none;
  line-height: 3rem;
  :focus {
    outline: none;
  }
  padding-left: 0.1rem;
  opacity: 0.7;
  background-color: ${({ theme }) => theme.mode.bgColor};
  color: ${({ theme }) => theme.mode.color};
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  padding-bottom: 1rem;
`;
const PatchBtn = styled.button`
  border: none;
  width: 15%;
  margin-left: 0.5rem;
  color: ${colors.white};
  background-color: ${colors.main};
  @media screen and (max-width: 500px) {
    width: 25%;
  }
`;
const SubmitBtn = styled.button`
  border: none;
  width: 15%;
  padding: 0.5rem 0;
  color: ${colors.white};
  background-color: ${colors.main};
  @media screen and (max-width: 500px) {
    width: 25%;
  }
`;
