import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProductList } from '../../components/ProductList'
import { Filter } from '../../components/Filter'
import styled from 'styled-components/macro';

export function ProductListPage(props) {

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <Filter />
        <ProductList />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`

`;