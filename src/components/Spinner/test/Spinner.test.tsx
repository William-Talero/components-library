import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SpinnerProps } from '../ISpinner';
import { Spinner } from '../Spinner';

describe('Spinner Component', () => {
  const spinnerProps: SpinnerProps = {
    $message: 'Loading...',
  };

  test('should show basic spinner', () => {
    render(<Spinner {...spinnerProps}></Spinner>);
    screen.debug();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should show spinner without text', () => {
    spinnerProps.$type = 'circularProgressNoLabel';
    render(<Spinner {...spinnerProps}></Spinner>);
    screen.debug();
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  test('should show full spinner', () => {
    spinnerProps.$variant = 'fullScreen';
    render(<Spinner {...spinnerProps}></Spinner>);
    const spinner = screen.getByTestId('spinner-container');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('tvr-comp-spinner-principal-full-screen');
  });

  test('should show only spinner with custom class', () => {
    spinnerProps.$onlySpinner = true;
    spinnerProps.$className = 'custom-class';
    render(<Spinner {...spinnerProps}></Spinner>);
    const spinner = screen.getByTestId('spinner-container');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('custom-class');
  });

  test('should show spinner with button close', () => {
    spinnerProps.$showCloseButton = true;
    spinnerProps.$variant = 'container';
    spinnerProps.$onlySpinner = false;

    render(<Spinner {...spinnerProps}></Spinner>);
    const closeButton = screen.getAllByRole('button')[0];
    screen.debug();
    expect(closeButton).toBeInTheDocument();
  });

  test('should show spinner with all properties', () => {
    spinnerProps.$size = 'large';
    spinnerProps.$type = 'circularProgress';
    spinnerProps.$variant = 'container';
    spinnerProps.$wModal = '100px';
    spinnerProps.$hModal = '100px';
    spinnerProps.$wContainer = '100px';
    spinnerProps.$hContainer = '100px';
    spinnerProps.$onlySpinner = false;
    spinnerProps.onClose = jest.fn();

    render(<Spinner {...spinnerProps}></Spinner>);
    const spinner = screen.getByTestId('spinner-container');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle('--w-container: 100px;');
    expect(spinner).toHaveStyle('--h-container: 100px;');
  });
});
