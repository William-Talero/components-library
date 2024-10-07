import { Meta, StoryObj } from '@storybook/react';
import { InputWithIcon} from '../Input';
import { useState } from 'react';
import { InputWithIconProps } from '@/components/Input/IInput';
import React from 'react';

const meta: Meta<InputWithIconProps> = {
  title: 'Components/Atoms/Inputs/InputByColors',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'namesUpper'],
    },
    $size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  component: InputWithIcon,
};

export default meta;

type Story = StoryObj<InputWithIconProps>;
// Define the Template with onChange functionality
const Template = (args: InputWithIconProps) => {
  const [value, setValue] = useState('');

  // Handle change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    
    if (args.onChange) {
      args.onChange(event);
    }
  };

  return <InputWithIcon 
    {...args} value={value}
    $icon='plus'
    onChange={handleChange}
    onFocus={(event: React.ChangeEvent<HTMLInputElement>)=>console.log(event)}
    required
  />;
};




export const inputSuccess: Story = {
  render: Template,
  args: {
    type: 'email',
    $title: 'Email',
    $helpText: 'texto de ayuda',
    $isSuccess: true,
  },
};
export const inputError: Story = {
  render: Template,
  args: {
    type: 'email',
    $title: 'Email',
    $helpText: 'texto de ayuda',
    $isError:true,
  },
};
export const inputOrange: Story = {
  render: Template,
  args: {
    type: 'email',
    $title: 'Email',
    $helpText: 'texto de ayuda',
    $isWarning:true,
  },
};
