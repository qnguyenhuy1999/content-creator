import * as React from "react";
import { Spinner as ShadcnSpinner } from "@/components/ui/spinner";

export interface SpinnerProps extends React.ComponentProps<"svg"> {}

export function Spinner({ className, ...props }: SpinnerProps) {
  return <ShadcnSpinner className={className} {...props} />;
}
