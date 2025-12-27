"use client";

import { Calendar as CalendarRoot } from "@/components/ui/calendar";
import * as React from "react";

export interface CalendarProps {
  mode?: "single" | "multiple" | "range";
  selected?: Date | Date[] | { from?: Date; to?: Date };
  onSelect?: (date: Date | Date[] | { from?: Date; to?: Date } | undefined) => void;
  defaultMonth?: Date;
  numberOfMonths?: number;
  disabled?: boolean | ((date: Date) => boolean);
  className?: string;
}

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  defaultMonth,
  numberOfMonths = 1,
  disabled,
  className,
}: CalendarProps) {
  return (
    <CalendarRoot
      mode={mode}
      selected={selected}
      onSelect={onSelect}
      defaultMonth={defaultMonth}
      numberOfMonths={numberOfMonths}
      disabled={disabled}
      className={className}
    />
  );
}

