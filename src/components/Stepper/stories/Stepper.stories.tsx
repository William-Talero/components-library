import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@/components/Stepper/Stepper";
import { StepperProps } from "../IStepper";

const meta: Meta<StepperProps> = {
  title: "Components/Molecules/Stepper/Stepper",
  component: Stepper,
  argTypes: {
    steps: { control: "number" },
    currentStep: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<StepperProps>;

export const Default: Story = {
  args: {
    steps: 5,
  },
};

export const Select: Story = {
  args: {
    steps: 5,
    currentStep: 2,
  },
};
