import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar src="https://github.com/shadcn.png" alt="Avatar" fallback="CN" />
  ),
};

export const WithFallback: Story = {
  render: () => <Avatar fallback="JD" />,
};

export const WithImage: Story = {
  render: () => (
    <Avatar src="https://github.com/shadcn.png" alt="shadcn" fallback="SC" />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://github.com/shadcn.png"
        alt="Small"
        fallback="S"
        className="size-8"
      />
      <Avatar
        src="https://github.com/shadcn.png"
        alt="Default"
        fallback="D"
        className="size-10"
      />
      <Avatar
        src="https://github.com/shadcn.png"
        alt="Large"
        fallback="L"
        className="size-12"
      />
    </div>
  ),
};
