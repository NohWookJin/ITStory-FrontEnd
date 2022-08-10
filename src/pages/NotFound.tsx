//css
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { colors } from '../styles/Colors';

export default function NotFound() {
  return (
    <>
      <Container>
        <h1>403! 페이지를 찾을 수 없어요</h1>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
`;
