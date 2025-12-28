import * as React from "react";
import { Progress as ShadcnProgress } from "@/components/ui/progress";

export interface ProgressProps
  extends React.ComponentProps<typeof ShadcnProgress> {}

export function Progress({ className, value, ...props }: ProgressProps) {
  return <ShadcnProgress className={className} value={value} {...props} />;
}
