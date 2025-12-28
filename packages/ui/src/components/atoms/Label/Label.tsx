"use client";

import * as React from "react";
import { Label as ShadcnLabel } from "@/components/ui/label";

export interface LabelProps extends React.ComponentProps<typeof ShadcnLabel> {}

export function Label({ className, ...props }: LabelProps) {
  return <ShadcnLabel className={className} {...props} />;
}
