import * as React from 'react'
import { Search } from './Search'
import { Nav } from './Nav'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
 

export function NavBar() {

   const location = useLocation().pathname === '/publish'
   return (
      <Wrapper>
         {!location && <Search />}
         <Nav location={location}/>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #fff159;
   padding: 0 20px;
`