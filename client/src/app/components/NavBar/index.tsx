import * as React from 'react'
import { Search } from './Search'
import { Nav } from './Nav'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'


export function NavBar() {

   const location = useLocation().pathname === '/publish'
   return (
      <Wrapper>
         <Container>
            {!location && <Search />}
            <Nav location={location} />
         </Container>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   background-color: #fff159;
`
const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 1240px;
   margin: auto;
`;