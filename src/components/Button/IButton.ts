import React from 'react';
import { IconName } from '../Icon/Icons';

/**
 * Props for the Button component.
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Sets the width of the button. Can be any valid CSS width value.
   * @example "100px", "50%", "auto"
   */
  $w?: string;

  /**
   * Sets the height of the button. Can be any valid CSS height value.
   * @example "40px", "3rem"
   */
  $h?: string;

  /**
   * Determines the size preset of the button.
   * @default "md"
   */
  $size?: 'small' | 'normal' | 'large';

  /**
   * Sets the margin around the button. Can be any valid CSS margin value.
   * @example "10px", "1rem 2rem", "auto"
   */
  $m?: string;

  /**
   * The content to be rendered inside the button.
   */

  /**
   * Show icon in the button left
   */
  $iconLeft?: boolean;
  /**
   * Show icon in the button right
   */
  $iconRight?: boolean;
  /**
   * Only show icon (omit the text)
   */
  $iconOnly?: boolean;
  /**
   * Icon to show in the button
   */
  $icon?: IconName;

  /**
   * Define the button variant aspect
   * @default "primary"
   */
  $variant?: 'primary' | 'secondary';

  /**
   * Only show icon (omit the text)
   * @default false
   */
  $onlyIcon?: boolean;

  /**
   * Set the button to disabled
   * @default false
   */
  $outline?: boolean;

  /**
   * The content to be rendered inside the button.
   */
  children?: React.ReactNode;
}
export interface ButtonStyleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button width
   * @example "small", "normal", "large"
   */
  width?: string;
  /**
   * Define the Button size
   * @default "normal"
   */
  size?: 'small' | 'normal' | 'large';
}
