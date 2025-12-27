import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Atoms/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => <Toggle>Toggle</Toggle>,
};

export const WithIcon: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <span className="font-bold">B</span>
    </Toggle>
  ),
};

export const Outline: Story = {
  render: () => <Toggle variant="outline">Outline</Toggle>,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="default">Default</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
};

export const Pressed: Story = {
  render: () => {
    const [pressed, setPressed] = React.useState(false);
    return (
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        {pressed ? "Pressed" : "Not Pressed"}
      </Toggle>
    );
  },
};

