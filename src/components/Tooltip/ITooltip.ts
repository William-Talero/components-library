import { IconName } from '../Icon/Icons';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional text to display next to the icon.
   */
  text?: string;

  /**
   * Optional margin to apply at Tooltip.
   */
  margin?: string;

   /**
   * Optional icon name to use.
   */
   icon?: IconName;

  /**
   * Color scheme for the badge.
   * @default 'default'
   */
  color?: 'green' | 'orange' | 'white' | 'light' | 'dark' | 'default';
}
