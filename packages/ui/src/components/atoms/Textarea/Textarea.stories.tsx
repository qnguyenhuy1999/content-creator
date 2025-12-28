import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
};

export const WithValue: Story = {
  args: {
    value: "This is a sample text in the textarea.",
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <label htmlFor="textarea-label" className="text-sm font-medium">
        Message
      </label>
      <Textarea id="textarea-label" placeholder="Type your message here..." />
    </div>
  ),
};

export const Resizable: Story = {
  args: {
    placeholder: "This textarea can be resized",
    className: "resize",
  },
};
