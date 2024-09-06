import type { Meta, StoryObj } from "@storybook/react";
import { Titulo1, Titulo2, Titulo3, Titulo4, Titulo5, Titulo6 } from "@/components/Text/Text";
import { TitleProps } from "@/components/Text/IText";

const meta: Meta<TitleProps> = {
  title: "Components/Titulos/Titulo1",
  component: Titulo1,
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
        children: "Este es un titulo 1"
    },
  };
  
  export const Bold: Story = {
    args: {
        children: "Este es un titulo 1",
        bold: true,
    },
  };
  