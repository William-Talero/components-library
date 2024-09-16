import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Circle } from "../Circle";

describe("Circle", () => {
  test("renders with default props", () => {
    render(<Circle size={24}/>);
    const circle = screen.getByTestId("status-circle");
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveClass("status-circle");
    expect(circle).toHaveStyle("width: 24px");
    expect(circle).toHaveStyle("height: 24px");
  });

  test("renders with custom size", () => {
    render(<Circle size={32} />);
    const circle = screen.getByTestId("status-circle");
    expect(circle).toHaveStyle("width: 32px");
    expect(circle).toHaveStyle("height: 32px");
  });

  test("renders with active state", () => {
    render(<Circle isActive={true} />);
    const circle = screen.getByTestId("status-circle");
    expect(circle).toHaveClass("status-circle");
    expect(circle).toHaveClass("active");
  });

  test("renders with custom className", () => {
    render(<Circle className="custom-class" />);
    const circle = screen.getByTestId("status-circle");
    expect(circle).toHaveClass("status-circle");
    expect(circle).toHaveClass("custom-class");
  });
});
