import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import useToken from '../../hooks/useToken';
import * as productApi from '../../api/productsApi';

export function ProductListPage(props) {
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
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.createdAt}</div>
            <div>{product.description}</div>
            <div>{product.sellerId}</div>
          </Elem>
        </ElemWrapper>
      );
    });

  if (products !== null) {
    //return <div>{mappingProduct}</div>;
  }

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <ContentWrapper>
          <Content>{mappingProduct}</Content>
        </ContentWrapper>
      </Container>
    </>
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
  width: 25%;
  padding: 15px;
  @media (max-width: 770px) {
    width: 33%;
  }
  @media (max-width: 460px) {
    width: 50%;
  }
`;
const Elem = styled.div`
  display: flex;
  border: 2px solid lightgray;
  flex-direction: column;
  margin: 10px 0;
  padding: 15px;
`;
