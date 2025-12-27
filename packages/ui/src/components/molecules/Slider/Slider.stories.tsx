import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import * as React from "react";

const meta: Meta<typeof Slider> = {
  title: "Molecules/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} className="w-64" />,
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = React.useState([50]);
    return (
      <div className="w-64 space-y-2">
        <Slider value={value} onValueChange={setValue} />
        <div className="text-sm text-muted-foreground">Value: {value[0]}</div>
      </div>
    );
  },
};

export const Range: Story = {
  render: () => (
    <Slider defaultValue={[20, 80]} max={100} className="w-64" />
  ),
};

export const CustomRange: Story = {
  render: () => (
    <Slider defaultValue={[25]} min={0} max={50} step={5} className="w-64" />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Slider defaultValue={[50]} disabled className="w-64" />
  ),
};

