import React from "react";
import { render, screen } from "@testing-library/react";
import { Alert } from "../Alert";

describe("Button Component", () => {
  it("should render a Alert type success", () => {
    render(
      <Alert type="success" message="Esta es una alerta de tipo success" />
    );
    expect(
      screen.getByText("Esta es una alerta de tipo success")
    ).toBeInTheDocument();
  });

  it("should render a Alert type alert", () => {
    render(<Alert type="alert" message="Esta es una alerta de tipo alert" />);
    expect(
      screen.getByText("Esta es una alerta de tipo alert")
    ).toBeInTheDocument();
  });

  it("should render a Alert type error", () => {
    render(<Alert type="error" message="Esta es una alerta de tipo error" />);
    expect(
      screen.getByText("Esta es una alerta de tipo error")
    ).toBeInTheDocument();
  });
});
