import * as React from 'react';
import styled from 'styled-components/macro';
import { Login } from './Login';
import { UserContext } from '../../context/User';

export function User() {
  const [login, setLogin] = React.useState<boolean>(false);
  const [fade, setFade] = React.useState<boolean>(false);

  const { currentUser, dispatch } = React.useContext(UserContext);

  const ref = React.useRef(null);

  const handleLogin = () => {
    setFade(false);
    setLogin(login => !login);
  };
  const handleLogout = () => {
    dispatch({ type: 'clear_user' }, {})
  }
  const createAccount = () => {
    setFade(false);
    setLogin(login => !login);
  }

  React.useEffect(() => {
    console.log('currentUser: ')
    console.log(currentUser)
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
      {currentUser.name ? <Link onClick={handleLogout}>Cerrar Sesion</Link> : <Link onClick={createAccount}>Crear cuenta</Link>}
      <Link onClick={handleLogin}>{currentUser.name ? currentUser.name : 'Ingresar'}</Link>
      {login && (
        <LoginWrapper ref={ref}>
          <Login fade={fade} />
        </LoginWrapper>
      )}
      <Link>Mis Compras</Link>
      <Link>Carrito</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  list-style: none;
`;
const Link = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
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
