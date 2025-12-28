"use client";

import { Slider as SliderRoot } from "@/components/ui/slider";
import * as React from "react";

export interface SliderProps {
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
  disabled?: boolean;
  className?: string;
}

export function Slider({
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  disabled,
  className,
}: SliderProps) {
  return (
    <SliderRoot
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      onValueChange={onValueChange}
      disabled={disabled}
      className={className}
    />
  );
}
