import type { Meta, StoryObj } from '@storybook/react';
import { Text3 } from '@/components/Text/Text';
import { TextBaseProps } from '@/components/Text/IText';

const meta: Meta<TextBaseProps> = {
  title: 'Components/Atoms/Textos/Texto3',
  component: Text3,
  argTypes: {
    children: { control: 'text' },
    bold: { control: 'boolean' },
    color: {control: 'color'},
    darkColor: {control: 'color'}
  },
};

export default meta;

type Story = StoryObj<TextBaseProps>;

export const Regular: Story = {
  args: {
    children: 'Este es un texto 3'
  },
};
  
export const Bold: Story = {
  args: {
    children: 'Este es un texto 3',
    bold: true,
  },
};
  