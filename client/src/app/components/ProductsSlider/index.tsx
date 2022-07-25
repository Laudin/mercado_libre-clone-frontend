import * as React from 'react'
import styled from 'styled-components/macro'
import { products } from '../../../dummyQuery'

export function ProductsList() {

   const slide = React.useRef<HTMLHeadingElement>(null)
   const [slideIndex, setSlideIndex] = React.useState(0)

   const productsList: JSX.Element[] = products.map((product, i) => {
      return (
        <ElemWrapper key={i}>
          <Elem>
            <Favorite><a>{'<3'}</a></Favorite>
            <Img src='https://http2.mlstatic.com/D_NQ_NP_984740-MLA41433583964_042020-O.webp'></Img>
            <Info>
               <Name>{}</Name>
               <Price>${product.price}</Price>
               <Created>Mes: {new Date().getMonth()}</Created>
               <Description>{product.description}</Description>
            </Info>
          </Elem>
        </ElemWrapper>
      );
    });
   
   const increseSlide = () => {
      console.log(slideIndex)
      if (slide.current !== null) {
         const move = Math.max(slideIndex-100, ((products.length-1) / -4)*100)
         setSlideIndex(slideIndex => move)
         slide.current.style.transform = `translateX(${move}%)`
      }
   }
   const decreseSlide = () => {
      console.log(slideIndex)
      if (slide.current !== null) {
         const move = Math.min(slideIndex+100, 0)
         setSlideIndex(slideIndex => move)
         slide.current.style.transform = `translateX(${move}%)`
      }
   }
   
   return (
      <Wrapper>
         <ButtonLeft onClick={decreseSlide}>left</ButtonLeft>
         <Slide ref={slide}>
            {productsList}
         </Slide>
         <ButtonRigth onClick={increseSlide}>rigth</ButtonRigth>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   position: relative;
   display: flex;
   margin: 10px 0;
   overflow: hidden;
`
const Slide = styled.div`
   position: relative;
   width: 100%;
   overflow: visible;
   white-space: nowrap;
   /* > * {
      &:first-child {
         //position: absolute;
         left: -100%;
         height: 100%;
      }
      &:last-child {
         //position: absolute;
         right: -500%;
         height: 100%;
      }
   } */
   transform: translateX(0%);
   transition: transform 0.5s;
   &::before {

   }
   &::after {
      
   }
`
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
const ButtonLeft = styled.div`
   height: 60px;
   width:30px;
   background: white;
   border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;
   position: absolute;
   left: 0px;
   top: 50%;
   transform: translateY(-50%);
   z-index: 98;
`
const ButtonRigth = styled.div`
   height: 60px;
   width:30px;
   background: white;
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
   position: absolute;
   right: 0px;
   top: 50%;
   transform: translateY(-50%);
   z-index: 98;
`