import React from 'react';
import PlusIcon from '@/assets/icons/PlusIcon';
import LeftArrow from '@/assets/icons/LeftArrowIcon';
import RightArrow from '@/assets/icons/RightArrowIcon';
import ArrowDropdown from '@/assets/icons/ArrowDropdownIcon';
import DownArrow from '@/assets/icons/DownArrowIcon';
import GroupAdd from '@/assets/icons/GroupAddIcon';
import Ellipsis from '@/assets/icons/EllipsisIcon';
import HomeIcon from '@/assets/icons/HomeIcon';
import LanIcon from '@/assets/icons/LanIcon';
import SupervisorIcon from '@/assets/icons/SupervisorIcon';
import MoneyIcon from '@/assets/icons/MoneyIcon';
import './Icons.styles.scss';
import UserIcon from '@/assets/icons/UserIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import LogoutIcon from '@/assets/icons/LogoutIcon';
import Info from '@/assets/icons/InfoIcon';
import SlashBold from '@/assets/icons/SlashBoldIcon';
import CalendarToday from '@/assets/icons/CalendarTodayIcon';
import DoneIcon from '@/assets/icons/DoneIcon';
import WarningAmber from '@/assets/icons/WarningAmberIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import LogoColor from '@/assets/icons/logoColor';
import FilterList from '@/assets/icons/FilterListIcon';
import UpArrowIcon from '@/assets/icons/UpArrowIcon';
import { CircularProgressSpinner } from '@/assets/icons/CircularProgressSpinner';
import { LineSpinner } from '@/assets/icons/LineSpinner';

const icons = {
  plus: PlusIcon,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  arrowDropDown: ArrowDropdown,
  downArrow: DownArrow,
  groupAdd: GroupAdd,
  ellipsis: Ellipsis,
  home: HomeIcon,
  lan: LanIcon,
  supervisor: SupervisorIcon,
  moneyIcon: MoneyIcon,
  user: UserIcon,
  search: SearchIcon,
  logout: LogoutIcon,
  info: Info,
  slashBold: SlashBold,
  calendarToday: CalendarToday,
  done: DoneIcon,
  warningAmber: WarningAmber,
  closeIcon: CloseIcon,
  upArrow: UpArrowIcon,
  logoColor: LogoColor,
  filterList: FilterList,
  circularProgressSpinner: CircularProgressSpinner,
  lineSpinner: LineSpinner,
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
  $name,
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
      style={
        {
          '--w-container': $w,
          '--h-container': $h,
          '--m-container': $m,
        } as React.CSSProperties
      }
      {...props}
    >
      <SvgIcon className="tvr-comp-styled-svg-icon" />
    </div>
  );
};

export default Icon;
