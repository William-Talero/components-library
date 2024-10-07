import { IconName } from '../Icon/Icons';

export interface AccordionProps {
    children: JSX.Element | JSX.Element[];
    id?: string;
    activeIndex?: number;
    headerIcon?: IconName;
    w?: string;
    contentColor?: 'green' | 'orange';
    className?: string;
}


export interface AccordionTabProps {
    header: string;
    disabled?: boolean;
    children?: React.ReactNode;
    headerClassName?: string;
    contentClassName?: string;
}