import React from 'react';
import { shallow } from 'enzyme';
import Docs from '../src/components/Docs';

test('should render', () => {
  const wrapper = shallow(
    <Docs>
      <div></div>
    </Docs>
  );
  expect(wrapper);
});
