import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../src/components/Modal';

test('should render', () => {
  const wrapper = shallow(
    <Modal></Modal>
  );
  expect(wrapper);
});

test('should render correct title', () => {
  const wrapper = shallow(
    <Modal title="Modal Title" isOpen={true}></Modal>
  );
  expect(wrapper.find('header').text()).toBe('Modal Title');
});

test('should render correct content', () => {
  const wrapper = shallow(
    <Modal isOpen={true}>
      <p>Modal Content</p>
    </Modal>
  );
  expect(wrapper.find('p').text()).toBe('Modal Content');
});

test('should not render children if isOpen prop set to false', () => {
  const wrapper = shallow(
    <Modal isOpen={false}>
      <p>Modal Content</p>
    </Modal>
  );
  expect(wrapper.children().length).toBe(0);
});

test('should set isOpen to false on close button click', () => {
  const wrapper = mount(
    <Modal isOpen={true}></Modal>
  );
  const closeButton = wrapper.find('button');
  closeButton.simulate('click');
  expect(wrapper.state().isOpen).toBe(false);
});

test('snapshot', () => {
  const wrapper = shallow(
    <Modal isOpen={true}>
      <p>Modal Content</p>
    </Modal>
  );
  expect(wrapper).toMatchSnapshot();
});
