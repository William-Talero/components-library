import { Meta, StoryFn } from '@storybook/react/*';
import { SkeletonProps } from '../ISkeleton';
import { Skeleton } from '../Skeleton';
import React from 'react';
import { SkeletonDemo } from '@/Data/Skeleton/SkeletonDemo';

const meta: Meta<SkeletonProps> = {
  title: 'Components/Atoms/Skeleton/Skeleton',
  component: Skeleton,
  argTypes: {
    shape: { control: { type: 'select', options: ['rectangle', 'circle'] } },
    borderRadius: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    className: { control: { type: 'text' } },
  },
};

export default meta;

const TemplateSkeletonImplementation: StoryFn = (args: SkeletonProps) => {
  return (
    <div style={{ padding: '12px', margin: '15px' }}>
      <Skeleton {...args} />
    </div>
  );
};

const TemplateFullSkeletonImplementation: StoryFn = () => {
  return <SkeletonDemo />;
};

export const SkeletonRectangle = TemplateSkeletonImplementation.bind({});
SkeletonRectangle.args = {
  shape: 'rectangle',
  height: '100px',
  width: '100px',
} as SkeletonProps;

export const SkeletonCircle = TemplateSkeletonImplementation.bind({});
SkeletonCircle.args = {
  shape: 'circle',
  height: '100px',
  width: '100px',
} as SkeletonProps;

export const SkeletonCustom = TemplateSkeletonImplementation.bind({});
SkeletonCustom.args = {
  shape: 'rectangle',
  height: '100px',
  width: '300px',
  borderRadius: '50px',
} as SkeletonProps;

export const FullImplementationSkeleton = TemplateFullSkeletonImplementation.bind(
  {}
);
