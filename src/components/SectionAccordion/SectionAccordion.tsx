import React from 'react';
import { SectionAccordionProps } from './ISectionAccordion';
import { Text1, Title2 } from '../Text';

export const SectionAccordion = (props: SectionAccordionProps) => {
  const titleClassName = props.titleClassName ? props.titleClassName : null;
  const descriptionClassName = props.descriptionClassName
    ? props.descriptionClassName
    : null;

  return (
    <div className="section-accordion">
      <div className="section-accordion-header">
        <div className="section-accordion-header-title">
          <Title2
            bold
            justify="center"
            color={props.colorTitle}
            {...(titleClassName ? { className: titleClassName } : {})}
          >
            {props.title}
          </Title2>
        </div>
        {props.content && (
          <div className="section-accordion-header-description">
            <Text1
              {...(descriptionClassName
                ? { className: descriptionClassName }
                : {})}
            >
              {props.content}
            </Text1>
          </div>
        )}
      </div>
      <div className="section-accordion-main">{props.children}</div>
    </div>
  );
};
