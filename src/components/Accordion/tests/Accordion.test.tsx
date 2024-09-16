import React, { act } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Accordion, AccordionTab } from "../Accordion";


describe("Accordion Component", () => {
  it("should show or hide content Accordion", async () => {
    act(() => {
      render(<Accordion>
        <AccordionTab header="Header I">
          <p>Accordion Test</p>
        </AccordionTab>
      </Accordion>)
    })

    const tabs = document.getElementsByClassName("accordion-tab")

    await waitFor(() => {
      expect(screen.getByText("Header I")).toBeInTheDocument()
      expect(tabs[0]).not.toHaveClass("accordion-tab-active")
    })

    fireEvent.keyDown(screen.getByText("Header I"), { key: 'Enter', code: 'Enter', charCode: 13 })

    await waitFor(() => {
      expect(tabs[0]).toHaveClass("accordion-tab-active")
    })


    fireEvent.keyDown(screen.getByText("Header I"), { key: 'Enter', code: 'Enter', charCode: 13 })

    await waitFor(() => {
      expect(tabs[0]).not.toHaveClass("accordion-tab-active")
    })

    fireEvent.click(screen.getByText("Header I"))

    await waitFor(() => {
      expect(tabs[0]).toHaveClass("accordion-tab-active")
    })

  });

  it("should render component with props", async () => {
    act(() => {
      render(<Accordion activeIndex={1} contentColor="green" headerIcon="leftArrow" w="250px">
        <AccordionTab header="Header I" disabled={true}>
          <p>Accordion Test</p>
        </AccordionTab>
      </Accordion>)
    })

    const tabs = document.getElementsByClassName("accordion-tab")

    await waitFor(() => {
      expect(screen.getByText("Header I")).toBeInTheDocument()
      expect(tabs[0]).not.toHaveClass("accordion-tab-active")
    })

    fireEvent.keyDown(screen.getByText("Header I"), { key: 'L', code: 'KeyL', charCode: 76, keyCode: 76 })

    await waitFor(() => {
      expect(tabs[0]).not.toHaveClass("accordion-tab-active")
    })


  });

  it("Should render AccordionTab", () => {
    act(() => {
      render(<AccordionTab header="Header I" disabled>
        <p>Example</p>
      </AccordionTab>)
    })

    expect(screen.getByText("Example")).toBeInTheDocument()
  })

});
