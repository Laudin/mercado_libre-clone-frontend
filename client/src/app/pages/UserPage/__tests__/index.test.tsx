import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { UserPage } from '../index';

const shallowRenderer = createRenderer();

describe('<PublishPage />', () => {
   it('should match snapshot', () => {
      shallowRenderer.render(<UserPage />);
      const renderedOutput = shallowRenderer.getRenderOutput();
      expect(renderedOutput).toMatchSnapshot();
   });


});