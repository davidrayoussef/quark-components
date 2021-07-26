import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

import { ButtonSize, ButtonType } from '@/shared';

describe('Button', () => {
  test('renders button text', () => {
    render(<Button>Button Text</Button>);
    expect(screen.getByText(/Button Text/)).toBeInTheDocument();
  });
  test('adds .primary class if no styleType is passed', () => {
    const { container } = render(<Button>Button Text</Button>);
    expect(container.querySelector('.primary')).toBeInTheDocument();
  });
  test('adds .secondary class for styleType="secondary"', () => {
    const { container } = render(
      <Button styleType={ButtonType.Secondary}>Button Text</Button>
    );
    expect(container.querySelector('.secondary')).toBeInTheDocument();
  });
  test('adds .reverse class for styleType="reverse"', () => {
    const { container } = render(
      <Button styleType={ButtonType.Reverse}>Button Text</Button>
    );
    expect(container.querySelector('.reverse')).toBeInTheDocument();
  });
  test('adds .danger class for styleType="danger"', () => {
    const { container } = render(
      <Button styleType={ButtonType.Danger}>Button Text</Button>
    );
    expect(container.querySelector('.danger')).toBeInTheDocument();
  });
  test('adds .small class for size="small"', () => {
    const { container } = render(
      <Button size={ButtonSize.Small}>Button Text</Button>
    );
    expect(container.querySelector('.small')).toBeInTheDocument();
  });
  test('adds .large class for size="large"', () => {
    const { container } = render(
      <Button size={ButtonSize.Large}>Button Text</Button>
    );
    expect(container.querySelector('.large')).toBeInTheDocument();
  });
});
