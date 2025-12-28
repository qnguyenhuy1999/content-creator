import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        value: "item1",
        trigger: "Is it accessible?",
        content: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        value: "item2",
        trigger: "Is it styled?",
        content:
          "Yes. It comes with default styles that match the other components.",
      },
      {
        value: "item3",
        trigger: "Is it animated?",
        content:
          "Yes. It's animated by default, but you can disable it if needed.",
      },
    ],
    type: "single",
    defaultValue: "item1",
  },
};

export const Multiple: Story = {
  args: {
    items: [
      {
        value: "item1",
        trigger: "Item 1",
        content: "Content for item 1",
      },
      {
        value: "item2",
        trigger: "Item 2",
        content: "Content for item 2",
      },
      {
        value: "item3",
        trigger: "Item 3",
        content: "Content for item 3",
      },
    ],
    type: "multiple",
    defaultValue: ["item1"],
  },
};
