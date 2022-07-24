//import useToken from '../hooks/useToken';

//const { token, setToken } = useToken();

export async function getProductsByName(name: string, token: any) {
  const header = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });
  const products = await fetch(`http://localhost:3001/product?name=${name}`, {
    method: 'GET',
    headers: header,
  })
    .then(res => res.json())
    .catch(err => console.error(err));

  return products;
}
export async function getProductsByCategory(category: string, token: any) {
  const header = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  });
  const products = await fetch(
    `http://localhost:3001/category?name=${category}`,
    {
      method: 'GET',
      headers: header,
    },
  )
    .then(res => res.json())
    .catch(err => console.error(err));

  return products;
}
export async function setNewProduct(name: string, token: any) {
  const header = new Headers({
    'Content-Type': 'application/json',
    Authorization: token,
  });
  const products = await fetch(`http://localhost:3001/product`, {
    method: 'POST',
    headers: header,
    body: JSON.stringify({
      name: 'Cafetera',
    }),
  })
    .then(res => res.json())
    .catch(err => console.error(err));

  return products;
}
