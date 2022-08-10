import React from 'react';

// css
import styled from 'styled-components';
import { colors } from '../styles/Colors';
import Blog from '../images/blogImage.png';

export default function IntroSection() {
  return (
    <>
      <Wrapper>
        <Image src={Blog} alt="대표이미지" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  padding: 0 20rem;
  opacity: 0.5;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  margin-top: 5rem;
  width: 100%;
`;
