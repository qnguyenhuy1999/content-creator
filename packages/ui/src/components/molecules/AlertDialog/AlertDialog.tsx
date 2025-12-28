"use client";

import * as React from "react";
import {
  AlertDialog as AlertDialogRoot,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/atoms/Button/Button";

export interface AlertDialogProps {
  trigger?: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  actionLabel?: string;
  cancelLabel?: string;
  onAction?: () => void;
  onCancel?: () => void;
  variant?: "default" | "destructive";
  className?: string;
}

export function AlertDialog({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
  actionLabel = "Continue",
  cancelLabel = "Cancel",
  onAction,
  onCancel,
  variant = "default",
  className,
}: AlertDialogProps) {
  const content = (
    <AlertDialogContent className={className}>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        {description && (
          <AlertDialogDescription>{description}</AlertDialogDescription>
        )}
      </AlertDialogHeader>
      {children}
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button variant="outline" onClick={onCancel}>
            {cancelLabel}
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button
            variant={variant === "destructive" ? "destructive" : "default"}
            onClick={onAction}
          >
            {actionLabel}
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );

  if (trigger) {
    return (
      <AlertDialogRoot open={open} onOpenChange={onOpenChange}>
        <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
        {content}
      </AlertDialogRoot>
    );
  }

  return (
    <AlertDialogRoot open={open} onOpenChange={onOpenChange}>
      {content}
    </AlertDialogRoot>
  );
}
