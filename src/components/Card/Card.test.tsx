import React from 'react';
import { render, screen } from '@testing-library/react';

import { Card } from './';

describe('Card', () => {
  beforeEach(() => {
    render(
      <Card title="Card Title">
        <div className="card-content">Card Content</div>
      </Card>
    );
  });
  test('renders title', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  test('renders content', () => {
    expect(screen.getByRole('heading').nextSibling.textContent).toEqual(
      'Card Content'
    );
  });
});
