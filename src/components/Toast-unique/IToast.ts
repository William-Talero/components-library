import { IconName } from '../Icon/Icons';
import { ColorToast, ShapeToast, TypesToast, ToastPosition } from './ToastTypes';


export interface ToastProps {
    $id: string;
    $message: string;
    $options: ToastOptions;
    $status: 'entering' | 'visible' | 'exiting';
}

export interface ToastOptions {
    /**
     * Duration in milliseconds to show the toast for. 
     * Set to `false` to disable auto-dismissal.
     */
    $duration?: number | false;
    /**
     * Content to display in the toast.
     */
    $content?: React.JSX.Element | string;
    /**
     * Footer to display in the toast.
     */
    $footer?: React.JSX.Element;
    /**
     * Swap Icon to display in the toast.
     */
    $iconSwap?: IconName;
    /**
     * Avatar to display in the toast.
     */
    $avatar?: string;
    /**
     * Title to display in the toast.
     */
    $subtitle?: string;
    /**
     * option to display button close
     */
    $showCloseButton?: boolean;
    /**
     * type toast to display
     */
    $type?: TypesToast;
    /**
     * shape toast to display
     */
    $shape?: ShapeToast;
    /**
     * color toast to display
     */
    $color?: ColorToast;
    /**
     * classname toast to display
     */
    $classname?: string;

    /**
     * position toast to display
     */
    $position?: ToastPosition;

    /**
     * border top toast to display
     */
    $borderLeft?: boolean;
}