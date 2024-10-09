import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, OrangeButton, ButtonWithIcon } from '../Button';

describe('Button Components', () => {
  describe('Button', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByText('Click me');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('tvr-comp-button tvr-comp-button-primary');
    });

    it('renders with custom type', () => {
      render(<Button $type="secondary">Click me</Button>);
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

  describe('OrangeButton', () => {
    it('renders with default props', () => {
      render(<OrangeButton>Click me</OrangeButton>);
      const button = screen.getByText('Click me');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(
        'tvr-comp-button tvr-comp-button-orange-primary'
      );
    });

    it('renders with custom type', () => {
      render(<OrangeButton $type="secondary">Click me</OrangeButton>);
      expect(screen.getByText('Click me')).toHaveClass(
        'tvr-comp-button tvr-comp-button-orange-secondary'
      );
    });

    it('renders with custom size and margin', () => {
      render(
        <OrangeButton $size="small" $m="2">
          Click me
        </OrangeButton>
      );
      expect(screen.getByText('Click me')).toHaveClass(
        'tvr-comp-button tvr-comp-button-orange-primary tvr-comp-button-small'
      );
    });
  });

  describe('ButtonWithIcon', () => {
    it('renders with default props', () => {
      render(<ButtonWithIcon $icon="plus">Click me</ButtonWithIcon>);
      const button = screen.getByText('Click me');
      expect(button).toBeInTheDocument();
      expect(button.closest('button')).toHaveClass(
        'tvr-comp-button tvr-comp-button-primary'
      );
      expect(screen.getByTestId('icon-plus')).toBeInTheDocument();
    });

    it('renders with custom type and size', () => {
      render(
        <ButtonWithIcon $type="secondary" $size="normal" $icon="plus">
          Click me
        </ButtonWithIcon>
      );
      const button = screen.getByText('Click me').closest('button');
      expect(button).toHaveClass(
        'tvr-comp-button tvr-comp-button-secondary tvr-comp-button-normal'
      );
      expect(screen.getByTestId('icon-plus')).toBeInTheDocument();
    });

    it('renders two "plus" icons when size is "lg"', () => {
      render(
        <ButtonWithIcon $size="large" $icon="plus">
          Click me
        </ButtonWithIcon>
      );
      const plusIcons = screen.getAllByTestId('icon-plus');
      expect(plusIcons).toHaveLength(2);
    });

    it('renders only one "plus" icon when size is not "lg"', () => {
      render(
        <ButtonWithIcon $size="small" $icon="plus">
          Click me
        </ButtonWithIcon>
      );
      const plusIcons = screen.getAllByTestId('icon-plus');
      expect(plusIcons).toHaveLength(1);
    });
  });
});
