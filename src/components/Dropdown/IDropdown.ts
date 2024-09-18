import { InputProps } from "../Input/IInput";

export interface DropdownProps extends InputProps {
  $options: Option[];
  $classNameContainer?: string;
  $classNameList?: string;
}
export interface Option  {
  text: string;
  value: string; 
}