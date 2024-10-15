import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';

describe('Button Components', () => {
  describe('Button', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByText('Click me');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('tvr-comp-button tvr-comp-button-primary');
    });

    it('renders with custom type', () => {
      render(<Button $variant="secondary">Click me</Button>);
      expect(screen.getByText('Click me')).toHaveClass(
        'tvr-comp-button tvr-comp-button-secondary'
      );
    });

    it('renders with custom size', () => {
      render(<Button $size="large">Click me</Button>);
      expect(screen.getByText('Click me')).toHaveClass(
        'tvr-comp-button tvr-comp-button-primary tvr-comp-button-large'
      );
    });

    it('renders with custom margin', () => {
      render(<Button $m="4">Click me</Button>);
      expect(screen.getByText('Click me')).toHaveClass(
        'tvr-comp-button tvr-comp-button-primary'
      );
    });

    it('passes through additional props', () => {
      render(<Button data-testid="custom-button">Click me</Button>);
      expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    });
  });
});
