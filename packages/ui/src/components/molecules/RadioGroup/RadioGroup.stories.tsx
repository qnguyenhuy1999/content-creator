import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "Molecules/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("option1");
    return (
      <RadioGroup
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
    defaultValue: "banana",
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2 (Disabled)", disabled: true },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
    disabled: true,
  },
};

export const MultipleGroups: Story = {
  render: () => {
    const [size, setSize] = useState("medium");
    const [color, setColor] = useState("blue");
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Size</h3>
          <RadioGroup
            options={[
              { value: "small", label: "Small" },
              { value: "medium", label: "Medium" },
              { value: "large", label: "Large" },
            ]}
            value={size}
            onValueChange={setSize}
          />
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Color</h3>
          <RadioGroup
            options={[
              { value: "red", label: "Red" },
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
            ]}
            value={color}
            onValueChange={setColor}
          />
        </div>
      </div>
    );
  },
};

