import * as React from 'react';
import styled from 'styled-components/macro';
import { Product } from '../../../types'
import { useForm } from 'react-hook-form'

function reducer(state, action) {
   switch (action.type) {
      case 'name':
         return {
            ...state,
            name: action.payload.name
         }
      case 'category':
         return {
            ...state,
            category: action.payload.category
         }
      case 'brand':
         return {
            ...state,
            brand: action.payload.brand
         }
      case 'model':
         return {
            ...state,
            model: action.payload.model
         }
      case 'price':
         return {
            ...state,
            price: action.payload.price
         }
      case 'descriptión':
         return {
            ...state,   
            descriptión: action.payload.descriptión
         }
      case 'state':
         return {
            ...state,
            state: action.payload.state
         }
      case '':
         return {
            ...state,
            state: action.payload.state
         }
      case 'seller':
         return {
            ...state,
            seller: action.payload.seller
         }
      default: 
         return state
   }
}

export function PublishForm(props) {

   const [form, dispatch] = React.useReducer(reducer, {
      name: '',
      category: '',
      brand: '',
      model: '',
      price: 0.0,
      stock: 0,
      discription: '',
      state: '',
      seller: '',
   })

   const { register, handleSubmit, getValues, setError, clearErrors, formState: { errors } } = useForm({ 
      shouldUseNativeValidation: false,
      shouldFocusError: false, 
      defaultValues: {
         name: '',
         category: '',
         brand: '',
         model: '',
         price: 0.0,
         stock: 0,
         description: '',
         state: '',
         photo: '',
         seller: '',
      }
   })
   const onSubmit = async data => { 
      console.log(data)
   }
   const nextPhase = (e, target) => {
      if (target.values.every( item => !item )) {
         target.values.forEach((item, i) => {
            if (!item) setError(target.keys[i], { type: "custom", message: "Some error" })
         })
         return
      } else { clearErrors(target.keys) }
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
      <Wrapper>
         <Form id="Form" onSubmit={handleSubmit(onSubmit)}>
            <Section1 id="1">
               <Label>Marca, modelo o nombre</Label>
               {errors.name ? <Err>{`${errors.name.message}`}</Err> : <Err></Err>}
               <Input 
                  {...register('name', { required: true })}
               />
               <Next type="button" onClick={event => nextPhase(event, { keys: ['name'], values: getValues(['name']) })}>Siguiente</Next>
               {/* <Next type="button" onClick={() => setError("name", { type: "custom", message: "Some error" })}>Siguiente</Next> */}
            </Section1>
            <Section id="2">
               <Label>Seleccione una categoría</Label>
               {errors.category ? <Err>{`${errors.category.message}`}</Err> : <Err></Err>}
               <Select {...register('category')} >
                  <option value="">--Seleccione una categoría--</option>
                  <option value="Elect">Elect</option>
                  <option value="Vehi">Vehi</option>
                  <option value="Cocina">Cocina</option>
                  <option value="Juego">Juego</option>
               </Select>
               <Next type="button" onClick={event => nextPhase(event, { keys: ['category'], values: getValues(['category']) })}>Siguiente</Next>
            </Section>
            <Section id="3"> 
               <Label>Marca</Label>
               {errors.brand ? <Err>{`${errors.brand.message}`}</Err> : <Err></Err>}
               <Input {...register('brand')}/>
               <Label>Modelo</Label>
               {errors.model ? <Err>{`${errors.model.message}`}</Err> : <Err></Err>}
               <Input {...register('model')}/>
               <Input type="radio" {...register('model')} value="N/A"/>
               <Next type="button" onClick={event => nextPhase(event, { keys: ['brand', 'model'], values: getValues(['brand', 'model']) })}>Siguiente</Next>
            </Section>
            <Section id="4">
               <Label>Condición</Label>
               {errors.state ? <Err>{`${errors.state.message}`}</Err> : <Err></Err>}
               <Input type="radio" {...register('state')} value="Usado" />
               <Input type="radio" {...register('state')} value="Nuevo" />
               <Next type="button" onClick={event => nextPhase(event, { keys: ['state'], values: getValues(['state']) })}>Siguiente</Next>
            </Section>
            <Section id="5">
               <Label>Fotos</Label>
               {errors.photo ? <Err>{`${errors.photo.message}`}</Err> : <Err></Err>}
               <Input type="file" {...register('photo')}></Input>
               <Next type="button" onClick={event => nextPhase(event, { keys: ['photo'], values: getValues(['photo']) })}>Siguiente</Next>
            </Section>
            <Section id="6">
               <Label>Price</Label>
               {errors.price ? <Err>{`${errors.price.message}`}</Err> : <Err></Err>}
               <Input type="number" {...register('price')}></Input>
               <Next type="button" onClick={event => nextPhase(event, { keys: ['price'], values: getValues(['price']) })}>Siguiente</Next>
            </Section>
            <Section id="7">
               <Label>Stock</Label>
               {errors.stock ? <Err>{`${errors.stock.message}`}</Err> : <Err></Err>}
               <Input type="number" {...register('stock')} value={`${null}`} ></Input>
               <Next type="button" onClick={event => nextPhase(event, { keys: ['stock'], values: getValues(['stock']) })}>Siguiente</Next>
            </Section>
            <Section id="8">
               <Label>Descriptión</Label>
               {errors.description ? <Err>{`${errors.description.message}`}</Err> : <Err></Err>}
               <textarea {...register('description')}/>
               <Next type="button" onClick={event => nextPhase(event, { keys: ['description'], values: getValues(['description']) })}>Siguiente</Next>
            </Section>
            <Section id='9'>
               <input type="submit"/>
            </Section>
         </Form>
      </Wrapper>
  );
}

const Wrapper = styled.div`
   font-size: 1.2em;
   padding: 10vh 0 20vh 0;
   height: 100%;
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
`;
const Section1 = styled.div`
   display: flex;
   flex-direction: column;
   background: white;
   min-height: 200px;
   margin: 20px 0;
   padding: 20px;
`;
const Err = styled.p`
   height: 30px;
`
const Label = styled.h3`
`;
const Select = styled.select`
   appearance: none; //the arrow thingy
   border: none;
   outline: none;
   &::-ms-expand { //the arrow thingy for other versions
      display: none;
   }
   &::after {
      //custom arrow
   }
   & option {

   }
`;
const Input = styled.input`
   width: 50%;
   height: 35px;
   outline: none;
   margin-left: 50px;
   border: none;
   border-bottom: 1px solid lightsteelblue;
   &:invalid {
      border-color: red;
   }
`;
const Next = styled.button`
   margin-top: auto;
   width: 100px;
   align-self: flex-end;
   border: 2px solid lightsteelblue;
   padding: 12px 8px;
   color: lightsteelblue;
   background: white;
   border-radius: 5px;
   &:hover {
      color: white;
      background: lightsteelblue;
   }
`;
