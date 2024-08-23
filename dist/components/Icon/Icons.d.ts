import React from "react";
declare const icons: {
    house: string;
    master: string;
    plus: string;
};
interface IconProps {
    name: keyof typeof icons;
}
declare const Icon: ({ name }: IconProps) => React.JSX.Element;
export default Icon;
