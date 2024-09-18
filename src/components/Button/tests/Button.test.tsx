import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, OrangeButton, ButtonWithIcon } from "../Button";

describe("Button Components", () => {
  describe("Button", () => {
    it("renders with default props", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByText("Click me");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("button button-primary");
    });

    it("renders with custom type", () => {
      render(<Button $type="secondary">Click me</Button>);
      expect(screen.getByText("Click me")).toHaveClass(
        "button button-secondary"
      );
    });

    it("renders with custom size", () => {
      render(<Button $size="lg">Click me</Button>);
      expect(screen.getByText("Click me")).toHaveClass(
        "button button-primary button-lg"
      );
    });

    it("renders with custom margin", () => {
      render(<Button $m="4">Click me</Button>);
      expect(screen.getByText("Click me")).toHaveClass("button button-primary");
    });

    it("passes through additional props", () => {
      render(<Button data-testid="custom-button">Click me</Button>);
      expect(screen.getByTestId("custom-button")).toBeInTheDocument();
    });
  });

  describe("OrangeButton", () => {
    it("renders with default props", () => {
      render(<OrangeButton>Click me</OrangeButton>);
      const button = screen.getByText("Click me");
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("button button-orange-primary");
    });

    it("renders with custom type", () => {
      render(<OrangeButton $type="secondary">Click me</OrangeButton>);
      expect(screen.getByText("Click me")).toHaveClass(
        "button button-orange-secondary"
      );
    });

    it("renders with custom size and margin", () => {
      render(
        <OrangeButton $size="sm" $m="2">
          Click me
        </OrangeButton>
      );
      expect(screen.getByText("Click me")).toHaveClass(
        "button button-orange-primary button-sm"
      );
    });
  });

  describe("ButtonWithIcon", () => {
    it("renders with default props", () => {
      render(<ButtonWithIcon $icon="plus">Click me</ButtonWithIcon>);
      const button = screen.getByText("Click me");
      expect(button).toBeInTheDocument();
      expect(button.closest("button")).toHaveClass("button button-primary");
      expect(screen.getByTestId("icon-plus")).toBeInTheDocument();
    });

    it("renders with custom type and size", () => {
      render(
        <ButtonWithIcon $type="secondary" $size="md" $icon="plus">
          Click me
        </ButtonWithIcon>
      );
      const button = screen.getByText("Click me").closest("button");
      expect(button).toHaveClass("button button-secondary button-md");
      expect(screen.getByTestId("icon-plus")).toBeInTheDocument();
    });

    it("renders two 'plus' icons when size is 'lg'", () => {
      render(
        <ButtonWithIcon $size="lg" $icon="plus">
          Click me
        </ButtonWithIcon>
      );
      const plusIcons = screen.getAllByTestId("icon-plus");
      expect(plusIcons).toHaveLength(2);
    });

    it("renders only one 'plus' icon when size is not 'lg'", () => {
      render(
        <ButtonWithIcon $size="sm" $icon="plus">
          Click me
        </ButtonWithIcon>
      );
      const plusIcons = screen.getAllByTestId("icon-plus");
      expect(plusIcons).toHaveLength(1);
    });
  });
});
