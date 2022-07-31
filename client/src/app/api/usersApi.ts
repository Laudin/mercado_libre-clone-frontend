import { getProductsById } from "./productsApi";

interface token {
   token: string;
}
interface user {
   name: string;
   email: string;
   password: string;
}

export async function loginUser(username: string, password: string) {
   const userQuery: token | null = await fetch(
      `http://localhost:3001/user?email=${username}&password=${password}`,
   )
      .then(res => res.json())
      .catch(err => console.error(err));

   return userQuery ? userQuery : null;
}

export async function registerUser({ ...user }: user) {
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

