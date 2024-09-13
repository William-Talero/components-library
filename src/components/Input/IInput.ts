import { IconName } from "../Icon/Icons";
/**
 * @typedef {Object} InputProps
 * @property {string} [$m] - Margen personalizado.
 * @property {string} [$w] - Ancho del input.
 * @property {string} [$title] - Título o etiqueta del input.
 * @property {string} [$helpText] - Texto de ayuda debajo del input.
 * @property {'sm' | 'md' | 'lg'} [$size] - Tamaño del input.
 * @property {boolean} [$isError] - Aplica una clase de error si es `true`.
 * @property {boolean} [$isWarning] - Aplica una clase de advertencia si es `true`.
 * @property {boolean} [$isSuccess] - Aplica una clase de éxito si es `true`.
 * @property {string} [$errorMessage] - Mensaje de error personalizado.
 * @property {RegExp} [pattern] - Expresión regular para validación del input.
 * @property {boolean} [disabled] - Deshabilita el input si es `true`.
 * @property {boolean} [readOnly] - Solo lectura si es `true`.
 * @property {boolean} [required] - Campo obligatorio si es `true`.
 * @property {string} [$value] - Valor inicial del input.
 * @property {number} [$maxLength] - Longitud máxima permitida.
 * @property {number} [$minLength] - Longitud mínima requerida.
 * @property {'text' | 'email' | 'password' | 'namesUpper' | 'number'} [type] - Tipo de input.
 * @property {function(React.ChangeEvent<HTMLInputElement>): void} [onChange] - Función llamada cuando cambia el valor.
 * @property {function(): React.ReactNode} [renderIcon] - Función para renderizar un ícono.
 * 
 * @see [Custom Elements Specification](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is) - Documentación sobre atributos personalizados.
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $m?: string; // Margen personalizado
  $w?: string; // Ancho del input
  $title?: string; // Título o etiqueta del input
  $helpText?: string; // Texto de ayuda debajo del input
  $size?: 'sm' | 'md' | 'lg'; // Tamaño del input (pequeño, mediano, grande)
  $isError?: boolean; // Estado de error
  $isWarning?: boolean; // Estado de advertencia
  $isSuccess?: boolean; // Estado de éxito
  $errorMessage?:string;
  pattern?: any; // Deshabilitar el input
  disabled?: boolean; // Deshabilitar el input
  readOnly?: boolean; // Solo lectura
  required?: boolean;
  $value?: string; // Valor inicial del input
  $maxLength?: number; // Longitud máxima del input
  $minLength?: number; // Longitud mínima del input
  type?: 'text' | 'email' | 'password' | 'namesUpper' | 'number'; // Tipo de input
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Manejador del cambio de valor
  renderIcon?: () => React.ReactNode; // Función para renderizar el ícono
}

export interface InputWithIconProps extends InputProps {
  $icon: IconName; // Nombre del ícono que se usará en el input
}