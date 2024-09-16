import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Circle } from "../Circle";
import { CircleProps } from "../ICircle";

const meta: Meta<CircleProps> = {
  title: "Components/Circle/Circle",
  component: Circle,
  argTypes: {
    size: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<CircleProps>;

export const Default: Story = {
  args: {
    size: 20,
  },
};
