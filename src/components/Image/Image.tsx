import React from 'react';
import { penDigitalLogo } from '@/assets/images/penDigitalLogo';
import { porvenirColorLogo } from '@/assets/images/porvenirColorLogo';

const images = {
  porvenirColor: penDigitalLogo,
  penDigital: porvenirColorLogo,
};

export type ImageIconName = keyof typeof images;

interface ImageProps {
  $name: ImageIconName;
  $w: string;
  $h?: string;
  className?: string;
  alt?: string;
  [key: string]: unknown;
}

const Image: React.FC<ImageProps> = ({
  $name,
  $w,
  $h = '100%',
  className = '',
  alt = 'Image',
  ...props
}) => {
  const imgSrc = images[$name];
  return (
    <div
      className={`tvr-comp-img-container ${className}`}
      style={{ '--w-container': $w, '--h-container': $h } as React.CSSProperties}
      {...props}
    >
      <img
        src={imgSrc}
        alt={alt}
        style={{ width: $w, height: $h }}
        className="tvr-comp-styled-img-icon"
      />
    </div>
  );
};

export default Image;
