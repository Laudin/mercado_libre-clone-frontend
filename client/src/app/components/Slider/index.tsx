import { visible } from 'chalk'
import * as React from 'react'
import styled from 'styled-components/macro'
 

export function Slider() {

   const slidesArray: Array<any> = [
      'https://http2.mlstatic.com/D_NQ_708788-MLA50740692469_072022-OO.webp', 
      'https://http2.mlstatic.com/D_NQ_877758-MLA50740692131_072022-OO.webp', 
      'https://http2.mlstatic.com/D_NQ_788646-MLA50740774983_072022-OO.webp',
      'https://http2.mlstatic.com/D_NQ_781386-MLA50622818790_072022-OO.webp',
      'https://http2.mlstatic.com/D_NQ_727055-MLA50738223351_072022-OO.webp'
   ]
   const length: number = slidesArray.length
   const [slideRef, setSlideRef] = React.useState<Array<any>>([]) 
   const last = React.useRef<HTMLAnchorElement>(null);
   const sld = React.useRef<HTMLHeadingElement>(null);
   const first = React.useRef<HTMLAnchorElement>(null);
   const [slideIndex, setSlideIndex] = React.useState(-100)
   const [moving, toggleMoving] = React.useState(false)
   const slides = slidesArray.map((slide, i) => <SlideLink href="#" ref={slideRef[i]} key={i}><SlideImg  src={slide}/></SlideLink>)

   React.useEffect(() => {
      setSlideRef((slideRef) => {
         return Array(length).fill(undefined).map((_,i) => slideRef[i] || React.createRef())
      })
      return 
   }, [length])

   const increseSlide = () => {
      if (!moving) {
         toggleMoving(moving => true)
         setTimeout(() => {
            toggleMoving(moving => false)
         }, 500)
         const current = slideIndex-100
         if (null !== sld.current) {
            sld.current.style.transition = 'all 0.5s'
            sld.current.style.transform = `translate(${current}%, 0px)`
            if (current === (length)*(-100)) {
               if (null !== first.current) first.current.style.visibility = 'visible'
               sld.current.style.transform = `translate(${(current)}%, 0px)`
               setTimeout(() => {
                  if (null !== sld.current) {
                     sld.current.style.transform = `translate(0%, 0px)`
                     sld.current.style.transition = 'none'
                  }
               }, 500)
            }
         }
         setSlideIndex(slideIndex => (slideIndex-100) < (length-1)*(-100) ? 0 : slideIndex-100)
      }
   }
   const decreseSlide = () => {
      if (!moving) {
         toggleMoving(moving => true)
         setTimeout(() => {
            toggleMoving(moving => false)
         }, 500)
         let current = slideIndex+100
         //console.log(current)
         if (null !== sld.current) {
            sld.current.style.transition = 'all 0.5s'
            sld.current.style.transform = `translate(${current}%, 0px)`
            if (current === 0) {
               console.log(sld.current.style.transform)
               setTimeout(() => {
                  if (null !== sld.current) {
                     sld.current.style.transform = `translate(-${(length)*(100)}%, 0px)`
                     sld.current.style.transition = 'none'
                  }
               }, 500)
            }
         }
         console.log(slideIndex)
         setSlideIndex(slideIndex => slideIndex+100 >= 0 ? (length)*(-100) : slideIndex+100)
      }
   }
   

   return (
      <Wrapper>
         <ButtonLeft onClick={decreseSlide}>left</ButtonLeft>
         <Slides ref={sld}>
            <SlideLink href="#" ref={last}> <SlideImg src={slidesArray[length-1]}/></SlideLink>
            {slides}
            <SlideLink href="#" ref={first}> <SlideImg src={slidesArray[0]}/></SlideLink>
         </Slides>
         <ButtonRigth onClick={increseSlide}>rigth</ButtonRigth>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   flex-wrap: nowrap;
   height: 300px;
   position: relative;
   //overflow: hidden;
`
const SlideLink = styled.a`
   width: 100%;
   flex-shrink: 0;
`
const SlideImg = styled.img`
   object-fit: none;
   width: 100%;
   height: 100%;
`
const Slides = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   position: relative;
   transform: translateX(-100%);
   > * {
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
   }
   transition: transform 0.5s;
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