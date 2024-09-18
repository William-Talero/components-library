import { ReactElement } from "react";
import { Accordion } from "../Accordion";

export interface SectionAccordionProps{
    title: string;
    children: ReactElement<typeof Accordion> | ReactElement<typeof Accordion>[];
    content?: string;
    colorTitle?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

