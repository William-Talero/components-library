import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox Component', () => {
  // Rendering tests
  it('should render a Checkbox with label', () => {
    render(<Checkbox label="Check me" checked={false} onChange={() => {}} />);
    expect(screen.getByText('Check me')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should render a Checkbox without label', () => {
    render(<Checkbox checked={false} onChange={() => {}} />);
    expect(screen.queryByTestId('checkbox-label')).not.toBeInTheDocument();
  });

  // State tests
  it('should render with success state', () => {
    const { container } = render(
      <Checkbox
        label="Success"
        checked={false}
        onChange={() => {}}
        state="success"
      />
    );
    expect(
      container.querySelector('.tvr-comp-checkbox-success')
    ).toBeInTheDocument();
  });

  it('should render with invalid state', () => {
    const { container } = render(
      <Checkbox
        label="Invalid"
        checked={false}
        onChange={() => {}}
        state="invalid"
      />
    );
    expect(
      container.querySelector('.tvr-comp-checkbox-invalid')
    ).toBeInTheDocument();
  });

  // Type tests
  it('should render with soft type', () => {
    const { container } = render(
      <Checkbox label="Soft" checked={false} onChange={() => {}} type="soft" />
    );
    expect(container.querySelector('.soft')).toBeInTheDocument();
  });

  it('should render with solid type (default)', () => {
    const { container } = render(
      <Checkbox label="Solid" checked={false} onChange={() => {}} />
    );
    expect(container.querySelector('.solid')).toBeInTheDocument();
  });

  // Interaction tests
  it('should call onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Check me" checked={false} onChange={handleChange} />);
    fireEvent.click(screen.getByText('Check me'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('should call onChange when clicked on checkbox directly', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Check me" checked={false} onChange={handleChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  // Disabled state tests
  it('should render a disabled unchecked Checkbox', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Checkbox
        label="Disabled"
        checked={false}
        onChange={handleChange}
        disabled
      />
    );
    expect(screen.getByRole('checkbox')).toBeDisabled();
    expect(container.querySelector('.disabled')).toBeInTheDocument();

    // Verify that clicking doesn't trigger onChange
    fireEvent.click(screen.getByText('Disabled'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should render a disabled checked Checkbox', () => {
    const { container } = render(
      <Checkbox
        label="Disabled checked"
        checked={true}
        onChange={() => {}}
        disabled
      />
    );
    expect(screen.getByRole('checkbox')).toBeDisabled();
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(container.querySelector('.disabled')).toBeInTheDocument();
  });

  // Combined states tests
  it('should render soft type with success state', () => {
    const { container } = render(
      <Checkbox
        label="Soft success"
        checked={true}
        onChange={() => {}}
        type="soft"
        state="success"
      />
    );
    const element = container.querySelector('.soft.tvr-comp-checkbox-success');
    expect(element).toBeInTheDocument();
  });

  it('should handle all class combinations correctly', () => {
    const { container } = render(
      <Checkbox
        label="All states"
        checked={true}
        onChange={() => {}}
        type="soft"
        state="success"
        disabled
      />
    );
    const label = container.querySelector('label');
    expect(label).toHaveClass(
      'tvr-comp-custom-checkbox',
      'disabled',
      'tvr-comp-checkbox-success',
      'soft'
    );
  });
});
