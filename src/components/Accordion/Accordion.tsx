import React, { useState } from 'react'
import { useMountEffect } from './hooks';
import { UniqueComponentId } from '@/utils';
import Icon, { IconName } from '../Icon/Icons';
import { Title5 } from '../Text/Text';
import type { AccordionProps, AccordionTabProps } from './IAccordion';

export const AccordionTab = (props: AccordionTabProps ) => { return <>{props.children}</> }

const PREFIX = "por_accordion_id_"

export const Accordion = (props: AccordionProps) => {

  const [idState, setIdState] = useState(props.id);
  const [activeIndex, setActiveIndex] = useState(props.activeIndex ?? -1);

  useMountEffect(() => {
    if (!idState) {
      setIdState(UniqueComponentId(PREFIX));
    }
  });

  const updateActiveIndex = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index)
    } else {
      setActiveIndex(-1)
    }
  }

  const createTabHeader = (tab: JSX.Element, index: number) => {
    const key = idState + '_header_' + index;
    const id = idState + '_header_' + index;

    const headerProps = {
      key,
      id
    }

    return <div tabIndex={0} onClick={() => updateActiveIndex(index)} className='accordion-header highlight'>
      <div className='accordion-header-recipient'>
        <a onClick={(e) => e.preventDefault()} {...headerProps} className='accordion-header-link' aria-expanded={activeIndex === index}>
          <Title5 bold>
            {tab.props.header}
          </Title5></a>
        <Icon className="icon-color-orange" $name={props.headerIcon ?? "downArrow"} $w='0.875rem' />
      </div>

    </div>
  }

  const createTabContent = (tab: JSX.Element, index: number) => {

    const key = idState + '_content_' + index;
    const id = idState + '_content_' + index;

    const contentProps = {
      key,
      id
    }
    return <div className={`accordion-content content-${props.contentColor ?? 'orange'}`} {...contentProps}>{tab.props.children}</div>
  }

  const createTab = (tab: JSX.Element, index: number) => {
    const key = index
    const tabIndex = tab.props.disabled ? -1 : 0
    const className = activeIndex === index ? "accordion-tab accordion-tab-active" : " accordion-tab "

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "Enter") return;
      updateActiveIndex(index)
    }

    const tabAdditionalsProps = { key, tabIndex, className, onKeyDown }

    const header = createTabHeader(tab, index);
    const content = createTabContent(tab, index)

    return <div {...tabAdditionalsProps} {...tab.props}>
      {header}
      {content}
    </div>
  }

  const createTabs = () => {
    return React.Children.map(props.children, createTab)
  }

  const tabs = createTabs();
  const rootProps = {
    id: idState,
    key: idState
  }

  return (
    <div className='accordion component' {...rootProps}>
      {tabs}
    </div>
  )
}
