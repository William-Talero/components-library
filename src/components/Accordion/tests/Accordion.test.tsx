import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionTab } from '../Accordion';
import { mergeClassNames } from '../utils/MergeClassNames';

describe('Accordion Component', () => {

  it('Should render AccordionTab', () => {
    act(() => {
      render(
        <AccordionTab header="Header I" disabled>
          <p>Example</p>
        </AccordionTab>
      );
    });

    expect(screen.getByText('Example')).toBeInTheDocument();
  });

  it('Should merge props', () => {
    const classNames = mergeClassNames(
      'class-1                class-2',
      'class-3                  class-4'
    );

    expect(classNames).toBe('class-1 class-2 class-3 class-4');
  });

  test('Add activeIndex when is different to index', () => {
    const { getByText } = render(
      <Accordion activeIndex={0}>
        <AccordionTab header="Tab 1">Content 1</AccordionTab>
        <AccordionTab header="Tab 2">Content 2</AccordionTab>
      </Accordion>
    );
  
    // Simula un clic en el segundo tab para cambiar el activeIndex
    fireEvent.click(getByText('Tab 2'));
  
    // Verifica que el segundo tab ahora esté activo
    const activeTab = getByText('Tab 2').closest('.tvr-comp-accordion-tab');
    expect(activeTab).toHaveClass('tvr-comp-accordion-tab-active');
  });

  test('Reset activeIndex to -1 when is requals to index', () => {
    const { getByText } = render(
      <Accordion activeIndex={1}>
        <AccordionTab header="Tab 1">Content 1</AccordionTab>
        <AccordionTab header="Tab 2">Content 2</AccordionTab>
      </Accordion>
    );
  
    // Simula un clic en el segundo tab (que ya está activo) para colapsarlo
    fireEvent.click(getByText('Tab 2'));
  
    // Verifica que el segundo tab ya no esté activo
    const inactiveTab = getByText('Tab 2').closest('.tvr-comp-accordion-tab');
    expect(inactiveTab).not.toHaveClass('tvr-comp-accordion-tab-active');
  });

  test('Actualiza activeIndex cuando se presiona Enter', () => {
    const { getByText } = render(
      <Accordion activeIndex={0}>
        <AccordionTab header="Tab 1">Content 1</AccordionTab>
        <AccordionTab header="Tab 2">Content 2</AccordionTab>
      </Accordion>
    );
  
    // Simula presionar Enter en el segundo tab
    fireEvent.keyDown(getByText('Tab 2'), { key: 'Enter', code: 'Enter' });
  
    // Verifica que el segundo tab ahora esté activo
    const activeTab = getByText('Tab 2').closest('.tvr-comp-accordion-tab');
    expect(activeTab).toHaveClass('tvr-comp-accordion-tab-active');
  });

  test('Must not update activeIndex when key is press different to Enter', () => {
    const { getByText } = render(
      <Accordion activeIndex={0}>
        <AccordionTab header="Tab 1">Content 1</AccordionTab>
        <AccordionTab header="Tab 2">Content 2</AccordionTab>
      </Accordion>
    );
  
    // Simula presionar una tecla diferente a Enter (e.g., "Space")
    fireEvent.keyDown(getByText('Tab 2'), { key: 'Space', code: 'Space' });
  
    // Verifica que el índice activo no ha cambiado (Tab 1 sigue activo)
    const inactiveTab = getByText('Tab 2').closest('.tvr-comp-accordion-tab');
    expect(inactiveTab).not.toHaveClass('tvr-comp-accordion-tab-active');
  });

});
