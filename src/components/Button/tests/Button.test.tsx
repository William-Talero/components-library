import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../Button';

describe('Button Components', () => {
  describe('Button', () => {
    test('renders with default props', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByText('Click me');
      expect(button).toBeInTheDocument();
    });

    test('renders with an icon on the left', () => {
      render(<Button $iconLeft>Click me</Button>);
      const icon = screen.getByTestId('icon-plus');
      expect(icon).toBeInTheDocument();
    });

    test('renders with an icon on the right', () => {
      render(<Button $iconRight>Click me</Button>);
      const icon = screen.getByTestId('icon-plus');
      expect(icon).toBeInTheDocument();
    });

    test('renders with only an icon', () => {
      render(<Button $onlyIcon />);
      const icon = screen.getByTestId('icon-plus');
      expect(icon).toBeInTheDocument();
    });

    test('should button with all properties', () => {
      render(
        <Button
          $iconLeft
          $iconRight
          $onlyIcon
          $icon="plus"
          $variant="primary"
          $size="large"
          $outline
        >
          Click me
        </Button>
      );
      const icon = screen.getByTestId('icon-plus');
      expect(icon).toBeInTheDocument();
    });

    test('should show small size button', async () => {
      const { container } = render(
        <Button $size="small" $iconLeft $variant="secondary">
          Click me
        </Button>
      );
      const button = container.firstChild;
      expect(button).toHaveClass('tvr-comp-button-small');
    });

    test('should show large size button', async () => {
      const { container } = render(
        <Button $size="large" $onlyIcon $variant="secondary">
          Click me
        </Button>
      );
      const button = container.firstChild;
      expect(button).toHaveClass('tvr-comp-button-large');
    });

    test('should show icon right button', async () => {
      const { container } = render(
        <Button $variant="primary" $iconLeft $iconRight>
          Click me
        </Button>
      );
      const button = container.firstChild;
      expect(button).toHaveClass('tvr-comp-button-primary');
    });

    test('should show button with normal size', () => {
      const { container } = render(
        <Button $size="normal" $iconLeft>
          Click me
        </Button>
      );
      const button = container.firstChild;
      expect(button).toHaveClass('tvr-comp-button-primary');
    });
  });
});
