import * as React from "react";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";

export interface TextareaProps extends React.ComponentProps<"textarea"> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return <ShadcnTextarea className={className} {...props} />;
}

