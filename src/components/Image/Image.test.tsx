import React from 'react';
import { render, screen } from '@testing-library/react';

import { Image } from './';

describe('Image', () => {
  test('renders', () => {
    render(<Image src="path/to/img.jpg" alt="Image description" />);
    expect(screen.queryByRole('img')).toBeInTheDocument();
  });
});
