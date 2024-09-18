import React from 'react';
import { InputProps, InputWithIconProps } from './IInput';
import "@/styles.scss";
import Icon from '../Icon/Icons';
import {
  emailPattern,
  alphabetPattern
} from "./utils/communPatterns";
import { performValidation, capitalizeFirstLetter } from './utils/validationUtils';
import { Text2, Text4 } from '../Text/Text';

const InputBase: React.FC<InputProps> = ({
  $m,
  $w,
  $title,
  $helpText,
  $size,
  $isError = false,
  $isWarning = false,
  $isSuccess = false,
  disabled = false,
  readOnly = false,
  value,
  onChange,
  onSubmit,
  $maxLength,
  $minLength,
  type,
  pattern,
  $errorMessage,
  required,
  renderIcon,
  $showHelpText = true,
  ...props
}) => {
  const [_value, setValue] = React.useState<string>(value || "");
  const [inputError, setInputError] = React.useState<string>('');
  const [showInputError, setShowInputError] = React.useState<boolean>(false);

  // Sincroniza cambios externos en `value`
  React.useEffect(() => {
    setValue(value || "");
  }, [value]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    let newValue = event.target.value;

    // Aplica la transformación si el tipo es 'namesUpper'
    if (type === 'namesUpper') {
      newValue = capitalizeFirstLetter(newValue);
    }

    setValue(newValue);

    const errors = performValidation(newValue, {
      pattern,
      minLength: $minLength,
      maxLength: $maxLength,
      required,
    });

    const errorMessage = $errorMessage || errors.join(' ');
    setInputError(errorMessage);
    setShowInputError(errors.length > 0);

    if (onChange) {
      onChange(event); // Disparamos el onChange para activar interceptor/validación
    }
  };

  // Aplica el cambio de clase si isError o warning o success... está en true
  const containerClassName = $isError
    ? 'error'
    : $isWarning
    ? 'warning'
    : $isSuccess
    ? 'success'
    : disabled
    ? 'is-disable'
    : readOnly
    ? 'not-editable'
    : '';

  // Determina el estado del campo basado en los errores
  const fieldState = () => {
    if (showInputError) return 'error';
    return '';
  };
 
  return (
    <div
      className={`input-wrapper ${fieldState() || containerClassName}`}
      style={{
        width: $w,
        margin: $m,
      }}
    >
      {$title && <Text2 bold className='title-description'>{$title}</Text2>}
      <div className="input-container">
        <input
          type={type}
          className={`input input-${$size}`}
          value={_value || ""}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          {...props}
        />
        {renderIcon && renderIcon()} {/* Renderiza el ícono si se proporciona */}
      </div>
      {$helpText && !showInputError  && $showHelpText && (
        <Text4 bold className="help-text">{$helpText}</Text4>
      )}
      {showInputError && $showHelpText && <Text4 bold  className="help-text">{inputError}</Text4>}
    </div>
  );
};


/**
 * Componente Input.
 * @param {InputProps} props
 */
const Input: React.FC<InputProps> = ({ ...props }) => {
  const { pattern, ...restProps } = props;

  const typePatterns: Record<string, RegExp> = {
    email: emailPattern,
    password: alphabetPattern,
    text: alphabetPattern,
    namesUpper: alphabetPattern,
  };

  const customPattern = pattern || typePatterns[props.type || 'text'];

  return <InputBase {...restProps} pattern={customPattern} />;
};

const InputWithIcon: React.FC<InputWithIconProps> = ({
  $icon,
  $onClickIcon,
  ...props
}) => {
  return (
    <Input
      {...props}
      renderIcon={() => (
        <div className="input-icon-container" onClick={$onClickIcon}>
          <Icon $name={$icon} $w="10%" className="input-icon"/>
        </div>
      )}
    />
  );
};

export { Input, InputWithIcon };
