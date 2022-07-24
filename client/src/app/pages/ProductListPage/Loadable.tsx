import { lazyLoad } from 'utils/loadable';

export const ProductListPage = lazyLoad(
  () => import('./index'),
  module => module.ProductListPage,
);
