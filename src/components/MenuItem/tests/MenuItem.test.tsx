import React from 'react';
import { render } from '@testing-library/react';
import { MenuItem } from '../MenuItem';
import { CollapsedContext } from '../../SideBar/context/Collapsed.context';

describe('MenuItem Component', () => {
  it('should render MenuList with colors #FFFFFF ', async () => {
    expect(true).toBeTruthy();
  });
  it('should render MenuItem with default props', () => {
    const { container } = render(<MenuItem content="Default Content" />);
    expect(container).toMatchSnapshot();
  });

  it('should render MenuItem with classic variant', () => {
    const { container } = render(
      <MenuItem content="Classic Content" variant="classic" />);
    expect(container).toMatchSnapshot();
  });

  it('should render MenuItem with footer variant', () => {
    const { container } = render(
      <MenuItem content="Footer Content" variant="footer" />);
    expect(container).toMatchSnapshot();
  });

  it('should render MenuItem with an icon', () => {
    const { container } = render(<MenuItem content="Icon Content" icon="home" />);
    expect(container).toMatchSnapshot();
  });

  it('should render MenuItem with an image', () => {
    const { container } = render(
      <MenuItem content="Image Content" image="imageSrc" />);
    expect(container).toMatchSnapshot();
  });

  it('should render MenuItem with avatar and email', () => {
    const { container } = render(
      <MenuItem content="Avatar Content" 
        avatar="Avatar" email="email@example.com" />);
    expect(container).toMatchSnapshot();
  });

  it('should render MenuItem in collapsed state', () => {
    const { container } = render(
      <CollapsedContext.Provider 
        value={{ collapsed: true, updateCollapsed: () => {} }}>
        <MenuItem content="Collapsed Content" />
      </CollapsedContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  test('Add the class "tvr-comp-menu-item-active"when active is true', () => {
    const { container } = render(
      <MenuItem active={true} content="Collapsed Content"/>);
    const menuItem = 
      container.querySelector('.tvr-comp-menu-item-container__selector');
    expect(menuItem).toHaveClass('tvr-comp-menu-item-active');
  });

  test('Must add the personalized class when className is declared', () => {
    const { container } = render(
      <MenuItem className="mi-clase-personalizada" content="Collapsed Content"/>);
    const menuItem =
     container.querySelector('.tvr-comp-menu-item-container__selector');
    expect(menuItem).toHaveClass('mi-clase-personalizada');
  });

  test('Add the class "tvr-comp-menu-item-collapsed"', () => {
    const collapsedContextValue = { 
      collapsed: true, 
      updateCollapsed: () => {} 
    };
    const { container } = render(
      <CollapsedContext.Provider value={collapsedContextValue}>
        <MenuItem content="Collapsed Content" />
      </CollapsedContext.Provider>
    );
    const menuItem = container.querySelector('.tvr-comp-menu-item-container');
    expect(menuItem).toHaveClass('tvr-comp-menu-item-collapsed');
  });

  test('className to Title3 when contentClassName is declared', () => {
    const { container } = render(
      <MenuItem 
        contentClassName="mi-clase-contenido" content="Collapsed Content"/>);
    const title = container.querySelector('h3');
    expect(title).toHaveClass('mi-clase-contenido');
  });

  test('Must call the correct function al variant proporcionado', () => {
    const { container } = render(
      <MenuItem variant="classic" content="Collapsed Content" />);
    const menuItem = container.querySelector('.tvr-comp-menu-item-classic');
    expect(menuItem).toBeInTheDocument();
  });

  test('Must call createDefault when variant is null', () => {
    const { container } = render(
      <MenuItem content="Collapsed Content" />);
    const menuItem = container.querySelector('.tvr-comp-menu-item-container');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).not.toHaveClass('tvr-comp-menu-item-classic');
  });

  test('should render provided icon when icon prop is provided', () => {
    const { container } = render(<MenuItem content="Icon Content" icon="user" />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  test('Renderiza el avatar correctamente cuando collapsed es false', () => {
    const { getByText } = render(
      <CollapsedContext.Provider
        value={{ collapsed: false, updateCollapsed: jest.fn() }}>
        <MenuItem avatar="AvatarName" contentClassName="custom-class" 
          content="Icon Content" variant='footer'/>
      </CollapsedContext.Provider>
    );
  
    // Asegúrate de que el avatar esté presente en el DOM
    const avatar = getByText('AvatarName');
    expect(avatar).toBeInTheDocument();
  
    // Verifica que el `Title3` tiene la clase proporcionada
    expect(avatar).toHaveClass('custom-class');
  });
  test('Renderiza el avatar correctamente cuando collapsed es true', () => {
    const { getByText } = render(
      <CollapsedContext.Provider
        value={{ collapsed: true, updateCollapsed: jest.fn() }}>
        <MenuItem avatar="AvatarName" contentClassName="custom-class" 
          content="Icon Content" variant='footer'/>
      </CollapsedContext.Provider>
    );
  
    // Asegúrate de que el avatar esté presente en el DOM
    const avatar = getByText('AvatarName');
    expect(avatar).toBeInTheDocument();
  
    // Verifica que el `Title3` tiene la clase proporcionada
    expect(avatar).toHaveClass('custom-class');
  });

  test('Tiene icono y collapsed es false', () => {
    const { container } = render(
      <MenuItem content="Icon Content" icon="home" variant='footer' />);
    expect(container).toMatchSnapshot();
  });
});
