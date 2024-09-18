import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Dropdown } from '../Dropdown';

const mockOptions = [
  { text: 'Opcion 1', value: '' },
  { text: 'Opcion 2', value: '' },
  { text: 'Opción 3 con acento', value: '' },
  { text: '', value: '' },
];

describe('Dropdown Component', () => {
  const setup = () => render(
    <Dropdown 
      $options={mockOptions} 
      $classNameContainer="test-container" 
      $classNameList="test-list" 
    />
  );

  const findDropdownOption = (searchText: string) => {
    const dropdownItems = document.querySelectorAll('.dropdown-text');
    return Array.from(dropdownItems).find(item => 
      (item.textContent?.toString() || '').replace(/\s/g, '') === searchText
    );
  };

  it('renders input field and dropdown icon', () => {
    setup();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(document.querySelector('.input-icon')).toBeInTheDocument();
  });

  it('displays dropdown when input is clicked', () => {
    setup();
    const input = screen.getByRole('textbox');
    fireEvent.click(input);
    expect(document.querySelector('.dropdown-list')).toBeInTheDocument();
    expect(screen.queryByText('Opcion 2')).toBeInTheDocument();
  });

  it('filters options based on input value', () => {
    setup();
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Opcion 1' } });
    expect(screen.getByText(/Opcion 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Opcion 2/i)).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'opci' } });
    expect(screen.getAllByText(/Opci/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/ón 3 con acento/i)).toBeInTheDocument();
    expect(screen.getByText(/on 2/i)).toBeInTheDocument();
  });

  it('clicks on dropdown option', async () => {
    setup();
    const inputElement = screen.getByRole('textbox');
    fireEvent.click(inputElement);
    const optionElement = findDropdownOption('Opcion2');
    if (optionElement) fireEvent.click(optionElement);
    const textIntoList = screen.getByDisplayValue('Opcion 2');
    expect(textIntoList).toBeInTheDocument();
  });
});