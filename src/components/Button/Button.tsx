import * as React from "react";
import { ButtonWithIconProps, ButtonProps } from "./IButton";
import { ButtonElement, ButtonContent } from "./Button.styles";
import Icon from "../Icon/Icons";

const ButtonWithIcon = (data: ButtonWithIconProps) => {
  const { $size, $icon: icon, children } = data;
  return (
    <Button {...data}>
      <Icon $name={icon} $w="20%" />
      <ButtonContent>{children}</ButtonContent>
      {$size == "lg" && <Icon $name={icon} $w="20%" />}
    </Button>
  );
};

const Button = (data: ButtonProps) => {
  const { children } = data;
  return <ButtonElement {...data}>{children}</ButtonElement>;
};

export { Button, ButtonWithIcon };
