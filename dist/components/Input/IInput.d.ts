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
    $m?: string;
    $w?: string;
    $title?: string;
    $helpText?: string;
    $size?: 'sm' | 'md' | 'lg';
    $isError?: boolean;
    $isWarning?: boolean;
    $isSuccess?: boolean;
    $errorMessage?: string;
    pattern?: any;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    $value?: string;
    $maxLength?: number;
    $minLength?: number;
    type?: 'text' | 'email' | 'password' | 'namesUpper' | 'number';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    renderIcon?: () => React.ReactNode;
}
export interface InputWithIconProps extends InputProps {
    $icon: IconName;
}
