import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from '../SideBar';
import { SideBarProps } from '../ISideBar';
import { NavBar } from '@/components/NavBar/NavBar';
import { MenuItem } from '@/components/MenuItem/MenuItem';

const meta: Meta<SideBarProps> = {
  title: 'Components/Organisms/SideBar',
  component: SideBar,
  argTypes: {
    children: {
      control: 'object',
      description: 'Content of SideBar',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background:'#ffffff',
          height: '100vh',
          width: '250px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<SideBarProps>;

export const Default: Story = {
  args: {
    children: (
      <NavBar
        content={[
          <MenuItem key="1" content="Inicio" icon="home" />,
          <MenuItem key="2" content="Perfil" icon="user" />,
          <MenuItem key="3" content="Ajustes" icon="home" />,
        ]}
        showFooter={true}
        footer={
          <div style={{ padding: '1rem', color: '#FFF' }}>
            Footer de ejemplo
          </div>
        }
      />
    ),
  },
};

export const WithoutFooter: Story = {
  args: {
    children: (
      <NavBar
        content={[
          <MenuItem key="1" content="Inicio" icon="home" />,
          <MenuItem key="2" content="Perfil" icon="user" />,
          <MenuItem key="3" content="Ajustes" icon="home" />,
        ]}
        showFooter={false}
      />
    ),
  },
};