import styled from "styled-components";
import { ButtonProps } from "./IButton";
import { buttonSizes } from "@/parameters/sizes";
import { generalColors } from "@/parameters/colors";

const ButtonElement = styled.button<ButtonProps>`
  width: ${(props) =>
    props.$size
      ? buttonSizes[props.$size].width
      : props.$w
        ? props.$w
        : buttonSizes.md.width};
  height: ${(props) =>
    props.$size
      ? buttonSizes[props.$size].height
      : props.$h
        ? props.$h
        : buttonSizes.md.height};
  padding: ${(props) =>
    props.$size ? buttonSizes[props.$size].padding : buttonSizes.md.padding};
  background-color: ${(props) =>
    props.$type == "primary" ? generalColors.primary : "transparent"};
  border: ${(props) =>
    props.$type == "primary"
      ? "none"
      : `2px solid light-dark(${generalColors.terciary}, ${generalColors.primary})`};
  color: ${(props) =>
    props.$type == "primary"
      ? "white"
      : `light-dark(${generalColors.terciary}, ${generalColors.primary})`} !important;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: ${(props) => props.$m};
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) =>
    props.$size
      ? buttonSizes[props.$size].fontSize
      : buttonSizes.md.fontSize} !important;
  font-weight: 500 !important;

  &:hover {
    background-color: ${generalColors.primaryHover};
    color: #000 !important;
    border: none;
  }

  :only-child {
    fill: ${(props) =>
      props.$type == "primary" ? "white" : generalColors.terciary} !important;
  }

  &:hover :only-child {
    fill: #000 !important;
  }

  &:disabled {
    background-color: light-dark(
      ${generalColors.disabled},
      ${generalColors.disabledSecond}
    );
    cursor: not-allowed;
    color: light-dark(
      ${generalColors.disabledSecond},
      ${generalColors.disabled}
    ) !important;
    border: none;

    :only-child {
      fill: ${generalColors.disabledSecond} !important;
    }

    &:hover {
      background-color: ${generalColors.disabled};
      color: ${generalColors.disabledSecond} !important;
    }
  }

  &:active {
    background-color: ${generalColors.terciary};
    color: #fff !important;

    :only-child {
      fill: #fff !important;
    }
  }

  @media screen and (max-width: 60rem) {
    width: ${(props) =>
      props.$size
        ? buttonSizes[props.$size].smWidth
        : props.$w
          ? props.$w
          : buttonSizes.md.smWidth};
    font-size: 0.8rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 0.5rem;
  }
`;

const ButtonContent = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const OrangeButtonElement = styled(ButtonElement)`
  height: 2.5rem;
  background-color: ${(props) =>
    props.$type == "primary" ? generalColors.secondary : "transparent"};
  border-radius: 1rem;
  border-top-right-radius: 0;
  border: ${(props) =>
    props.$type == "primary"
      ? "none"
      : `1px solid ${generalColors.quaternary}`};
  color: ${(props) =>
    props.$type == "primary" ? "white" : generalColors.quaternary} !important;

  &:hover {
    background-color: ${generalColors.secondaryHover};
    color: #fff !important;
  }

  &:active {
    background-color: ${generalColors.quaternary};
    border: 4px solid ${generalColors.secondaryHover};
  }

  &:disabled {
    background-color: ${generalColors.disabledSecond};
    color: #fff !important;
    border: none;
  }
`;

export { ButtonElement, ButtonContent, OrangeButtonElement };
