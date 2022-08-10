import React from 'react';
import { Link } from 'react-router-dom';

// css
import styled from 'styled-components';
import { colors } from '../styles/Colors';
import Logo from '../images/ITStoryLogo.png';

export default function Header() {
  return (
    <>
      <Wrapper>
        <HeaderLeft>
          <StyledLink to={`/`}>
            <Img src={Logo} alt="logo" />
            <Title>IT Story</Title>
          </StyledLink>
        </HeaderLeft>
        <HeaderRight>
          <Search>search</Search>
          <span>menu</span>
        </HeaderRight>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  position: fixed;
  z-index: 9999;
  opacity: 0.8;
  width: 100vw;
  height: 7vh;
  padding: 0 15rem;
  background-color: ${colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  height: 7vh;
  margin-right: 0rem;
`;
const Title = styled.span`
  margin-top: 0.3rem;
  font-weight: 600;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Search = styled.span`
  margin-right: 1rem;
`;
