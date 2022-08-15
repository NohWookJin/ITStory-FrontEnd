import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

//components
import Header from '../components/Header';
import { instance } from '../libs/api';
import usePosts from '../hooks/api/usePosts';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

//css
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { colors } from '../styles/Colors';

export default function Detail() {
  const [text, setText] = useState<IIndividual | null>(null);
  const { postId } = useParams();
  const { deletePost, patchPost } = usePosts();
  const navigate = useNavigate();

  useEffect(() => {
    async function renderPost() {
      const response = await instance.get<{}, IIndividual>(`/post/${postId}`);
      setText(response);
    }
    renderPost();
  }, []);

  function onClickDelete(postId: number | undefined) {
    if (confirm('정말 삭제하시겠습니까?')) {
      deletePost(postId);
      navigate('/');
    }
  }

  function onClickPatch(postId: number | undefined) {
    if (confirm('수정하시겠습니까?')) {
      patchPost(postId);
      navigate('/writes');
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Section>
          <Title>{text?.post.postTitle}</Title>
          <SubTitle>
            <Time>{text?.post.createTime}</Time>
            <div>
              <Patch
                onClick={() => {
                  onClickPatch(text?.post.postId);
                }}
              >
                수정
              </Patch>
              <Delete
                onClick={() => {
                  onClickDelete(text?.post.postId);
                }}
              >
                삭제
              </Delete>
            </div>
          </SubTitle>
          <Content>{text?.post.postContent}</Content>
          <CommentCount>댓글 {text?.post.commentCount}개</CommentCount>
        </Section>
        <CommentInput />
        <CommentList />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 50%;
  height: 100vh;
`;
const Section = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20rem;
  padding-top: 7rem;
  @media screen and (max-width: 1150px) {
    padding: 0 10rem;
    padding-top: 7rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 5rem;
    padding-top: 7rem;
  }
`;
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  padding-bottom: 0.3rem;
  border-bottom: 0.1rem solid rgba(217, 188, 238, 0.45);
  min-width: 100%;
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;
const Time = styled.div`
  font-size: 0.8rem;
  opacity: 0.6;
`;
const Patch = styled.button`
  font-size: 0.7rem;
  opacity: 0.6;
  border: none;
  background-color: ${colors.white};
  :hover {
    color: ${colors.main};
  }
`;
const Delete = styled.button`
  padding-left: 0.5rem;
  font-size: 0.7rem;
  opacity: 0.6;
  border: none;
  background-color: ${colors.white};
  :hover {
    color: ${colors.main};
  }
`;
const Content = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 8.5rem;
  line-height: 200%;
  font-size: 0.9rem;
  text-align: justify;
`;
const CommentCount = styled.div`
  font-size: 0.8rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid rgba(217, 188, 238, 0.45);
`;
