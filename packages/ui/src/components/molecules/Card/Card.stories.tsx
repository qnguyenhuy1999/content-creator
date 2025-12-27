import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../../atoms/Button/Button";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "Card description goes here.",
    children: <p>Card content goes here.</p>,
  },
};

export const WithFooter: Story = {
  args: {
    title: "Card Title",
    description: "Card description goes here.",
    children: <p>Card content goes here.</p>,
    footer: (
      <div className="flex gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    ),
  },
};

export const WithAction: Story = {
  args: {
    title: "Card Title",
    description: "Card description goes here.",
    children: <p>Card content goes here.</p>,
    action: <Button variant="ghost">Edit</Button>,
  },
};

export const Simple: Story = {
  args: {
    children: <p>Simple card with just content.</p>,
  },
};

