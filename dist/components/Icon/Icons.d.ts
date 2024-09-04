import React from "react";
declare const icons: {
    plus: React.FC<React.SVGProps<SVGSVGElement>>;
};
type IconName = keyof typeof icons;
interface IconProps {
    $name: IconName;
    $w: string;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
