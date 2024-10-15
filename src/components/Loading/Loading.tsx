import React from 'react';
import { LoadingProps } from './ILoading';
import '@/styles.scss';

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  color = '#FF6B00',
  className = '',
}) => {
  const baseClass = 'tvr-comp-loading';
  const wrapperClass =
    `${baseClass}-wrapper ${baseClass}-${size} ${className}`.trim();

  return (
    <div className={wrapperClass}>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`${baseClass}-dot`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export {Loading};


