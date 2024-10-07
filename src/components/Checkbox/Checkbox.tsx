import React from 'react';
import '@/styles.scss';
import { CheckboxProps } from './ICheckbox';

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  state,
  type = 'solid',
  disabled = false,
}) => {
  const checkBoxClasses = [
    'tvr-comp-custom-checkbox',
    disabled && 'disabled',
    state && `tvr-comp-checkbox-${state}`,
    type && `${type}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label
      className={checkBoxClasses}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="tvr-comp-checkbox-custom"></span>
      {label && <span className="tvr-comp-checkbox-label">{label}</span>}
    </label>
  );
};
