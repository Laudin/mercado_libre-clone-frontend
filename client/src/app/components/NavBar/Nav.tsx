import * as React from 'react';
import styled from 'styled-components/macro';
import logo from './assets/logo__large_plus.png';
import { User } from './User';
import { SendTo } from './SendTo';
import { Link } from 'react-router-dom';

export function Nav(props) {
  const categories = [
    'Vehículos',
    'Inmuebles',
    'Supermercado',
    'Farmacia',
    'Tecnología',
    'Herramientas',
    'Construcción',
    'Deportes y Fitness',
    'Moda',
    'Juegos y Juguetes',
    'Belleza y Ciudado Personal',
  ];
  const categoriesList: JSX.Element[] = categories.map((item, i) => (
    <MyLink key={i} to={item}>{item}</MyLink>
  ));

  React.useEffect(() => {
    return;
  });

  return (
    <Wrapper>
      {!props.location ? <SendTo /> : <Link to="/"><Logo src={logo} /></Link>}
      <NavBar>
        <Category>
          Categorias
          <CategoryWrapper>{categoriesList}</CategoryWrapper>
        </Category>
        <MyLink to={'#'}>Ofertas</MyLink>
        <MyLink to={'#'}>Historial</MyLink>
        <MyLink to={'/supermercado'}>Supermercado</MyLink>
        <MyLink to={'Moda'}>Moda</MyLink>
        <MyLink to={'/publish'}>Vender</MyLink>
        <MyLink to={'#'}>Ayuda</MyLink>
      </NavBar>
      <User />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 5px;
  width: 95%;
`;
const NavBar = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
const MyLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
const CategoryWrapper = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: lightgray;
  border-radius: 5px;
  width: 200px;
  padding: 0px;
  visibility: hidden;
  left: -50%;
  z-index: 99;
  transition: all 0.3s;
  & ${MyLink} {
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background: lightskyblue;
    }
  }
`;
const Category = styled.div`
  position: relative;
  &:hover ${CategoryWrapper} {
    visibility: visible;
  }
`;
const Logo = styled.img`
  display: flex;
`;
