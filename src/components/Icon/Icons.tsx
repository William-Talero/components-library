import React from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import LeftArrow from "@/assets/icons/LeftArrowIcon";
import RightArrow from "@/assets/icons/RightArrowIcon";
import DownArrow from "@/assets/icons/DownArrow";
import "./Icons.styles.scss";

const icons = {
  plus: PlusIcon,
  leftArrow: LeftArrow,
  rightArrow: RightArrow,
  downArrow: DownArrow,
};

export type IconName = keyof typeof icons;

interface IconProps {
  $name: IconName;
  $w: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  $name = "plus",
  $w,
  className = "",
  ...props
}) => {
  const SvgIcon = icons[$name];
  return (
    <div
      className={`icon-container ${className}`}
      style={{ "--w-container": $w } as React.CSSProperties}
      {...props}
    >
      <SvgIcon className="styled-svg-icon" />
    </div>
  );
};

export default Icon;
