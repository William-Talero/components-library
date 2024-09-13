import { Meta, StoryObj } from '@storybook/react';
import { Input as InputText} from '../Input';
import { useState } from 'react';
import { InputProps } from '@/components/Input/IInput';
import React from 'react';

const meta: Meta<InputProps> = {
  title: 'Components/Inputs/Input',
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "namesUpper"],
    },
    $size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
  component: InputText,
};

export default meta;

type Story = StoryObj<InputProps>;
// Define the Template with onChange functionality
const Template = (args: InputProps) => {
  const [value, setValue] = useState('');

  // Handle change event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    
    if (args.onChange) {
      args.onChange(event);
    }
  };

  return <InputText {...args} value={value} 
  onChange={handleChange}
  onFocus={(event: React.ChangeEvent<HTMLInputElement>)=>console.log(event)}
  required
  />;
};


export const textInput: Story = {
  render: Template,
  args: {
    type: "text",
    $title: 'Titulo input',
    $helpText: "texto de ayuda",
  },
};

export const InputNumber: Story = {
  render: Template,
  args: {
    type: "number",
    $title: " Titulo input Number",
    $helpText: "texto de ayuda",
  },
};

export const inputPassword: Story = {
  render: Template,
  args: {
    type: "password",
    $title: "Titulo input Password",
    $helpText: 'Texto ayuda',
  },
};

export const inputEmail: Story = {
  render: Template,
  args: {
    type: "email",
    $title: "Titulo input Email",
    $helpText: 'Texto ayuda',
  },
};

export const inputUppercase: Story = {
  render: Template,
  args: {
    type: "namesUpper",
    $title: "Nombres en Mayúscula",
    $helpText: "El texto se capitaliza automáticamente",
  },
};

export const inputSetValue: Story = {
  render: Template,
  args: {
    type: "text",
    $value: "vulue 2",
    $title: 'Titulo input',
    $helpText: 'Texto ayuda',
  },
};

export const inputPlaceholder: Story = {
  render: Template,
  args: {
    type: "text",
    placeholder: "Ejemplo llenado",
    $title: 'Titulo input',
    $helpText: 'Texto ayuda',
  },
};
export const inputDisable: Story = {
  render: Template,
  args: {
    type: "email",
    $title: "Email",
    $helpText: "texto de ayuda",
    disabled: true
  },
};

export const inputReadOnly: Story = {
  render: Template,
  args: {
    type: "text",
    $value: "vulue 1",
    $title: 'Titulo input',
    $helpText: 'Texto ayuda',
    readOnly: true,
  },
};
