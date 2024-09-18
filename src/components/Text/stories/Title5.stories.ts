import type { Meta, StoryObj } from "@storybook/react";
import { Title5 } from "@/components/Text/Text";
import { TextBaseProps } from "@/components/Text/IText";

const meta: Meta<TextBaseProps> = {
  title: "Components/Atoms/Titles/Title5",
  component: Title5,
  argTypes: {
    children: { control: "text" },
    bold: { control: "boolean" },
    color: {control: "color"},
    darkColor: {control: "color"}
  },
};

export default meta;

type Story = StoryObj<TextBaseProps>;

export const Regular: Story = {
    args: {
        children: "Este es un Title 5"
    },
  };
  
  export const Bold: Story = {
    args: {
        children: "Este es un Title 5",
        bold: true,
    },
  };
  