/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconName } from '../Icon/Icons';
/**
 * Propiedades para el componente Input.
 *
 * @typedef {Object} InputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * @property {string} [$m] - Margen personalizado. Acepta cualquier valor válido de CSS para margin.
 * @property {string} [$w] - Ancho del input. Acepta cualquier valor válido de CSS para width.
 * @property {string} [$title] - Título o etiqueta del input que se muestra encima del campo.
 * @property {string} [$helpText] - Texto de ayuda que se muestra debajo del input.
 * @property {'small' | 'large' | 'normal'} [$size='normal'] - Tamaño predefinido del input.
 * @property {boolean} [$isError=false] - Aplica un estado y estilo de error al input.
 * @property {boolean} [$isWarning=false] - Aplica un estado y estilo de advertencia al input.
 * @property {boolean} [$isSuccess=false] - Aplica un estado y estilo de éxito al input.
 * @property {'inline' | 'rounded' | 'general'} [$variant='general'] - Variante visual del input.
 * @property {string} [$errorMessage] - Mensaje de error que se muestra cuando el input está en estado de error.
 * @property {any} [pattern] - Patrón para la validación del input.
 * @property {boolean} [disabled=false] - Deshabilita la interacción con el input.
 * @property {boolean} [readOnly=false] - Establece el input en modo solo lectura.
 * @property {boolean} [required=false] - Marca el campo como requerido.
 * @property {number} [$maxLength] - Longitud máxima permitida del valor.
 * @property {number} [$minLength] - Longitud mínima requerida del valor.
 * @property {'text' | 'email' | 'password' | 'namesUpper' | 'number' | 'date'} [type='text'] - Tipo de input.
 * @property {function(React.ChangeEvent<HTMLInputElement>): void} [onChange] - Manejador del evento de cambio.
 * @property {function(): React.ReactNode} [renderIcon] - Función para renderizar un ícono personalizado.
 * @property {function(): React.ReactNode} [renderIconLeft] - Función para renderizar un ícono en el lado izquierdo.
 * @property {function(): React.ReactNode} [renderIconRight] - Función para renderizar un ícono en el lado derecho.
 * @property {any} [value] - Valor del input.
 * @property {React.RefObject<HTMLInputElement>} [ref] - Referencia al elemento input.
 * @property {string} [className] - Clases CSS adicionales.
 */

/**
 * Propiedades extendidas para el componente Input con funcionalidad de íconos.
 *
 * @typedef {Object} InputWithIconProps
 * @extends {InputProps}
 * @property {function(): void} [$onClickIcon] - Manejador del evento clic en el ícono.
 * @property {IconName} [$icon] - Nombre del ícono a mostrar en el input.
 * @property {IconName} [$iconLeft] - Nombre del ícono a mostrar en el lado izquierdo.
 * @property {IconName} [$iconRight] - Nombre del ícono a mostrar en el lado derecho.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Sets the margin around the input. Can be any valid CSS margin value.
   * @example "10px", "1rem 2rem", "auto"
   */
  $m?: string;

  /**
   * Sets the width of the input. Can be any valid CSS width value.
   * @example "100px", "50%", "auto"
   */
  $w?: string;

  /**
   * Label or title for the input field.
   */
  $title?: string;

  /**
   * Helper text displayed below the input field.
   */
  $helpText?: string;

  /**
   * Determines the size preset of the input.
   * @default "normal"
   */
  $size?: 'small' | 'large' | 'normal';

  /**
   * Sets the input in error state.
   * @default false
   */
  $isError?: boolean;

  /**
   * Sets the input in warning state.
   * @default false
   */
  $isWarning?: boolean;

  /**
   * Sets the input in success state.
   * @default false
   */
  $isSuccess?: boolean;

  /**
   * Defines the visual style variant of the input.
   * @default "general"
   */
  $variant?: 'inline' | 'rounded' | 'general';

  /**
   * Error message to display when input is in error state.
   */
  $errorMessage?: string;

  /**
   * Pattern for input validation.
   */
  pattern?: any;

  /**
   * Disables the input field.
   * @default false
   */
  disabled?: boolean;

  /**
   * Makes the input field read-only.
   * @default false
   */
  readOnly?: boolean;

  /**
   * Makes the input field required.
   * @default false
   */
  required?: boolean;

  /**
   * Maximum length of input value.
   */
  $maxLength?: number;

  /**
   * Minimum length of input value.
   */
  $minLength?: number;

  /**
   * Type of input field.
   * @default "text"
   */
  type?: 'text' | 'email' | 'password' | 'namesUpper' | 'number' | 'date';

  /**
   * Handler for input change events.
   * @param event - The change event
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Function to render a custom icon component.
   */
  renderIcon?: () => React.ReactNode;

  /**
   * Function to render a custom icon component on the left side.
   */
  renderIconLeft?: () => React.ReactNode;

  /**
   * Function to render a custom icon component on the right side.
   */
  renderIconRight?: () => React.ReactNode;

  /**
   * Input value
   */
  value?: any;

  /**
   * Reference to the input element
   */
  ref?: React.RefObject<HTMLInputElement>;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Extended props for Input component with icon functionality.
 * @extends InputProps
 */
export interface InputWithIconProps extends InputProps {
  /**
   * Handler for icon click events.
   */
  $onClickIcon?: () => void;

  /**
   * Name of the icon to be displayed in the input.
   */
  $icon?: IconName;

  /**
   * Name of the icon to be displayed on the left side of the input.
   */
  $iconLeft?: IconName;

  /**
   * Name of the icon to be displayed on the right side of the input.
   */
  $iconRight?: IconName;
}
