import {
  AccordionContent,
  AccordionItem,
  Accordion as AccordionRoot,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as React from "react";

export interface AccordionItem {
  value: string;
  trigger: string;
  content: React.ReactNode;
}

export type AccordionProps =
  | (Omit<React.ComponentProps<typeof AccordionRoot>, "type"> & {
      items: AccordionItem[];
      type: "single";
      collapsible?: boolean;
      value?: string;
      defaultValue?: string;
      onValueChange?: (value: string) => void;
    })
  | (Omit<React.ComponentProps<typeof AccordionRoot>, "type"> & {
      items: AccordionItem[];
      type: "multiple";
      collapsible?: boolean;
      value?: string[];
      defaultValue?: string[];
      onValueChange?: (value: string[]) => void;
    });

export function Accordion(props: AccordionProps) {
  const { items, ...rootProps } = props;

  return (
    <AccordionRoot {...rootProps}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
