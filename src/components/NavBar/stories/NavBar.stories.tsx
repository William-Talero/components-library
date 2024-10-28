import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from '../NavBar';
import { NavBarProps } from '../INavBar';
import { MenuItem } from '@/components/MenuItem/MenuItem';

const meta: Meta<NavBarProps> = {
  title: 'Components/Organisms/NavBar',
  component: NavBar,
  argTypes: {
    content: {
      control: 'object',
      description: 'Elements of content inside Navbar',
    },
    footer: {
      control: 'object',
      description: 'Opcional Footer in the Navbar',
    },
    showFooter: {
      control: 'boolean',
      description: 'Define if footer is show or not',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background:'#ffffff',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<NavBarProps>;

export const Default: Story = {
  args: {
    content: [
      <MenuItem key="1" content="Inicio" icon="home" />,
      <MenuItem key="2" content="Perfil" icon="user" />,
      <MenuItem key="3" content="Ajustes" icon="home" />,
    ],
    showFooter: true,
    footer: (
      <div style={{ padding: '1rem', color: '#000000' }}>
        Footer de ejemplo
      </div>
    ),
  },
};

export const NoFooter: Story = {
  args: {
    content: [
      <MenuItem key="1" content="Inicio" icon="home" />,
      <MenuItem key="2" content="Perfil" icon="user" />,
      <MenuItem key="3" content="Ajustes" icon="home" />,
    ],
    showFooter: false,
  },
};