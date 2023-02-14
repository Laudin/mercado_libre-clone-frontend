import { User } from '../../types/index'


export async function loginUser(email: string, password: string) {
   const requestOptions: RequestInit = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         email: email,
         password: password
      }),
   };
   const userQuery = await fetch(`http://localhost:3001/login`, requestOptions)
      .then(res => res.json())
      .catch(err => console.error(err));

   return userQuery ? userQuery : null;
}

export async function registerUser({ ...user }: User) {
   const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         name: user.name,
         email: user.email,
         password: user.password,
      }),
   };
   const userQuery = await fetch(`http://localhost:3001/user`, requestOptions)
      .then(res => res.json())
      .catch(err => console.error(err));

   return userQuery;
}

export async function getUserById(id: String) {
   const requestOptions: RequestInit = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
   };
   return await fetch(`http://localhost:3001/user?userId=${id}`, requestOptions)
      .then(res => res.json())
      .catch(err => console.error(err));
}

export async function getCart(): Promise<string[]> {
   const requestOptions: RequestInit = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
   };
   return await fetch(`http://localhost:3001/cart`, requestOptions)
      .then(res => res.json())
      //.then( if unathorized redirect )
      .catch(err => console.log(err))
}
export async function addCart(productId: string) {
   const requestOptions: RequestInit = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         productId: productId
      }),
   };
   return await fetch(`http://localhost:3001/cart`, requestOptions)
      .then(res => res.json())
      //.then( if unathorized redirect )
      .catch(err => console.log(err))
}