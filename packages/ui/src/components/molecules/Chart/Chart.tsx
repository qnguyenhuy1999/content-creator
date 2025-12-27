"use client";

import type { ChartConfig as ChartConfigType } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import * as React from "react";
import * as RechartsPrimitive from "recharts";

export interface ChartProps {
  config: ChartConfigType;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
  id?: string;
  className?: string;
}

export function Chart({ config, children, id, className }: ChartProps) {
  return (
    <ChartContainer config={config} id={id} className={className || "w-full"}>
      {children}
    </ChartContainer>
  );
}

// Re-export chart components for convenience
export { ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent };

// Re-export ChartConfig type
export type ChartConfig = ChartConfigType;
