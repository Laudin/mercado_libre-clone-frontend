import { RootState } from './RootState';

export type { RootState };

export interface Product{
  name: string,
  price: number,
  discription: string,
  state: string,
  createdAt?: Date,
  seller: string,
  category: string
}
