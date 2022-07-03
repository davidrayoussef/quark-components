import React from 'react';
import { render, screen } from '@testing-library/react';

import { Tooltip } from './';

describe('Tooltip', () => {
  beforeEach(() => {
    render(<Tooltip message="Error message." />);
  });
  test('renders', () => {
    expect(screen.getByText('Error message.')).toBeInTheDocument();
  });
});
