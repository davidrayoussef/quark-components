import React from 'react';
import { render, screen } from '@testing-library/react';

import { Share } from './';

describe('Share', () => {
  beforeEach(() => {
    render(
      <Share
        shares={['twitter', 'facebook', 'email']}
        url=""
        title={document.title}
        text="Quark Components: A library of React UI components."
      />
    );
  });
  test('renders', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
