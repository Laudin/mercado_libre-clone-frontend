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
      <Container>
        <Slider />
        <ContentWrapper>
          <Content>
            <ProductsList />
          </Content>
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
const Container = styled.div``;
