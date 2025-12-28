import { Calendar as CalendarRoot } from "@/components/ui/calendar";

import type { DateRange } from "react-day-picker";

export type CalendarProps =
  | {
      mode?: "single";
      selected?: Date;
      onSelect?: (value: Date | undefined) => void;
      defaultMonth?: Date;
      numberOfMonths?: number;
      disabled?: boolean | ((date: Date) => boolean);
      className?: string;
    }
  | {
      mode: "range";
      selected?: DateRange;
      onSelect?: (value: DateRange | undefined) => void;
      defaultMonth?: Date;
      numberOfMonths?: number;
      disabled?: boolean | ((date: Date) => boolean);
      className?: string;
    }
  | {
      mode: "multiple";
      selected?: Date[];
      onSelect?: (value: Date[] | undefined) => void;
      defaultMonth?: Date;
      numberOfMonths?: number;
      disabled?: boolean | ((date: Date) => boolean);
      className?: string;
    };

export function Calendar(props: CalendarProps) {
  const { mode = "single" } = props;

  if (mode === "range") {
    const {
      selected,
      onSelect,
      defaultMonth,
      numberOfMonths = 1,
      disabled,
      className,
    } = props as Extract<CalendarProps, { mode: "range" }>;
    return (
      <CalendarRoot
        mode="range"
        selected={selected}
        onSelect={onSelect}
        defaultMonth={defaultMonth}
        numberOfMonths={numberOfMonths}
        disabled={disabled}
        className={className}
        required={false}
      />
    );
  }

  if (mode === "multiple") {
    const {
      selected,
      onSelect,
      defaultMonth,
      numberOfMonths = 1,
      disabled,
      className,
    } = props as Extract<CalendarProps, { mode: "multiple" }>;
    return (
      <CalendarRoot
        mode="multiple"
        selected={selected}
        onSelect={onSelect}
        defaultMonth={defaultMonth}
        numberOfMonths={numberOfMonths}
        disabled={disabled}
        className={className}
      />
    );
  }

  const {
    selected,
    onSelect,
    defaultMonth,
    numberOfMonths = 1,
    disabled,
    className,
  } = props as Extract<CalendarProps, { mode?: "single" }>;
  return (
    <CalendarRoot
      mode="single"
      selected={selected}
      onSelect={onSelect}
      defaultMonth={defaultMonth}
      numberOfMonths={numberOfMonths}
      disabled={disabled}
      className={className}
    />
  );
}
