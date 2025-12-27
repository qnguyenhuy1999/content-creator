import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../../atoms/Button/Button";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
  title: "Molecules/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dialog
        trigger={<Button>Open Dialog</Button>}
        title="Dialog Title"
        description="This is a dialog description."
        open={open}
        onOpenChange={setOpen}
        actions={[
          {
            label: "Cancel",
            onClick: () => setOpen(false),
            variant: "outline",
          },
          {
            label: "Confirm",
            onClick: () => setOpen(false),
          },
        ]}
      >
        <p>Dialog content goes here.</p>
      </Dialog>
    );
  },
};

export const WithContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dialog
        trigger={<Button>Open Dialog</Button>}
        title="Confirm Action"
        description="Are you sure you want to proceed?"
        open={open}
        onOpenChange={setOpen}
        actions={[
          {
            label: "Cancel",
            onClick: () => setOpen(false),
            variant: "outline",
          },
          {
            label: "Delete",
            onClick: () => setOpen(false),
            variant: "destructive",
          },
        ]}
      >
        <div className="py-4">
          <p>This action cannot be undone.</p>
        </div>
      </Dialog>
    );
  },
};

