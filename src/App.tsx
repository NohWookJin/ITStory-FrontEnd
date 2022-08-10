import React from 'react';

//components
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Main from './components/Main';
import ListSection from './components/ListSection';
//css
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { colors } from './styles/Colors';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <IntroSection />
      <Main />
      <ListSection />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-width: 50vw;
  height: 200vh;
`;
