"use client";

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import * as React from "react";

export interface CheckboxProps
  extends React.ComponentProps<typeof ShadcnCheckbox> {}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return <ShadcnCheckbox className={className} {...props} />;
}
