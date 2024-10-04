import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '@/components/Tooltip/Tooltip';

describe('Tooltip Component', () => {
  it('renders without text', () => {
    render(<Tooltip />);
    expect(screen.getByTestId('icon-info')).toBeInTheDocument();
    expect(screen.queryByText(/./)).not.toBeInTheDocument();
  });

  it('renders with text', () => {
    const text = 'Consejo';
    render(<Tooltip text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('applies correct color class', () => {
    const { container } = render(<Tooltip color="orange" />);
    expect(container.firstChild).toHaveClass('tvr-comp-info-badge--orange');
  });

  it('applies default color class when no color is specified', () => {
    const { container } = render(<Tooltip />);
    expect(container.firstChild).toHaveClass('tvr-comp-info-badge--default');
  });

  it('applies margin style when margin prop is provided', () => {
    const { container } = render(<Tooltip margin="20px" />);
    expect(container.firstChild).toHaveStyle('--margin: 20px');
  });

  it('combines custom className with default classes', () => {
    const { container } = render(<Tooltip className="custom-class" />);
    expect(container.firstChild).toHaveClass(
      'tvr-comp-info-badge custom-class'
    );
  });

  it('passes through additional props', () => {
    render(<Tooltip data-testid="custom-tooltip" />);
    expect(screen.getByTestId('custom-tooltip')).toBeInTheDocument();
  });
});
