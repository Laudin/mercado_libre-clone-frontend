import { useState } from 'react';

export default function useCart() {
   const getCart = () => {
      const cartString = localStorage.getItem('cart');
      console.log('cartString', cartString)
      const cartJSON = cartString ? JSON.parse(cartString as string) : { ids: [] };
      return cartJSON;
   };

   const [cart, setCart] = useState(getCart());

   const saveCart = userCart => {
      console.log('saveCart', userCart)
      if (!userCart) {
         localStorage.setItem('cart', '{"ids": []}');
         setCart('');
         return
      }
      localStorage.setItem('cart', JSON.stringify(userCart));
      setCart(userCart);
   };

   return {
      setCart: saveCart,
      cart: getCart(),
   };
}
