import { Meta, StoryObj } from '@storybook/react';
import { InputWithIcon } from '../Input';
import { useState } from 'react';
import { InputProps, InputWithIconProps } from '@/components/Input/IInput';
import React from 'react';

const meta: Meta<InputWithIconProps> = {
  title: 'Components/Atoms/Inputs/InputWithIcon',
  component: InputWithIcon,
};

export default meta;

type Story = StoryObj<InputProps>;
// Define the Template with onChange functionality
const Template = (args: InputProps) => {
  const [value, setValue] = useState('');

  // Handle change event
  const handleclickIcon = () => {
    console.log(event, 'value');
  };

   // Handle change event
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(value);
    
    if (args.onChange) {
      args.onChange(event);
    }
  };
  return <InputWithIcon 
    {...args} value={value}
    $icon='plus'
    $onClickIcon={handleclickIcon}
    onChange={handleChange}
    onFocus={(event: React.ChangeEvent<HTMLInputElement>)=>console.log(event)}
    required
  />;
};

export const inputWithIconOnclickIcon: Story = {
  render: Template,
  args: {
    pattern: /^http.+/gi,
    $title: 'Titulo input',
    $helpText: 'Texto ayuda',
  },
};

export const CustomWithPatternValidation: Story = {
  render: Template,
  args: {
    pattern: /^http.+/gi,
    $title: 'Title input',
    $helpText: 'Texto ayuda',
  },
};

