import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./../Breadcrumb";
import { BreadcrumbProps } from "./../IBreadcrumb";

const meta: Meta<BreadcrumbProps> = {
  title: "Components/Atoms/Navigation/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    items: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbProps>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Category", href: "/products/category" },
      { label: "Item" },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: "Home" }],
  },
};

export const TwoItems: Story = {
  args: {
    items: [{ label: "Home", href: "/" }, { label: "Products" }],
  },
};

export const WithoutLinks: Story = {
  args: {
    items: [{ label: "Home" }, { label: "Products" }, { label: "Category" }],
  },
};
