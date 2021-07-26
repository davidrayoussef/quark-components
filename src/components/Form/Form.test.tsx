import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Form } from './';

describe('Form', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Form onSubmit={jest.fn()}>
        <input />
      </Form>
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
