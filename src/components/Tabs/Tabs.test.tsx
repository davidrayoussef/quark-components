import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Tabs, Tab } from './';

describe('Tabs', () => {
  test('renders', () => {
    render(
      <Tabs>
        <Tab label="Tab 1">Content 1</Tab>
        <Tab label="Tab 2">Content 2</Tab>
      </Tabs>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
  test('shows tab content when tab label is clicked', () => {
    render(
      <Tabs>
        <Tab label="Tab 1">Content 1</Tab>
        <Tab label="Tab 2">Content 2</Tab>
      </Tabs>
    );
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.queryByText('Content 2')).toBeVisible();
  });
  test('passing "disabled" makes Tab unselectable', () => {
    const { unmount } = render(
      <Tabs>
        <Tab label="Tab 1">Content 1</Tab>
        <Tab label="Tab 2">Content 2</Tab>
      </Tabs>
    );
    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.queryByText('Content 2')).toBeInTheDocument();
    unmount();
    render(
      <Tabs>
        <Tab label="Tab 1">Content 1</Tab>
        <Tab label="Tab 2" disabled>
          Content 2
        </Tab>
      </Tabs>
    );
    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });
});
