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
      <NavBar />
      <Slider />
      <Elresto>My HomePage</Elresto>
    </>
  );
}

const Elresto = styled.div`
  height: 200vh;
`