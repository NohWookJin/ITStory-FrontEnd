import { useNavigate } from 'react-router-dom';

//css
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { colors } from '../styles/Colors';

export default function NotFound() {
  const navigate = useNavigate();

  function onClickBackBtn() {
    navigate('/');
  }

  return (
    <>
      <Container>
        <BackBtn onClick={onClickBackBtn}>⇦</BackBtn>
        <Text>페이지를 찾을 수 없어요</Text>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;
const BackBtn = styled.button`
  font-size: 3rem;
  font-weight: 600;
  border: none;
  background-color: ${colors.white};
  margin-right: 1rem;
`;
