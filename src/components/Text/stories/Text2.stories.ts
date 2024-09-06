import type { Meta, StoryObj } from "@storybook/react";
import { Text2 } from "@/components/Text/Text";
import { TextProps } from "@/components/Text/IText";

const meta: Meta<TextProps> = {
  title: "Components/Textos/Texto2",
  component: Text2,
  argTypes: {
    children: { control: "text" },
    bold: { control: "boolean" },
    color: {control: "color"},
    darkColor: {control: "color"}
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const Regular: Story = {
    args: {
        children: "Este es un texto 2"
    },
  };
  
  export const Bold: Story = {
    args: {
        children: "Este es un texto 2",
        bold: true,
    },
  };
  