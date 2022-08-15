//components
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import SearchList from '../components/SearchList';
import usePosts from '../hooks/api/usePosts';
//css
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function Search() {
  const { isLoading } = usePosts();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <IntroSection />
        <SearchList />
        {isLoading && <Loading />}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  min-width: 50vw;
`;
const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  opacity: 0.5;
  background-color: lightgray;
`;
