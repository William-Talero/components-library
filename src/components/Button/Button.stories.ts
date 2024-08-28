import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./IButton";

const meta: Meta<ButtonProps> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    $type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    $size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    $type: "primary",
    $size: "md",
    $w: "200px",
    $h: "50px",
    $m: "1px",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    $type: "secondary",
    $size: "md",
    $w: "200px",
    $h: "50px",
    $m: "1px",
    children: "Secondary Button",
  },
};

export const Disabled: Story = {
  args: {
    $type: "secondary",
    $size: "md",
    $w: "200px",
    $h: "50px",
    $m: "1px",
    disabled: true,
    children: "Disabled Button",
  },
};
