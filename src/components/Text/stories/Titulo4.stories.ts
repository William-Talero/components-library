import type { Meta, StoryObj } from "@storybook/react";
import { Title4 } from "@/components/Text/Text";
import { TitleProps } from "@/components/Text/IText";

const meta: Meta<TitleProps> = {
  title: "Components/Titles/Title4",
  component: Title4,
  argTypes: {
    children: { control: "text" },
    bold: { control: "boolean" },
    color: {control: "color"},
    darkColor: {control: "color"}
  },
};

export default meta;

type Story = StoryObj<TitleProps>;

export const Regular: Story = {
    args: {
        children: "Este es un Title 4"
    },
  };
  
  export const Bold: Story = {
    args: {
        children: "Este es un Title 4",
        bold: true,
    },
  };
  