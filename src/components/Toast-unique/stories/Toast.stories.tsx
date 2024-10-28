import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Toast } from '@/components/Toast-unique/Toast';
import { Button } from '@/components/Button';
import { ToastOptions } from '../IToast';
import { StatusCodeValid } from '../ToastTypes';

// Meta es la información principal de la historia de Storybook
export default {
  title: 'Components/Atoms/Toast/Toast',
  component: Toast as unknown as React.ComponentType<object>,
  argTypes: {
    $duration: { control: 'number' },
    $type: { control: 'select', options: ['soft', 'solid'] },
    $shape: { control: 'select', options: ['rounded', 'pilled'] },
    $color: { control: 'color' },
    $content: { control: 'text' },
    $showCloseButton: { control: 'boolean' },
    $footer: { control: 'text' },
    $iconSwap: { control: 'select', options: ['info', 'warningAmber'] },
    $avatar: { control: 'text' },
    $subtitle: { control: 'text' },
    $classname: { control: 'text' },
    $position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    $borderLeft: { control: 'boolean' },
  },
} as Meta;

// Creamos una plantilla para las historias
const TemplateImplementation: StoryFn = (args: ToastOptions) => {
  // Función para mostrar el toast personalizado
  const handleShowToast = (message: string) => {
    Toast.show(message, {
      ...args,
    });
  };

  // Función para mostrar el toast usando códigos de estado
  const handleShowToastStatusCode = (statusCode: number) => {
    Toast.showStatusCode(statusCode);
  };

  return (
    <div>
      <div>
        <h1 style={{ color: 'light-dark(#fff, #000)' }}>
          Code example to show the toast
        </h1>
        <pre style={{ color: 'light-dark(#fff, #000)' }}>{`         
import { Toast } from '@/components/Toast-unique/Toast';

// Show toast custom
Toast.show('Custom message', ${JSON.stringify(args, null, 2)});

// Show toast with status code
Toast.showStatusCode(200);
          `}</pre>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          gap: '10px',
        }}
      >
        <Button onClick={() => handleShowToast('This is a custom toast message')}>
          Show Custom Toast
        </Button>
        <Button onClick={() => handleShowToastStatusCode(200)}>
          Show Status Code Toast (200)
        </Button>
      </div>
    </div>
  );
};

const StatusCodeToastTemplate: StoryFn<{ statusCode: StatusCodeValid }> = (
  args
) => {
  // Función para mostrar el toast usando códigos de estado
  const handleShowToastStatusCode = (statusCode: number) => {
    Toast.showStatusCode(statusCode);
  };

  return (
    <div>
      <Button
        onClick={() => handleShowToastStatusCode(args.statusCode)}
        style={{ padding: '10px' }}
      >
        Example Toast {args.statusCode}
      </Button>
    </div>
  );
};

const StatusCustomToastTemplate: StoryFn = (args: ToastOptions) => {
  // Función para mostrar el toast personalizado
  const handleShowToast = () => {
    Toast.show('This is a custom toast example', {
      ...args,
    });
  };

  return (
    <div>
      <pre style={{ color: 'light-dark(#fff, #000)' }}>{`         
import { Toast } from '@/components/Toast-unique/Toast';

Toast.show('Custom message', ${JSON.stringify(args, null, 2)});

          `}</pre>
      <Button onClick={handleShowToast}>Show Custom Toast</Button>
    </div>
  );
};

// Historia para toasts personalizados
export const CustomToast = TemplateImplementation.bind({});
CustomToast.args = {
  $duration: 3000,
  $type: 'soft',
  $shape: 'rounded',
  $color: 'warning',
  $content: 'Toast content',
  $showCloseButton: true,
} as ToastOptions;

// Historia para mostrar toasts usando códigos de estado HTTP
export const StatusCodeToastSuccess = StatusCodeToastTemplate.bind({});
StatusCodeToastSuccess.args = { statusCode: 200 };

export const StatusCodeToast400 = StatusCodeToastTemplate.bind({});
StatusCodeToast400.args = { statusCode: 400 };

// Historia para mostrar toasts personalizados
export const CustomBasicToast = StatusCustomToastTemplate.bind({});
CustomBasicToast.args = {} as ToastOptions;

export const CustomBasicToastSoft = StatusCustomToastTemplate.bind({});
CustomBasicToastSoft.args = {
  $duration: 3000,
  $type: 'soft',
  $shape: 'rounded',
  $color: 'gray',
  $showCloseButton: true,
} as ToastOptions;

export const CustomBasicToastSolid = StatusCustomToastTemplate.bind({});
CustomBasicToastSolid.args = {
  $duration: 3000,
  $type: 'solid',
  $shape: 'rounded',
  $color: 'gray',
  $showCloseButton: true,
} as ToastOptions;

export const CustomToastWithAvatar = StatusCustomToastTemplate.bind({});
CustomToastWithAvatar.args = {
  $duration: 3000,
  $type: 'soft',
  $shape: 'rounded',
  $color: 'gray',
  $showCloseButton: true,
  $avatar: 'https://via.placeholder.com/150',
} as ToastOptions;

export const CustomToastWithSubtitle = StatusCustomToastTemplate.bind({});
CustomToastWithSubtitle.args = {
  $duration: 3000,
  $type: 'soft',
  $shape: 'rounded',
  $color: 'gray',
  $showCloseButton: true,
  $subtitle: 'Subtitle example',
} as ToastOptions;

export const CustomToastWithCustomFooter = StatusCustomToastTemplate.bind({});
CustomToastWithCustomFooter.args = {
  $duration: 3000,
  $type: 'soft',
  $shape: 'rounded',
  $color: 'gray',
  $showCloseButton: true,
  $footer: (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}
    >
      <Button>Accept</Button>
      <Button>Cancel</Button>
    </div>
  ),
} as ToastOptions;

export const CustomToastWithIconSwap = StatusCustomToastTemplate.bind({});
CustomToastWithIconSwap.args = {
  $duration: 3000,
  $type: 'soft',
  $shape: 'rounded',
  $color: 'gray',
  $showCloseButton: true,
  $iconSwap: 'warningAmber',
} as ToastOptions;

export const CustomToastWithBorderLeft = StatusCustomToastTemplate.bind({});
CustomToastWithBorderLeft.args = {
  $duration: 3000,
  $type: 'soft',
  $shape: 'rounded',
  $color: 'green',
  $showCloseButton: true,
  $borderLeft: true,
} as ToastOptions;

export const CustomToastWithAllOptions = StatusCustomToastTemplate.bind({});
CustomToastWithAllOptions.args = {
  $duration: 3000,
  $type: 'soft',
  $shape: 'rounded',
  $color: 'gray',
  $content: 'Toast content',
  $showCloseButton: true,
  $footer: (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}
    >
      <Button>Accept</Button>
      <Button>Cancel</Button>
    </div>
  ),
  $iconSwap: 'warningAmber',
  $avatar: 'https://via.placeholder.com/150',
  $subtitle: 'Subtitle example',
  $classname: 'custom-toast',
} as ToastOptions;
