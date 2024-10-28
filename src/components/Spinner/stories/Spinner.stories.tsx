import { Meta, StoryFn } from '@storybook/react/*';
import { Spinner } from '../Spinner';
import { SpinnerProps } from '../ISpinner';
import React from 'react';

const meta: Meta<SpinnerProps> = {
  title: 'Components/Atoms/Spinner/Spinner',
  component: Spinner,
  argTypes: {
    $showCloseButton: { control: 'boolean' },
    $message: { control: 'text' },
    $size: { control: 'select', options: ['xs', 'small', 'default', 'large'] },
    $type: {
      control: 'select',
      options: [
        'lineSpinner',
        'lineSpinnerNoLabel',
        'circularProgress',
        'circularProgressNoLabel',
      ],
    },
    $variant: { control: 'select', options: ['fullScreen', 'container'] },
    $className: { control: 'text' },
    $wModal: { control: 'text' },
    $hModal: { control: 'text' },
    $wContainer: { control: 'text' },
    $hContainer: { control: 'text' },
    onClose: { action: 'closed' },
    $onlySpinner: { control: 'boolean' },
  },
};

export default meta;

const TemplateSpinnerImplementation: StoryFn = (args: SpinnerProps) => {
  return (
    <div style={{ padding: '12px', margin: '15px' }}>
      <Spinner {...args} />
    </div>
  );
};

export const SpinnerContainer = TemplateSpinnerImplementation.bind({});
SpinnerContainer.args = {
  $hContainer: '250px',
  $message: 'Loading ...',
} as SpinnerProps;

export const SpinnerFullScreen = TemplateSpinnerImplementation.bind({});
SpinnerFullScreen.args = {
  $variant: 'fullScreen',
  $message: 'Loading ...',
} as SpinnerProps;

export const SpinnerNoLabel = TemplateSpinnerImplementation.bind({});
SpinnerNoLabel.args = {
  $hContainer: '250px',
  $type: 'lineSpinnerNoLabel',
  $message: '',
} as SpinnerProps;

export const SpinnerCircular = TemplateSpinnerImplementation.bind({});
SpinnerCircular.args = {
  $hContainer: '250px',
  $type: 'circularProgress',
  $message: 'Loading ...',
} as SpinnerProps;

export const SpinnerCircularNoLabel = TemplateSpinnerImplementation.bind({});
SpinnerCircularNoLabel.args = {
  $hContainer: '250px',
  $type: 'circularProgressNoLabel',
  $message: '',
} as SpinnerProps;

export const SpinnerOnly = TemplateSpinnerImplementation.bind({});
SpinnerOnly.args = {
  $hContainer: '250px',
  $onlySpinner: true,
} as SpinnerProps;

export const SpinnerCloseButton = TemplateSpinnerImplementation.bind({});
SpinnerCloseButton.args = {
  $hContainer: '250px',
  $showCloseButton: true,
  $message: 'Loading ...',
} as SpinnerProps;

export const SpinnerCustomSize = TemplateSpinnerImplementation.bind({});
SpinnerCustomSize.args = {
  $hContainer: '250px',
  $size: 'large',
  $message: 'Loading ...',
} as SpinnerProps;

export const SpinnerCustomWidth = TemplateSpinnerImplementation.bind({});
SpinnerCustomWidth.args = {
  $hContainer: '250px',
  $wContainer: '550px',
  $message: 'Loading ...',
} as SpinnerProps;

export const SpinnerCustomHeight = TemplateSpinnerImplementation.bind({});
SpinnerCustomHeight.args = {
  $hContainer: '650px',
  $message: 'Loading ...',
} as SpinnerProps;

export const SpinnerCustomWidthHeight = TemplateSpinnerImplementation.bind({});
SpinnerCustomWidthHeight.args = {
  $wContainer: '550px',
  $hContainer: '650px',
  $message: 'Loading ...',
} as SpinnerProps;