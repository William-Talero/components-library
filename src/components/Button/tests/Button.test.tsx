import React from "react";
import { render, screen } from "@testing-library/react";
import { Button, ButtonWithIcon, OrangeButton } from "./../Button";

describe("Button Component", () => {
  it("should render a basic Button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should render an OrangeButton with children", () => {
    render(<OrangeButton>Click me</OrangeButton>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should render ButtonWithIcon with icon and size", () => {
    render(
      <ButtonWithIcon $icon="plus" $size="lg">
        Click me
      </ButtonWithIcon>
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
