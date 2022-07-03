import React from 'react';
import { render } from '@testing-library/react';

import { Loader } from './';

describe('Loader', () => {
  test('renders', () => {
    const { container } = render(<Loader />);
    expect(container.querySelector('.loader')).toBeInTheDocument();
  });
});
