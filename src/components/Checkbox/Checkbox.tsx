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
    <label className={`tvr-comp-custom-checkbox ${disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="tvr-comp-checkbox-custom"></span>
      <span className="tvr-comp-checkbox-label">{label}</span>
    </label>
  );
};
