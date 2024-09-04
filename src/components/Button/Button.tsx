import * as React from "react";
import { ButtonWithIconProps, ButtonProps } from "./IButton";
import Icon from "../Icon/Icons";
import "../../styles.scss";

const Button = (data: ButtonProps) => {
  const { children, $type, $size, $m, ...rest } = data;
  const className = `button button-${$type} button-${$size} button-${$m}`;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

const ButtonWithIcon = (data: ButtonWithIconProps) => {
  const { children, $type, $size, $m, ...rest } = data;
  const classNames = `button button-${$type} button-${$size} button-${$m}`;

  return (
    <button className={classNames} {...rest}>
      <Icon $name="plus" $w="10%" />
      <div style={{ width: "100%" }}>{children}</div>
      {$size === "lg" && <Icon $name="plus" $w="10%" />}
    </button>
  );
};

const OrangeButton = (data: ButtonProps) => {
  const { children, $type, $size, $m, ...rest } = data;
  const classNames = `button button-${$type} button-${$size} button-${$m}`;

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};
export { Button, ButtonWithIcon, OrangeButton };
