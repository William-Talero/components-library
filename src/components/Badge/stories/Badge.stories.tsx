import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Badge } from '../Badge';
import { BadgeProps } from '../IBadge';

const meta: Meta<BadgeProps> = {
  title: 'Components/Atoms/Badge/Badge',
  component: Badge,
  argTypes: {
    $type: {
      control: 'select',
      options: ['white', 'outlined', 'solid'],
    },
    $size: { control: 'select', options: ['large', 'default', 'small'] },
    $color: {
      control: 'select',
      options: ['white', 'dark', 'green', 'orange', 'error', 'success'],
    },
    $shape: { control: 'select', options: ['rounded', 'pilled'] },
    $avatar: { control: 'text' },
    $icon: {
      control: 'select',
      options: [
        'plus',
        'leftArrow',
        'rightArrow',
        'arrowDropDown',
        'downArrow',
        'groupAdd',
        'ellipsis',
        'home',
        'lan',
        'supervisor',
        'moneyIcon',
        'user',
        'search',
        'logout',
        'info',
        'slashBold',
        'calendarToday',
        'done',
        'warningAmber',
        'closeIcon',
        'upArrow',
        'logoColor',
        'filterList',
        'circularProgressSpinner',
        'lineSpinner',
      ],
    },
    $showDot: { control: 'boolean' },
    $placeholder: { control: 'text' },
    $showArrowButton: { control: 'boolean' },
    $onClickArrow: { action: 'arrowClicked' },
    $showCloseButton: { control: 'boolean' },
    $onClose: { action: 'badgeClosed' },
  },
};

export default meta;

const TemplateBadge: StoryFn<BadgeProps> = (args) => {
  return (
    <div style={{ padding: '12px', margin: '15px' }}>
      <Badge {...args} />
    </div>
  );
};

// Story Variants

export const DefaultBadge = TemplateBadge.bind({});
DefaultBadge.args = {
  $type: 'white',
  $size: 'default',
  $color: 'white',
  $shape: 'rounded',
  $placeholder: 'Default Badge',
};

export const BadgeWithIcon = TemplateBadge.bind({});
BadgeWithIcon.args = {
  $type: 'outlined',
  $size: 'default',
  $color: 'green',
  $shape: 'rounded',
  $placeholder: 'Badge with Icon',
  $icon: 'home',
};

export const BadgeWithAvatar = TemplateBadge.bind({});
BadgeWithAvatar.args = {
  $type: 'solid',
  $size: 'default',
  $color: 'green',
  $shape: 'rounded',
  $placeholder: 'Badge with Avatar',
  $avatar:
    'https://th.bing.com/th/id/R.4a08325e6294c2d5de937e4d9973f3c6' +
    '?rik=E6aPsseExezN%2bw&pid=ImgRaw&r=0',
};

export const BadgeWithDot = TemplateBadge.bind({});
BadgeWithDot.args = {
  $type: 'outlined',
  $size: 'default',
  $color: 'error',
  $shape: 'rounded',
  $placeholder: 'Badge with Dot',
  $showDot: true,
};

export const BadgeWithArrow = TemplateBadge.bind({});
BadgeWithArrow.args = {
  $type: 'solid',
  $size: 'large',
  $color: 'orange',
  $shape: 'pilled',
  $placeholder: 'Badge with Arrow',
  $showArrowButton: true,
};

export const BadgeWithCloseButton = TemplateBadge.bind({});
BadgeWithCloseButton.args = {
  $type: 'outlined',
  $size: 'small',
  $color: 'error',
  $shape: 'pilled',
  $placeholder: 'Badge with Close Button',
  $showCloseButton: true,
};

export const BadgeWithAllOptions = TemplateBadge.bind({});
BadgeWithAllOptions.args = {
  $type: 'solid',
  $size: 'large',
  $color: 'success',
  $shape: 'rounded',
  $placeholder: 'Badge with All Options',
  $avatar:
    'https://th.bing.com/th/id/R.4a08325e6294c2d5de937e4d9973f3c6' +
    '?rik=E6aPsseExezN%2bw&pid=ImgRaw&r=0',
  $icon: 'home',
  $showDot: true,
  $showArrowButton: true,
  $showCloseButton: true,
};
