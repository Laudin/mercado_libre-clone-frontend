import * as React from 'react'
import { Search } from './Search'
import { Nav } from './Nav'
import styled from 'styled-components/macro'
 

export function NavBar() {
   return (
      <Wrapper>
         <Search />
         <Nav />
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #fff159;
   padding: 0 20px;
`