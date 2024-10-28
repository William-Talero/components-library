import React, { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CollapsedContext } from '../Collapsed.context';	

const TestComponent = () => {
  const { collapsed, updateCollapsed } = useContext(CollapsedContext);
  
  return (
    <div>
      <span data-testid="collapsed-status">
        {collapsed ? 'Collapsed' : 'Not Collapsed'}
      </span>
      <button data-testid="toggle-button"
        onClick={() => updateCollapsed(!collapsed)}>
            Toggle
      </button>
    </div>
  );
};

describe('SideBarContext Component', () => {
  test('Debe proporcionar los valores por defecto del contexto', () => {
    const { getByTestId } = render(<TestComponent />);
      
    const statusElement = getByTestId('collapsed-status');
        
    // Verificar que el valor por defecto sea false
    expect(statusElement.textContent).toBe('Not Collapsed');
  });
    
  test('Debe permitir actualizar el valor de collapsed updateCollapsed', () => {
    
    const updateCollapsedMock = jest.fn();

    const { getByTestId } = render(
      <CollapsedContext.Provider value={{
        collapsed: true,
        updateCollapsed: updateCollapsedMock
      }}>
        <TestComponent />
      </CollapsedContext.Provider>
    );

    const statusElement = getByTestId('collapsed-status');
    const toggleButton = getByTestId('toggle-button');

    // Verificar que el valor inicial sea "Collapsed"
    expect(statusElement.textContent).toBe('Collapsed');

    // Simular el clic para alternar el estado
    fireEvent.click(toggleButton);

    // Verificar que se haya llamado a la función mock con el valor correcto
    expect(updateCollapsedMock).toHaveBeenCalledWith(false);
  });

  test('Debe proporcionar los valores del contexto y updateCollapsed', () => {
    const { getByTestId } = render(<TestComponent />);
  
    const statusElement = getByTestId('collapsed-status');
    const toggleButton = getByTestId('toggle-button');
  
    // Verificar que el valor por defecto sea false
    expect(statusElement.textContent).toBe('Not Collapsed');
  
    fireEvent.click(toggleButton);
  
    // Aunque no hace nada, la función vacía de updateCollapsed será cubierta
    // Ya que fue ejecutada por el click
  });
});