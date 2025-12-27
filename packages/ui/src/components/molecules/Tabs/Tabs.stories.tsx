import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Molecules/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      {
        value: "tab1",
        label: "Tab 1",
        content: <div>Content for Tab 1</div>,
      },
      {
        value: "tab2",
        label: "Tab 2",
        content: <div>Content for Tab 2</div>,
      },
      {
        value: "tab3",
        label: "Tab 3",
        content: <div>Content for Tab 3</div>,
      },
    ],
    defaultValue: "tab1",
  },
};

export const ThreeTabs: Story = {
  args: {
    items: [
      {
        value: "overview",
        label: "Overview",
        content: (
          <div className="p-4">
            <h3 className="font-semibold mb-2">Overview</h3>
            <p>This is the overview content.</p>
          </div>
        ),
      },
      {
        value: "settings",
        label: "Settings",
        content: (
          <div className="p-4">
            <h3 className="font-semibold mb-2">Settings</h3>
            <p>This is the settings content.</p>
          </div>
        ),
      },
      {
        value: "analytics",
        label: "Analytics",
        content: (
          <div className="p-4">
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p>This is the analytics content.</p>
          </div>
        ),
      },
    ],
    defaultValue: "overview",
  },
};

