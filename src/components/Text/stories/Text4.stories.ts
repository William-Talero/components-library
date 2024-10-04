import type { Meta, StoryObj } from '@storybook/react';
import { Text4 } from '@/components/Text/Text';
import { TextBaseProps } from '@/components/Text/IText';

const meta: Meta<TextBaseProps> = {
  title: 'Components/Atoms/Textos/Texto4',
  component: Text4,
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
    children: 'Este es un texto 4'
  },
};
  
export const Bold: Story = {
  args: {
    children: 'Este es un texto 4',
    bold: true,
  },
};
  