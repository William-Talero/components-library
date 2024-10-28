import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/components/Modal/Modal';
import { ModalProps } from '@/components/Modal/IModal';

const meta: Meta<ModalProps> = {
  title: 'Components/Molecules/Modal/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    width: { control: 'text' },
    height: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

const ModalTemplate = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(args.isOpen || false);

  const handleClose = () => {
    setIsOpen(false);
    if (args.onClose) {
      args.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(args.isOpen || false);
  }, [args.isOpen]);

  return <Modal {...args} isOpen={isOpen} onClose={handleClose} />;
};

export const OpenModal: Story = {
  render: (args) => <ModalTemplate {...args} />,
  args: {
    isOpen: true,
    children: (
      <div style={{ margin: '40px' }}>
        <p style={{ color: 'black' }}>Este es el contenido del modal</p>
      </div>
    ),
  },
};

export const ClosedModal: Story = {
  render: (args) => <ModalTemplate {...args} />,
  args: {
    isOpen: false,
    children: (
      <div style={{ margin: '40px' }}>
        <p style={{ color: 'black' }}>Este es el contenido del modal</p>
      </div>
    ),
  },
};

export const ModalWithCustomContent: Story = {
  render: (args) => <ModalTemplate {...args} />,
  args: {
    isOpen: true,
    children: (
      <div style={{ margin: '20px' }}>
        <h2>Título del Modal</h2>
        <p>
          Este es un ejemplo de contenido más complejo con márgenes aplicados.
        </p>
      </div>
    ),
  },
};

export const ModalWithCustomSize: Story = {
  render: (args) => <ModalTemplate {...args} />,
  args: {
    isOpen: true,
    width: '500px',
    height: '400px',
    children: 'Modal con tamaño personalizado.',
  },
};

export const ModalWithCustomStyles: Story = {
  render: (args) => <ModalTemplate {...args} />,
  args: {
    isOpen: true,
    className: 'custom-modal-class',
    style: {
      backgroundColor: 'lightblue',
      border: '2px solid navy',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    children: (
      <div style={{ color: 'navy', fontSize: '1.2em', textAlign: 'center' }}>
        <h2>Modal Personalizado</h2>
        <p>Este modal tiene estilos adicionales aplicados.</p>
      </div>
    ),
  },
};

export const InteractiveModal: Story = {
  render: (args) => <ModalTemplate {...args} />,
  args: {
    isOpen: true,
    width: '400px',
    height: '300px',
    className: '',
    style: {},
    children: 'Contenido interactivo del modal.',
  },
};
