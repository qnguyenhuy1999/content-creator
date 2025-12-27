"use client";

import * as React from "react";
import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface AccordionItem {
  value: string;
  trigger: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  className?: string;
}

export function Accordion({
  items,
  type = "single",
  defaultValue,
  value,
  onValueChange,
  collapsible,
  className,
}: AccordionProps) {
  return (
    <AccordionRoot
      type={type}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      collapsible={collapsible}
      className={className}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}

