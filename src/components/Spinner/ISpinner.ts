import { SizesSpinner, TypesSpinner, VariantsSpinner } from './SpinnerTypes';
/**
 * Interface for Spinner component
 */
export interface SpinnerProps {
  /**
   * Show close button
   */
  $showCloseButton?: boolean;
  /**
   * Message to show
   */
  $message?: string;
  /**
   * Size of the spinner "xs" | "small" | "default" | "large"
   */
  $size?: SizesSpinner;
  /**
   * Type of the spinner 
   * "lineSpinner" |
   * "lineSpinnerNoLabel" |
   * "circularProgress" |
   * "circularProgressNoLabel"
   */
  $type?: TypesSpinner;
  /**
   * Variant of the spinner "fullScreen" | "container"
   */
  $variant?: VariantsSpinner;
  /**
   * Class name
   */
  $className?: string;
  /**
   * Width of the spinner
   */
  $wModal?: string;
  /**
   * Height of the spinner
   */
  $hModal?: string;

  /**
   * Width of the container
   */
  $wContainer?: string;
  /**
   * Height of the container
   */
  $hContainer?: string;
  /**
   * Function to close the spinner when user clicks on close button
   */
  onClose?: () => void;
  /**
   * Show only spinner without any message
   */
  $onlySpinner?: boolean;
}