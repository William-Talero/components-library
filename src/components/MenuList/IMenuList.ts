import { IconName } from '@/components/Icon/Icons';

export interface MenuListProps {
  active?: boolean;
  content: string;
  children?: JSX.Element | JSX.Element[];
  [key: string]: unknown;
  icon?: IconName;
  className?: string;
  iconExpand?: IconName;
  iconClassName?: string;
  contentClassName?: string;
  colorBackground?: string;
  colorContent?: string;
}
