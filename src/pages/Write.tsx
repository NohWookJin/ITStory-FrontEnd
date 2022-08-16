//components
import Header from '../components/Header';
import InputSection from '../components/InputSection';

//hooks
import { useDarkMode } from '../hooks/useDarkMode';

//css
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../styles/Theme';

export default function Write() {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === 'lightTheme' ? { mode: lightTheme } : { mode: darkTheme };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header themeMode={themeMode} toggleTheme={toggleTheme} />
        <Container>
          <InputSection></InputSection>
        </Container>
      </Wrapper>
    </ThemeProvider>
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
