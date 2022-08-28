import * as React from 'react'
import { Search } from './Search'
import { Nav } from './Nav'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'


export function NavBar() {

   const PublisLocation = useLocation().pathname === '/publish'
   const LoginLocation = useLocation().pathname === '/login'
   return (
      <Wrapper>
         {!LoginLocation && <Container>
            {!PublisLocation && <Search />}
            <Nav PublisLocation={PublisLocation} />
         </Container>}
      </Wrapper>
   )
}

const Wrapper = styled.div`
   background-color: #fff159;
   @media (max-width: 1000px) {
      min-width: 1000px;
   }
`
const Container = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 1240px;
   margin: auto;
`;