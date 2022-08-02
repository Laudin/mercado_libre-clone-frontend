import * as React from 'react'
import styled from 'styled-components/macro'

export function SendTo() {

   const [direction, setDirection] = React.useState('Capital Federal')

   return (
      <Wrapper>
         <Icon src="http://localhost:3001/static/location.png"></Icon>
         <DirectionWrapper>
            <Text>Enviar a</Text>
            <Direction>{direction}</Direction>
         </DirectionWrapper>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   cursor: pointer;
   border: 1px solid transparent;
   border-radius: 5px;
   margin-bottom: 5px;
   padding: 2px;
   &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
   }
`
const Icon = styled.img`
   margin-top: 7px;
   opacity: 0.6;
   width: 30px;
   height: 30px;
`
const DirectionWrapper = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
`
const Text = styled.p`
   position: relative;
   font-size: 0.8rem;
   margin: 0;
   top: 8px;
`
const Direction = styled.p`
   margin: 0;
`
