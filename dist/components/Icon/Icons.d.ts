import React from "react";
declare const icons: {
    house: string;
    master: string;
    plus: string;
};
interface IconProps {
    $name: keyof typeof icons;
    $w: string;
}
declare const Icon: ({ $name, $w }: IconProps) => React.JSX.Element;
export default Icon;
