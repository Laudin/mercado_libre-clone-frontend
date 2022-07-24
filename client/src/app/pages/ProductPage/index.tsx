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
      <Container>
        <ContentWrapper>
          <Content>Product</Content>
        </ContentWrapper>
      </Container>
    </>
  );
}

const ContentWrapper = styled.div``;
const Content = styled.div`
  width: 1000px;
  margin: auto;
  height: 200vh;
`;
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;500&display=swap');

  font-family: 'Catamaran', sans-serif;
  font-size: 0.9rem;
  background: #ebebeb;
`;
