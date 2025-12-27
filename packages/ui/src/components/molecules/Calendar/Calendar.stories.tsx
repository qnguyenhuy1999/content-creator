import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Molecules/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar selected={date} onSelect={setDate} />;
  },
};

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[]>([]);
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={(selected) => setDates(selected as Date[])}
      />
    );
  },
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<
      { from?: Date; to?: Date } | undefined
    >();
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={(selected) => setRange(selected as { from?: Date; to?: Date })}
      />
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        selected={date}
        onSelect={setDate}
        disabled={(date) => date < new Date()}
      />
    );
  },
};

export const MultipleMonths: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
      />
    );
  },
};

