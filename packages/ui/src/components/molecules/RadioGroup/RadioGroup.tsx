"use client";

import * as React from "react";
import {
  RadioGroup as RadioGroupRoot,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/atoms/Label/Label";

export interface RadioGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioGroupOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function RadioGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  disabled,
  className,
}: RadioGroupProps) {
  return (
    <RadioGroupRoot
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      className={className}
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-center gap-2">
          <RadioGroupItem
            value={option.value}
            id={option.value}
            disabled={option.disabled}
          />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroupRoot>
  );
}

