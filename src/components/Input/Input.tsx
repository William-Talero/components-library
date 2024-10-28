import React from 'react';
import { InputProps, InputWithIconProps } from './IInput';
import '@/styles.scss';
import Icon, { IconName } from '../Icon/Icons';
import { emailPattern, alphabetPattern } from './utils/communPatterns';
import {
  performValidation,
  capitalizeFirstLetter,
} from './utils/validationUtils';
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
  $variant,
  disabled = false,
  readOnly = false,
  value,
  onChange,
  $maxLength,
  $minLength,
  type,
  pattern,
  $errorMessage,
  required,
  renderIcon,
  renderIconLeft,
  renderIconRight,
  className,
  ...props
}) => {
  const [_value, setValue] = React.useState<string>(value || '');
  const [inputError, setInputError] = React.useState<string>('');
  const [showInputSuccess, setShowInputSucecess] = React.useState<boolean>(false);
  const [showInputError, setShowInputError] = React.useState<boolean>(false);

  // Sincroniza cambios externos en `value`
  React.useEffect(() => {
    setValue(value || '');
  }, [value]);

  /**
   * Maneja el cambio de valor del input.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - El evento de cambio
   * del input.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (inputError) {
      const errors = performValidation(newValue, {
        pattern,
        minLength: $minLength,
        maxLength: $maxLength,
        required,
      });
      const errorMessage = $errorMessage || errors.join(' ');
      setInputError(errorMessage);
      if (errors.length === 0) {
        setShowInputError(false);
        setShowInputSucecess(true);
      }
      setShowInputError(errors.length > 0);
    }
    if (onChange) {
      onChange(event);
      // Disparamos el onChange para activar interceptor/validación
    }
  };

  const handleBlur = () => {
    let newValue = _value;

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
  };

  // Aplica el cambio de clase si isError o warning o success... está en true
  const containerClassName = $isError
    ? 'trv-comp-error'
    : $isWarning
      ? 'trv-comp-warning'
      : $isSuccess
        ? 'trv-comp-success'
        : disabled
          ? 'trv-comp-is-disable'
          : readOnly
            ? 'trv-comp-not-editable'
            : '';

  /**
   * Aplica el cambio de clase si isError o warning o success... está en true
   * const containerClassName = $isError
   * @returns
   */
  const fieldState = () => {
    if (showInputError) {
      return 'trv-comp-error';
    }
    if (showInputSuccess && value !== '') {
      return 'trv-comp-success';
    }
    return '';
  };

  const renderHelpText = () => {
    if ($helpText && !showInputError) {
      return (
        <Text4 bold className="trv-comp-help-text">
          {$helpText}
        </Text4>
      );
    }
    return null;
  };

  const renderErrorText = () => {
    if (showInputError) {
      return (
        <Text4 bold className="trv-comp-help-text">
          {$errorMessage || inputError}
        </Text4>
      );
    }
    return null;
  };

  return (
    <div
      className={`${className} trv-comp-input-wrapper ${
        fieldState() || containerClassName
      }`}
      style={{
        width: $w,
        margin: $m,
      }}
    >
      {$title && (
        <Text2 bold className="trv-comp-title-description">
          {$title}
        </Text2>
      )}
      <div className="trv-comp-input-container">
        {renderIconLeft && renderIconLeft()}
        <input
          type={type}
          className={`
            trv-comp-input trv-comp-input-${$size}
            ${$variant === 'inline' ? 'trv-comp-input-line' : ''}
            ${$variant === 'rounded' ? 'trv-comp-input-radius-all' : ''}
          `}
          value={_value || ''}
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          {...props}
        />
        {renderIconRight && renderIconRight()}
        {renderIcon && renderIcon()}
      </div>
      {renderHelpText()}
      {renderErrorText()}
    </div>
  );
};

const renderIcon = (
  iconName: IconName,
  props: InputWithIconProps,
  position: 'left' | 'right' | '',
  $onClickIcon?: () => void
) => (
  <div
    className={`trv-comp-input-icon-container ${position} ${
      props.$size ? `trv-comp-input-icon-container-${props.$size}` : ''
    }`}
    onClick={$onClickIcon}
  >
    <Icon
      $name={ iconName }
      $w="10%"
      className={`trv-comp-input-icon ${
        props.$size ? `trv-comp-input-icon-${props.$size}` : ''
      }`}
    />
  </div>
);

const Input: React.FC<InputWithIconProps> = ({
  $icon,
  $onClickIcon,
  $iconLeft,
  $iconRight,
  ...props
}) => {
  const { pattern, ...restProps } = props;

  const typePatterns: Record<string, RegExp> = {
    email: emailPattern,
    password: alphabetPattern,
    text: alphabetPattern,
    namesUpper: alphabetPattern,
  };

  const customPattern = pattern || typePatterns[props.type || ''];

  return (
    <InputBase
      {...restProps}
      pattern={customPattern}
      renderIcon={() => $icon && renderIcon($icon, props, '', $onClickIcon)}
      renderIconLeft={() =>
        $iconLeft && renderIcon($iconLeft, props, 'left', $onClickIcon)
      }
      renderIconRight={() =>
        $iconRight && renderIcon($iconRight, props, 'right', $onClickIcon)
      }
    />
  );
};

export { Input, InputBase };
