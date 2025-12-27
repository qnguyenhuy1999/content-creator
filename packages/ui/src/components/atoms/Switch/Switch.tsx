"use client";

import * as React from "react";
import { Switch as ShadcnSwitch } from "@/components/ui/switch";

export interface SwitchProps
  extends React.ComponentProps<typeof ShadcnSwitch> {}

export function Switch({ className, ...props }: SwitchProps) {
  return <ShadcnSwitch className={className} {...props} />;
}

