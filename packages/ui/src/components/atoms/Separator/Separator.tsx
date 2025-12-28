"use client";

import * as React from "react";
import { Separator as ShadcnSeparator } from "@/components/ui/separator";

export interface SeparatorProps
  extends React.ComponentProps<typeof ShadcnSeparator> {}

export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <ShadcnSeparator
      className={className}
      orientation={orientation}
      decorative={decorative}
      {...props}
    />
  );
}
