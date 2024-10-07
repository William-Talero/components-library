import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Stepper } from './../Stepper';

describe('Stepper Component', () => {
  it('renders the correct number of steps', () => {
    render(<Stepper steps={3} />);
    const circles = screen.getAllByTestId('status-circle');
    expect(circles).toHaveLength(3);
  });

  it('highlights the current step', () => {
    render(<Stepper steps={3} currentStep={1} />);
    const circles = screen.getAllByTestId('status-circle');
    expect(circles[1]).toHaveClass('active');
  });

  it('disables previous button on first step', () => {
    render(<Stepper steps={3} currentStep={0} />);
    const prevButton = screen.getByTestId('previous-button');
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last step', () => {
    render(<Stepper steps={3} currentStep={2} />);
    const nextButton = screen.getByTestId('next-button');
    expect(nextButton).toBeDisabled();
  });

  it('calls onChange when a step is clicked', () => {
    const mockOnChange = jest.fn();
    render(<Stepper steps={3} onChange={mockOnChange} />);
    const circles = screen.getAllByTestId('status-circle');
    fireEvent.click(circles[1]);
    expect(mockOnChange).toHaveBeenCalledWith(1);
  });

  it('moves to next step when next button is clicked', () => {
    const mockOnChange = jest.fn();
    render(<Stepper steps={3} currentStep={0} onChange={mockOnChange} />);
    const nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);
    expect(mockOnChange).toHaveBeenCalledWith(1);
  });

  it('moves to previous step when previous button is clicked', () => {
    const mockOnChange = jest.fn();
    render(<Stepper steps={3} currentStep={1} onChange={mockOnChange} />);
    const prevButton = screen.getByTestId('previous-button');
    fireEvent.click(prevButton);
    expect(mockOnChange).toHaveBeenCalledWith(0);
  });
});
