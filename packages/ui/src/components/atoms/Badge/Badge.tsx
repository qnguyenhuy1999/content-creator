import { Badge as ShadcnBadge, badgeVariants } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
  return (
    <ShadcnBadge
      className={className}
      variant={variant}
      asChild={asChild}
      {...props}
    />
  );
}
