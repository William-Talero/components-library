import React from "react";
import "./Icons.styles.scss";
declare const icons: {
    plus: React.FC<React.SVGProps<SVGSVGElement>>;
    leftArrow: React.FC<React.SVGProps<SVGSVGElement>>;
    rightArrow: React.FC<React.SVGProps<SVGSVGElement>>;
    downArrow: React.FC<React.SVGProps<SVGSVGElement>>;
};
export type IconName = keyof typeof icons;
interface IconProps {
    $name: IconName;
    $w: string;
    className?: string;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
