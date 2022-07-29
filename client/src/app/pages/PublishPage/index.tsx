import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import * as productApi from '../../api/productsApi';
import { Product } from '../../../types'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../context/User';
import { setNewProduct } from '../../api/productsApi'
import useToken from '../../hooks/useToken'

export function PublishPage(props) {
   const categories = [
      'Vehículos',
      'Inmuebles',
      'Supermercado',
      'Tecnología',
      'Hogar y Muebles',
      'Electrodomésticos',
      'Herramientas',
      'Construcción',
      'Deportes y Fítness',
      'Moda',
      'Juegos y Juguetes',
      'Bebés',
      'Belleza y Cuidado Personal',
      'Salud y Equipamiento Médico',
      'Industrias y Oficinas',
      'Agro',
      'Productos Sustentables',
      'Servicios',
   ]
   const { token } = useToken()
   const [images, setImages] = React.useState<any>([])
   const { currentUser } = React.useContext(UserContext)
   const { register,
      handleSubmit,
      setValue,
      getValues,
      setError,
      clearErrors,
      formState: { errors }
   } = useForm<Product>({
      shouldUseNativeValidation: false,
      shouldFocusError: false,
      defaultValues: {
         name: '',
         category: '',
         brand: '',
         model: '',
         price: null,
         stock: 1,
         description: '',
         state: '',
         photos: [''],
         sellerId: currentUser.id,
         sellerName: currentUser.name,
         sellerEmail: currentUser.email,
      }
   })

   const onSubmit = async data => {
      setNewProduct(data, token).then(res => console.log(res))
   }
   const handleImg = (e) => {
      setValue("photos", e.target.files)
      clearErrors("photos")
      const src: any = []
      for (let i = 0; i < e.target.files.length; i++) {
         src.push(URL.createObjectURL(new File([e.target.files.item(i)], 'photo', { type: "image" })))
      }
      setImages(images => [...images, ...src])
   }
   const deleteImg = (e, i) => {
      const input = document.getElementById('fileInput') as HTMLInputElement
      input.value = ''
      setValue("photos", [])
      setImages([])
   }
   const nextStep = (e, target) => {
      //check if any of the fields are empty
      const test = target.values.reduce((previousValue, currentValue) => !!previousValue && !!currentValue, true)
      if (!test) {
         target.values.forEach((item, i) => {
            if (!item) {   //set error on a single empty field
               setError(target.keys[i], { type: "custom", message: `${target.keys[i]} error` })
            } else { //clear the rest of the fields that are OK
               clearErrors(target.keys[i])
            }
         })
         return
      } else { //clear all errors of the section
         clearErrors(target.keys)
      }
      if (target.keys[0] === 'photos' && !images.length) {
         setError(target.keys[0], { type: "custom", message: `${target.keys[0]} error` })
         return
      } else {
         clearErrors(target.keys)
      }
      //make the next section visible and scroll to it
      const next = parseInt(e.target.parentElement.id) + 1
      const element = document.getElementById(`${next}`)
      if (element) {
         element.style.display = 'flex'
         element.scrollIntoView({
            behavior: "smooth",
            block: "center"
         })
      }
   }

   return (
      <>
         <Helmet>
            <title>Vender</title>
            <meta name="publish" content="Publish new product to sell" />
         </Helmet>
         <Wrapper>
            <h1>Completa el formulario del producto</h1>
            <Form id="Form" onSubmit={handleSubmit(onSubmit)}>

               <Section1 id="1">
                  <Label>Indicá tu producto, marca y modelo</Label>
                  <p>Este será el título de tu producto. <a href="#">Cómo armar un buen título</a></p>

                  {errors.name ? <Err>{`${errors.name.message}`}</Err> : <Err></Err>}
                  <Input
                     {...register('name', { required: true })}
                     placeholder='Ej: Microondas Atma MD18'
                  />
                  <Next type="button"
                     onClick={event => nextStep(event, { keys: ['name'], values: getValues(['name']) })}
                  >Siguiente</Next>
               </Section1>

               <Section id="2">
                  <Label>Seleccioná una categoría</Label>
                  <p>Categoría sobre la que caerá tu producto. Las personas podrán encontrar tu producto bajo esta categoría.
                     <a href="#">¿De qué categoría es mi producto?</a>
                  </p>

                  {errors.category ? <Err>{`${errors.category.message}`}</Err> : <Err></Err>}
                  <Select {...register('category', { required: true })} >
                     <option value="">--Seleccione una categoría--</option>
                     {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                  </Select>
                  <Next type="button"
                     onClick={event => nextStep(event, { keys: ['category'], values: getValues(['category']) })}
                  >Siguiente</Next>
               </Section>

               <Section id="3">
                  <Label>Marca</Label>

                  {errors.brand ? <Err>{`${errors.brand.message}`}</Err> : <Err></Err>}
                  <Input {...register('brand', { required: true })} />

                  <Label>Modelo</Label>
                  <p>Si no tienes el modelo de tu producto presiona N/A</p>

                  {errors.model ? <Err>{`${errors.model.message}`}</Err> : <Err></Err>}
                  <Container>
                     <Input id="modelInput" {...register('model', { required: true })} />
                     <label>N/A</label>
                     <Input type="checkbox"
                        id="checkbox"
                        onClick={() => {
                           const elem = document.getElementById("modelInput") as HTMLInputElement;
                           elem.disabled = !elem.disabled
                           if (elem.disabled) {
                              elem.value = 'N/A'
                              setValue("model", "N/A")
                           } else {
                              elem.value = ''
                              setValue("model", "")
                           }
                        }}
                        {...register('model', { required: true })} value="N/A" />
                  </Container>
                  <Next type="button"
                     onClick={event => nextStep(event, { keys: ['brand', 'model'], values: getValues(['brand', 'model']) })}
                  >Siguiente</Next>
               </Section>

               <Section id="4">
                  <Label>Es tu producto nuevo o usado?</Label>

                  {errors.state ? <Err>{`${errors.state.message}`}</Err> : <Err></Err>}
                  <Container>
                     <label>Usado</label>
                     <Input type="radio" {...register('state', { required: true })} value="Usado" />
                  </Container>
                  <Container>
                     <label>Nuevo</label>
                     <Input type="radio" {...register('state', { required: true })} value="Nuevo" />
                  </Container>
                  <Next type="button"
                     onClick={event => nextStep(event, { keys: ['state'], values: getValues(['state']) })}
                  >Siguiente</Next>
               </Section>

               <Section id="5">
                  <Label>Sube 1 o más fotos</Label>
                  <p>La primera foto será la portada. Es aconsejable que tenga un fondo blanco. <a href="#">¿Cómo sacar una buena foto de tu producto?</a></p>

                  {errors.photos ? <Err>{`${errors.photos.message}`}</Err> : <Err></Err>}
                  {/* <Input id="fileInput" type="file" {...register('photos', { required: true })}></Input> */}
                  <FileInput id="fileInput" type="file" onChange={handleImg} multiple></FileInput>
                  <ImageContainer>
                     {images?.map((img, i) => <Image key={i} src={img} onClick={(e) => deleteImg(e, i)} />)}
                  </ImageContainer>
                  <Next type="button"
                     onClick={event => nextStep(event, { keys: ['photos'], values: getValues(['photos']) })}
                  >Siguiente</Next>
               </Section>

               <Section id="6">
                  <Label>Cuánto costará tu producto?</Label>

                  {errors.price ? <Err>{`${errors.price.message}`}</Err> : <Err></Err>}
                  <Container>
                     <label>$</label><Input type="number" step={0.01} min={0} placeholder="0.00" {...register('price', { required: true })}></Input>
                  </Container>
                  <Next type="button"
                     onClick={event => nextStep(event, { keys: ['price'], values: getValues(['price']) })}
                  >Siguiente</Next>
               </Section>

               <Section id="7">
                  <Label>Cuál es el stock de tu producto?</Label>

                  {errors.stock ? <Err>{`${errors.stock.message}`}</Err> : <Err></Err>}
                  <Input type="number" {...register('stock', { required: true })} min={0} ></Input>
                  <Next type="button"
                     onClick={event => nextStep(event, { keys: ['stock'], values: getValues(['stock']) })}
                  >Siguiente</Next>
               </Section>

               <Section id="8">
                  <Label>Una descripción de tu producto<p id="optional">(opcional)</p></Label>
                  <textarea {...register('description')} />
                  <Next type="button"
                     onClick={event => nextStep(event, { keys: ['description'], values: ['descripción'] })}
                  >Siguiente</Next>
               </Section>

               <Section id='9'>
                  <input type="submit" />
               </Section>
            </Form>
         </Wrapper>
      </>
   );
}

const Wrapper = styled.div`
   font-size: 1.1em;
   padding: 10vh 0 20vh 0;
   height: 100%;
   & a {
      color: blue;
   }
`;
const Form = styled.form`
   max-width: 600px;
   margin: 20vh auto;
`;
const Section = styled.div`
   display: none;
   flex-direction: column;
   background: white;
   min-height: 200px;
   margin: 20px 0;
   padding: 20px;
   & textarea {
      border: 1px solid var(--blue);
      margin: 30px 0;
   }
`;
const Section1 = styled.div`
   display: flex;
   flex-direction: column;
   background: white;
   min-height: 200px;
   margin: 20px 0;
   padding: 20px;
`;
const Container = styled.div`
   display: flex;
   width: 100%;
   & #modelInput {
      width: 80%;
   }
   & #checkbox {
      width: 25px;
   }
   & label {
      margin: 0 10px 0 30px;
      line-height: 35px;
   }
`;
const Err = styled.p`
   height: 20px;
   margin: 0;
   color: #ff6a6a;
`
const Label = styled.h2`
   margin: 0;
   & p {
      display: inline;
      font-size: 12px;
      color: #9d9d9d;
   }
`;
const Select = styled.select`
   //appearance: none; //the arrow thingy
   border: none;
   padding: 15px;
   border-bottom: 1px solid var(--blue);
   outline: none;
   &::-ms-expand { //the arrow thingy for other versions
      display: none;
   }
   &::after {
      //custom arrow
   }
   & option {

   }
   & p {
      margin-top: 0;
      margin-bottom: 20px;
   }

`;
const Input = styled.input`
   width: 100%;
   height: 35px;
   margin-bottom: 30px;
   outline: none;
   border: none;
   border-bottom: 1px solid var(--blue);
   &:invalid {
      border-color: red;
   }
`;
const FileInput = styled.input`
   color: transparent;
   width: 100%;
   height: 35px;
   margin-bottom: 30px;
   outline: none;
   border: none;
   border-bottom: 1px solid var(--blue);
   &::-webkit-file-upload-button {
      visibility: hidden;
   }
   &::before {
      color: black;
      content: 'Select some files';
      display: inline-block;
      background: linear-gradient(top, #f9f9f9, #e3e3e3);
      padding: 5px 8px;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
   }
   &:hover::before {
      border-color: black;
   }
   &:active::before {
      background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
   }
   &:invalid {
      border-color: red;
   }
`;
const ImageContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 90%;
`
const Image = styled.img`
   object-fit: contain;
   width: 30%;
   margin: 5px;
   padding: 5px;
   border: 1px solid lightgray;
`
const Next = styled.button`
   margin-top: 20px;
   width: 100px;
   align-self: flex-end;
   border: 2px solid var(--blue);
   padding: 12px 8px;
   color: var(--blue);
   background: white;
   border-radius: 5px;
   &:hover {
      color: white;
      background: var(--blue);
   }
`;