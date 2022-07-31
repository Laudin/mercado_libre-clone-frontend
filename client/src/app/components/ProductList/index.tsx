import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import useToken from '../../hooks/useToken';
import * as productApi from '../../api/productsApi';

export function ProductList(props) {
  const [products, setProducts] = React.useState<any | null>(null);
  const { token, setToken } = useToken();

  React.useEffect(() => {
    productApi.getProductsByCategory('Supermercado')
      .then(res => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err))
  }, []);

  const mappingProduct =
    products &&
    products.map((product, i) => {
      return (
        <ElemWrapper key={i}>
          <Elem>
            <Img src={product.photos[0]}></Img>
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
  &:hover ${Description} {
    opacity: 1;
  }
`;