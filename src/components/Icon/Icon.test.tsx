import React from 'react';
import { render, screen } from '@testing-library/react';

import { Icon } from './';

describe('Icon', () => {
  test('renders', () => {
    const { container } = render(<Icon value="email" />);
    screen.debug();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
