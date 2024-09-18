import React, { act } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SectionAccordion } from "../SectionAccordion";
import { Accordion, AccordionTab } from "@/components/Accordion";
import { Text3 } from "@/components/Text";
import { Button } from "@/components/Button";



describe("Accordion Component", () => {
  it("Should render Section Accordion", async () => {
    act(() => {
      render(<SectionAccordion title="Test Title" content="Test Content">
        <Accordion>
          <AccordionTab header="Placeholder">
            <Text3>
              Section Accordion Test
            </Text3>
          </AccordionTab>
        </Accordion>
      </SectionAccordion>)
    })

    expect(screen.getByText("Test Title")).toBeInTheDocument()
    expect(screen.getByText("Test Content")).toBeInTheDocument()

  });

  it("Should render Section Accordion without Accordion child", async () => {
    act(() => {
      render(<SectionAccordion title="Test Title" content="Test Content">
        <Button>
          Button Test
        </Button>
      </SectionAccordion>)
    })

    expect(screen.getByText("Test Title")).toBeInTheDocument()
    expect(screen.getByText("Test Content")).toBeInTheDocument()

  });

  it("Should render Section Accordion", async () => {
    act(() => {
      render(<SectionAccordion title="Test Title" content="Test Content" titleClassName="title-test-class" descriptionClassName="description-test-class">
        <Accordion>
          <AccordionTab header="Placeholder">
            <Text3>
              Section Accordion Test
            </Text3>
          </AccordionTab>
        </Accordion>
      </SectionAccordion>)
    })

    const elementWithTitleClass = document.getElementsByClassName("title-test-class")[0]
    const elementWithDescriptionClass = document.getElementsByClassName("description-test-class")[0]

    expect(elementWithTitleClass).toBeInTheDocument()
    expect(elementWithDescriptionClass).toBeInTheDocument()

  });

});
