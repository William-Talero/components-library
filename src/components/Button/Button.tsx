import styled from "styled-components";
import { ButtonProps } from "./IButton";
import { buttonSizes } from "../../parameters/sizes";
import { generalColors } from "../../parameters/colors";

const Button = styled.button<ButtonProps>`
  width: ${(props) =>
    props.size
      ? buttonSizes[props.size].width
      : props.w
      ? props.w
      : buttonSizes.md.width};
  height: ${(props) =>
    props.size
      ? buttonSizes[props.size].height
      : props.h
      ? props.h
      : buttonSizes.md.height};
  padding: ${(props) =>
    props.size ? buttonSizes[props.size].padding : buttonSizes.md.padding};
  background-color: ${(props) =>
    props.bgcolor ? generalColors[props.bgcolor] : props.w};
  border: none;
  color: ${(props) => (props.textcolor ? props.textcolor : "white")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1rem 0;
  cursor: pointer;
  border-radius: 1rem;
`;

export { Button };
