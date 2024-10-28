import React from 'react';
import '@/styles.scss';

import { ModalProps } from './IModal';
import Icon from '../Icon/Icons';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  style,
  width,
  height,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={onClose}
      data-testid="modal-overlay"
    >
      <div
        className={`modal-content ${className || ''}`}
        role="dialog"
        aria-modal="true"
        data-testid="modal-content"
        style={{ ...style, width: width, height: height }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <Icon $name="closeIcon" $w="16px" $h="16px" />
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export { Modal };
