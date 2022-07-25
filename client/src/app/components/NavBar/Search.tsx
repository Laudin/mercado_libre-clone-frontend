import * as React from 'react';
import styled from 'styled-components/macro';
import logo from './assets/logo__large_plus.png';
import { Link } from 'react-router-dom';

export function Search() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <SearchBar>
        <SearchButton src="#" />
        <SearchInput placeholder="Buscar.." />
      </SearchBar>
      <p>Envíos gratis en 24 hs a partir de $4.000</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 5px;
  width: 95%;
`;
const Logo = styled.img`
  display: flex;
`;
const SearchBar = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 40px;
`;
const SearchButton = styled.img``;
const SearchInput = styled.input`
  flex: 0.5;
`;
