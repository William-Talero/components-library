import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionTab } from '../Accordion';
import { AccordionProps } from '../IAccordion';
import { Text2 } from '@/components/Text';

const meta: Meta<AccordionProps> = {
  title: 'Components/Atoms/Accordion/Accordion',
  component: Accordion,
  argTypes: {
    children: { control: { disable: true } },
  },
  decorators: [(story) => story()],
};

export default meta;

type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  args: {
    contentColor: 'green',
    activeIndex: -1,
    headerIcon: 'downArrow',
    id: 'myCustomId',
    children: [
      <AccordionTab header="Placeholder" key={1}>
        <Text2>
          Aliquip sint laboris aliqua qui est nulla quis enim enim. Velit
          ullamco est aliquip ad enim consequat qui aliqua amet amet consequat
          consequat. Adipisicing velit amet consequat fugiat velit nulla duis
          reprehenderit velit est do ad. Ut magna dolor tempor eiusmod nulla
          aliqua excepteur ipsum id mollit laboris. Sit deserunt eiusmod veniam
          anim voluptate quis excepteur. Dolore minim consequat do voluptate
          aliqua sint. Dolor ad commodo nostrud dolor nulla reprehenderit nisi
          incididunt.
        </Text2>
      </AccordionTab>,
      <AccordionTab header="Placeholder" key={2}>
        <Text2>
          Aliquip sint laboris aliqua qui est nulla quis enim enim. Velit
          ullamco est aliquip ad enim consequat qui aliqua amet amet consequat
          consequat. Adipisicing velit amet consequat fugiat velit nulla duis
          reprehenderit velit est do ad. Ut magna dolor tempor eiusmod nulla
          aliqua excepteur ipsum id mollit laboris. Sit deserunt eiusmod veniam
          anim voluptate quis excepteur. Dolore minim consequat do voluptate
          aliqua sint. Dolor ad commodo nostrud dolor nulla reprehenderit nisi
          incididunt.
        </Text2>
      </AccordionTab>,
    ],
  },
};
