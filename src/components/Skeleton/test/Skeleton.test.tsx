import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from '../Skeleton';

describe('Skeleton Component', () => {
  test('renders with default props', () => {
    const { container } = render(<Skeleton />);
    const skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveStyle({
      width: '100%',
      height: '20px',
      borderRadius: '4px',
    });
    expect(skeletonElement).toHaveClass('skeleton rectangle');
  });

  test('renders with circle shape', () => {
    const { container } = render(<Skeleton shape="circle" />);
    const skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveStyle({
      borderRadius: '50%',
    });
    expect(skeletonElement).toHaveClass('skeleton circle');
  });

  test('renders with custom width and height', () => {
    const { container } = render(<Skeleton width="50px" height="50px" />);
    const skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveStyle({
      width: '50px',
      height: '50px',
    });
  });

  test('renders with additional className', () => {
    const { container } = render(<Skeleton className="custom-class" />);
    const skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveClass('custom-class');
  });

  test('should render with default properties', () => {
    const { container } = render(<Skeleton />);
    const skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveStyle({
      width: '100%',
      height: '20px',
      borderRadius: '4px',
    });
    expect(skeletonElement).toHaveClass('skeleton rectangle');
  });

  test('should render rectangule', () => {
    const { container } = render(<Skeleton />);
    const skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveClass('skeleton rectangle');
  });

  test('verifies borderRadius logic based on shape', () => {
    const { rerender, container } = render(
      <Skeleton shape="circle" width="100%" />
    );
    let skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveStyle({
      borderRadius: '50%',
    });

    rerender(<Skeleton shape="rectangle" />);
    skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveStyle({
      borderRadius: '4px',
    });
  });

  test('should rewnder rectangle skeleton', () => {
    const { container } = render(<Skeleton shape="rectangle" width="100" />);
    const skeletonElement = container.firstChild;
    expect(skeletonElement).toHaveClass('skeleton rectangle');
  });

  test('should render with all properties', () => {
    const { container } = render(
      <Skeleton
        shape="rectangle"
        className="custom-class"
        borderRadius="4px"
      />
    );
    const skeletonElement = container.firstChild;
    screen.debug();
    expect(skeletonElement).toHaveStyle({
      width: '100%',
      height: '20px',
      borderRadius: '4px',
    });
    expect(skeletonElement).toHaveClass('skeleton rectangle custom-class');
  });
});
