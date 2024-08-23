import * as React from "react";
import { ButtonWithIconProps } from "./IButton";
import { Button, ButtonContent } from "./Button.styles";
import Icon from "../Icon/Icons";

const ButtonWithIcon = (data: ButtonWithIconProps) => {
  const { $size, icon, children } = data;
  return (
    <Button {...data}>
      <Icon name={icon} />
      <ButtonContent>{children}</ButtonContent>
      {$size == "lg" && <Icon name={icon} />}
    </Button>
  );
};

export { ButtonWithIcon };
