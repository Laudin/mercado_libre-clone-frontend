import * as React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'
import * as productApi from '../../api/productsApi';

export function ProductsList({ category }) {

   const slide = React.useRef<HTMLHeadingElement>(null)
   const [products, setProducts] = React.useState<any | null>(null);
   const [slideIndex, setSlideIndex] = React.useState(0)

   React.useEffect(() => {
      productApi.getProductsByCategory(category)
         .then(res => {
            console.log(res);
            setProducts(res.products);
         })
         .catch((err) => console.log(err))
   }, []);

   const productsList: JSX.Element[] = products ? products.map((product, i) => {
      return (
         <ElemWrapper key={i}>
            <Elem to={product.id}>
               <Img src={'http://localhost:3001/' + product.photos[0]}></Img>
               <Info>
                  <Price>${product.price}</Price>
                  <Created>{product.state}</Created>
                  <Description>{product.name}</Description>
               </Info>
            </Elem>
         </ElemWrapper>
      );
   }) : <div>Nothing yet</div>;

   const increseSlide = () => {
      console.log(slideIndex)
      if (slide.current !== null) {
         //max entre 500 (5 slides) y ej :Floor(11/5) (3 slides) [max 5 por slide]
         const move = -Math.min(500, Math.floor((products.length - 1) / 5) * 100)
         setSlideIndex(slideIndex => move)
         slide.current.style.transform = `translateX(${move}%)`
      }
   }
   const decreseSlide = () => {
      console.log(slideIndex)
      if (slide.current !== null) {
         const move = Math.min(slideIndex + 100, 0)
         setSlideIndex(slideIndex => move)
         slide.current.style.transform = `translateX(${move}%)`
      }
   }

   return (
      <Wrapper>
         <ButtonLeft onClick={decreseSlide}>
            <svg x="0px" y="0px" viewBox="0 0 330 330" width='20px' height='24px'>
               <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
               c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
               s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
            </svg>
         </ButtonLeft>
         <Slide ref={slide}>
            {productsList}
         </Slide>
         <ButtonRigth onClick={increseSlide}>
            <svg x="0px" y="0px" viewBox="0 0 330 330" width='52px' height='24px'>
               <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
               c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
               s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
            </svg>
         </ButtonRigth>
      </Wrapper>
   )
}

const ButtonLeft = styled.div`
   visibility: hidden;
   height: 60px;
   width:60px;
   background: white;
   border-radius: 50%;
   position: absolute;
   left: 0px;
   top: 50%;
   transform: translateY(-50%);
   z-index: 98;
   box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
   transition: all .5s;
   &:hover {
      box-shadow: 0 7px 16px 0 rgb(0 0 0 / 50%)
   }
   & svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    overflow: visible;
      & path {
         color: var(--blue);
         transform: translate(290px,-20px) rotate(90deg);
      }
   }
`;
const ButtonRigth = styled.div`
   visibility: hidden;
   height: 60px;
   width:60px;
   background: white;
   border-radius: 50%;
   position: absolute;
   right: 0px;
   top: 50%;
   transform: translateY(-50%);
   z-index: 98;
   box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
   transition: all .5s;
   &:hover {
      box-shadow: 0 7px 16px 0 rgb(0 0 0 / 50%)
   }
   & svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    overflow: visible;
      & path {
         color: var(--blue);
         transform: translate(40px,300px) rotate(-90deg);
      }
   }
`;
const Wrapper = styled.div`
   position: relative;
   height: 350px;
   overflow: hidden;
   &:hover ${ButtonLeft}, &:hover ${ButtonRigth} {
      visibility: visible;
   }
`;
const Slide = styled.div`
   position: relative;
   width: 100%;
   overflow: visible;
   white-space: nowrap;
   transform: translateX(0%);
   transition: transform 0.5s;
`;
const ElemWrapper = styled.div`
   display: inline-block;
   padding: 0 15px;
   @media (max-width: 770px) {
      width: 33%;
   }
   @media (max-width: 460px) {
      width: 50%;
   }
`;
const Img = styled.img`
   min-height: 200px;
   padding: 35px 0px;
   object-fit: contain;
`;
const Info = styled.div`
  border-top: 1px solid lightgray;
  padding: 15px 20px;
`;
const Name = styled.div`
  padding: 0 15px;
`;
const Price = styled.div`
   font-size: 1.8rem;
   padding: 0 0px;
`;
const Description = styled.div`
   padding: 7px 0px;
   opacity: 0;
   transition: all .15s;
`;
const Created = styled.div`
   padding: 0 0px;
`;
const Elem = styled(Link)`
   position: relative;
   display: flex;
   border: 0px solid lightgray;
   border-radius: 5px;
   background: white;
   flex-direction: column;
   margin: 10px 0;
   width: 218px;
   height: 300px;
   transition: all .15s;

  &:hover {
    height: 320px;
    box-shadow: 0px 0px 10px 5px lightgray;
  }
  &:hover ${Description} {
    opacity: 1;
  }
`;