import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { fireEvent, render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { LoginPage } from '../index';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from 'app/context/User';

const shallowRenderer = createRenderer();

describe('<LoginPage />', () => {
   test('should render', () => {
      shallowRenderer.render(
         <BrowserRouter>
            <UserProvider>
               <LoginPage />
            </UserProvider>
         </BrowserRouter>
      );
      const rendererOutput = shallowRenderer.getRenderOutput();
      expect(rendererOutput).toMatchSnapshot()
   })

   /* it('test login?', async () => {
      render(
         <BrowserRouter>
            <UserProvider>
               <LoginPage />
            </UserProvider>
         </BrowserRouter>);
      const emailInput = screen.getByTestId("email")
      const passwordInput = screen.getByTestId("password")
      const loginButton = screen.getByTestId("login")

      jest.mock('app/api/usersApi')
      const handleSubmitMock = jest.fn()

      fireEvent.change(emailInput, { target: { value: 'gastonlaudin@gmail.com' } })
      fireEvent.change(passwordInput, { target: { value: '1234' } })
      fireEvent.click(loginButton)

      console.log("handleSubmitMock.mock", handleSubmitMock.mock)

      expect(handleSubmitMock).toBeCalled()
      //expect(emailInput).toHaveValue('gastonlaudin@gmail.com');
   }); */
});