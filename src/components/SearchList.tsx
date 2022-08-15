import usePosts from '../hooks/api/usePosts';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { colors } from '../styles/Colors';

export default function SearchList() {
  const { searchValue } = usePosts();
  console.log(searchValue);

  return (
    <>
      <Container>
        <Result>
          <Text>검색결과 </Text>
          <Number>{` "${searchValue.length}"`}</Number>
          <Textwo></Textwo>
        </Result>
        {searchValue.map(list => (
          <List key={list.postId}>
            <StlyedLink to={`/posts/${list.postId}`}>
              <Title>{list.postTitle}</Title>
              <Category>{list.postCategory}</Category>
              <Wrapper>
                <div>
                  <Id>{list.postId}번째 글</Id>
                  <Border>|</Border>
                  <Time>{list.createTime}</Time>
                </div>
              </Wrapper>
            </StlyedLink>
          </List>
        ))}
      </Container>
    </>
  );
}

const Result = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: 0.3rem;
  display: flex;
  align-items: center;
`;
const Text = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
`;
const Number = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${colors.main};
`;
const Textwo = styled.span`
  font-size: 2rem;
`;
const Container = styled.div`
  width: 100vw;
  margin-top: 2.5rem;
  padding: 0 18rem;
  @media screen and (max-width: 1150px) {
    padding: 0 10rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 5rem;
  }
`;
const StlyedLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: 23%;
  display: flex;
  flex-direction: column;
`;
const List = styled.div`
  padding: 0 0.35rem;
  min-width: 50vw;
  margin-bottom: 3rem;
  border-bottom: 0.1rem solid rgba(217, 188, 238, 0.45);
`;
const Title = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  margin: 1rem 0;
  margin-bottom: 1.7rem;
  margin-left: 0.1rem;
`;
const Category = styled.div`
  font-size: 0.65rem;
  color: ${colors.white};
  background-color: ${colors.main};
  border: 0.1rem solid;
  border-radius: 0.25rem;
  text-align: center;
  width: 5.5vw;
  padding: 0.35rem 0;
  @media screen and (max-width: 1150px) {
    width: 10vw;
  }
  @media screen and (max-width: 500px) {
    width: 15vw;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 0.1rem;
`;
const Id = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
`;
const Time = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
`;
const Border = styled.span`
  font-size: 0.7rem;
  opacity: 0.6;
  margin: 0 0.5rem;
`;
