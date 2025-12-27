import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    className: "size-4",
  },
};

export const Medium: Story = {
  args: {
    className: "size-8",
  },
};

export const Large: Story = {
  args: {
    className: "size-12",
  },
};

export const InButton: Story = {
  render: () => (
    <button className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground">
      <Spinner />
      Loading...
    </button>
  ),
};

