import { Meta, StoryObj } from '@storybook/react';
import { Dropdown as DropdownInput } from '../Dropdown';
import { useState } from 'react';
import {
  DropdownProps as DropdownInputProps
} from '@/components/Dropdown/IDropdown';
import React from 'react';

const meta: Meta<DropdownInputProps> = {
  title: 'Components/Atoms/Dropdown/dropdown-input',
  argTypes: {
  },
  component: DropdownInput,
};

export default meta;

type Story = StoryObj<DropdownInputProps>;
// Define the Template with onChange functionality
const Template = (args: DropdownInputProps) => {
  const [value, setValue] = useState('');

  // Handle change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('hasdlk');
    setValue(event.target.value);
    if (args.onChange) {
      args.onChange(event);
    }
  };

  return <DropdownInput 
    {...args}
    $initialValue={value}
    onSelect={handleChange}
    onFocus={(event: React.ChangeEvent<HTMLInputElement>)=>console.log(event)}
    placeholder='Ejemplo llenado'
  />;
};


export const textDropdownInput: Story = {
  render: Template,
  args: {
    $options: [
      { text: 'opción  1', value: '1' },
      { text: 'option 2', value: '2' },
      { text: 'option 3', value: '3' },
      { text: 'option 4', value: '4' },
    ],
    $title: 'Title input',
    $helpText: 'texto de ayuda',
  },
};