import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";

const meta: Meta<typeof Popover> = {
  title: "Molecules/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover
      trigger={<Button variant="outline">Open Popover</Button>}
      content={
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      }
    />
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover
      trigger={<Button variant="outline">Open Popover</Button>}
      content={
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      }
    />
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover
        trigger={<Button variant="outline">Top</Button>}
        content={<div className="p-2">Popover on top</div>}
        side="top"
      />
      <Popover
        trigger={<Button variant="outline">Right</Button>}
        content={<div className="p-2">Popover on right</div>}
        side="right"
      />
      <Popover
        trigger={<Button variant="outline">Left</Button>}
        content={<div className="p-2">Popover on left</div>}
        side="left"
      />
    </div>
  ),
};
