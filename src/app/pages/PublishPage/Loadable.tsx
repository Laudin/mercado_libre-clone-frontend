import { lazyLoad } from 'utils/loadable';

export const PublishPage = lazyLoad(
   () => import('./index'),
   module => module.PublishPage
 );