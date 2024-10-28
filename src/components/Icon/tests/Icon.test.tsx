import React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconName } from '../Icons';

// Lista completa de todos los iconos disponibles
const ALL_ICONS: readonly IconName[] = [
  'plus',
  'leftArrow',
  'rightArrow',
  'arrowDropDown',
  'downArrow',
  'groupAdd',
  'ellipsis',
  'home',
  'lan',
  'supervisor',
  'moneyIcon',
  'user',
  'search',
  'logout',
  'info',
  'slashBold',
  'calendarToday',
  'done',
  'warningAmber',
  'closeIcon',
  'upArrow',
  'filterList',
  'lineSpinner',
  'circularProgressSpinner',
  'lineSpinner'
] as const;

describe('Icon Component', () => {
  const validateIconStructure = (container: HTMLElement) => {
    const iconContainer = container.firstChild as HTMLElement;
    const svgElement = iconContainer?.firstChild as HTMLElement;

    expect(iconContainer).toHaveClass('tvr-comp-icon-container');
    expect(svgElement).toHaveClass('tvr-comp-styled-svg-icon');

    return { iconContainer, svgElement };
  };

  it('renders with custom height and width', () => {
    const { container } = render(
      <Icon $name="plus" $h="50px" $w="50px" $m="10px" />
    );
    const { iconContainer } = validateIconStructure(container);

    expect(iconContainer).toHaveStyle({
      '--h-container': '50px',
      '--w-container': '50px',
      '--m-container': '10px',
    });
  });

  it('renders correctly with default props and custom class', () => {
    const { container } = render(<Icon $name="plus" className="custom-class" />);
    const { iconContainer } = validateIconStructure(container);

    expect(iconContainer).toHaveClass('custom-class');
    expect(iconContainer).toHaveStyle({ '--h-container': '100%' });
  });

  // Prueba de props adicionales
  it('passes additional props to container', () => {
    const { container } = render(
      <Icon $name="plus" data-testid="test-icon" title="test title" />
    );
    const { iconContainer } = validateIconStructure(container);

    expect(iconContainer).toHaveAttribute('data-testid', 'test-icon');
    expect(iconContainer).toHaveAttribute('title', 'test title');
  });

  // Prueba dinámica para todos los iconos disponibles
  ALL_ICONS.forEach((iconName) => {
    it(`renders --- ${iconName} --- icon correctly`, () => {
      const { container } = render(<Icon $name={iconName} title="test title" />);
      validateIconStructure(container);
      const { iconContainer } = validateIconStructure(container);
      expect(iconContainer).toHaveAttribute('title', 'test title');
    });
  });
});
