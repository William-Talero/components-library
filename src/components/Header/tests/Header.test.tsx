import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header';
import { HeaderProps } from '../IHeader';

describe('Header Component', () => {
  const defaultProps: HeaderProps = {
    title: 'Test Title',
    caption: 'Test Caption',
    iconName: 'arrowDropDown',
  };

  it('renders without crashing', () => {
    const { getByText } = render(<Header {...defaultProps} />);
    console.log(getByText('Test Title'));
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('displays the correct title and caption', () => {
    const { getByText } = render(<Header {...defaultProps} />);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Caption')).toBeInTheDocument();
  });

  it('renders the icon with the correct name', () => {
    const { container } = render(<Header {...defaultProps} />);
    const icon = container.querySelector('.icon-header');
    expect(icon).toBeInTheDocument();
  });
});
