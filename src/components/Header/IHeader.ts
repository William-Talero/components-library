import { IconName } from '../Icon/Icons';

/**
 * Props for the Header component.
 */
export interface HeaderProps {
    /**
     * Principal text to display "name module" 
     */
    title: string;

    /**
     * Subtitle text to display "name module" 
     */
    caption: string;

    /**
     * Icon module to display
     */
    iconName: IconName;
}