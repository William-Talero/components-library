import React, { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MenuList } from '../MenuList';
import { CollapsedContext } from '@/components/SideBar/context/Collapsed.context';
import '@testing-library/jest-dom';

describe('Accordion Component', () => {

  it('should render MenuList with active true', async () => {
    act(() => {
      render(
        <CollapsedContext.Provider
          value={{ collapsed: false, updateCollapsed: () => {} }}
        >
          <div>
            <MenuList
              content="Afiliaciones"
              iconExpand="downArrow"
              className="test"
              active={true}
            >
              {[
                {
                  id: '001',
                  label: 'Confirmación Modelo Afiliaciones',
                  href: '/confirmaciones',
                },
                {
                  id: '002',
                  label: 'Parametría de Afiliación',
                  href: '/afiliacion',
                },
                {
                  id: '003',
                  label: 'Procesos Masivos',
                  href: '/masivos',
                },
                {
                  id: '004',
                  label: 'Saldos por cuenta',
                  href: '/saldos',
                },
              ].map((option, index) => {
                return (
                  <a href={option.href} id={option.id} key={index}>
                    {option.label}
                  </a>
                );
              })}
            </MenuList>
            <button>Click me</button>
          </div>
        </CollapsedContext.Provider>
      );
    });
    expect(screen.getByText('Afiliaciones')).toBeInTheDocument();
  });

  it('should render MenUList with active true and collapse true', async () => {
    act(() => {
      render(
        <CollapsedContext.Provider
          value={{ collapsed: true, updateCollapsed: () => {} }}
        >
          <div>
            <MenuList
              content="Afiliaciones"
              iconExpand="downArrow"
              icon="home"
              className="test"
              active={true}
            >
              {[
                {
                  id: '001',
                  label: 'Confirmación Modelo Afiliaciones',
                  href: '/confirmaciones',
                },
                {
                  id: '002',
                  label: 'Parametría de Afiliación',
                  href: '/afiliacion',
                },
                {
                  id: '003',
                  label: 'Procesos Masivos',
                  href: '/masivos',
                },
                {
                  id: '004',
                  label: 'Saldos por cuenta',
                  href: '/saldos',
                },
              ].map((option, index) => {
                return (
                  <a href={option.href} id={option.id} key={index}>
                    {option.label}
                  </a>
                );
              })}
            </MenuList>
            <button>Click me</button>
          </div>
        </CollapsedContext.Provider>
      );
    });
    const icon = document.getElementsByClassName('tvr-comp-icon-container')[0];
    fireEvent.click(icon);
    await waitFor(() => {
      expect(icon).toBeInTheDocument();
    });
  });

  it('should render MenUList with logo', async () => {
    act(() => {
      render(
        <CollapsedContext.Provider
          value={{ collapsed: false, updateCollapsed: () => {} }}
        >
          <div>
            <MenuList
              content="Afiliaciones"
              iconExpand="downArrow"
              className="test"
              active={true}
            >
              {[
                {
                  id: '001',
                  label: 'Confirmación Modelo Afiliaciones',
                  href: '/confirmaciones',
                },
                {
                  id: '002',
                  label: 'Parametría de Afiliación',
                  href: '/afiliacion',
                },
                {
                  id: '003',
                  label: 'Procesos Masivos',
                  href: '/masivos',
                },
                {
                  id: '004',
                  label: 'Saldos por cuenta',
                  href: '/saldos',
                },
              ].map((option, index) => {
                return (
                  <a href={option.href} id={option.id} key={index}>
                    {option.label}
                  </a>
                );
              })}
            </MenuList>
            <button>Click me</button>
          </div>
        </CollapsedContext.Provider>
      );
    });
    const icon = document.getElementsByClassName('tvr-comp-icon-container')[0];
    fireEvent.click(icon);
    await waitFor(() => {
      expect(icon).toBeInTheDocument();
    });
  });
  it('should render children when active and not collapsed', async () => {
    render(
      <CollapsedContext.Provider
        value={{ collapsed: false, updateCollapsed: () => {} }}
      >
        <MenuList
          content="Afiliaciones"
          iconExpand="downArrow"
          className="test"
          active={true}
        >
          <a href="/confirmaciones" id="001">Confirmación Modelo Afiliaciones</a>
        </MenuList>
      </CollapsedContext.Provider>
    );

    expect(
      screen.getByText('Confirmación Modelo Afiliaciones')).toBeInTheDocument();
  });

  it('should not render children when collapsed', async () => {
    render(
      <CollapsedContext.Provider
        value={{ collapsed: true, updateCollapsed: () => {} }}
      >
        <MenuList
          content="Afiliaciones"
          iconExpand="downArrow"
          className="test"
          active={true}
        >
          <a href="/confirmaciones" id="001">Confirmación Modelo Afiliaciones</a>
        </MenuList>
      </CollapsedContext.Provider>
    );

    expect(screen.queryByText(
      'Confirmación Modelo Afiliaciones')).not.toBeInTheDocument();
  });

  test('Must apply "tvr-comp-menu-list-active" when active is true', () => {
    const { container } = render(
      <MenuList active={true} content="Item activo" />);

    const menuList = 
      container.querySelector('.tvr-comp-menu-list-container__selector');

    expect(menuList).toHaveClass('tvr-comp-menu-list-active');
  });
  
  test('Must Not apply "tvr-comp-menu-list-active" when active is false', () => {
    const { container } = render(
      <MenuList active={false} content="Item no activo" />
    );
    
    const menuList = 
      container.querySelector('.tvr-comp-menu-list-container__selector');
    expect(menuList).not.toHaveClass('tvr-comp-menu-list-active');
  });

  test('Must apply the personalized class used in className', () => {
    const { container } = render(
      <MenuList className="custom-class" 
        content="Item no activo"/>
    );
  
    const menuList = 
      container.querySelector('.tvr-comp-menu-list-container__selector');
    expect(menuList).toHaveClass('custom-class');
  });
  
  test('Must handle className where value is null without errors', () => {
    const { container } = render(
      <MenuList className={''} content="Item no activo" />
    );
    
    const menuList = 
      container.querySelector('.tvr-comp-menu-list-container__selector');
    expect(menuList).toBeInTheDocument();
  });

  test('Must render children inside a list when active es true', () => {
    const { container } = render(
      <MenuList active={true} content="Item no activo">
        <div>Child 1</div>
        <div>Child 2</div>
      </MenuList>
    );
  
    const listItems = container.querySelectorAll('ul li');
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toBe('Child 1');
    expect(listItems[1].textContent).toBe('Child 2');
  });
  
  test('Must not render the elements of children when active is false', () => {
    const { container } = render(
      <MenuList active={false} content="Item no activo">
        <div>Child 1</div>
        <div>Child 2</div>
      </MenuList>
    );
  
    const list = container.querySelector('ul');
    expect(list).toBeNull();
  });
});
