import React from 'react';

/**
 * Props for the Button component.
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Defines the visual style of the button.
   * @default "primary"
   */
  $type?: 'primary' | 'secondary';

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
  iconLeft?: boolean;
  /**
   * Show icon in the button right
   */
  iconRight?: boolean;
  /**
   * Only show icon (omit the text)
   */
  iconOnly?: boolean;
  /**
   * Icon to show in the button
   */
  icon?: 'plus';
  children?: React.ReactNode;
}

/**
 * Props for the ButtonWithIcon component.
 * Extends ButtonProps and adds an icon.
 */
export interface ButtonWithIconProps extends ButtonProps {
  /**
   * Specifies the icon to be displayed in the button.
   * Currently only supports "plus" icon.
   */
  $icon: 'plus';
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
