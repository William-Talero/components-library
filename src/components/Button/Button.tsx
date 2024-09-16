import * as React from "react";
import { ButtonWithIconProps, ButtonProps } from "./IButton";
import Icon from "../Icon/Icons";
import "@/styles.scss";

const Button = (data: ButtonProps) => {
  const { children, $type = "primary", $size, $m, ...rest } = data;

  const buttonClasses = [
    "button",
    `button-${$type}`,
    $size && `button-${$size}`,
    $m && `button-${$m}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

const ButtonWithIcon = (data: ButtonWithIconProps) => {
  const { children, $type = "primary", $size, $m, $icon, ...rest } = data;

  const buttonClasses = [
    "button",
    `button-${$type}`,
    $size && `button-${$size}`,
    $m && `button-${$m}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...rest}>
      <Icon $name={$icon} $w="10%" data-testid={`icon-${$icon}`} />
      <div style={{ width: "100%" }}>{children}</div>
      {$size === "lg" && (
        <Icon $name={$icon} $w="10%" data-testid={`icon-${$icon}`} />
      )}
    </button>
  );
};

const OrangeButton = (data: ButtonProps) => {
  const { children, $type = "primary", $size, $m, ...rest } = data;

  const buttonClasses = [
    "button",
    `button-orange-${$type}`,
    $size && `button-${$size}`,
    $m && `button-${$m}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
export { Button, ButtonWithIcon, OrangeButton };
