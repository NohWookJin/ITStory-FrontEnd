//components
import Header from '../components/Header';
import InputSection from '../components/InputSection';

//css
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { colors } from '../styles/Colors';
import usePosts from '../hooks/api/usePosts';

export default function Write() {
  const { createPost, postValue } = usePosts();

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Container>
        <InputSection></InputSection>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin-top: 3rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
`;
