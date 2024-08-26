import * as React from "react";
import { ButtonWithIconProps } from "./IButton";
import { Button, ButtonContent } from "./Button.styles";
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

export { ButtonWithIcon };
