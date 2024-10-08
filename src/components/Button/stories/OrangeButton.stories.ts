import type { Meta, StoryObj } from "@storybook/react";
import { OrangeButton } from "@/components/Button/Button";
import { ButtonProps } from "@/components/Button/IButton";

const meta: Meta<ButtonProps> = {
  title: "Components/Buttons/OrangeButton",
  component: OrangeButton,
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
