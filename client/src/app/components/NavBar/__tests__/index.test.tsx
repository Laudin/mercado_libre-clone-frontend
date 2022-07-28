import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { fireEvent, render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from '../../../context/User'

import { NavBar } from '../index';

const shallowRenderer = createRenderer()

describe('<NavBar />', () => {
   test('should render', () => {
      shallowRenderer.render(
         <BrowserRouter>
            <UserProvider>
               <NavBar />
            </UserProvider>
         </BrowserRouter>
      );
      const rendererOutput = shallowRenderer.getRenderOutput();
      expect(rendererOutput).toMatchSnapshot()
   })

   //this works
   it('should show input with initial value set', async () => {
      render(<input type="text" data-testid="form-field-firstname" />);
      const inputField = screen.getByTestId("form-field-firstname")
      fireEvent.change(inputField, { target: { value: 'a' } })
      expect(inputField).toHaveDisplayValue('a');
   });
   /*
   //with redux
   it('should dispatch action on username change', () => {
   const input = component.container.querySelector('input');
   fireEvent.change(input!, { target: { value: 'test' } });
   expect(store.getState().githubRepoForm.loading).toBe(true);
 }); */
});