"use client";

import { Button } from "@/components/atoms/Button/Button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  Dialog as DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as React from "react";

export interface DialogAction {
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
}

export interface DialogProps {
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  actions?: DialogAction[];
  showCloseButton?: boolean;
  className?: string;
}

export function Dialog({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
  actions,
  showCloseButton = true,
  className,
}: DialogProps) {
  const handleOpenChange = (newOpen: boolean) => {
    onOpenChange?.(newOpen);
  };

  const content = (
    <DialogContent
      showCloseButton={showCloseButton}
      className={className}
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      {(title || description) && (
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
      )}
      {children}
      {actions && actions.length > 0 && (
        <DialogFooter>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "default"}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </DialogFooter>
      )}
    </DialogContent>
  );

  if (trigger) {
    return (
      <DialogRoot open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        {content}
      </DialogRoot>
    );
  }

  return (
    <DialogRoot open={open} onOpenChange={handleOpenChange}>
      {content}
    </DialogRoot>
  );
}
