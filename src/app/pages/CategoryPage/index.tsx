import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProductsList } from '../../components/ProductsSlider'
import styled from 'styled-components/macro';

export function CategoryPage(props) {

   return (
      <>
         <Helmet>
            <title>HomePage</title>
            <meta name="" content="" />
         </Helmet>
         <Wrapper>
            <h1>Category</h1>
            <ProductsList category='Supermercado' />
         </Wrapper>
      </>
   );
}

const Wrapper = styled.div`
   width: 1240px;
   margin: auto;
`;