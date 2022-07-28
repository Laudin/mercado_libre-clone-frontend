import { RootState } from './RootState';

export type { RootState };

export interface Product{
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
  seller: User,
}

export interface User {
  id: string,
  name: string,
  email: string
}
