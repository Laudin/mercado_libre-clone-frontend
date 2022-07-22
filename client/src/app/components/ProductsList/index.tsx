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
               <div>{product.id}</div>
               <div>{product.img}</div>
               <div>{product.price}</div>
               <div>{product.description}</div>
            </Elem>
         </ElemWrapper>)
   })
   
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
   width: 25%;
   padding: 15px;
   @media (max-width: 770px) {
      width: 33%;
   }
   @media (max-width: 460px) {
      width: 50%;
   }
`
const Elem = styled.div`
   display: flex;
   border: 2px solid lightgray;
   flex-direction: column;
   margin: 10px 0;
   padding: 15px;
`
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