import React from "react";
import { render, screen } from "@testing-library/react";
import { Alert } from "../Alert";

describe("Alert Component", () => {
  it("should render a success Alert with message", () => {
    render(<Alert type="success" message="Operation successful" />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Operation successful");
    expect(alert).toHaveClass("alert-success");
  });

  it("should render an error Alert with message", () => {
    render(<Alert type="error" message="An error occurred" />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("An error occurred");
    expect(alert).toHaveClass("alert-error");
  });

  it("should render an alert Alert with message", () => {
    render(<Alert type="alert" message="Warning: Low battery" />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Warning: Low battery");
    expect(alert).toHaveClass("alert-alert");
  });

  it("should render Alert with long message", () => {
    const longMessage = "This is a very long message that tests the Alert component's ability to handle large amounts of text without breaking the layout or causing any visual issues.";
    render(<Alert type="success" message={longMessage} />);
    expect(screen.getByText(longMessage)).toBeInTheDocument();
  });
});