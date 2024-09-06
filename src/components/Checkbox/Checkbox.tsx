import React from "react";
import "@/styles.scss";
import { CheckboxProps } from "./ICheckbox";

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label className={`custom-checkbox ${disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="checkbox-custom"></span>
      <span className="checkbox-label">{label}</span>
    </label>
  );
};
