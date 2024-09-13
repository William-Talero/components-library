import type { Meta, StoryObj } from "@storybook/react";
import { Title2 } from "@/components/Text/Text";
import { TitleProps } from "@/components/Text/IText";

const meta: Meta<TitleProps> = {
  title: "Components/Titles/Title2",
  component: Title2,
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
        children: "Este es un Title 2"
    },
  };
  
  export const Bold: Story = {
    args: {
        children: "Este es un Title 2",
        bold: true,
    },
  };
  