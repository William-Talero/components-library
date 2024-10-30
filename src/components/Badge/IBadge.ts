import { IconName } from '@/index';

/**
 * Props for the Badge component.
 */
export interface BadgeProps {
  /**
   * Defines the Badge style type.
   */
  $type?: 'white' | 'outlined' | 'solid';

  /**
   * Sets the Badge size.
   */
  $size?: 'large' | 'default' | 'small';

  /**
   * Specifies the Badge color variant.
   */
  $color?: 'white' | 'dark' | 'green' | 'orange' | 'error' | 'success';

  /**
   * Sets the Badge shape.
   * - `'rounded'`: Rounded corners.
   * - `'pilled'`: Fully rounded, pill-shaped.
   */
  $shape?: 'rounded' | 'pilled';

  /**
   * URL of an image to display as an avatar on the left side of the Badge.
   */
  $avatar?: string;

  /**
   * Icon name to display inside the Badge.
   */
  $icon?: IconName;

  /**
   * Controls the visibility of the dot.
   * - If `true`, shows a dot.
   */
  $showDot?: boolean;

  /**
   * Placeholder text to display inside the Badge.
   * - Represents the main text or content of the Badge.
   */
  $placeholder: string;

  /**
   * Controls the visibility of the arrow button.
   * - If `true`, shows an arrow button at the end of the Badge.
   */
  $showArrowButton?: boolean;

  /**
   * Function to execute when the arrow button is clicked.
   * - Only used if `showArrowButton` is `true`.
   */
  $onClickArrow?: () => void;

  /**
   * Controls the visibility of the close button.
   */
  $showCloseButton?: boolean;

  /**
   * Function to execute when the close button is clicked.
   * - Only used if `showCloseButton` is `true`.
   */
  $onClose?: () => void;
}
