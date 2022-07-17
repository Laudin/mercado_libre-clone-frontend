import * as React from 'react'
import styled from 'styled-components/macro'
import logo from './assets/logo__large_plus.png'

export function Search() {
   return (
      <Wrapper>
         <Logo src={logo}/>
         <SearchBar>
            <SearchButton src="#" />
            <SearchInput placeholder="Buscar.."/>
         </SearchBar>
         <p>Envíos gratis en 24 hs a partir de  $4.000</p>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 10px 0;
`
const Logo = styled.img`
   display: flex;
`
const SearchBar = styled.div`
   display: flex;
`
const SearchButton = styled.img`
   
`
const SearchInput = styled.input`
   
`
