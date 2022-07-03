import React from 'react';
import { render, screen } from '@testing-library/react';

import { List } from './';

describe('List', () => {
  beforeEach(() => {
    render(
      <List
        title="List Title"
        data={['list item 1', 'list item 2', 'list item 3']}
      />
    );
  });
  test('renders', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  test('renders title', () => {
    expect(screen.getByText('List Title')).toBeInTheDocument();
  });
  test('renders 3 list items', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
