import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { CheckboxProps } from "@/components/Checkbox/ICheckbox";

const meta: Meta<CheckboxProps> = {
  title: "Components/CheckBox/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked Checkbox",
    checked: true,
    disabled: true,
  },
};
