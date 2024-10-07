import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { TooltipProps } from '@/components/Tooltip/ITooltip';

const meta: Meta<TooltipProps> = {
  title: 'Components/Atoms/Tooltips/Tooltips',
  component: Tooltip,
  argTypes: {
    text: { control: 'text' },
    margin: { control: 'text' },
    color: {
      control: { type: 'select' },
      options: ['green', 'orange', 'white', 'light', 'dark', 'default'],
    },
  },
};

export default meta;

type Story = StoryObj<TooltipProps>;

export const Defaul: Story = {
  args: {
    color: 'default',
  },
};

export const WithText: Story = {
  args: {
    text: 'Information',
    color: 'green',
  },
};

export const Orange: Story = {
  args: {
    text: 'Information',
    color: 'orange',
  },
};

export const White: Story = {
  args: {
    text: 'Information',
    color: 'white',
  },
};

export const Light: Story = {
  args: {
    text: 'Information',
    color: 'light',
  },
};

export const Dark: Story = {
  args: {
    text: 'Information',
    color: 'dark',
  },
};

export const WithMargin: Story = {
  args: {
    text: 'Information con margen',
    color: 'green',
    margin: '20px',
  },
};
