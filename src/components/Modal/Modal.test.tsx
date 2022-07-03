import React from 'react';
import { render, screen } from '@testing-library/react';

import { Modal } from './';

describe('Modal', () => {
  beforeEach(() => {
    render(
      <Modal isOpen handleClose={jest.fn} title="Modal Title">
        <p>Modal Content</p>
      </Modal>
    );
  });
  test('renders correct title', () => {
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
  });
  test('renders correct content', () => {
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });
  test('should not render children if isOpen prop set to false', () => {
    const { container } = render(
      <Modal isOpen={false} handleClose={jest.fn} title="Modal Title">
        <p>Modal Content</p>
      </Modal>
    );
    expect(container.children.length).toEqual(0);
  });
});
