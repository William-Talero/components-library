import React from "react";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./../Breadcrumb";

describe("Breadcrumb Component", () => {
  it("should render all items", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Category" },
    ];

    render(<Breadcrumb items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("should render links for all items except the last one", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Category" },
    ];

    render(<Breadcrumb items={items} />);

    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByText("Products")).toHaveAttribute("href", "/products");
    expect(screen.getByText("Category")).not.toHaveAttribute("href");
  });

  it("should apply 'breadcrumb-current' class to the last item", () => {
    const items = [{ label: "Home", href: "/" }, { label: "Products" }];

    render(<Breadcrumb items={items} />);

    expect(screen.getByText("Products")).toHaveClass("breadcrumb-current");
  });

  it("should apply 'breadcrumb-link' class to the first item", () => {
    const items = [{ label: "Home", href: "/" }, { label: "Products" }];

    render(<Breadcrumb items={items} />);

    expect(screen.getByText("Home")).toHaveClass("breadcrumb-link");
  });
});
