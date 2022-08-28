import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { UserContext } from '../../context/User';
import { loginUser, registerUser } from '../../api/usersApi';
import { User } from '../../../types/index'
import { Link, useNavigate } from 'react-router-dom';


export function LoginPage() {

  const [user, setUser] = React.useState<User>({
    id: '',
    email: '',
    name: '',
    password: ''
  });

  const { currentUser, dispatchUser } = React.useContext(UserContext);
  const navigate = useNavigate()

  const [reg, setReg] = React.useState(false); // user is regestring
  const [error, setError] = React.useState(false);
  const ref = React.useRef<HTMLFormElement>(null);

  const handleEmail = e => {
    setUser(user => ({
      ...user,
      email: e.target.value,
    }));
  };
  const handlePassword = e => {
    setUser(user => ({
      ...user,
      password: e.target.value,
    }));
  };
  const handleName = e => {
    setUser(user => ({
      ...user,
      name: e.target.value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    loginUser(user.email, user.password ? user.password : '')
      .then((res: any) => {
        if (res) {
          if (res.error) {
            setError(true);
          } else {
            const { id, name, email } = res.data
            dispatchUser({ type: 'set_user', id: id, name: name, email: email })
            setError(false);
          }
        }
      })
      .catch(err => console.log(err))

    navigate('/')
  };
  const showRegister = () => {
    setReg(true);
  };
  const handleRegister = e => {
    e.preventDefault();
    registerUser({ ...user });
  };

  return (
    <>
      {/* 
      <-- Uncomment after Test !-->
      <Helmet>
        <title>Login</title>
        <meta name="" content="" />
      </Helmet> */}
      <Wrapper>
        <Form ref={ref}>
          <h1>Login</h1>
          {error && <Error>Credenciales erroneas</Error>}
          <Label>Email</Label>
          <Input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleEmail}
            data-testid="email"
          />
          <Label>Password</Label>
          <Input
            type="text"
            id="password"
            name="password"
            value={user.password}
            onChange={handlePassword}
            data-testid="password"
          />
          {reg && (
            <>
              <Label>Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleName}
              />
            </>
          )}
          {!reg ?
            <Button type="submit" onClick={handleSubmit} data-testid="login">Continuar</Button>
            :
            <Button type="submit" onClick={handleRegister} data-testid="sign-in">Crear cuenta</Button>
          }
          {!reg && <a href="#" onClick={showRegister} data-testid="register">Registrate</a>}
        </Form>
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

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 50px;
  background: white;
  width: 500px;
  border-radius: 15px;
  opacity: 1;
  transition: opacity 0.3s;
`;
const Label = styled.label``;
const Input = styled.input``;
const Button = styled.button`
  width: 200px;
  background: transparent;
  border: 2px solid var(--blue);
  border-radius: 2px;
  outline: none;
  margin: 20px auto;
  padding: 8px;
  &:hover {
    background: var(--blue);
    border: 2px solid var(--blue);
    color: white;
  }
`;
const Error = styled.div`
  color: red;
`;