import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuList } from '../MenuList';
import { MenuListProps } from '../IMenuList';

const meta: Meta<MenuListProps> = {
  title: 'Components/Atoms/MenuList/MenuList',
  component: MenuList,
  argTypes: {
    children: { control: { disable: true } },
    colorBackground: {
      control: {
        type: 'color',
      },
      description: 'Background color in hexadecimal format (#FFFFFF)'
    },
    colorContent: {
      control: {
        type: 'color',
      },
      description: 'Color only in hexadecimal format (#FFFGGG)',
    },
    icon: {
      control: 'text',
    },
    iconExpand: {
      control: 'text',
    },
    iconClassName: {
      control: 'text',
    },
    contentClassName: {
      control: 'text',
    },
    $w: {
      control: 'text',
      description: 'Width of the MenuList',
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          background:
            '#FFFFFF',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<MenuListProps>;

export const Default: Story = {
  args: {
    content: 'Afiliciones',
    colorBackground: '#E8F4E1',
    colorContent: '#000000',
    icon: 'groupAdd',
    iconExpand: 'downArrow',
    iconClassName: 'iconClassName',
    contentClassName: 'contentClassName',
    $w: '20rem',
    active: true,
    children: [
      <a href="/confirmaciones" id="001" key="001">
        Confirmación Modelo Afiliaciones
      </a>,
      <a href="/afiliacion" id="002" key="002">
        Parametría de Afiliación
      </a>,
      <a href="/masivos" id="003" key="003">
        Procesos Masivos
      </a>,
      <a href="/saldos" id="004" key="004">
        Saldos por cuenta
      </a>,
    ]
  },
};
