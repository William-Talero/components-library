import type { Meta, StoryObj } from "@storybook/react";
import { Title1, Title2, Title3, Title4, Title5, Title6 } from "@/components/Text/Text";
import { TitleProps } from "@/components/Text/IText";

const meta: Meta<TitleProps> = {
  title: "Components/Titles/Title1",
  component: Title1,
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
        children: "Este es un Title 1"
    },
  };
  
  export const Bold: Story = {
    args: {
        children: "Este es un Title 1",
        bold: true,
    },
  };
  