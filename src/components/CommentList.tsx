import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

//components
import { instance } from '../libs/api';
import useComments from '../hooks/api/useComments';

//css
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { colors } from '../styles/Colors';
import logo from '../images/ITStoryLogo.png';

export default function CommentList() {
  const { commentValue, deleteComments } = useComments();

  function onClickDelete(commentId: number) {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteComments(commentId);
    }
  }

  return (
    <Wrapper>
      {commentValue.map(list => (
        <Container key={list.commentId}>
          <Img src={logo} alt="" />
          <List>
            <Writer>{list.commentWriter}</Writer>
            <Content>{list.commentContent}</Content>
            <div>
              <Time>{list.createDateTime} 작성되었습니다</Time>
              <Border> | </Border>
              <DeleteBtn
                onClick={() => {
                  onClickDelete(list.commentId);
                }}
              >
                삭제
              </DeleteBtn>
            </div>
          </List>
        </Container>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 20rem;
  padding-bottom: 10rem;
  width: 100%;
  @media screen and (max-width: 1150px) {
    padding: 0 10rem;
    padding-bottom: 10rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 5rem;
    padding-bottom: 10rem;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Img = styled.img`
  width: 1.3vw;
  opacity: 0.6;
  @media screen and (max-width: 1150px) {
    width: 2vw;
  }
  @media screen and (max-width: 500px) {
    width: 4vw;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  margin-left: 0.5rem;
`;
const Writer = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
`;
const Content = styled.span`
  font-size: 0.85rem;
`;
const Time = styled.span`
  font-size: 0.65rem;
  padding-top: 0.5rem;
  margin-right: 0.3rem;
  opacity: 0.4;
`;
const Border = styled.span`
  font-size: 0.65rem;
  opacity: 0.4;
`;
const DeleteBtn = styled.button`
  border: none;
  background-color: ${colors.white};
  margin-left: 0.3rem;
  font-size: 0.6rem;
  opacity: 0.4;
  :hover {
    opacity: 1;
    color: ${colors.main};
  }
`;
