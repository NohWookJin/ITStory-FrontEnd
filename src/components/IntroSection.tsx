import React from 'react';

// css
import styled from 'styled-components';
import { colors } from '../styles/Colors';
import DoorImage from '../images/IMG_0349.jpg';

export default function IntroSection() {
  return (
    <Wrapper>
      <Img src={DoorImage} alt="DoorImage" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 3rem;
  height: 20%;
`;
const Img = styled.img`
  width: 100%;
  height: 55vh;
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 30vh;
  }
`;
