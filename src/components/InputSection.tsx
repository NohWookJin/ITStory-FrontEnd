import React, { useState, FormEvent, ChangeEvent, createRef } from 'react';
import ReactMde from 'react-mde';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import usePosts from '../hooks/api/usePosts';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

//css
import styled from 'styled-components';
import { colors } from '../styles/Colors';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default function InputSection(loadSuggestions: any) {
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
          minEditorHeight={490}
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
  height: 100%;
  overflow: hidden;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 1.5rem;
`;
const TitleInput = styled.input`
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
`;
const CategoryInput = styled.input`
  border: none;
  line-height: 3rem;
  :focus {
    outline: none;
  }
  padding-left: 0.1rem;
  opacity: 0.7;
`;
const ContentInput = styled.textarea`
  :focus {
    outline: none;
  }
  height: 60vh;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  padding-left: 0.1rem;
  word-wrap: break-word;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
`;
const PatchBtn = styled.button`
  border: none;
  width: 15%;
  margin-left: 0.5rem;
  color: ${colors.white};
  background-color: ${colors.main};
`;
const SubmitBtn = styled.button`
  border: none;
  width: 15%;
  padding: 0.5rem 0;
  color: ${colors.white};
  background-color: ${colors.main};
`;
