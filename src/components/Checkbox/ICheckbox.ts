export interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  state?: 'success' | 'invalid';
  type?: 'solid' | 'soft';
}
