import { useEffect, useState } from 'react';
import usePosts from '../hooks/api/usePosts';
import { colors } from '../styles/Colors';

import styled from 'styled-components';

export default function ListSection() {
  const { postValue, deletePost } = usePosts();

  function onClickDeleteBtn(postId: number) {
    if (confirm('글을 삭제할까요?')) {
      deletePost(postId);
    }
  }

  return (
    <Container>
      {postValue.map(list => (
        <List key={list.postId}>
          <Title>{list.postTitle}</Title>
          <Content>{list.postContent}</Content>
          <Wrapper>
            <div>
              <Id>{list.postId}번째 글</Id>
              <Time>{list.createTime} 생성</Time>
            </div>
            <div>
              <DeleteBtn onClick={() => onClickDeleteBtn(list.postId)}>삭제</DeleteBtn>
            </div>
          </Wrapper>
        </List>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin-top: 2.5rem;
  padding: 0 18rem;
`;
const List = styled.div`
  padding: 0 0.35rem;
  min-width: 50vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid rgba(217, 188, 238, 0.45);
`;
const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
`;
const Content = styled.span`
  font-size: 1rem;
  margin-bottom: 3rem;
  opacity: 0.8;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const Id = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
  margin-right: 2rem;
`;
const Time = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
`;
const DeleteBtn = styled.button`
  border: none;
  background-color: ${colors.white};
  font-size: 0.7rem;
  opacity: 0.6;
`;
