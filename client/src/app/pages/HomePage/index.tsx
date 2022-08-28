import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Slider } from '../../components/Slider';
import { ProductsList } from '../../components/ProductsSlider';
import styled from 'styled-components/macro';

export function HomePage() {
   return (
      <>
         <Helmet>
            <title>Mercado Libre</title>
            <meta name="" content="" />
         </Helmet>
         <Wrapper>
            <Slider />
            <Content>
               <Payments>
                  <Element>
                     <Image src=''></Image>
                     <Title>Tarjeta de crédito</Title>
                  </Element>
                  <Element>
                     <Image src=''></Image>
                     <Title>Tarjeta de débito</Title>
                  </Element>
                  <Element>
                     <Image src=''></Image>
                     <Title>Cuotas sin tarjeta</Title>
                  </Element>
                  <Element>
                     <Image src=''></Image>
                     <Title>Efectivo</Title>
                  </Element>
               </Payments>
               <ProductsList category="Supermercado" />
               <ProductsList category="Electrodomésticos" />
               <ProductsList category="Vehículos" />
            </Content>
         </Wrapper>
      </>
   );
}

const Wrapper = styled.div`

`;
const Payments = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin: 50px 15px;
   padding: 10px 0px;
   background: white;
`;
const Element = styled.div`
   color: var(--blue)
`;
const Image = styled.img`
   width: 100px;
   border: 1px solid #e8e8e8;
   border-radius: 50%;
`;
const Title = styled.div`
   
`;

const Content = styled.div`
   width: 1240px;
   margin: auto;
`;
