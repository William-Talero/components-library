import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionTab } from "../Accordion";
import { AccordionProps } from "../IAccordion";

const meta: Meta<AccordionProps> = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    children: { control: { disable: true } },
  },
  decorators: [
    (story) => <AccordionTab header="Placeholder">{story()}</AccordionTab>,
  ],
};

export default meta;

type Story = StoryObj<AccordionProps>;

export const Default = (args: Story) => (
  <Accordion
    {...args}
    children={[
      <AccordionTab
        header="Header I"
        children={
          <p>
            Nulla elit magna incididunt cupidatat exercitation consectetur
            labore aliquip aliqua in et anim ullamco eiusmod.
          </p>
        }
      />,
      <AccordionTab
        header="Header II"
        children={
          <p>
            Nulla elit magna incididunt cupidatat exercitation consectetur
            labore aliquip aliqua in et anim ullamco eiusmod.
          </p>
        }
      />,
    ]}
  />
);
