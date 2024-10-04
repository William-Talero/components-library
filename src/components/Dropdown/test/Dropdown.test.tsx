import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Dropdown } from '../Dropdown';

const mockOptions = [
  { text: 'Opción 1', value: '1' },
  { text: 'Opción 2', value: '2' },
  { text: 'Opción 3 con acento', value: '3' },
  { text: 'Sin valor', value: '' },
];

describe('Dropdown Component', () => {
  const setup = () =>
    render(
      <Dropdown
        $options={mockOptions}
        $classNameContainer="test-container"
        $classNameList="test-list"
      />
    );

  it('renders input field and dropdown icon', () => {
    setup();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(document.querySelector('.trv-comp-input-icon')).toBeInTheDocument();
  });

  it('displays dropdown when input is clicked', () => {
    setup();
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    expect(
      document.querySelector('.trv-comp-dropdown-menu')
    ).toBeInTheDocument();
    expect(screen.queryByText('Opción 2')).toBeInTheDocument();
  });

  it('filters options based on input value', () => {
    setup();
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.change(input, { target: { value: 'Opción 1' } });

    expect(screen.getByText(/Opción 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Opción 2/i)).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'opci' } });
    expect(screen.getAllByText(/Opci/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/ón 3 con acento/i)).toBeInTheDocument();
    expect(screen.getByText(/ón 2/i)).toBeInTheDocument();
  });

  it('selects dropdown option', async () => {
    setup();
    const inputElement = screen.getByRole('textbox');

    // Abrir el menú desplegable
    fireEvent.click(inputElement);

    // Buscar la opción "Opción 2"
    const optionElement = screen.getByText('Opción 2');

    // Simular el clic en la opción encontrada
    fireEvent.click(optionElement);

    // Verificar que el valor seleccionado aparece en el input
    expect(screen.getByDisplayValue('Opción 2')).toBeInTheDocument();
  });

  it('sets input value based on $initialValue', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(
      <Dropdown
        $options={options}
        $initialValue="2"
        $classNameContainer="test-container"
      />
    );

    expect(screen.getByDisplayValue('Opcion 2')).toBeInTheDocument();
  });

  it('logs error if $initialValue does not match options', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(
      <Dropdown
        $options={options}
        $initialValue="invalid-value"
        $classNameContainer="test-container"
      />
    );

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error: El valor inicial "invalid-value" no coincide con ninguna opción.'
    );
    consoleErrorSpy.mockRestore();
  });

  it('filters options based on input value', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Opcion 1' } });
    fireEvent.click(input);

    expect(screen.getByText('Opcion 1')).toBeInTheDocument();
    expect(screen.queryByText('Opcion 2')).not.toBeInTheDocument();
  });

  it('resets highlightedIndex when input changes', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    const { rerender } = render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' }); // Resaltar Opcion 1

    fireEvent.change(input, { target: { value: 'Opcion' } });
    rerender(<Dropdown $options={options} />);

    expect(screen.getByText('Opcion 1')).toBeInTheDocument();
  });

  it('highlights next option on ArrowDown press', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    const firstOption = document.querySelector('.trv-comp-highlighted');
    expect(firstOption).toHaveTextContent('Opcion 1');
  });

  it('selects highlighted option on Enter press', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(screen.getByDisplayValue('Opcion 1')).toBeInTheDocument();
  });

  it('sets input value on option select', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.click(screen.getByText('Opcion 1'));

    expect(screen.getByDisplayValue('Opcion 1')).toBeInTheDocument();
  });

  it('calls onSelect with selected option', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];
    const mockOnSelect = jest.fn();

    render(<Dropdown $options={options} onSelect={mockOnSelect} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.click(screen.getByText('Opcion 1'));

    expect(mockOnSelect).toHaveBeenCalledWith(
      expect.objectContaining({ target: options[0] })
    );
  });

  it('closes dropdown when clicking outside', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input); // Open dropdown
    expect(screen.getByText('Opcion 1')).toBeInTheDocument();

    fireEvent.mouseDown(document); // Click outside
    expect(screen.queryByText('Opcion 1')).not.toBeInTheDocument();
  });

  it('highlights next option on ArrowDown press', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    const firstOption = document.querySelector('.trv-comp-highlighted');
    expect(firstOption).toHaveTextContent('Opcion 1');
  });

  it('highlights previous option on ArrowUp press', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    // Abrir el menú
    fireEvent.click(input);

    // Flecha hacia abajo (resalta la primera opción)
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    // Flecha hacia abajo (resalta la segunda opción)
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    // Flecha hacia arriba (debería volver a la primera opción)
    fireEvent.keyDown(input, { key: 'ArrowUp' });

    // Verificar que la primera opción está resaltada
    const highlightedOption = document.querySelector('.trv-comp-highlighted');
    expect(highlightedOption).toHaveTextContent('Opcion 1');
  });
});
