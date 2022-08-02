import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom'
import { Login } from './Login';
import { UserContext } from '../../context/User';
import useToken from '../../hooks/useToken'
import useCart from '../../hooks/useCart'

export function User() {
   const [login, setLogin] = React.useState<boolean>(false);
   const [fade, setFade] = React.useState<boolean>(false);
   const { setToken } = useToken()
   const { cart } = useCart()
   const { currentUser, dispatch } = React.useContext(UserContext);

   const ref = React.useRef(null);

   const handleLogin = () => {
      setFade(false);
      setLogin(login => !login);
   };
   const handleLogout = () => {
      dispatch({ type: 'clear_user' }, {})
      setToken('')
   }
   const createAccount = () => {
      setFade(false);
      setLogin(login => !login);
   }

   React.useEffect(() => {
      /* console.log('currentUser: ')
      console.log(currentUser) */
      const callback = e => {
         if (e.target === ref.current) {
            setFade(fade => true);
            setTimeout(() => setLogin(login => !login), 301);
         }
      };
      document.addEventListener('click', callback);

      return () => document.removeEventListener('click', callback);
   }, []);

   return (
      <Wrapper>
         {currentUser.name ?
            <LinkElem onClick={handleLogout}>Cerrar Sesion</LinkElem>
            : <LinkElem onClick={createAccount}>Crear cuenta</LinkElem>
         }
         <div>{currentUser.name ?
            <UserElem><Icon src='http://localhost:3001/static/user.png'></Icon>
               {currentUser.name}
               <svg x="0px" y="0px" viewBox="0 0 330 330" width='10px' height='12px'>
                  <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
              c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
              s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
               </svg>
               <UserDropdownWrapper>
                  <UserDropdown>
                     <div>{currentUser.name}</div>
                     <UserLink to={`/user/${currentUser.id}`}>Mi perfíl</UserLink>
                     <UserLink to={`/publish`}>Vender</UserLink>
                     <div onClick={handleLogout}>Salir</div>
                  </UserDropdown>
               </UserDropdownWrapper>
            </UserElem>
            : <MyLink to={'/login'}>Iniciar sesión</MyLink>}
         </div>
         {login && (
            <LoginWrapper ref={ref}>
               <Login fade={fade} />
            </LoginWrapper>
         )}
         <LinkElem>Mis Compras</LinkElem>
         <MyLink to={"/cart"}><span>{cart.ids.length}</span><Icon src='http://localhost:3001/static/cart.png'></Icon></MyLink>
      </Wrapper>
   );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  list-style: none;
  margin-bottom: 5px;
`;
const MyLink = styled(Link)`
  cursor: pointer;
`;
const LinkElem = styled.a`
  cursor: pointer;
`;
const Icon = styled.img`
  opacity: 0.8;
  margin: 0 5px;
  width: 20px;
  height: 20px;
`
const UserDropdownWrapper = styled.div`
   position: absolute;
   background: white;
   border-radius: 5px;
   margin-top: 5px;
   visibility: hidden;
   transition: all .3s;
   z-index: 100;
   &:before {
      content: "";
      position: absolute;
      top: -5px;
      right: 81px;
      background: inherit;
      width: 10px;
      height: 10px;
      transform: rotate(45deg)
   }
`;
const UserDropdown = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
`;
const UserLink = styled(Link)`
   
`;
const UserElem = styled.div`
   position: relative;
   & svg {
      margin-left: 5px;
   }
   &:hover ${UserDropdownWrapper} {
      visibility: visible;
   }
`;
const Item = styled.li``;
const LoginWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background: #00000080;
  z-index: 100;
  height: 100vh;
  width: 100vw;
`;
const Label = styled.label``;
const Input = styled.input``;
