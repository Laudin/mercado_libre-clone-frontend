import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { CartContext } from '../../context/Cart';
import { getProductsById } from '../../api/productsApi'

export function CartPage() {

   const { cart, dispatchCart } = React.useContext(CartContext);
   const [list, setList] = React.useState<any | null>()

   React.useEffect(() => {
      window.scrollTo(0, 0)
      console.log(cart)
      //const apiCalls = cart.map(item => getProductsById(item))
      //Promise.all(apiCalls).then(res => setList(res as any)).catch(err => console.log(err))

   }, [])
   const handleDelete = (id: string) => {
      console.log(cart.filter(item => item !== id))
      dispatchCart({}, { type: "delete_from_cart", product: '' })
      setList(list.filter(item => item.id !== id))
   }

   return (
      <>
         <Helmet>
            <title>Carrito</title>
            <meta name="" content="" />
         </Helmet>
         <Wrapper>
            {/* <CartContainer>{list ? list.map((product, i) =>
               <ElemWrapper key={i}>
                  <Elem>
                     <Delete onClick={(e) => handleDelete(product.id)}>Eliminar</Delete>
                     <Img src={'http://localhost:3001/' + product.photos[0]}></Img>
                     <Info>
                        <Name>{product.name}</Name>
                        <Price>$ {product.price}</Price>
                     </Info>
                  </Elem>
               </ElemWrapper>)
               : <div>Nada todavía..</div>}
            </CartContainer>
            <Total>$ {list ? list.reduce((prev, curr) => prev + curr.price, 0) : '0'}</Total> */}
         </Wrapper>
      </>
   );
}

const Wrapper = styled.div`
   background: white;
   width: 1240px;
   margin: 25px auto;
   box-shadow: 0 0 1px 1px lightgray;
`;
const CartContainer = styled.div`
   display: flex;
   flex-direction: column;
`;
const Delete = styled.div`
   position: absolute;
   top: 15px;
   right: 15px;
   cursor: pointer;
`;
const ElemWrapper = styled.div`
   position: relative;
   padding: 25px 50px;
   border-bottom: 1px solid lightgray;
`;
const Elem = styled.div`
   display: flex;
`;
const Img = styled.img`
   object-fit: contain;
   width: 150px;
`;
const Info = styled.div`
   display: flex;
   justify-content: space-between;
   flex: 1;
   margin-left: 50px;
`;
const Price = styled.h2`

`;
const Name = styled.h2`
   margin: none;
`;
const Total = styled.h2`
   text-align: end;
   margin: none;
   padding: 25px 50px;
`;
