import React from 'react';
import { render, screen } from '@testing-library/react';

import { Input } from './';

describe('Input', () => {
  test('renders', () => {
    render(
      <Input
        name="username"
        label="USERNAME"
        placeholder="username"
        value="value"
        errorMessage="Username is incorrect."
        isValid
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
