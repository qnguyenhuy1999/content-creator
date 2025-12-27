import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { AlertCircle } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "Alert Title",
    description: "This is an alert description.",
    variant: "default",
  },
};

export const Destructive: Story = {
  args: {
    title: "Error",
    description: "Something went wrong. Please try again.",
    variant: "destructive",
    icon: <AlertCircle />,
  },
};

export const WithIcon: Story = {
  args: {
    title: "Information",
    description: "This is an informational alert with an icon.",
    icon: <AlertCircle />,
  },
};

