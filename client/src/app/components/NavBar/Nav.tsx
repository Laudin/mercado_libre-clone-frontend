import * as React from 'react'
import styled from 'styled-components/macro'
import { User } from './User'
import { SendTo } from './SendTo'
 
export function Nav() {

   const [hover, setHover] = React.useState(false)
   const categories = ['Vehículos', 'Inmuebles', 'Supermercado', 'Farmacia', 'Tecnología', 'Herramientas', 'Construcción', 'Deportes y Fitness', 'Moda', 'Juegos y Juguetes', 'Belleza y Ciudado Personal']
   const categoriesList = categories.map(item => <Item target="_blank" href="#">{item}</Item>)

   React.useEffect(() => {
      

      
      return
   })

   return (
      <Wrapper>
         <SendTo />
         <NavBar>
            <Category
               onMouseEnter={() => setHover(hover => true)}
               onMouseLeave={() => setHover(hover => false)}
               >
               Categorias
               <CategoryWrapper>
                  {hover && categoriesList}
               </CategoryWrapper>
            </Category>
            <NavItem><Link href="#">Ofertas</Link></NavItem>
            <NavItem><Link href="#">Historial</Link></NavItem>
            <NavItem><Link href="#">Supermercado</Link></NavItem>
            <NavItem><Link href="#">Moda</Link></NavItem>
            <NavItem><Link href="#">Vender</Link></NavItem>
            <NavItem><Link href="#">Ayuda</Link></NavItem>
         </NavBar>
         <User />
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 10px 0;
`
const NavBar = styled.ul`
   display: flex;
   gap: 10px;
   list-style: none;
`
const Category = styled.li`
   position: relative;
`
const Item = styled.a`
   color: white;
   text-decoration: none;
`
const CategoryWrapper = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   background: lightgray;
`
const NavItem = styled.li`
   
`
const Link = styled.a`
   color: black;
   text-decoration: none;
`