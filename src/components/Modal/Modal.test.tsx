import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Modal } from './';

describe('Modal', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Modal isOpen handleClose={jest.fn} title="Modal Title">
        <p>Modal Content</p>
      </Modal>
    );
  });
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('renders correct title', () => {
    expect(wrapper.find('header').text()).toEqual('Modal Title');
  });
  test('renders correct content', () => {
    expect(wrapper.find('p').text()).toEqual('Modal Content');
  });
  test('should not render children if isOpen prop set to false', () => {
    wrapper.setProps({
      isOpen: false
    });
    expect(wrapper.children().length).toEqual(0);
  });
});
