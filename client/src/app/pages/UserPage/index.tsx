import { current } from '@reduxjs/toolkit';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { UserContext } from '../../context/User';
import useToken from '../../hooks/useToken'
import { getUserById } from '../../api/usersApi'
import { User } from '../../../types/index'

export function UserPage() {

   const [user, setUser] = React.useState<User | null>(null);
   const { currentUser } = React.useContext(UserContext)

   React.useEffect(() => {
      getUserById(currentUser?.id as String).then(res => setUser(res))
   }, [])

   return (
      <>
         <Helmet>
            <title>Perfil</title>
            <meta name="" content="" />
         </Helmet>
         <Wrapper>
            <PerfilWrapper>
               <Perfil>
                  <ImageWrapper>
                     <Image src='http://localhost:3001/static/user_blue.png'></Image>
                  </ImageWrapper>
                  <Info>
                     <h2>{currentUser.name}</h2>
                     <p>{currentUser.email}</p>
                  </Info>
               </Perfil>
               <ElemWrapper>
                  <Elem>Mis datos</Elem>
               </ElemWrapper>
               <ElemWrapper>
                  <Elem>Seguridad</Elem>
               </ElemWrapper>
            </PerfilWrapper>
         </Wrapper>
      </>
   );
}

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 1240px;
   margin: auto;
   font-size: 1.2rem;
`;
const PerfilWrapper = styled.div`
   margin: 50px 0;
   background: white;
   & > * {
      width: 70%;
      margin: 50px auto;
      padding: 10px 0;
      border-bottom: 1px solid #e8e8e8;
   }
`;
const Perfil = styled.div`
   display: flex;
   margin: 50px auto;
`;
const ImageWrapper = styled.div`
   border: 2px solid var(--blue);
   margin: 10px;
   padding: 3px;
   border-radius: 50%;
   width: min-content;
`;
const Image = styled.img`
   width: 100px;
   border: 2px solid #d8d8d8;
   border-radius: 50%;
`;
const Info = styled.div`
   & h2 {
      margin: 0;
      margin-top: 20px;
      align-self: center;
   }
   & p {
      color: #a8a8a8;
      margin: 0;
   }
`;
const ElemWrapper = styled.div`

`;
const Elem = styled.div`

`;