import * as React from 'react'
import styled from 'styled-components/macro'
 

export function Slider() {

   const slidesArray: Array<any> = [
      'https://http2.mlstatic.com/D_NQ_708788-MLA50740692469_072022-OO.webp', 
      'https://http2.mlstatic.com/D_NQ_877758-MLA50740692131_072022-OO.webp', 
      'https://http2.mlstatic.com/D_NQ_788646-MLA50740774983_072022-OO.webp'
   ]
   const length: number = slidesArray.length
   const [slideRef, setSlideRef] = React.useState<Array<any>>([]) 
   const [slideIndex, setSlideIndex] = React.useState(0)
   const slides = slidesArray.map((slide, i) => <SlideLink href="#" ref={slideRef[i]} key={i}><SlideImg  src={slide}/></SlideLink>)

   React.useEffect(() => {
      setSlideRef((slideRef) => {
         return Array(3).fill(3).map((_,i) => slideRef[i] || React.createRef())
      })
      return 
   }, [length])

   React.useEffect(() => {
      const time = setTimeout(() => {
         increseSlide()
      }, 3000)

      return () => clearTimeout(time)
   })

   const decreseSlide = () => {
      const index = slideIndex-1 < 0 ? length-1 : slideIndex-1
      slideRef[index].current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
      setSlideIndex(slideIndex => index)
   }
   const increseSlide = () => {
      const index = slideIndex+1 > length-1 ? 0 : slideIndex+1
      slideRef[index].current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
      setSlideIndex(slideIndex => index)
   }

   return (
      <Wrapper>
         <ButtonLeft onClick={decreseSlide}>left</ButtonLeft>
         <Slides>
            {slides}
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
`
const Slides = styled.div`
   height: 100%;
   width: ${3 * 100}%;
   display: flex;
   flex-wrap: nowrap;
   overflow: hidden;
`
const SlideLink = styled.a`
   
`
const SlideImg = styled.img`
   width: 100vw;
   height: 100%;
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
`