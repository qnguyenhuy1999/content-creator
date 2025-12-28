import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarRoot,
} from "@/components/ui/avatar";
import * as React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  className?: string;
}

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
  return (
    <AvatarRoot className={className}>
      {src && <AvatarImage src={src} alt={alt} />}
      {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
    </AvatarRoot>
  );
}
