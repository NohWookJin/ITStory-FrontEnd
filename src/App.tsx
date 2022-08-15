import React from 'react';

//components
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Main from './components/Main';
import ListSection from './components/ListSection';
import usePosts from './hooks/api/usePosts';
//css
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { colors, lightTheme, darkTheme, theme } from './styles/Colors';

export default function App() {
  const { isLoading } = usePosts();

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <IntroSection />
      <Main />
      <ListSection />
      {isLoading && <Loading />}
    </Container>
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
