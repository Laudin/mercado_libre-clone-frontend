import * as React from 'react';
import styled from 'styled-components/macro';
import { User } from './User';
import { SendTo } from './SendTo';
import { Link } from 'react-router-dom';

export function Nav() {
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
    <Link key={i} to={item}>
      {item}
    </Link>
  ));

  React.useEffect(() => {
    return;
  });

  return (
    <Wrapper>
      <SendTo />
      <NavBar>
        <Category>
          Categorias
          <CategoryWrapper>{categoriesList}</CategoryWrapper>
        </Category>
        <NavItem>
          <Link to={'#'}>Ofertas</Link>
        </NavItem>
        <NavItem>
          <Link to={'#'}>Historial</Link>
        </NavItem>
        <NavItem>
          <Link to={'/supermercado'}>Supermercado</Link>
        </NavItem>
        <NavItem>
          <Link to={'Moda'}>Moda</Link>
        </NavItem>
        <NavItem>
          <Link to={'#'}>Vender</Link>
        </NavItem>
        <NavItem>
          <Link to={'#'}>Ayuda</Link>
        </NavItem>
      </NavBar>
      <User />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const NavBar = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;
const Item = styled.a`
  color: white;
  text-decoration: none;
  padding: 3px 10px;
  &:hover {
    background: lightskyblue;
  }
`;
const CategoryWrapper = styled.div`
  position: absolute;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  background: lightgray;
  z-index: 99;
  transition: all 0.8s;
`;
const Category = styled.li`
  position: relative;
  &:hover ${CategoryWrapper} {
    visibility: visible;
  }
`;
const NavItem = styled.li``;
/* const Link = styled.a`
  color: black;
  text-decoration: none;
`; */
