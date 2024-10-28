/**
 * Skeleton component props.
 */
export interface SkeletonProps {
  /**
   * Shape of the skeleton. Default is rectangle.
   */
  shape?: 'circle' | 'rectangle';
  /**
   * Width of the skeleton. Default is 100%.
   */
  width?: string | number;
  /**
   * Height of the skeleton. Default is 100%.
   */
  height?: string | number;
  /**
   * Border radius of the skeleton
   * default value is shape === 'circle' ? '50%' : '4px'
   */
  borderRadius?: string | number;
  /**
   * Additional class name.
   */
  className?: string;
}