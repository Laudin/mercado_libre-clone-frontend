import * as React from 'react'
import styled from 'styled-components/macro'
 

export function Slider() {
   return (
      <Wrapper>
         <Slide />
      </Wrapper>
   )
}

const Wrapper = styled.div`
   height: 200px;
   width: 100%;
`
const Slide = styled.div`
   height: 100%;
   background: lightgoldenrodyellow;
`
const Category = styled.li`

`