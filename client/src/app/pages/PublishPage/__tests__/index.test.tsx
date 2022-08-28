import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import 'jest-styled-components'

import { PublishPage } from '../index';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'app/context/User';

const shallowRenderer = createRenderer();

describe('<PublishPage />', () => {
   test('should render', () => {
      shallowRenderer.render(
         <BrowserRouter>
            <UserProvider>
               <PublishPage />
            </UserProvider>
         </BrowserRouter>
      );
      const rendererOutput = shallowRenderer.getRenderOutput();
      expect(rendererOutput).toMatchSnapshot()
   })
});