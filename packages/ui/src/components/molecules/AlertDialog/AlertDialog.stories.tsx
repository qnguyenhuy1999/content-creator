import type { Meta, StoryObj } from "@storybook/react";
import { AlertDialog } from "./AlertDialog";
import { Button } from "../../atoms/Button/Button";
import { useState } from "react";

const meta: Meta<typeof AlertDialog> = {
  title: "Molecules/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <AlertDialog
        trigger={<Button variant="destructive">Delete Account</Button>}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        open={open}
        onOpenChange={setOpen}
        onAction={() => {
          alert("Account deleted!");
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
        actionLabel="Delete Account"
        variant="destructive"
      />
    );
  },
};

export const WithContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <AlertDialog
        trigger={<Button>Show Alert</Button>}
        title="Confirm Action"
        description="Please confirm that you want to proceed with this action."
        open={open}
        onOpenChange={setOpen}
        onAction={() => {
          alert("Action confirmed!");
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      >
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Additional information can be displayed here.
          </p>
        </div>
      </AlertDialog>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <AlertDialog
        trigger={<Button variant="destructive">Remove Item</Button>}
        title="Remove item?"
        description="This will permanently remove this item from your list."
        open={open}
        onOpenChange={setOpen}
        onAction={() => {
          alert("Item removed!");
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
        actionLabel="Remove"
        cancelLabel="Keep"
        variant="destructive"
      />
    );
  },
};

