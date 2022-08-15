import { Link } from 'react-router-dom';

//css
import styled from 'styled-components';
import { colors } from '../styles/Colors';

export default function Main() {
  return (
    <Container>
      <Link to={`/writes/`}>
        <NewPostBtn>글 작성</NewPostBtn>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  min-width: 50vw;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 0 20rem;
  @media screen and (max-width: 1150px) {
    padding: 0 10rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 5rem;
  }
`;
const NewPostBtn = styled.button`
  padding: 0.7rem;
  border: none;
  border-radius: 5%;
  color: ${colors.white};
  background-color: ${colors.main};
  :hover {
    font-weight: 800;
    transition: all 0.5s;
  }
`;
