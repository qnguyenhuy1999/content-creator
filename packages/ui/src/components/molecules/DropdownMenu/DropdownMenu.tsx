"use client";

import * as React from "react";
import {
  DropdownMenu as DropdownMenuRoot,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface DropdownMenuItemData {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "destructive";
}

export interface DropdownMenuGroup {
  label?: string;
  items: DropdownMenuItemData[];
}

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownMenuItemData[] | DropdownMenuGroup[];
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  className?: string;
}

export function DropdownMenu({
  trigger,
  items,
  align = "start",
  side = "bottom",
  sideOffset = 4,
  className,
}: DropdownMenuProps) {
  const renderItems = (itemsToRender: DropdownMenuItemData[]) => {
    return itemsToRender.map((item, index) => (
      <DropdownMenuItem
        key={index}
        onClick={item.onClick}
        disabled={item.disabled}
        variant={item.variant}
      >
        {item.label}
      </DropdownMenuItem>
    ));
  };

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className={className}
      >
        {items.map((item, index) => {
          if ("items" in item) {
            // It's a group
            return (
              <React.Fragment key={index}>
                {item.label && <DropdownMenuLabel>{item.label}</DropdownMenuLabel>}
                {renderItems(item.items)}
                {index < items.length - 1 && <DropdownMenuSeparator />}
              </React.Fragment>
            );
          }
          // It's a single item
          return (
            <React.Fragment key={index}>
              {renderItems([item])}
            </React.Fragment>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}

