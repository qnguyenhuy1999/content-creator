import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { Label } from "../Label/Label";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} id="switch-1" />
        <Label htmlFor="switch-1">Enable notifications</Label>
      </div>
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} id="switch-2" />
        <Label htmlFor="switch-2">Notifications enabled</Label>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch disabled id="switch-3" />
      <Label htmlFor="switch-3">Disabled switch</Label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch disabled checked id="switch-4" />
      <Label htmlFor="switch-4">Disabled and checked</Label>
    </div>
  ),
};

