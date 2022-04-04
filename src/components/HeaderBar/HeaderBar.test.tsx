import React from 'react';
import { render, screen } from '@testing-library/react';

import { HeaderBar } from './';

describe('HeaderBar', () => {
  beforeEach(() => {
    render(<HeaderBar title="HeaderBar Title" />);
  });
  test('renders', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  test('renders title prop', () => {
    expect(screen.getByText(/HeaderBar Title/)).toBeInTheDocument();
  });
});
