import React from 'react';
import { render } from '@testing-library/react';

import { Grid } from './';

describe('Grid', () => {
  test('renders', () => {
    const { container } = render(
      <Grid>
        <div></div>
        <div></div>
        <div></div>
      </Grid>
    );
    expect(container.querySelector('.grid')).toBeInTheDocument();
  });
});
