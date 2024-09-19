import React from "react";
import "@/styles.scss";
import { TextBaseProps } from "./IText";

const TextBase: React.FC<TextBaseProps> = ({
  children,
  bold = false,
  color,
  darkColor,
  justify = "start",
  direction = "row",
  className,
  as: Component = "p",
}) => (
  <div
    className="tvr-comp-textContainer"
    style={
      {
        "--justify": justify,
        "--direccion": direction,
      } as React.CSSProperties
    }
  >
    <Component
      className={`${className} ${bold ? "tvr-comp-bold" : ""}`}
      style={
        {
          "--color": color || "#000",
          "--dark-color": darkColor || "#fefefe",
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  </div>
);

export const Title1: React.FC<TextBaseProps> = (props) => (
  <TextBase
    {...props}
    className={"tvr-comp-title1 " + props.className}
    as="h1"
  />
);

export const Title2: React.FC<TextBaseProps> = (props) => (
  <TextBase
    {...props}
    className={"tvr-comp-title2 " + props.className}
    as="h2"
  />
);

export const Title3: React.FC<TextBaseProps> = (props) => (
  <TextBase
    {...props}
    className={"tvr-comp-title3 " + props.className}
    as="h3"
  />
);

export const Title4: React.FC<TextBaseProps> = (props) => (
  <TextBase
    {...props}
    className={"tvr-comp-title4 " + props.className}
    as="h4"
  />
);

export const Title5: React.FC<TextBaseProps> = (props) => (
  <TextBase
    {...props}
    className={"tvr-comp-title5 " + props.className}
    as="h5"
  />
);

export const Title6: React.FC<TextBaseProps> = (props) => (
  <TextBase
    {...props}
    className={"tvr-comp-title6 " + props.className}
    as="h6"
  />
);

export const Text1: React.FC<TextBaseProps> = (props) => (
  <TextBase {...props} className={"tvr-comp-text1 " + props.className} />
);

export const Text2: React.FC<TextBaseProps> = (props) => (
  <TextBase {...props} className={"tvr-comp-text2 " + props.className} />
);

export const Text3: React.FC<TextBaseProps> = (props) => (
  <TextBase {...props} className={"tvr-comp-text3 " + props.className} />
);

export const Text4: React.FC<TextBaseProps> = (props) => (
  <TextBase {...props} className={"tvr-comp-text4 " + props.className} />
);

export const TextCTA: React.FC<TextBaseProps> = (props) => (
  <TextBase {...props} className={"tvr-comp-textCta " + props.className} />
);

export const TextLink: React.FC<TextBaseProps> = (props) => (
  <TextBase
    {...props}
    className={"tvr-comp-textLink " + props.className}
    color="#FB6903"
    darkColor="#FB6903"
  />
);
