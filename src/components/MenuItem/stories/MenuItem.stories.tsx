import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from '../MenuItem';
import { MenuItemProps } from '../IMenuItem';

const meta: Meta<MenuItemProps> = {
  title: 'Components/Atoms/MenuItem',
  component: MenuItem,
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Define if the menu is active',
    },
    colorBackground: {
      control: 'color',
      description: 'Background Color in hexadecimal format (#FFFFFF)',
    },
    colorContent: {
      control: 'color',
      description: 'Color del contenido en formato hexadecimal (#000000)',
    },
    icon: {
      control: 'text',
      description: 'Icon name',
    },
    image: {
      control: 'boolean',
      description: 'Show image instead of icon',
    },
    avatar: {
      control: 'text',
      description: 'Text to avatar (used in the footer)',
    },
    email: {
      control: 'text',
      description: 'Email to show in footer',
    },
    content: {
      control: 'text',
      description: 'Content text',
    },
    variant: {
      control: { type: 'select', options: ['default', 'classic', 'footer'] },
      description: 'Component variants (default, classic, footer)',
    },
    iconClassName: {
      control: 'text',
      description: 'CSS class to the icon',
    },
    contentClassName: {
      control: 'text',
      description: 'CSS class to the content',
    },
    $w: {
      control: 'text',
      description: 'width of the component',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background:
            '#FFFFFF',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<MenuItemProps>;

export const Default: Story = {
  args: {
    content: 'Inicio',
    colorBackground: '#FFFFFF',
    colorContent: '#000000',
    icon: 'home',
    variant: 'default',
    active: false,
    $w: '15rem',
  },
};

export const Classic: Story = {
  args: {
    content: 'Usuario',
    colorBackground: '#FFFFFF',
    colorContent: '#000000',
    icon: 'user',
    variant: 'classic',
    active: true,
    $w: '15rem',
  },
};

export const Footer: Story = {
  args: {
    content: 'Mi Cuenta',
    avatar: 'JD',
    email: 'john.doe@example.com',
    colorBackground: '#FFFFFF',
    colorContent: '#000000',
    variant: 'footer',
    $w: '15rem',
  },
};