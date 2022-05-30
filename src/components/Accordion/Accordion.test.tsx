import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Accordion } from './';

const data = [
  { heading: 'Heading 1', body: 'Body 1' },
  { heading: 'Heading 2', body: 'Body 2' },
  { heading: 'Heading 3', body: 'Body 3' }
];

describe('Accordion', () => {
  beforeEach(() => {
    render(<Accordion data={data} />);
  });
  test('renders', () => {
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
  });
  test('clicking head shows related content', () => {
    expect(screen.getByText('Body 2')).not.toBeVisible();
    fireEvent.click(screen.getByText('Heading 2'));
    expect(screen.getByText('Body 2')).toBeVisible();
  });
  test('clicking head of currently expanded content does not collapse content', () => {
    expect(screen.getByText('Body 2')).not.toBeVisible();
    fireEvent.click(screen.getByText('Heading 2'));
    expect(screen.getByText('Body 2')).toBeVisible();
    fireEvent.click(screen.getByText('Heading 2'));
    expect(screen.getByText('Body 2')).toBeVisible();
  });
});
