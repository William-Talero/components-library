import { HeaderProps } from '../IHeader';
import { Header } from '../Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<HeaderProps> = {
  title: 'Components/Atoms/Header/Header',
  component: Header,
  argTypes: {
    title: {
      control: 'text',
    },
    caption: {
      control: 'text',
    },
    iconName: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {
    title: 'Test Title',
    caption: 'Test Caption',
    iconName: 'plus',
  },
};

export const Example: Story = {
  args: {
    title: 'Bienvenido al mòdulo de',
    caption: 'Consulta de afiliados',
    iconName: 'arrowDropDown',
  },
};

