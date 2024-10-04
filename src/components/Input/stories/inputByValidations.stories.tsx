import { Meta, StoryObj } from '@storybook/react';
import { InputWithIcon } from '../Input';
import { useState } from 'react';
import { InputProps, InputWithIconProps } from '@/components/Input/IInput';
import React from 'react';
import { Button } from '@/components/Button';

const meta: Meta<InputWithIconProps> = {
  title: 'Components/Atoms/Inputs/InputByValidations',
  component: InputWithIcon,
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithIcon
        {...args}
        value={value}
        $icon="plus"
        onChange={handleChange}
        onFocus={(event: React.ChangeEvent<HTMLInputElement>) =>
          console.log(event)
        }
        required
      />
      <Button
        $h="50px"
        $m="1px"
        $size="md"
        $type="primary"
        $w="200px"
        type="submit"
      >
        enviar
      </Button>
    </form>
  );
};

export const emailPatternValidation: Story = {
  render: Template,
  args: {
    type: 'email',
    $title: 'Correo Electrónico',
    value: 'example@mail.com',
    $helpText: 'Texto ayuda',
  },
};

export const customPatternValidation: Story = {
  render: Template,
  args: {
    $title: 'Sitio Web, sólo valida http.',
    pattern: /^http.+/gi,
    $helpText: 'Texto ayuda',
  },
};
