import { Product } from '../../types'

export async function getProductsByName(name: string) {
   const products = await fetch(`http://localhost:3001/product?name=${name}`)
      .then(res => res.json())
      .catch(err => console.error(err));

   return products.data.products;
}
export async function getProductsList(name: string) {
   const products = await fetch(`http://localhost:3001/products_list?name=${name}`)
      .then(res => res.json())
      .catch(err => console.error(err));

   return products.data.products;
}
export async function getProductsById(id: string) {
   const products = await fetch(`http://localhost:3001/product/${id}`)
      .then(res => res.json())
      .catch(err => console.error(err));

   return products;
}
export async function getProductsByCategory(category: string) {
   const products = await fetch(`http://localhost:3001/category?name=${category}`)
      .then(res => res.json())
      .catch(err => console.error(err));

   return products;
}
export async function setNewProduct(product: Product, token: any) {
   const formData = new FormData()
   for (const [key, value] of Object.entries(product)) {
      if (!(key === 'photos')) {
         formData.append(key, value)
      } else {
         for (let i = 0; i < value.length; i++) {
            formData.append(key, value.item(i), value.item(i).name)
         }

      }
   }
   console.log({ id: product.sellerId, name: product.sellerName, email: product.sellerEmail })
   const header = new Headers({
      Authorization: `Bearer ${token}`,
   });
   const products = await fetch(`http://localhost:3001/product`, {
      method: 'POST',
      headers: header,
      body: formData
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
