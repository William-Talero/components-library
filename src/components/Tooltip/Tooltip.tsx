import React from 'react';
import { TooltipProps } from './ITooltip';
import '@/styles.scss';
import Icon from '../Icon/Icons';

const Tooltip: React.FC<TooltipProps> = ({
  text,
  margin,
  icon,
  color = 'default',
  className,
  ...rest
}) => {
  const badgeClasses = [
    'tvr-comp-info-badge',
    `tvr-comp-info-badge--${color}`,
    text ? 'tvr-comp-info-badge--with-text' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={badgeClasses}
      {...rest}
      style={{ '--margin': margin } as React.CSSProperties}
    >
      <div className="tvr-comp-info-badge__icon">
        <Icon $name={icon ? icon : 'info'} $w="6px" data-testid="icon-info"/>
      </div>
      {text && <span className="tvr-comp-info-badge__text">{text}</span>}
    </div>
  );
};

export { Tooltip };
