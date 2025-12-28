import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./DropdownMenu";
import { Button } from "../../atoms/Button/Button";

const meta: Meta<typeof DropdownMenu> = {
  title: "Molecules/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Open Menu</Button>}
      items={[
        { label: "Profile", onClick: () => alert("Profile clicked") },
        { label: "Settings", onClick: () => alert("Settings clicked") },
        {
          label: "Logout",
          onClick: () => alert("Logout clicked"),
          variant: "destructive",
        },
      ]}
    />
  ),
};

export const WithGroups: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Options</Button>}
      items={[
        {
          label: "Account",
          items: [
            { label: "Profile", onClick: () => alert("Profile") },
            { label: "Settings", onClick: () => alert("Settings") },
          ],
        },
        {
          label: "Actions",
          items: [
            { label: "Download", onClick: () => alert("Download") },
            {
              label: "Delete",
              onClick: () => alert("Delete"),
              variant: "destructive",
            },
          ],
        },
      ]}
    />
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <DropdownMenu
      trigger={<Button variant="outline">Menu</Button>}
      items={[
        { label: "Enabled Item", onClick: () => alert("Enabled") },
        {
          label: "Disabled Item",
          onClick: () => alert("Disabled"),
          disabled: true,
        },
        { label: "Another Enabled", onClick: () => alert("Another") },
      ]}
    />
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div className="flex gap-4">
      <DropdownMenu
        trigger={<Button variant="outline">Top</Button>}
        items={[
          { label: "Item 1", onClick: () => {} },
          { label: "Item 2", onClick: () => {} },
        ]}
        side="top"
      />
      <DropdownMenu
        trigger={<Button variant="outline">Right</Button>}
        items={[
          { label: "Item 1", onClick: () => {} },
          { label: "Item 2", onClick: () => {} },
        ]}
        side="right"
      />
      <DropdownMenu
        trigger={<Button variant="outline">Left</Button>}
        items={[
          { label: "Item 1", onClick: () => {} },
          { label: "Item 2", onClick: () => {} },
        ]}
        side="left"
      />
    </div>
  ),
};
