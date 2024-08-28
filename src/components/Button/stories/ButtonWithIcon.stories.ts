import type { Meta, StoryObj } from "@storybook/react";
import { ButtonWithIcon } from "@/components/Button/Button";
import { ButtonWithIconProps } from "@/components/Button/IButton";

const meta: Meta<ButtonWithIconProps> = {
  title: "Components/Buttons/ButtonWithIcon",
  component: ButtonWithIcon,
  argTypes: {
    $type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    $size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    $icon: {
      control: { type: "select" },
      options: ["home", "plus", "master"],
    },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<ButtonWithIconProps>;

export const Primary: Story = {
  args: {
    $type: "primary",
    $size: "md",
    $w: "200px",
    $h: "50px",
    $m: "1px",
    $icon: "plus",
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
    $icon: "plus",
    children: "Secondary Button",
  },
};

export const Disabled: Story = {
  args: {
    $type: "secondary",
    $size: "md",
    $w: "200px",
    $h: "50px",
    $icon: "plus",
    $m: "1px",
    disabled: true,
    children: "Disabled Button",
  },
};
