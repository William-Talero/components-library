/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from 'react';

import { DropdownProps, Option } from './IDropdown';
import { InputWithIcon } from '../Input';

const Dropdown: React.FC<DropdownProps> = ({
  $options,
  $classNameContainer,
  $classNameList,
  onSelect,
  $w,
  $m,
  $initialValue,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>($options);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [inputValue, setInputValue] = useState<string>($initialValue || '');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if ($initialValue) {
      const matchingOption = $options.find(
        (option) => option.value === $initialValue
      );
      if (matchingOption) {
        setInputValue(matchingOption.text);
      } else {
        console.error(
          'Error: El valor inicial "${$initialValue}" no coincide' +
            'con ninguna opción.'
        );
      }
    }
  }, [$initialValue, $options]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      $options.filter((option) =>
        option.text.toLowerCase().includes(value.toLowerCase())
      )
    );
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredOptions.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0) {
        handleSelect(filteredOptions[highlightedIndex]);
      }
    }
  };

  const handleSelect = (option: Option) => {
    setInputValue(option.text);
    setIsOpen(false);
    if (onSelect) {
      const event = new Event('select', { bubbles: true });
      Object.defineProperty(event, 'target', {
        writable: false,
        value: option,
      });
      onSelect(event as any);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const highList = () => {
    if (props.$title) {
      return 'trv-comp-title ';
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={`trv-comp-dropdown-input ${$classNameContainer || ''}`}
      ref={dropdownRef}
      style={{
        width: $w,
        margin: $m,
      }}
    >
      <InputWithIcon
        $icon="arrowDropDown"
        value={inputValue}
        onChange={handleInputChange}
        $onClickIcon={toggleDropdown}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        {...props}
      />
      {isOpen && (
        <ul
          className={`trv-comp-dropdown-menu ${highList()} ${
            $classNameList || ''
          }`}
        >
          {filteredOptions.length === 0 && (
            <li className="trv-comp-dropdown-text">
              {props.$errorMessage ? props.$errorMessage : 'No options found'}
            </li>
          )}
          {filteredOptions.map((option, index) => (
            <React.Fragment key={`${option.value}-${index}`}>
              <li
                className={
                  index === highlightedIndex
                    ? 'trv-comp-highlighted trv-comp-dropdown-text'
                    : 'trv-comp-dropdown-text'
                }
                onClick={() => handleSelect(option)}
              >
                {option.text}
              </li>
              <hr className="trv-comp-dropdown-separator" />
            </React.Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
