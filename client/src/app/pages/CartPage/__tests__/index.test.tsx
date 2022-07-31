import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { CartPage } from '../index'

const shallowRenderer = createRenderer()

describe('<CartPage />', () => {
   test('should render', () => {
      shallowRenderer.render(<CartPage />);
      const rendererOutput = shallowRenderer.getRenderOutput();
      expect(rendererOutput).toMatchSnapshot()
   })
})

//test styled-components
/* it('works fine', () => {
   const page = renderer.create(<HomePage />).toJSON()

}) */