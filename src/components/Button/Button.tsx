import * as React from 'react';
import { ButtonProps } from './IButton';
import Icon from '../Icon/Icons';
import '@/styles.scss';

const Button = (data: ButtonProps) => {
  const {
    children,
    $size,
    $m,
    $w,
    $h,
    $icon = 'plus',
    $iconLeft,
    $iconRight,
    $onlyIcon,
    $variant = 'primary',
    $outline,
    ...rest
  } = data;

  const buttonClasses = [
    'tvr-comp-button',
    `tvr-comp-button-${$variant}`,
    $size && `tvr-comp-button-${$size}`,
    $onlyIcon && 'tvr-comp-button-only-icon',
    $outline && 'tvr-comp-button-outline',
  ]
    .filter(Boolean)
    .join(' ');

  const iconSize = () => {
    switch ($size) {
      case 'small':
        return '.8rem';
      case 'normal':
        return '1rem';
      case 'large':
        return '1.2rem';
      default:
        return '1.2rem';
    }
  };

  return (
    <button
      className={buttonClasses}
      {...rest}
      style={
        { '--margin': $m, '--width': $w, '--height': $h } as React.CSSProperties
      }
    >
      {($iconLeft || $onlyIcon) && (
        <Icon
          $name={$icon}
          $h={iconSize()}
          $m={$onlyIcon ? '0' : '0 .5rem 0 0'}
          data-testid={`icon-${$icon}`}
        />
      )}
      {!$onlyIcon && (
        <>
          <div style={{ width: '100%' }}>{children}</div>
          {$iconRight && (
            <Icon
              $name={$icon}
              $h={iconSize()}
              $m="0 0 0 .5rem"
              data-testid={`icon-${$icon}`}
            />
          )}
        </>
      )}
    </button>
  );
};

export { Button };
