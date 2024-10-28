import React, { useState, useImperativeHandle, forwardRef } from 'react';
import './Toast.scss';
import { ToastOptions, ToastProps } from './IToast';
import { TextMdRegular, TextSmSemiBold, TextXlBold } from '../Text/Text';
import Icon from '../Icon/Icons';
import { v4 as uuidv4 } from 'uuid';

export interface ToastManagerHandle {
  show: (message: string, options: ToastOptions) => void;
}

const ANIMATION_DURATION = 500;
const DEFAULT_DURATION = 3000;

const ToastManager = forwardRef<ToastManagerHandle>((props, ref) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [position, setPosition] = useState('top-right');

  const updateToastStatus = (id: string, status: string) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.$id === id
          ? { ...toast, $status: status as 'entering' | 'visible' | 'exiting' }
          : toast
      )
    );
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.$id !== id));
  };

  const handleToastLifecycle = (id: string, duration: number | false) => {
    // Change to visible after enter animation
    setTimeout(() => {
      updateToastStatus(id, 'visible');
    }, ANIMATION_DURATION);

    if (duration !== false) {
      // Schedule exit
      setTimeout(() => {
        handleToastRemoval(id);
      }, (duration ?? DEFAULT_DURATION) + ANIMATION_DURATION);
    }
  };

  const handleToastRemoval = (id: string) => {
    updateToastStatus(id, 'exiting');
    setTimeout(() => {
      removeToast(id);
    }, ANIMATION_DURATION);
  };

  const createToast = (message: string, options: ToastOptions): ToastProps => ({
    $id: uuidv4(),
    $message: message,
    $status: 'entering',
    $options: {
      ...options,
      $duration: options.$duration === false ? false : options.$duration,
      $type: options.$type ?? 'solid',
      $shape: options.$shape ?? 'rounded',
      $color: options.$color ?? 'dark',
    },
  });

  const buildClassName = (toast: ToastProps): string => {
    const classes = ['tvr-comp-toast'];

    if (toast.$options.$classname) {
      classes.push(toast.$options.$classname);
    }

    if (toast.$options.$shape) {
      classes.push(`tvr-comp-toast-shape-${toast.$options.$shape}`);
    }

    if (toast.$options.$type) {
      classes.push(`toast-${toast.$options.$type}-${toast.$options.$color}`);
    }

    if (toast.$options.$borderLeft && toast.$options.$type === 'soft') {
      classes.push('border-left');
    }

    classes.push(toast.$status);

    return classes.join(' ');
  };

  const renderToastContent = (toast: ToastProps) =>
    typeof toast.$options.$content === 'string' ? (
      <div className='tvr-comp-toast-text'>
        <TextMdRegular className="text-color">
          {toast.$options.$content}
        </TextMdRegular>
      </div>
    ) : (
      toast.$options.$content
    );

  useImperativeHandle(ref, () => ({
    show: (message: string, options: ToastOptions) => {
      const newToast = createToast(message, options);
      setPosition(options.$position ?? 'top-right');
      setToasts((prevToasts) => [...prevToasts, newToast]);
      handleToastLifecycle(newToast.$id, options.$duration!);
    },
  }));

  const renderCloseButton = (toast: ToastProps) =>
    toast.$options.$showCloseButton && (
      <button
        className="toast-close-btn"
        onClick={() => handleToastRemoval(toast.$id)}
      >
        &times;
      </button>
    );

  const renderToast = (toast: ToastProps) => (
    <div key={toast.$id} className={buildClassName(toast)}>
      {toast.$options.$avatar && (
        <div className="tvr-comp-toast-avatar">
          <img src={toast.$options.$avatar} alt="imagen avatar" />
        </div>
      )}

      {toast.$options.$iconSwap && (
        <Icon
          $name={toast.$options.$iconSwap}
          $w="16px"
          $h="16px"
          className="tvr-comp-toast-icon-swap"
        />
      )}
      <div>
        <div className="header">
          <TextXlBold className="title-color tvr-comp-toast-title">
            {toast.$message}
          </TextXlBold>
          {toast.$options.$subtitle && (
            <TextSmSemiBold className="subt-title-color tvr-comp-toast-subtitle">
              {toast.$options.$subtitle}
            </TextSmSemiBold>
          )}
        </div>
        {renderToastContent(toast)}
        {toast.$options.$footer}
      </div>
      {renderCloseButton(toast)}
    </div>
  );

  const buildClassNameContainer = () => {
    const classes = ['tvr-comp-toast-container'];

    const positionClass = `container-position-${position}`;
    classes.push(positionClass);

    return classes.join(' ');
  };

  return (
    <div className={buildClassNameContainer()}>{toasts.map(renderToast)}</div>
  );
});

ToastManager.displayName = 'ToastManager';

export default ToastManager;
