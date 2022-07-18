import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../../components/NavBar'
import { Slider } from '../../components/Slider'
import styled from 'styled-components/macro'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <NavBar />
        <Slider />
        <Elresto>My HomePage</Elresto>
      </Container>
    </>
  );
}

const Elresto = styled.div`
  height: 200vh;
`
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;500&display=swap');

  font-family: 'Catamaran', sans-serif;
  font-size: 0.9rem;
`