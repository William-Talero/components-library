import React from 'react';
import './Icons.styles.scss';
declare const icons: {
    plus: React.FC<React.SVGProps<SVGSVGElement>>;
    leftArrow: React.FC<React.SVGProps<SVGSVGElement>>;
    rightArrow: React.FC<React.SVGProps<SVGSVGElement>>;
    arrowDropDown: React.FC<React.SVGProps<SVGSVGElement>>;
    downArrow: React.FC<React.SVGProps<SVGSVGElement>>;
    groupAdd: React.FC<React.SVGProps<SVGSVGElement>>;
    ellipsis: React.FC<React.SVGProps<SVGSVGElement>>;
    home: React.FC<React.SVGProps<SVGSVGElement>>;
    lan: React.FC<React.SVGProps<SVGSVGElement>>;
    supervisor: React.FC<React.SVGProps<SVGSVGElement>>;
    moneyIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    user: React.FC<React.SVGProps<SVGSVGElement>>;
    search: React.FC<React.SVGProps<SVGSVGElement>>;
    logout: React.FC<React.SVGProps<SVGSVGElement>>;
    info: React.FC<React.SVGProps<SVGSVGElement>>;
    slashBold: React.FC<React.SVGProps<SVGSVGElement>>;
    calendarToday: React.FC<React.SVGProps<SVGSVGElement>>;
    done: React.FC<React.SVGProps<SVGSVGElement>>;
    warningAmber: React.FC<React.SVGProps<SVGSVGElement>>;
    closeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
    upArrow: React.FC<React.SVGProps<SVGSVGElement>>;
    logoColor: React.FC<React.SVGProps<SVGSVGElement>>;
    filterList: React.FC<React.SVGProps<SVGSVGElement>>;
};
export type IconName = keyof typeof icons;
interface IconProps {
    $name: IconName;
    $w?: string;
    $h?: string;
    $m?: string;
    className?: string;
    [key: string]: unknown;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
