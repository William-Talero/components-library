import React from "react";
import "@/styles.scss";
import { ArrowProps } from "./IArrow";
import Icon from "../Icon/Icons";

export const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
  return (
    <button className={`arrow arrow-${direction}`} onClick={onClick}>
      {direction === "left" ? (
        <Icon $name="leftArrow" $w="50%" />
      ) : (
        <Icon $name="rightArrow" $w="50%"/>
      )}
    </button>
  );
};
