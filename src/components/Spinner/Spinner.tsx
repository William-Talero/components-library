import React from 'react';
import { SpinnerProps } from './ISpinner';
import './Spinner.styles.scss';
import { TextLgSemiBold, TextSmSemiBold, TextXsSemiBold } from '../Text';
import { LineSpinner } from '@/assets/icons/LineSpinner';
import { CircularProgressSpinner } from '@/assets/icons/CircularProgressSpinner';
import Icon from '../Icon/Icons';

export const Spinner: React.FC<SpinnerProps> = ({
  $message,
  $showCloseButton = false,
  $size = 'default',
  $type = 'lineSpinner',
  $variant = 'container',
  $className = '',
  $wModal = 'auto',
  $hModal = 'auto',
  $wContainer = '100%',
  $hContainer = '100%',
  $onlySpinner = false,
  onClose,
}) => {
  const renderText = () => {
    if (!$message || $type.includes('NoLabel')) {
      return null;
    }

    const sizeToComponentMap = {
      xs: TextXsSemiBold,
      small: TextSmSemiBold,
      default: TextSmSemiBold,
      large: TextLgSemiBold,
    };

    const TextComponent = sizeToComponentMap[$size];

    return <TextComponent>{$message}</TextComponent>;
  };

  const renderSpinner = () => {
    if ($type.includes('lineSpinner')) {
      return <LineSpinner svgClassName={`spinner ${$size}`} />;
    }

    if ($type.includes('circularProgress')) {
      return <CircularProgressSpinner svgClassName={`spinner ${$size}`} />;
    }
  };

  const renderPrincipalContainerClass = () => {
    const classes = [''];

    if ($variant === 'fullScreen') {
      classes.push('tvr-comp-spinner-principal-full-screen');
    }

    if ($variant === 'container') {
      classes.push('tvr-comp-spinner-principal-container');
    }

    if ($onlySpinner) {
      classes.push('tvr-comp-spinner-principal-only-spinner');
    }

    if ($className) {
      classes.push($className);
    }

    return classes.join(' ');
  };

  const renderSpinnerModalClass = () => {
    return (
      <div
        className="tvr-comp-spinner-container-modal"
        style={
          {
            '--w-container-modal': $wModal,
            '--h-container-modal': $hModal,
          } as React.CSSProperties
        }
      >
        {renderCloseButton()}
        {renderSpinnerContainerClass()}
      </div>
    );
  };

  const renderSpinnerContainerClass = () => {
    return (
      <div className="tvr-comp-spinner-container">
        {renderSpinner()}
        {renderText()}
      </div>
    );
  };

  const renderCloseButton = () => {
    if (!$showCloseButton) {
      return null;
    }

    return (
      <button className="tvr-cpm-spinner-modal-close" onClick={onClose}>
        <Icon $name="closeIcon" $w="16px" $h="16px" />
      </button>
    );
  };

  return (
    <div
      className={renderPrincipalContainerClass()}
      data-testid="spinner-container"
      style={
        {
          '--w-container': $wContainer,
          '--h-container': $hContainer,
        } as React.CSSProperties
      }
    >
      {$onlySpinner ? renderSpinnerContainerClass() : renderSpinnerModalClass()}
    </div>
  );
};
