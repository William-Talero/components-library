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
    },
    colorContent: {
      control: {
        type: 'color',
      },
      description: 'Color solo en format hexadecimal (#FFFGGG)',
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          background:
            'linear-gradient(90deg, #517C13 -7.04%, #89AE42 ' +
            '100.95%, #8BAF43 100.95%)',
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
    icon: 'groupAdd',
    iconExpand: 'downArrow',
    colorBackground: '#FFFFFF',
    colorContent: '#FFFFFF',
    iconClassName: 'iconClassName',
    contentClassName: 'contentClassName',
    children: [
      {
        id: '001',
        label: 'Confirmación Modelo Afiliaciones',
        href: '/confirmaciones',
      },
      {
        id: '002',
        label: 'Parametría de Afiliación',
        href: '/afiliacion',
      },
      {
        id: '003',
        label: 'Procesos Masivos',
        href: '/masivos',
      },
      {
        id: '004',
        label: 'Saldos por cuenta',
        href: '/saldos',
      },
    ].map((option, index) => {
      return (
        <a href={option.href} id={option.id} key={index}>
          {option.label}
        </a>
      );
    }),
  },
};
