import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { AutoComplete } from './';

describe('AutoComplete', () => {
  beforeEach(() => {
    render(<AutoComplete suggestions={['New Jersey', 'New York']} />);
  });
  test('updates textbox value on input change', () => {
    const value = 'text input';
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value } });
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });
  test('updates textbox value on list item click', () => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'new j' }
    });
    fireEvent.click(screen.getByRole('listitem'));
    expect(screen.getByDisplayValue('New Jersey')).toBeInTheDocument();
  });
  test('removes suggestion list when input is cleared', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new' } });
    expect(screen.queryAllByRole('listitem')).toHaveLength(2);
    fireEvent.change(inputElement, { target: { value: '' } });
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
