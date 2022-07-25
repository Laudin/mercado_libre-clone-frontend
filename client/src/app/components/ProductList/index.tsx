import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import useToken from '../../hooks/useToken';
import * as productApi from '../../api/productsApi';

export function ProductList(props) {
  const [products, setProducts] = React.useState<any | null>(null);
  const { token, setToken } = useToken();

  React.useEffect(() => {
    console.log('calling api..');
    console.log(token);
    productApi.getProductsByCategory('Electrodomésticos', token).then(res => {
      console.log(res);
      if (res.error) {
        //
      } else {
        setProducts(res.data.products);
      }
    });
  }, [props]);

  const mappingProduct =
    products &&
    products.map((product, i) => {
      return (
        <ElemWrapper key={i}>
          <Elem>
            <Favorite><a>{'<3'}</a></Favorite>
            <Img src='https://http2.mlstatic.com/D_NQ_NP_984740-MLA41433583964_042020-O.webp'></Img>
            <Info>
               <Name>{product.name}</Name>
               <Price>${product.price}</Price>
               <Created>Mes: {new Date(product.createdAt).getMonth()}</Created>
               <Description>{product.description}</Description>
            </Info>
          </Elem>
        </ElemWrapper>
      );
    });

  if (products !== null) {
    //return <div>{mappingProduct}</div>;
  }

  return (
      <Container>
        <ContentWrapper>
          <Content>{mappingProduct}</Content>
        </ContentWrapper>
      </Container>
  );
}

const ContentWrapper = styled.div``;
const Content = styled.div`
  width: 1000px;
  margin: auto;
  height: 200vh;
`;
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;500&display=swap');

  font-family: 'Catamaran', sans-serif;
  font-size: 0.9rem;
  background: #ebebeb;
`;
const ElemWrapper = styled.div`
  display: inline-block;
  padding: 15px;
  @media (max-width: 770px) {
    width: 33%;
  }
  @media (max-width: 460px) {
    width: 50%;
  }
`;
const Favorite = styled.div`
  position: absolute;
  opacity: 0;
  border-radius: 50%;
  right: 0px;
  text-align: center;
  width: 30px;
  height: 30px;
  background: lightgray;
  transition: opacity .1s;
  & * {
      color: blue;
      line-height: 29px;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const Info = styled.div`
  border-top: 1px solid lightgray;
  padding: 15px 5px;
`;
const Name = styled.div`
  padding: 0 15px;
`;
const Price = styled.div`
   font-size: 2rem;
   padding: 0 15px;
`;
const Description = styled.div`
   padding: 0 15px;
   opacity: 0;
   transition: all .15s;
`;
const Created = styled.div`
   padding: 0 15px;
`;
const Elem = styled.div`
   position: relative;
   display: flex;
   border: 2px solid lightgray;
   border-radius: 5px;
   box-shadow: 0px 0px 10px 1px lightgray;
   background: white;
   flex-direction: column;
   margin: 10px 0;
   //padding: 15px;
   width: 225px;
   height: 250px;
   transition: all .15s;

  &:hover {
    height: 270px;
    box-shadow: 0px 0px 10px 5px lightgray;
  }
  &:hover ${Description}, &:hover ${Favorite}{
    opacity: 1;
  }
`;