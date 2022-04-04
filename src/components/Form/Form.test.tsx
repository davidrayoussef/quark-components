import React from 'react';
import { render, screen } from '@testing-library/react';

import { Form } from './';

describe('Form', () => {
  test('renders', () => {
    render(
      <Form onSubmit={jest.fn()}>
        <input />
      </Form>
    );
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
  });
});
