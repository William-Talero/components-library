import { IconName } from '@/components/Icon/Icons';

interface MenuListOptions {
  label: string;
  id: string;
}

export interface MenuListProps {
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