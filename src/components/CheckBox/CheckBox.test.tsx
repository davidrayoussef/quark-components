import React from 'react';
import { render, screen } from '@testing-library/react';

import { CheckBox } from './';

describe('CheckBox', () => {
  test('renders', () => {
    render(
      <CheckBox
        name="favorites"
        label="FAVORITE FRAMEWORKS"
        options={['React', 'Angular', 'Vue']}
        onChange={jest.fn()}
      />
    );
    expect(screen.getAllByRole('checkbox')).toHaveLength(3);
  });
});
