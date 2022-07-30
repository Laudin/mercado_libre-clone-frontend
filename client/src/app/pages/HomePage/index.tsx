import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Slider } from '../../components/Slider';
import { ProductsList } from '../../components/ProductsSlider';
import styled from 'styled-components/macro';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <Slider />
        <Content>
          <Headline>Supermercado</Headline>
          <ProductsList category="Supermercado" />
        </Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;
const Headline = styled.h2`
  margin: 30px 0 0 10px;
`;
const Content = styled.div`
  width: 1240px;
  margin: auto;
`;
