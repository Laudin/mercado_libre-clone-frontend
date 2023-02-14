import { RootState } from './RootState';

export type { RootState };

export interface Product {
  id: string,
  name: string,
  category: string[] | string,
  brand: string,
  model: string,
  price: number | null,
  stock: number,
  description: string,
  state: string,
  createdAt?: Date,
  photos: string[]
  sellerId: string,
  sellerName: string,
  sellerEmail: string,
}

export interface User {
  id?: string,
  name: string,
  email: string,
  password?: string
}
