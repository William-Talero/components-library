import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Titulo1,
  Titulo2,
  Titulo3,
  Titulo4,
  Titulo5,
  Titulo6,
  Text1,
  Text2,
  Text3,
  Text4,
  TextCTA,
  TextLink,
} from "./../Text";

describe("Text Components", () => {
  const testText = "Test Text";

  const testComponent = (
    Component: React.FC<any>,
    className: string,
    tag: string
  ) => {
    it(`renders ${Component.name} correctly`, () => {
      render(<Component>{testText}</Component>);
      const element = screen.getByText(testText);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass(className);
      expect(element.tagName.toLowerCase()).toBe(tag);
    });

    it(`applies bold class to ${Component.name} when bold prop is true`, () => {
      render(<Component bold>{testText}</Component>);
      expect(screen.getByText(testText)).toHaveClass("bold");
    });

    it(`applies custom color to ${Component.name}`, () => {
      const customColor = "#FF0000";
      render(<Component color={customColor}>{testText}</Component>);
      expect(screen.getByText(testText)).toHaveStyle(`--color: ${customColor}`);
    });

    it(`applies custom dark color to ${Component.name}`, () => {
      const customDarkColor = "#00FF00";
      render(<Component darkColor={customDarkColor}>{testText}</Component>);
      expect(screen.getByText(testText)).toHaveStyle(
        `--dark-color: ${customDarkColor}`
      );
    });
  };

  testComponent(Titulo1, "title1", "h1");
  testComponent(Titulo2, "title2", "h2");
  testComponent(Titulo3, "title3", "h3");
  testComponent(Titulo4, "title4", "h4");
  testComponent(Titulo5, "title5", "h5");
  testComponent(Titulo6, "title6", "h6");
  testComponent(Text1, "text1", "h2");
  testComponent(Text2, "text2", "h2");
  testComponent(Text3, "text3", "h3");
  testComponent(Text4, "text4", "h4");
  testComponent(TextCTA, "textCta", "p");

  describe("TextLink", () => {
    it("renders TextLink correctly", () => {
      render(<TextLink>{testText}</TextLink>);
      const element = screen.getByText(testText);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass("textLink");
      expect(element.tagName.toLowerCase()).toBe("p");
    });

    it("applies fixed color to TextLink", () => {
      render(<TextLink>{testText}</TextLink>);
      expect(screen.getByText(testText)).toHaveStyle("--color: #FB6903");
      expect(screen.getByText(testText)).toHaveStyle("--dark-color: #FB6903");
    });
  });

  it("applies additional className to Text4", () => {
    const additionalClass = "extra-class";
    render(<Text4 className={additionalClass}>{testText}</Text4>);
    expect(screen.getByText(testText)).toHaveClass("text4", additionalClass);
  });
});
