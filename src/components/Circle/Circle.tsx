import React from "react";
import "@/styles.scss";
import { CircleProps } from "./ICircle";

const Circle: React.FC<CircleProps> = ({
  size = 20,
  className = "",
  isActive = false,
  onClick,
  ...props
}) => {
  return (
    <div
      data-testid="status-circle"
      className={`status-circle ${isActive ? "active" : ""} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
      role="button"
      tabIndex={onClick ? 0 : undefined}
      {...props}
    />
  );
};

export { Circle };
