// css
import styled from 'styled-components';
import ITStoryLogo from '../images/ITStoryLogo.png';

export default function IntroSection() {
  return (
    <Wrapper>
      <Border>
        <Img src={ITStoryLogo} alt="" />
        <Text>
          <TextTitle>팀 아이티스토리</TextTitle>
          <TextSub>개발자를 위한 지식 공유 블로그</TextSub>
        </Text>
      </Border>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 18rem;
  margin-bottom: 4rem;
  height: 20%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1150px) {
    padding: 0 10rem;
  }
  @media screen and (max-width: 700px) {
    padding: 0 7.5rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 1.8rem;
  }
  padding-top: 2rem;
`;
const Border = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 8rem;
  padding-left: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.1rem solid rgba(217, 188, 238, 0.3);
`;
const Img = styled.img`
  width: 10vw;
  border-radius: 50%;
  opacity: 0.8;
  @media screen and (max-width: 1150px) {
    width: 15vw;
  }
  @media screen and (max-width: 500px) {
    width: 20vw;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  @media screen and (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 2rem;
  }
`;
const TextTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  @media screen and (max-width: 1150px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
`;
const TextSub = styled.span`
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.8;
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
