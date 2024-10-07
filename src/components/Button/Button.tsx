import * as React from 'react';
import { ButtonWithIconProps, ButtonProps } from './IButton';
import Icon from '../Icon/Icons';
import '@/styles.scss';

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

export { Button, ButtonWithIcon, OrangeButton };
