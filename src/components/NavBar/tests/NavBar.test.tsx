import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NavBar } from '../NavBar'; // El componente que estás probando
import { CollapsedContext } from '@/components/SideBar/context/Collapsed.context';
import { MenuItem } from '@/components/MenuItem/MenuItem';

// Mock del contexto para simular su comportamiento
const mockedUpdateCollapsed = jest.fn();

const renderWithContext = (component: React.ReactNode, collapsed = false) => {
  return render(
    <CollapsedContext.Provider value={{ collapsed, 
      updateCollapsed: mockedUpdateCollapsed }}>
      {component}
    </CollapsedContext.Provider>
  );
};

describe('NavBar Component', () => {
  beforeEach(() => {
    mockedUpdateCollapsed.mockClear(); // Limpiar mock antes de cada prueba
  });

  test('renders NavBar correctly with content', () => {
    renderWithContext(
      <NavBar
        content={[
          <MenuItem key="menu1" icon="home" content="Home" />,
          <MenuItem key="menu2" icon="ellipsis" content="Profile" />
        ]}
        showFooter={false}
      />
    );

    // Verifica si los items del menú se renderizan
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  test('collapses the sidebar when button is clicked', () => {
    renderWithContext(<NavBar content={[]} showFooter={false} />, false);

    const collapseButton = screen.getByRole('button');
    fireEvent.click(collapseButton);

    // Verifica si la función updateCollapsed fue llamada con el valor correcto
    expect(mockedUpdateCollapsed).toHaveBeenCalledWith(true);
  });

  test('expands the sidebar when button is clicked again', () => {
    renderWithContext(<NavBar content={[]} showFooter={false} />, true);

    const collapseButton = screen.getByRole('button');
    fireEvent.click(collapseButton);

    // Verifica si la función updateCollapsed fue llamada con el valor correcto
    expect(mockedUpdateCollapsed).toHaveBeenCalledWith(false);
  });

  test('renders footer when showFooter is true', () => {
    renderWithContext(
      <NavBar
        content={[]}
        footer={<div>Footer Content</div>}
        showFooter={true}
      />
    );

    // Verifica si el footer se renderiza correctamente
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  test('renders and interacts with search input when expanded', () => {
    renderWithContext(
      <NavBar
        content={[]}
        footer={<div>Footer Content</div>}
        showFooter={true}
      />,
      false // Sidebar no está colapsada
    );

    const searchInput = screen.getByPlaceholderText('Buscar');
    expect(searchInput).toBeInTheDocument();

    // Simula escribir en el campo de búsqueda
    fireEvent.change(searchInput, { target: { value: 'Test' } });
    expect(searchInput).toHaveValue('Test');
  });

  test('does not render search input when collapsed', () => {
    renderWithContext(
      <NavBar
        content={[]}
        footer={<div>Footer Content</div>}
        showFooter={true}
      />,
      true // Sidebar colapsada
    );

    // Verifica si el input de búsqueda no está presente
    expect(screen.queryByPlaceholderText('Buscar')).toBeNull();
  });

  test('Footer not render when showFooter is false', () => {
    const { queryByText } = render(
      <NavBar content={[]} footer={<div>Footer</div>} showFooter={false} />);
    expect(queryByText('Footer')).toBeNull();
  });

  test('Avoid the default accion of clik in the link', () => {
    const { getByRole } = render(<NavBar content={[]} />);
    const link = getByRole('link');
    fireEvent.click(link);
    expect(link).toHaveAttribute('href', '/');
  });

  test(' Update the state of collapsed whit the click action in div', () => {
    const updateCollapsedMock = jest.fn();
    const { getByPlaceholderText } = render(
      <CollapsedContext.Provider 
        value={{ collapsed: false, updateCollapsed: updateCollapsedMock }}>
        <NavBar content={[]} showFooter footer={<div>Footer</div>} />
      </CollapsedContext.Provider>
    );
  
    fireEvent.click(getByPlaceholderText('Buscar'));
    expect(updateCollapsedMock).toHaveBeenCalledWith(false);
  });

  test('handleItemClick alter states of activeIndex', () => {
    const content =
     [<MenuItem content="Item 1"  key="menu-list_1" />,
       <MenuItem content="Item 2"   key="menu-list_2"/>
     ];
    const { getAllByRole } = render(<NavBar content={content} />);
    const menuItems = getAllByRole('listitem');

    fireEvent.click(menuItems[0]);

    expect(menuItems[0].firstChild).toHaveClass('tvr-comp-menu-item-container');
  });

});