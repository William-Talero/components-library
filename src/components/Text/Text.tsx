import React from "react";
import "@/styles.scss";
import { TitleProps, TextProps } from "./IText";

export const Title1: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h1
    className={`title1 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h1>
);

export const Title2: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h2
    className={`title2 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h2>
);

export const Title3: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h3
    className={`title3 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h3>
);

export const Title4: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h4
    className={`title4 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h4>
);

export const Title5: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h5
    className={`title5 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h5>
);

export const Title6: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h6
    className={`title6 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h6>
);

export const Text1: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h2
    className={`text1 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h2>
);

export const Text2: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h2
    className={`text2 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h2>
);

export const Text3: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <h3
    className={`text3 ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h3>
);

export const Text4: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
  className
}) => (
  <h4
    className={`text4 ${bold ? "bold" : ""} ${className}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </h4>
);

export const TextCTA: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <p
    className={`textCta ${bold ? "bold" : ""}`}
    style={
      {
        "--color": color ? color : "#000",
        "--dark-color": darkColor ? darkColor : "#fefefe",
      } as React.CSSProperties
    }
  >
    {children}
  </p>
);

export const TextLink: React.FC<TitleProps> = ({
  children,
  bold = false,
  color,
  darkColor,
}) => (
  <p
    className={`textLink ${bold ? "bold" : ""}`}
    style={
      { "--color": "#FB6903", "--dark-color": "#FB6903" } as React.CSSProperties
    }
  >
    {children}
  </p>
);
