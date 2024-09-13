import React from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import LeftArrow from "@/assets/icons/LeftArrowIcon";
import RightArrow from "@/assets/icons/RightArrowIcon";
import "./Icons.styles.scss";

const icons = {
  plus: PlusIcon,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
};

export type IconName = keyof typeof icons;

interface IconProps {
  $name: IconName;
  $w: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ $name = "plus", $w, className }) => {
  const SvgIcon = icons[$name];
  return (
    <div
      className={`icon-container ${className}`}
      style={{ "--w-container": $w } as React.CSSProperties}
    >
      <SvgIcon className="styled-svg-icon" />
    </div>
  );
};

export default Icon;
