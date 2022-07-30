import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ProductPage } from '../index'

const shallowRenderer = createRenderer()

describe('<ProductPage />', () => {
   test('should render', () => {
      shallowRenderer.render(<ProductPage />);
      const rendererOutput = shallowRenderer.getRenderOutput();
      expect(rendererOutput).toMatchSnapshot()
   })
})

//test styled-components
/* it('works fine', () => {
   const page = renderer.create(<HomePage />).toJSON()

}) */