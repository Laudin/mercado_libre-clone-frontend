import React from 'react';
import { reducer, initialState } from './reducer'
import * as api from '../../api/usersApi'

export const CartContext = React.createContext({
   cart: initialState,
   dispatchCart: reducer
})

export const CartProvider = ({ children }) => {

   const [cart, dispatchCart] = React.useReducer(reducer, initialState);

   // infinite loop..
   // api.getCart().then(res => dispatchCart({ type: "initialize", product: '', initialValue: res }))

   return (
      <CartContext.Provider value={{ cart, dispatchCart }}>
         {children}
      </CartContext.Provider>
   )
}