import React from 'react';
import './Skeleton.styles.scss';
import { SkeletonProps } from './ISkeleton';


/**
 * Skeleton component is used to show a placeholder while the content is loading.
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  shape = 'rectangle',
  borderRadius = shape === 'circle' ? '50%' : '4px',
  width = '100%',
  height = '20px',
  className = '',
}) => {
  const styles: React.CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return <div className={`skeleton ${shape} ${className}`} style={styles} />;
};
