import React from 'react';
import { render, screen } from '@testing-library/react';

import { Swiper } from './';

describe('Swiper', () => {
  beforeEach(() => {
    render(
      <Swiper>
        <img src="images/image-1.jpg" alt="Image 1" />
        <img src="images/image-2.jpg" alt="Image 2" />
      </Swiper>
    );
  });
  test('renders', () => {
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
