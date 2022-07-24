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
    <CatItem key={i}><MyLink to={item}>{item}</MyLink></CatItem>
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
          <MyLink to={'#'}>Ofertas</MyLink>
        </NavItem>
        <NavItem>
          <MyLink to={'#'}>Historial</MyLink>
        </NavItem>
        <NavItem>
          <MyLink to={'/supermercado'}>Supermercado</MyLink>
        </NavItem>
        <NavItem>
          <MyLink to={'Moda'}>Moda</MyLink>
        </NavItem>
        <NavItem>
          <MyLink to={'#'}>Vender</MyLink>
        </NavItem>
        <NavItem>
          <MyLink to={'#'}>Ayuda</MyLink>
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
/* const Item = styled.a`
  color: white;
  text-decoration: none;
  padding: 3px 10px;
  &:hover {
    background: lightskyblue;
  }
`; */
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
`;
const Category = styled.li`
  position: relative;
  &:hover ${CategoryWrapper} {
    visibility: visible;
  }
`;
const CatItem = styled.li`
  padding: 10px;
  list-style: none;
  border-radius: 5px;
  &:hover {
    background: lightskyblue;
  }
 `
const NavItem = styled.li`

`;
const MyLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
