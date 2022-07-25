import * as React from 'react';
import styled from 'styled-components/macro';

export function PublishForm(props) {

   const nextPhase = (e) => {
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
         <Form>
            <Section1 id="1">
               <Label>Marca, modelo o nombre</Label>
               <Input type="text" placeholder='' value=''></Input>
               <Next onClick={nextPhase}>Siguiente</Next>
            </Section1>
            <Section id="2">
               <Label>Seleccione una categoría</Label>
               <Input type="text" placeholder='' value=''></Input>
               <Next onClick={nextPhase}>Siguiente</Next>
            </Section>
            <Section id="3"> 
               <Label>Marca</Label>
               <Input type="text" placeholder='' value=''></Input>
               <Label>Modelo</Label>
               <Input type="text" placeholder='' value=''></Input>
               <Next onClick={nextPhase}>Siguiente</Next>
            </Section>
            <Section id="4">
               <h1>Condición</h1>
               <Input type="radio" placeholder='' value=''></Input>
               <label>Usado</label>
               <Input type="radio" placeholder='' value=''></Input>
               <label>Nuevo</label>
               <Next onClick={nextPhase}>Siguiente</Next>
            </Section>
            <Section id="5">
               <Label>Fotos</Label>
               <Input type="file" placeholder='' value=''></Input>
               <Next onClick={nextPhase}>Siguiente</Next>
            </Section>
            <Section id="6">
               <Label>Stock</Label>
               <Input type="number" placeholder='' value=''></Input>
               <Next onClick={nextPhase}>Siguiente</Next>
            </Section>
            <Section id="7">
               <Label>Descriptión</Label>
               <Input type="text" placeholder='' value=''></Input>
               <Next onClick={nextPhase}>Siguiente</Next>
            </Section>
            <Section>
               <Next>Ver Publicación</Next>
            </Section>
         </Form>
      </Wrapper>
  );
}

const Wrapper = styled.div`
   font-size: 1.2em;
`;
const Form = styled.div`
   max-width: 50%;
   margin: auto;
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
const Label = styled.h3`
`;
const Input = styled.input`
   width: 50%;
   height: 35px;
   outline: none;
   margin-left: 50px;
   border: none;
   border-bottom: 1px solid lightsteelblue;
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
