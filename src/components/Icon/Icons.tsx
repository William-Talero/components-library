import React from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import "./Icons.styles.scss";

const icons = {
  plus: PlusIcon,
};

type IconName = keyof typeof icons;

interface IconProps {
  $name: IconName;
  $w: string;
}

const Icon: React.FC<IconProps> = ({ $name = "plus", $w }) => {
  const SvgIcon = icons[$name];
  return (
    <div
      className="icon-container"
      style={{ "--w-container": $w } as React.CSSProperties}
    >
      <SvgIcon className="styled-svg-icon" />
    </div>
  );
};

export default Icon;
