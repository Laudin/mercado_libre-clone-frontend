import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import useToken from '../../hooks/useToken';
import * as productApi from '../../api/productsApi';

export function ProductPage(props) {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        Product Page
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`

`;

