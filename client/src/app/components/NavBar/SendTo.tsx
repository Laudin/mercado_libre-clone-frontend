import * as React from 'react'
import styled from 'styled-components/macro'

export function SendTo() {

   const [direction, setDirection] = React.useState('Capital Federal')

   return (
      <Wrapper>
         <Icon src=""></Icon>
         <DirectionWrapper>
            <Text>Enviar a</Text>
            <Direction>{direction}</Direction>
         </DirectionWrapper>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   
`
const Icon = styled.img`
`
const DirectionWrapper = styled.div`
   display: flex;
   flex-direction: column;
`
const Text = styled.p`
   margin: 0;
`
const Direction = styled.p`
   margin: 0;
`
