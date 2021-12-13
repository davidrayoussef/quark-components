import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Dropdown } from './';

describe('Dropdown', () => {
  const defaultLabel = 'Investment Types';
  beforeEach(() => {
    render(
      <Dropdown
        data={[
          { label: 'Stocks', value: 'stocks' },
          { label: 'Bonds', value: 'bonds' }
        ]}
        defaultLabel={defaultLabel}
      />
    );
  });
  test('renders', () => {
    expect(screen.getByText(/Investment Types/)).toBeInTheDocument();
  });
  test('opens menu when clicked', () => {
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByRole('list')).toBeInTheDocument();
  });
  test('displays selected menu item when clicked', () => {
    expect(screen.getByRole('button').textContent).toBe('Investment Types');
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getAllByRole('listitem')[0]);
    expect(screen.getByRole('button').textContent).toBe('Stocks');
  });
});
