import type { Meta, StoryObj } from "@storybook/react";
import { Titulo4 } from "@/components/Text/Text";
import { TitleProps } from "@/components/Text/IText";

const meta: Meta<TitleProps> = {
  title: "Components/Titulos/Titulo4",
  component: Titulo4,
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
        children: "Este es un titulo 4"
    },
  };
  
  export const Bold: Story = {
    args: {
        children: "Este es un titulo 4",
        bold: true,
    },
  };
  