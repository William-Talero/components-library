import { InputProps } from '../Input/IInput';

export interface DropdownProps extends InputProps {
  $options: Option[];
  $classNameContainer?: string;
  $classNameList?: string;
  $initialValue?: string;
}
export interface Option  {
  text: string;
  value: string; 
}