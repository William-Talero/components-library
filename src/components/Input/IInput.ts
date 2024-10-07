/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconName } from '../Icon/Icons';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $m?: string; // Margen personalizado
  $w?: string; // Ancho del input
  $title?: string; // Título o etiqueta del input
  $helpText?: string; // Texto de ayuda debajo del input
  $size?: 'sm' | 'md' | 'lg'; // Tamaño del input (pequeño, mediano, grande)
  $isError?: boolean; // Estado de error
  $isWarning?: boolean; // Estado de advertencia
  $isSuccess?: boolean; // Estado de éxito
  $errorMessage?: string;
  pattern?: any; // Deshabilitar el input
  disabled?: boolean; // Deshabilitar el input
  readOnly?: boolean; // Solo lectura
  required?: boolean;
  $maxLength?: number; // Longitud máxima del input
  $minLength?: number; // Longitud mínima del input
  type?: 'text' | 'email' | 'password' | 'namesUpper' | 'number';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  renderIcon?: () => React.ReactNode; // Función para renderizar el ícono
  value?: any;
}

export interface InputWithIconProps extends InputProps {
  $onClickIcon?: () => void;
  $icon: IconName; // Nombre del ícono que se usará en el input
}
