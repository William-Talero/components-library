import { IconName } from '@/components/Icon/Icons';

export interface MenuItemProps {
  active?: boolean;
  content: string;
  children?: JSX.Element | JSX.Element[];
  [key: string]: unknown;
  icon?: IconName;
  colorBackgroundDefault?: string;
  className?: string;
  iconExpand?: IconName;
  iconClassName?: string;
  contentClassName?: string;
  colorBackground?: string;
  colorContent?: string;
  variant?: 'default' | 'classic' | 'footer';
  image?: string;
  avatar?: string;
  email?: string;
}