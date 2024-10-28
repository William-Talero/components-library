import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import ToastManager, { ToastManagerHandle } from '../ToastManager';

describe('ToastManager', () => {
  let toastManagerRef: React.RefObject<ToastManagerHandle>;

  beforeEach(() => {
    toastManagerRef = React.createRef<ToastManagerHandle>();
    render(<ToastManager ref={toastManagerRef} />);
  });

  it('should render a toast with the correct message', () => {
    act(() => {
      toastManagerRef.current?.show('Test Message', {});
    });

    const toastElement = screen.getByText('Test Message');
    expect(toastElement).not.toBeNull();
  });

  it('should remove the toast after the specified duration', async () => {
    jest.useFakeTimers();

    act(() => {
      toastManagerRef.current?.show('Test Message', {
        $duration: 3000,
        $showCloseButton: true,
      });
    });

    expect(screen.getByText('Test Message')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3500); // 3000ms duration + 500ms animation
    });

    await act(async () => {
      jest.advanceTimersByTime(3500); // 3000ms duration + 500ms animation
    });

    expect(screen.queryByText('Test Message')).not.toBeInTheDocument();

    jest.useRealTimers();
  });

  it('should call handleToastRemoval when click close button', async () => {
    jest.useFakeTimers();

    act(() => {
      toastManagerRef.current?.show('Test Message', {
        $duration: 3000,
        $showCloseButton: true,
      });
    });

    expect(screen.getByText('Test Message')).toBeInTheDocument();

    act(() => {
      screen.getByRole('button').click();
    });

    await act(async () => {
      jest.advanceTimersByTime(3500); // 3000ms duration + 500ms animation
    });

    expect(screen.queryByText('Test Message')).not.toBeInTheDocument();
  });

  it('should render a toast with custom options', () => {
    act(() => {
      toastManagerRef.current?.show('Custom Toast', {
        $duration: 3000,
        $type: 'soft',
        $color: 'green',
        $shape: 'pilled',
        $showCloseButton: true,
      });
    });

    const toastElement = screen
      .getByText('Custom Toast')
      .closest('.tvr-comp-toast');
    expect(toastElement).toHaveClass('toast-soft-green');
    expect(toastElement).toHaveClass('tvr-comp-toast-shape-pilled');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should add classname when property is send', () => {
    act(() => {
      toastManagerRef.current?.show('Custom Toast', {
        $duration: 3000,
        $classname: 'custom-class',
      });
    });

    const toastElement = screen
      .getByText('Custom Toast')
      .closest('.tvr-comp-toast');
    expect(toastElement).toHaveClass('custom-class');
  });

  it('should add clas border-lef when border left and type soft is send', () => {
    act(() => {
      toastManagerRef.current?.show('Custom Toast', {
        $duration: 3000,
        $type: 'soft',
        $borderLeft: true,
      });
    });

    const toastElement = screen
      .getByText('Custom Toast')
      .closest('.tvr-comp-toast');
    expect(toastElement).toHaveClass('border-left');
  });

  test('should render a content is string', () => {
    act(() => {
      toastManagerRef.current?.show('Custom Toast', {
        $duration: 3000,
        $content: 'Content',
      });
    });

    const toastElement = screen.getByText('Content');
    expect(toastElement).toBeInTheDocument();
  });

  test('should render avatar when property is send', () => {
    act(() => {
      toastManagerRef.current?.show('Custom Toast', {
        $duration: 3000,
        $avatar: 'https://www.google.com',
      });
    });

    const toastElements = screen.getAllByRole('img');
    expect(toastElements.length).toBeGreaterThan(0);
  });

  test('should render iconSwap when property is send', () => {
    act(() => {
      toastManagerRef.current?.show('Custom Toast', {
        $duration: 3000,
        $iconSwap: 'plus',
      });
    });

    const toastElement = screen
      .getByText('Custom Toast')
      .closest('.tvr-comp-toast')
      ?.querySelector('.tvr-comp-toast-icon-swap');
    expect(toastElement).toBeInTheDocument();
  });

  test('should render subtitle when property is send', () => {
    act(() => {
      toastManagerRef.current?.show('Custom Toast', {
        $duration: 3000,
        $subtitle: 'Subtitle',
      });
    });

    const toastElement = screen.getByText('Subtitle');
    expect(toastElement).toBeInTheDocument();
  });

  test('should set the correct position when $position option is provided', () => {
    act(() => {
      toastManagerRef.current?.show('Positioned Toast', {
        $duration: 3000,
        $position: 'bottom-left',
      });
    });

    const toastContainer = document.querySelector('.tvr-comp-toast-container');
    expect(toastContainer).toHaveClass('container-position-bottom-left');
  });

  test('should render iconSwap when $iconSwap option is provided', () => {
    act(() => {
      toastManagerRef.current?.show('Toast with Icon', {
        $duration: 3000,
        $iconSwap: 'plus',
      });
    });

    const iconElement = document.querySelector('.tvr-comp-toast-icon-swap');
    expect(iconElement).toBeInTheDocument();
  });

  test('should set the correct position when $position option is provided', () => {
    act(() => {
      toastManagerRef.current?.show('Positioned Toast', {
        $duration: false,
        $position: 'bottom-left',
      });
    });

    const toastContainer = document.querySelector('.tvr-comp-toast-container');
    expect(toastContainer).toHaveClass('container-position-bottom-left');
  });

  test('should show multiples toast and close all', async () => {
    act(() => {
      toastManagerRef.current?.show('Test Message 1', {
        $duration: false,
        $showCloseButton: true,
      });
      toastManagerRef.current?.show('Test Message 2', {
        $duration: false,
        $showCloseButton: true,
      });
    });

    const toastElement1 = screen.getByText('Test Message 1');
    const toastElement2 = screen.getByText('Test Message 2');
    screen.debug();
    expect(toastElement1).toBeInTheDocument();
    expect(toastElement2).toBeInTheDocument();

    act(() => {
      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => button.click());
    });

    await waitFor(() => {
      expect(toastElement1).not.toBeInTheDocument();
      expect(toastElement1).not.toBeInTheDocument();
    });
  });
});
