import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom'
import useToken from '../../hooks/useToken';
import { getProductsById } from '../../api/productsApi';
import { Product } from '../../../types'

export function ProductPage(props) {

   const [product, setProduct] = React.useState<any>(null)
   const location = useLocation()

   React.useEffect(() => {
      getProductsById(location.pathname.slice(1)).then(res => setProduct(res))
   }, [])

   return (
      <>
         <Helmet>
            <title>HomePage</title>
            <meta name="description" content="A Boilerplate application homepage" />
         </Helmet>
         <Wrapper>
            <Show>
               <Image></Image>
               <Info></Info>
               <Characteristics></Characteristics>
            </Show>
         </Wrapper>
      </>
   );
}

const Wrapper = styled.div`
   width: 1240px;
   margin: auto;
`;
const Show = styled.section`
   background: white;
`;
const Image = styled.div`
   width: 75%;
`;
const Info = styled.div`
   width: 25%;
`;
const Characteristics = styled.div`

`;

