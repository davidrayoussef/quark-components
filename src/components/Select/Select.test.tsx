import React from 'react';
import { render, screen } from '@testing-library/react';

import { Select } from './';

describe('Select', () => {
  beforeEach(() => {
    render(
      <Select
        name="gender"
        options={['male', 'female', 'nonbinary', 'other']}
      />
    );
  });
  test('renders', () => {
    expect(screen.getAllByRole('option')).toHaveLength(5);
  });
});
