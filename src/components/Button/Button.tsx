import * as React from 'react';
import { ButtonWithIconProps, ButtonProps } from './IButton';
import Icon from '../Icon/Icons';
import '@/styles.scss';
import { Button as ButtonElement, ButtonContent } from './Button.styles';

const Button = (data: ButtonProps) => {
  const { children, $type = 'primary', $size, $m, $w, ...rest } = data;

  const buttonClasses = [
    'tvr-comp-button',
    `tvr-comp-button-${$type}`,
    $size && `tvr-comp-button-${$size}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      {...rest}
      style={{ '--margin': $m, '--width': $w } as React.CSSProperties}
    >
      {children}
    </button>
  );
};

const ButtonWithIcon = (data: ButtonWithIconProps) => {
  const { children, $type = 'primary', $size, $m, $w, $icon, ...rest } = data;

  const buttonClasses = [
    'tvr-comp-button',
    `tvr-comp-button-${$type}`,
    $size && `tvr-comp-button-${$size}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      {...rest}
      style={{ '--margin': $m, '--width': $w } as React.CSSProperties}
    >
      <Icon $name={$icon} $w="10%" data-testid={`icon-${$icon}`} />
      <div style={{ width: '100%' }}>{children}</div>
      {$size === 'large' && (
        <Icon $name={$icon} $w="10%" data-testid={`icon-${$icon}`} />
      )}
    </button>
  );
};

const OrangeButton = (data: ButtonProps) => {
  const { children, $type = 'primary', $size, $m, $w, ...rest } = data;

  const buttonClasses = [
    'tvr-comp-button',
    `tvr-comp-button-orange-${$type}`,
    $size && `tvr-comp-button-${$size}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      {...rest}
      style={{ '--margin': $m, '--width': $w } as React.CSSProperties}
    >
      {children}
    </button>
  );
};

const ExampleButton = (data: ButtonProps) => {
  const {
    children,
    $size = 'normal',
    icon = 'plus',
    iconLeft,
    iconRight,
    ...rest
  } = data;

  return (
    <ButtonElement width="20rem" size={$size} {...rest}>
      {iconLeft && (
        <Icon $name={icon} $w="1.5rem" $h="100%" data-testid={`icon-${icon}`} />
      )}
      <ButtonContent>{children}</ButtonContent>
      {iconRight && (
        <Icon $name={icon} $w="1.5rem" $h="100%" data-testid={`icon-${icon}`} />
      )}
    </ButtonElement>
  );
};

export { Button, ButtonWithIcon, OrangeButton, ExampleButton };
