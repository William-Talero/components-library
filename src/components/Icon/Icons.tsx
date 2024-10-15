import React from 'react';
import PlusIcon from '@/assets/icons/PlusIcon';
import LeftArrow from '@/assets/icons/LeftArrowIcon';
import RightArrow from '@/assets/icons/RightArrowIcon';
import ArrowDropdown from '@/assets/icons/ArrowDropdown';
import DownArrow from '@/assets/icons/DownArrow';
import Info from '@/assets/icons/Info';
import './Icons.styles.scss';
import GroupAdd from '@/assets/icons/GroupAdd';

const icons = {
  plus: PlusIcon,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  arrowDropDown: ArrowDropdown,
  downArrow: DownArrow,
  groupAdd: GroupAdd,
  info: Info,
};

export type IconName = keyof typeof icons;

interface IconProps {
  $name: IconName;
  $w?: string;
  $h?: string;
  $m?: string;
  className?: string;
  [key: string]: unknown;
}

const Icon: React.FC<IconProps> = ({
  $name = 'plus',
  $w,
  $h = '100%',
  $m,
  className = '',
  ...props
}) => {
  const SvgIcon = icons[$name];
  return (
    <div
      className={`tvr-comp-icon-container ${className}`}
      style={{ '--w-container': $w, '--h-container': $h, '--m-container': $m } as React.CSSProperties}
      {...props}
    >
      <SvgIcon className="tvr-comp-styled-svg-icon" />
    </div>
  );
};

export default Icon;
