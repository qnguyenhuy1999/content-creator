import * as React from "react";
import {
  Alert as AlertRoot,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export interface AlertProps {
  title?: string;
  description?: React.ReactNode;
  variant?: "default" | "destructive";
  icon?: React.ReactNode;
  className?: string;
}

export function Alert({
  title,
  description,
  variant = "default",
  icon,
  className,
}: AlertProps) {
  return (
    <AlertRoot variant={variant} className={className}>
      {icon}
      {title && <AlertTitle>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
    </AlertRoot>
  );
}
