import * as React from 'react';
import styled from 'styled-components/macro';
import { Link, useNavigate } from 'react-router-dom';

export function Results({ products, sortFunc }) {

   const [sort, setSort] = React.useState<string>('Menor precio')
   const ref = React.useRef<any>(null)
   const arrow = React.useRef<any>(null)

   return (
      <Wrapper>
         <Sort>
            Ordenar por <span onClick={() => {
               if (ref.current.style.display === 'none') {
                  ref.current.style.display = 'block'
                  arrow.current.style.transform = 'rotate(180deg)'
               } else {
                  ref.current.style.display = 'none'
                  arrow.current.style.transform = 'rotate(0deg)'
               }
            }}>
               {sort}
               <svg ref={arrow} x="0px" y="0px" viewBox="0 0 330 330" width='10px' height='12px'>
                  <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
               </svg>
            </span>
            <Select >
               <OptionWrapper ref={ref}>
                  <Option onClick={(e) => {
                     sortFunc(e, '<')
                     setSort('Mayor precio')
                     ref.current.style.display = 'none'
                     arrow.current.style.transform = 'rotate(0deg)'
                  }}>Menor precio</Option>
                  <Option onClick={(e) => {
                     sortFunc(e, '>')
                     setSort('Mayor precio')
                     ref.current.style.display = 'none'
                     arrow.current.style.transform = 'rotate(0deg)'
                  }}>Mayor precio</Option>
               </OptionWrapper>
            </Select>
         </Sort>
         <Content>{products ? products.map((product, i) =>
            <ElemWrapper key={i}>
               <Elem>
                  <Img src={'http://localhost:3001/' + product.photos[0]}></Img>
                  <Info>
                     <Name>{product.name}</Name>
                     <Price>$ {product.price}</Price>
                     <Description>{product.description}</Description>
                  </Info>
               </Elem>
            </ElemWrapper>)
            : null}
         </Content>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   flex: 1;
   margin-bottom: 50px;
`;
const OptionWrapper = styled.div`
   position: absolute;
   background: white;
   display: block;
   right: 0;
   z-index: 99;
`;
const Option = styled.div`
   border-left: 5px solid transparent;
   border-radius: 3px;
   height: 40px;
   line-height: 20px;
   padding: 10px 20px;
   &:hover {
      border-left: 5px solid var(--blue);
      background: lightskyblue;
   }
`;
const Select = styled.div`
   position: relative;

`;
const Sort = styled.div`
   width: 100%;
   text-align: end;
   margin: 30px 40px 15px 10px;
   & span {
      & svg {
         margin-left: 5px;
         transform: rotate(0deg);
         transition: all .3s;
      }
   }
`;
const Content = styled.div`
   position: relative;
   background: white;
`;
const ElemWrapper = styled.div`
   position: relative;
   margin: 10px;
   padding: 40px 50px;
   border-bottom: 1px solid lightgray;
`;
const Elem = styled.div`
   display: flex;
`;
const Img = styled.img`
   object-fit: contain;
   width: 150px;
`;
const Info = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 50px;
`;
const Price = styled.h2`
   margin: 0;
`;
const Name = styled.p`
   font-size: 1.1rem;
   color: #333333;
   margin: 0;
`;
const Description = styled.div`
   padding: 0 15px;
   opacity: 0;
   transition: all .15s;
`;