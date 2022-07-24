import * as React from 'react';
import styled from 'styled-components/macro';
import * as api from '../../api/usersApi';
import useToken from '../../hooks/useToken';
import { UserContext } from '../../context/User';

export function Login(props) {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  interface token {
    token: string;
  }
  const { token, setToken } = useToken();
  const { currentUser, dispatch } = React.useContext(UserContext);

  const [reg, setReg] = React.useState(false);
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
    api.loginUser(user.email, user.password).then((res: any) => {
      //console.log(res);
      if (res) {
        if (res.error) {
          setError(true);
        } else {
          const {name, email} = res.data
          const action = { type: 'set_user', name: name, email: email}
          dispatch(action, {})
          setError(false);
          setToken(res.data.token);
        }
      }
    });
  };
  const showRegister = () => {
    setReg(true);
  };
  const handleRegister = e => {
    e.preventDefault();
    api.registerUser({ ...user });
  };

  React.useEffect(() => {
    if (ref.current !== null) {
      if (props.fade) {
        ref.current.style.opacity = '0';
      } else {
        ref.current.style.opacity = '1';
      }
    }
    return;
  }, [props.fade]);

  return (
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
      />
      <Label>Password</Label>
      <Input
        type="text"
        id="password"
        name="password"
        value={user.password}
        onChange={handlePassword}
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
      <Button type="submit" onClick={handleSubmit}>Continuar1</Button> 
      : 
      <Button type="submit" onClick={handleRegister}>Continuar2</Button>
      }
      {!reg && <a href="#" onClick={showRegister}>Register</a>}
    </Form>
  );
}
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
const Button = styled.button``;
const Error = styled.div`
  color: red;
`;
