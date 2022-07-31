import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { useLocation } from 'react-router-dom'
import useToken from '../../hooks/useToken';
import useCart from '../../hooks/useCart';
import { getProductsById } from '../../api/productsApi';
import { Product } from '../../../types'

export function ProductPage(props) {

   const [product, setProduct] = React.useState<any>(null)
   const [mainImage, setMainImage] = React.useState<any>(null)
   const [cant, setCant] = React.useState<any>(1)
   const { cart, setCart } = useCart()
   const { token, setToken } = useToken()
   const ref = React.useRef<any>(null)
   const location = useLocation()

   React.useEffect(() => {
      getProductsById(location.pathname.slice(1)).then(res => {
         setProduct(res)
         setMainImage('http://localhost:3001/' + res.photos[0])
      })
   }, [])
   React.useEffect(() => {  // To show the zoom of the img on the side
      const callback = (e) => {
         //if img parent (who camptures the event) === the box parent (the Container)
         if (e.target.parentNode === ref.current.parentNode) {
            const target = e.target;
            // Get the bounding rectangle of the container
            const rect = document.getElementById('imageContainer')?.getBoundingClientRect() as any;
            const closeup = document.getElementById('closeup') as any

            // Mouse position |***|------| (rect.left is the asterisco area)
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // for the Box to stay inside container
            const moveX = Math.max(100, Math.min(x, 650))
            const moveY = Math.max(120, Math.min(y, 300))
            ref.current.style.left = moveX + 'px'
            ref.current.style.top = moveY + 'px'

            // for the background of the closeup to move 0%-100%
            // moveX - 100 (x offset [so its in the middle]) / 550 (750 - 100 - 100 [for each side of the Box]) / 100 (to make it porcent)
            // |100px| 550px |100px| (moveX - 100) / 550 (to make it 0%-100%)
            const newX = Math.max(0, Math.min((((moveX - 100) / 550) * 100), 100))
            const newY = Math.max(0, Math.min((((moveY - 120) / 180) * 100), 100))
            closeup.style.backgroundPosition = `${newX}% ${newY}%`
         }
      }
      document.addEventListener('mousemove', callback)

      return () => document.removeEventListener('mousemove', callback)
   }, [])

   const handleImage = (e) => {
      setMainImage(e.target.src)
   }
   const handleShowCase = (e) => {
      const closeup = document.getElementById('closeup') as any
      closeup.style.backgroundImage = `url(${mainImage.replace(/\\/g, "/")})`
      closeup.style.display = 'block'
   }
   const handleShowCaseLeave = (e) => {
      const closeup = document.getElementById('closeup') as any
      closeup.style.display = 'none'
   }
   const handleCart = () => {
      setCart({ ids: [...cart.ids, product.id] })
   }

   return (
      <>
         <Helmet>
            <title>Clon Mercado Libre</title>
            <meta name="" content="" />
         </Helmet>
         {product ? <Wrapper>
            <Show>
               <GalleryWrapper>
                  <Gallery>
                     {product.photos.map((photo, i) =>
                        <img onMouseMove={handleImage} key={i} src={'http://localhost:3001/' + photo} />)}
                  </Gallery>
                  <ImageContainer id="imageContainer">
                     <Image onMouseEnter={handleShowCase} src={mainImage} />
                     <Box ref={ref} onMouseOut={handleShowCaseLeave} />
                     {/* Improve this.. save the img somewhere */}
                     <Closeup id="closeup" />
                  </ImageContainer>

               </GalleryWrapper>
               <InfoWrapper>
                  <p>{product.state}</p>
                  <h2>{product.name}</h2>
                  <h2>${product.price}</h2>
                  <h2>Vendedor: {product.sellerName}</h2>
                  <h2>{product.stock ? 'Stock disponible' : 'Sin Stock'}</h2>
                  <div>{product.stock === 1 ?
                     <div>{`Cantidad ${cant}`}{`(disponible ${product.stock})`}</div>
                     : 'Último disponible!'}
                  </div>
                  <Buy>Comprar</Buy>
                  <Addcart onClick={handleCart}>Agregar al Carrito</Addcart>
               </InfoWrapper>
            </Show>
            <Characteristics></Characteristics>
            <Description>{product.description}</Description>
         </Wrapper> : <></>}
      </>
   );
}

const Wrapper = styled.div`
   width: 1184px;
   margin: 50px auto;
   background: white;
`;
const Show = styled.section`
   padding: 30px 0;
   display: flex;
   width: 100%;
`;
const GalleryWrapper = styled.div`
   position: relative;
   width: 70%;
   display: flex;
`;
const Closeup = styled.div`
   position: absolute;
   display: none;
   left: 100%;
   top: 0;
   width: 45%;
   height: 420px;
   border: 1px solid black;
   z-index: 10;
`;
const Gallery = styled.div`
   position: relative;
   width: 10%;
   display: flex;
   flex-direction: column;
   & img {
      object-fit: cover;
      padding: 8px 3px;
      border: 1px solid lightgray;
      border-radius: 5px;
      margin: 10px;
      width: 60px;
      height: 60px;
   }
`;
const Image = styled.img`
   object-fit: contain;
   width: 750px;
   height: 420px;
`;
const Box = styled.div`
   display: none;
   position: absolute;
   width: 200px;
   height: 240px;
   background: #333333;
   opacity: 0.5;
   top: 0px;
   left: 0px;
   transform: translate(-50%, -50%);
   z-index: 10;
   cursor: zoom-in;
`;
const ImageContainer = styled.div`
   position: relative;
   margin: 10px 0;
   &:hover ${Box} {
      display: block;
   }
`;
const Info = styled.div`

`;
const InfoWrapper = styled.div`
   position: relative;
   flex: 1;
   margin: 10px 20px;
   padding: 15px;
   border: 1px solid lightgray;
   border-radius: 15px;
`;
const Buy = styled.button`
   display: block;
   border: none;
   border-radius: 8px;
   width: 80%;
   padding: 15px 40px;
   margin: 15px auto;
   background: var(--blue);
   font-size: 1rem;
   cursor: pointer;
   color: white;
`;
const Addcart = styled.button`
   display: block;
   border: none;
   border-radius: 8px;
   width: 80%;
   padding: 15px 40px;
   margin: 15px auto;
   background: lightskyblue;
   font-size: 1rem;
   cursor: pointer;
   color: white;
`;
const Characteristics = styled.div`
   margin: 20px 50px;
`;
const Description = styled.div`
   font-size: 1.2rem;
`;

