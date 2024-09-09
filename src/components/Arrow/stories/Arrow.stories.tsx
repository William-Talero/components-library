import type { Meta, StoryObj } from "@storybook/react";
import { Arrow } from "../Arrow";
import { ArrowProps } from "../IArrow";

const meta: Meta<ArrowProps> = {
  title: "Components/Arrows/Arrows",
  component: Arrow,
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<ArrowProps>;

export const Left: Story = {
  args: {
    direction: "left",
  },
};

export const Right: Story = {
  args: {
    direction: "right",
  },
};
