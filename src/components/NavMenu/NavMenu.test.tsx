import React from 'react';
import { render, screen } from '@testing-library/react';

import { NavMenu } from './';
import { withMobileMenu } from './withMobileMenu';

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn(() => {
    return { matches: true };
  })
});

const data = [
  { name: 'nave menu item 1' },
  { name: 'nave menu item 2' },
  { name: 'nave menu item 3' }
];

describe('NavMenu', () => {
  beforeEach(() => {
    render(<NavMenu data={data} menuTitle="NavMenu Title" />);
  });
  test('renders', () => {
    expect(screen.getByText('NAVMENU TITLE')).toBeInTheDocument();
  });
  test('renders 3 anchor tags', () => {
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
  test('renders svg (hamburger icon) if withMobileMenu HOC is used', () => {
    const NavMenuWithMobileMenu = withMobileMenu(NavMenu);
    const { container } = render(<NavMenuWithMobileMenu data={data} />);
    expect(container.querySelector('svg')).toBeDefined();
  });
});
