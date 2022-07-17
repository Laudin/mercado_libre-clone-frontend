import * as React from 'react'
import styled from 'styled-components/macro'

export function User() {
   return (
      <Wrapper>
         <Item><Link>Crear Cuenta</Link></Item>
         <Item><Link>Ingresar</Link></Item>
         <Item><Link>Mis Compras</Link></Item>
         <Item><Link>Carrito</Link></Item>
      </Wrapper>
   )
}

const Wrapper = styled.ul`
   display: flex;
   gap: 10px;
   list-style: none;
`
const Item = styled.li`
`
const Link = styled.a`
   color: black;
   text-decoration: none;
   cursor: pointer;
`
