import { useState, useCallback, useMemo } from 'react';
import React from 'react';
import { InputWithIcon } from '../Input';
import { DropdownProps } from './IDropdown';

const Dropdown: React.FC<DropdownProps> = ({
  $options,
  $classNameContainer,
  $classNameList,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [openList, setOpenList] = useState(false);

  // Función para remover acentos de un texto
  const removeAccents = useCallback((text: string) => 
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''), []);

  // Función separada para manejar el filtrado de las opciones
  const filteredOptions = useMemo(() => 
    $options.filter(({ text }) => {
      const filterText = removeAccents(text);
      const normalizedInput = inputValue.toLowerCase();
      return filterText.toLowerCase().includes(normalizedInput) ||
             text.toLowerCase().includes(normalizedInput);
    }), [$options, inputValue, removeAccents]);

  // Resalta las coincidencias del input en las opciones filtradas
  const getHighlightedText = useCallback((text: string) => {
    const regex = new RegExp(`(${inputValue})`, 'gi');
    return text.split(regex).map((part, idx) => 
      part.toLowerCase() === inputValue.toLowerCase() 
        ? <b key={idx}>{part}</b> 
        : part
    );
  }, [inputValue]);

  // Maneja el clic en una opción del dropdown
  const handleOptionClick = useCallback((text: string) => {
    setInputValue(text);
    setOpenList(false);
  }, []);

  // Renderiza la lista de opciones filtradas
  const renderList = useMemo(() => 
    filteredOptions.map((item, index) => (
      <div 
        key={`dropdown_${index}`} 
        className="dropdown-item" 
        onClick={() => handleOptionClick(item.text)}
      >
        <div className="dropdown-text">{getHighlightedText(item.text)}</div>
        <hr className="dropdown-separator" />
      </div>
    )), [filteredOptions, handleOptionClick, getHighlightedText]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setOpenList(true);
  };

  // Alterna la visibilidad de la lista desplegable
  const toggleDropdown = () => setOpenList(prev => !prev);

  return (
    <div className={$classNameContainer}>
      <div className="dropdown-container">
        <InputWithIcon
          $icon="arrowDropDown"
          value={inputValue}
          onChange={handleInputChange}
          $onClickIcon={toggleDropdown}
          onClick={toggleDropdown}
          $showHelpText={!openList}
          {...props}
        />
        {openList && (
          <div className={`dropdown-list ${$classNameList}`}>
            {renderList}
          </div>
        )}
      </div>
    </div>
  );
};

export { Dropdown };
