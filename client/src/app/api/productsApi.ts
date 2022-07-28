import { Product } from '../../types'

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
export async function setNewProduct(product: Product, token: any) {
  const form = new FormData()
  for (const [key, value] of Object.entries(product)) {
    form.append(key, value)
  }
  const header = new Headers({
    Authorization: `Bearer ${token}`,
  });
  const products = await fetch(`http://localhost:3001/product`, {
    method: 'POST',
    headers: header,
    body: form
  })
    .then(res => res.json())
    .catch(err => console.error(err));
  return products
}
export async function getCategories() {
  const categories = await fetch(`http://localhost:3001/categories`)
    .then(res => res.json())
    .catch(err => console.error(err));

  return categories;
}
