import type { Meta, StoryObj } from "@storybook/react";
import { Title6 } from "@/components/Text/Text";
import { TextBaseProps } from "@/components/Text/IText";

const meta: Meta<TextBaseProps> = {
  title: "Components/Atoms/Titles/Title6",
  component: Title6,
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
        children: "Este es un Title 6"
    },
  };
  
  export const Bold: Story = {
    args: {
        children: "Este es un Title 6",
        bold: true,
    },
  };
  