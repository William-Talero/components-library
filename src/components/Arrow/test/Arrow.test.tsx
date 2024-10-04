import React from 'react';
import { render, screen } from '@testing-library/react';
import { Arrow } from '../Arrow';

describe('Button Component', () => {
  it('should render a right arrow', () => {
    render(<Arrow direction="right" />);
    expect(screen.getByRole('button')).toHaveClass(
      'tvr-comp-arrow tvr-comp-arrow-right'
    );
  });

  it('should render a left arrow', () => {
    render(<Arrow direction="left" />);
    expect(screen.getByRole('button')).toHaveClass(
      'tvr-comp-arrow tvr-comp-arrow-left'
    );
  });
});
