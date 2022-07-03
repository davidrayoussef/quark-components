import React from 'react';
import { render, screen } from '@testing-library/react';

import { LazyLoad } from './';

describe('LazyLoad', () => {
  test('renders', () => {
    render(
      <LazyLoad>
        <img src="../../documentation/images/lazyload-1.jpg" alt="Image 1" />
        <img src="../../documentation/images/lazyload-2.jpg" alt="Image 2" />
      </LazyLoad>
    );
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
