import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Badge } from '../Badge';
import { BadgeProps } from '../IBadge';

describe('Badge Component', () => {
  const defaultProps: BadgeProps = {
    $type: 'white',
    $size: 'default',
    $color: 'white',
    $shape: 'rounded',
    $icon: 'home',
    $placeholder: 'Test Badge',
  };

  test('renders Badge with placeholder text', () => {
    render(<Badge $placeholder="Test Badge" $showDot={true} />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  test('renders Badge with defaultProps and placeholder text', () => {
    render(<Badge {...defaultProps} />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  test('applies correct classes based on props', () => {
    const { container } = render(
      <Badge {...defaultProps} $type="solid" $color="green" />
    );
    const badgeElement = container.firstChild;
    expect(badgeElement).toHaveClass('tvr-cmp-badge');
    expect(badgeElement).toHaveClass('solid-green');
  });

  test('displays avatar when $avatar prop is provided', () => {
    render(<Badge {...defaultProps} $avatar="avatar.jpg" />);
    const avatar = screen.getByAltText('Avatar');
    expect(avatar).toHaveAttribute('src', 'avatar.jpg');
  });

  test('calls $onClickArrow when arrow button is clicked', () => {
    const onClickArrowMock = jest.fn();
    render(
      <Badge
        {...defaultProps}
        $showArrowButton
        $onClickArrow={onClickArrowMock}
      />
    );
    const arrowButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(arrowButton);
    expect(onClickArrowMock).toHaveBeenCalledTimes(1);
  });

  test('calls $onClose when close button is clicked and hides the badge', () => {
    const onCloseMock = jest.fn();
    render(<Badge {...defaultProps} $showCloseButton $onClose={onCloseMock} />);
    const closeButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Test Badge')).not.toBeInTheDocument();
  });

  test('hides badge when showBadge is false', () => {
    const { rerender } = render(<Badge {...defaultProps} />);
    rerender(<Badge {...defaultProps} />);
    expect(screen.queryByText('Test Badge')).toBeInTheDocument();
  });
});
