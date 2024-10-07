import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox Component', () => {
  it('should render a Checkbox with label', () => {
    render(<Checkbox label="Check me" checked={false} onChange={() => {}} />);
    expect(screen.getByText('Check me')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should call onChange when clicked', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox label="Check me" checked={false} onChange={handleChange} />
    );
    fireEvent.click(screen.getByText('Check me'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('should render a checked Checkbox', () => {
    render(<Checkbox label="Check me" checked={true} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should render a disabled Checkbox', () => {
    render(
      <Checkbox label="Check me" checked={false} onChange={() => {}} disabled />
    );
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
