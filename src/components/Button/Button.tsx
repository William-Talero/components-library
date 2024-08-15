import styled from "styled-components";
import { ButtonProps } from "./IButton";

const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) =>
    props.color === "primary" ? "#4caf50" : "#f44336"};
  border: none;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1rem 0;
  cursor: pointer;
  border-radius: 1rem;
`;

export { Button };
