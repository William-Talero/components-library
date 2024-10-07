import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SectionAccordionProps } from '../ISectionAccordion';
import { SectionAccordion } from '../SectionAccordion';
import { Accordion, AccordionTab } from '@/components/Accordion';

const meta: Meta<SectionAccordionProps> = {
  title: 'Components/Molecules/SectionAccordion/SectionAccordion',
  component: SectionAccordion,
  argTypes: {
    children: { control: { disable: true } },
  },
  decorators: [(story) => <div>{story()}</div>],
};

export default meta;

type Story = StoryObj<SectionAccordionProps>;

export const Default: Story = {
  args: {
    title: 'Title',
    content:
      'Culpa ut tempor tempor amet ea id est consectetur. Ipsum adipisi' +
      'cing ullamco duis quis sunt consequat duis ullamco elit quis. Ip' +
      'sum adipisicing cillum qui sunt incididunt amet. Culpa ad sit oc' +
      'caecat voluptate nostrud aliqua. Non in quis adipisicing aliqua ' +
      'labore esse. Consequat ex non officia incididunt aute et sunt of' +
      'ficia.',
    children: (
      <Accordion
        contentColor="green"
        children={[
          <AccordionTab
            header="Placeholder"
            children={
              <p>
                Nulla elit magna incididunt cupidatat exercitation consectetur
                labore aliquip aliqua in et anim ullamco eiusmod.
              </p>
            }
          />,
          <AccordionTab
            header="Placeholder"
            children={
              <p>
                Nulla elit magna incididunt cupidatat exercitation consectetur
                labore aliquip aliqua in et anim ullamco eiusmod.
              </p>
            }
          />,
        ]}
      />
    ),
  },
};
