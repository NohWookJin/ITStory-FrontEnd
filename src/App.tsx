import React, { useState } from 'react';

//components
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Main from './components/Main';
import ListSection from './components/ListSection';

//hooks
import usePosts from './hooks/api/usePosts';
import { useDarkMode } from './hooks/useDarkMode';
//css
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/Theme';

export default function App() {
  const { isLoading } = usePosts();
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === 'lightTheme' ? { mode: lightTheme } : { mode: darkTheme };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header themeMode={themeMode} toggleTheme={toggleTheme} />
          <Background>
            <IntroSection />
            <Main />
            <ListSection />
          </Background>
          {isLoading && <Loading />}
        </Container>
      </ThemeProvider>
    </>
  );
}

const Background = styled.div`
  background-color: ${({ theme }) => theme.mode.bgColor};
`;
const Container = styled.div`
  width: 100vw;
  min-width: 50vw;

  color: ${({ theme }) => theme.mode.color};
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
