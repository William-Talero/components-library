import * as React from "react";
import { InputWithButtonProps, InputProps } from "./IInput";
import {
  InputElement,
  InputContainer,
  InputForIcon,
  InputIcon,
  InputGeneralContainer,
  InputTitle,
  InputDescription,
} from "./Input.styles";
import Icon from "../Icon/Icons";

const Input = (data: InputProps) => {
  const { $w, $m, $title, $description } = data;

  return (
    <InputGeneralContainer $w={$w} $m={$m}>
      {$title && <InputTitle>{$title}</InputTitle>}
      <InputContainer>
        <InputForIcon {...data} />
      </InputContainer>
      {$description && <InputDescription>{$description}</InputDescription>}
    </InputGeneralContainer>
  );
};

const InputWithIcon = (data: InputWithButtonProps) => {
  const { $icon, $w, $m, $title, $description } = data;

  return (
    <InputGeneralContainer $w={$w} $m={$m}>
      {$title && <InputTitle>{$title}</InputTitle>}
      <InputContainer>
        <InputForIcon {...data} />
        <InputIcon>
          <Icon $name={$icon} $w="100%" />
        </InputIcon>
      </InputContainer>
      {$description && <InputDescription>{$description}</InputDescription>}
    </InputGeneralContainer>
  );
};

export { Input, InputWithIcon };
