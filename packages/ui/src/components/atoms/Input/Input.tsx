import * as React from "react";
import { Input as ShadcnInput } from "@/components/ui/input";

export interface InputProps extends React.ComponentProps<"input"> {}

export function Input({ className, type, ...props }: InputProps) {
  return <ShadcnInput className={className} type={type} {...props} />;
}
