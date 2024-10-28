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

  it('renders the input field and dropdown icon', () => {
    setup();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(document.querySelector('.trv-comp-input-icon')).toBeInTheDocument();
  });

  it('shows the dropdown menu when the input is clicked', () => {
    setup();
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    expect(document.querySelector('.trv-comp-dropdown-menu')).toBeInTheDocument();
    expect(screen.queryByText('Opción 2')).toBeInTheDocument();
  });

  it('filters the displayed options based on the input value', () => {
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

  it('sets the input value based on $initialValue', () => {
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

  it('logs an error if $initialValue does not match any option', () => {
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

    consoleErrorSpy.mockRestore();
  });

  it('resets the highlighted option index when the input value changes', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    const { rerender } = render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    fireEvent.change(input, { target: { value: 'Opcion' } });
    rerender(<Dropdown $options={options} />);

    expect(screen.getByText('Opcion 1')).toBeInTheDocument();
  });

  it('highlights the next option when pressing ArrowDown', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    const highlightedOption = document.querySelector('.trv-comp-highlighted');
    expect(highlightedOption).toHaveTextContent('Opcion 1');
  });

  it('selects the highlighted option when pressing Enter', () => {
    const handleChange = jest.fn();
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(
      <Dropdown $options={options} onChange={handleChange} $initialValue="1" />
    );
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    const list = screen.getAllByRole('listitem');
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(list[0]).toHaveClass('trv-comp-highlighted');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('triggers onSelect with the selected option', () => {
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

  it('closes the dropdown menu when clicking outside', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    expect(screen.getByText('Opcion 1')).toBeInTheDocument();

    fireEvent.mouseDown(document);
    expect(screen.queryByText('Opcion 1')).not.toBeInTheDocument();
  });

  it('highlights the previous option when pressing ArrowUp', () => {
    const options = [
      { text: 'Opcion 1', value: '1' },
      { text: 'Opcion 2', value: '2' },
    ];

    render(<Dropdown $options={options} />);
    const input = screen.getByRole('textbox');

    fireEvent.click(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'ArrowUp' });

    const highlightedOption = document.querySelector('.trv-comp-highlighted');
    expect(highlightedOption).toHaveTextContent('Opcion 1');
  });

  it('triggers onChange when the input value changes', () => {
    const handleChange = jest.fn();
    render(
      <Dropdown
        onChange={handleChange}
        $options={mockOptions}
        $initialValue="Opcion 1"
      />
    );
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles to the menu list when a title is provided', () => {
    render(<Dropdown $options={mockOptions} $title="Title" />);
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    const menuWithTitle = document.querySelector('.trv-comp-title');
    expect(menuWithTitle).toBeTruthy();
  });
});
