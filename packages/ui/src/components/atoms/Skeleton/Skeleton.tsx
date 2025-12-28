import * as React from "react";
import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";

export interface SkeletonProps extends React.ComponentProps<"div"> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <ShadcnSkeleton className={className} {...props} />;
}
