import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchInput from './SearchInput';

// css
import styled from 'styled-components';
import { colors } from '../styles/Colors';
import Logo from '../images/ITStoryLogo.png';
import { BiMoon, BiSearch } from 'react-icons/bi';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function Header() {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  function onClickSearchBtn() {
    if (isSearch == false) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
    console.log(isSearch);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <HeaderLeft>
          <StyledLink to={`/`}>
            <Img src={Logo} alt="logo" />
            <Title>아이티 스토리</Title>
          </StyledLink>
        </HeaderLeft>
        <HeaderRight>
          {isSearch && <SearchInput />}
          <Icons>
            <SearchBtn onClick={onClickSearchBtn}>
              <BiSearch className="search" />
            </SearchBtn>
            <DarkModeBtn>
              <BiMoon className="darkMode" />
            </DarkModeBtn>
          </Icons>
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
  min-width: 50vw;
  height: 7vh;
  padding: 0 15rem;
  background-color: ${colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1150px) {
    padding: 0 10rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0 5rem;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${colors.black};
`;
const Img = styled.img`
  height: 7vh;
`;
const Title = styled.span`
  margin-top: 0.3rem;
  font-weight: 800;
  :hover {
    font-size: 1.2rem;
    transition: all 0.5s;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Icons = styled.div`
  padding-top: 0.3rem;
  .search {
    font-size: 1.1rem;
    margin-right: 0.5rem;
  }
  .darkMode {
    font-size: 1.1rem;
    margin-left: 1rem;
  }
`;
const SearchBtn = styled.button`
  border: none;
  background-color: ${colors.main};
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const DarkModeBtn = styled.button`
  border: none;
  background-color: ${colors.main};
`;
