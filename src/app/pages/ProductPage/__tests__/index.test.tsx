import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createRenderer } from 'react-test-renderer/shallow'
import 'jest-styled-components'

import { BrowserRouter } from 'react-router-dom'

import { ProductPage } from '../index'
import { UserProvider } from 'app/context/User'
import { CartProvider } from 'app/context/Cart'
import { NavBar } from 'app/components/NavBar'

const shallowRenderer = createRenderer()

describe('<ProductPage />', () => {

   beforeEach(() => {
      render(
         <BrowserRouter>
            <UserProvider>
               <CartProvider>
                  <NavBar />
                  <ProductPage />
               </CartProvider>
            </UserProvider>
         </BrowserRouter>);
   });

   describe("when click add cart", () => {
      beforeEach(() => {
         const add2cartButton = screen.getByTestId("add-cart")
         fireEvent.click(add2cartButton)
         fireEvent.click(add2cartButton)
      });

      it('should display products amount next to cart icon', async () => {
         const cartNum = screen.getByTestId("cart-num")

         expect(cartNum).toHaveTextContent("2")
      });
   })
})

//test styled-components
/* it('works fine', () => {
   const page = renderer.create(<HomePage />).toJSON()

}) */