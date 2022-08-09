import * as React from 'react';
import styled from 'styled-components/macro';
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
      <MyLink key={i} to={`/c/${item}`}>{item}</MyLink>
   ));

   React.useEffect(() => {
      return;
   });

   return (
      <Wrapper>
         {!props.location ? <SendTo /> :
            <Link to="/">
               <Logo src='http://localhost:3001/static/logo__large_plus.png' />
            </Link>}
         <NavBarWrapper>
            <NavBar>
               <Category>
                  Categorias
                  <svg x="0px" y="0px" viewBox="0 0 330 330" width='10px' height='12px'>
                     <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                     c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                     s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                  </svg>
                  <CategoryWrapper>{categoriesList}</CategoryWrapper>
               </Category>
               <MyLink to={'#'}>Ofertas</MyLink>
               <MyLink to={'#'}>Historial</MyLink>
               <MyLink to={'/c/supermercado'}>Supermercado</MyLink>
               <MyLink to={'/c/ropa'}>Moda</MyLink>
               <MyLink to={'/publish'}>Vender</MyLink>
               <MyLink to={'#'}>Ayuda</MyLink>
            </NavBar>
         </NavBarWrapper>
         <User />
      </Wrapper>
   );
}

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 0 auto;
   width: 95%;
`;
const NavBarWrapper = styled.div`
   flex: 0.77;
   display: flex;
   align-items: flex-end;
   margin-bottom: 5px;
`;
const NavBar = styled.div`
   display: flex;
   gap: 15px;
   justify-content: space-around;
`;
const MyLink = styled(Link)`
   text-decoration: none;
`;
const CategoryWrapper = styled.ul`
   position: absolute;
   display: flex;
   flex-direction: column;
   background: #333333;
   border-radius: 5px;
   width: 200px;
   margin: 5px;
   padding: 10px 0px;
   visibility: hidden;
   left: -50%;
   z-index: 99;
   transition: all 0.3s;
   & ${MyLink} {
      color: white;
      padding: 10px;
      border-radius: 5px;
      &:hover {
         background: var(--blue);
      }
   }
   &:before {
      content: "";
      position: absolute;
      top: -5px;
      right: 81px;
      background: inherit;
      width: 10px;
      height: 10px;
      transform: rotate(45deg)
   }
`;
const Category = styled.div`
   position: relative;
   display: inline;
   & svg {
      margin-left: 5px;
   }
   &:hover ${CategoryWrapper} {
      visibility: visible;
   }
   `;
const Logo = styled.img`
   display: flex;
`;
