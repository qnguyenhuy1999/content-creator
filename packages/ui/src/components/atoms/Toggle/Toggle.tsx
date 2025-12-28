"use client";

import { Toggle as ToggleRoot, toggleVariants } from "@/components/ui/toggle";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

export interface ToggleProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof toggleVariants> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

export function Toggle({
  className,
  variant = "default",
  size = "default",
  pressed,
  onPressedChange,
  ...props
}: ToggleProps) {
  return (
    <ToggleRoot
      className={className}
      variant={variant}
      size={size}
      pressed={pressed}
      onPressedChange={onPressedChange}
      {...props}
    />
  );
}
