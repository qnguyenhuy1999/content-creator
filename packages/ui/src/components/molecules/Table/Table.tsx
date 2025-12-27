"use client";

import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  Table as TableRoot,
  TableRow,
} from "@/components/ui/table";
import * as React from "react";

export interface TableColumn {
  header: React.ReactNode;
  accessor?: string;
  cell?: (row: unknown, index: number) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  data: unknown[];
  caption?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Table({
  columns,
  data,
  caption,
  footer,
  className,
}: TableProps) {
  return (
    <TableRoot className={className}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index}>{column.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, colIndex) => {
              const cellContent = column.cell
                ? column.cell(row, rowIndex)
                : column.accessor
                  ? (row as Record<string, unknown>)[column.accessor]
                  : null;
              return (
                <TableCell key={colIndex}>
                  {cellContent != null ? String(cellContent) : null}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
      {footer && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length}>{footer}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </TableRoot>
  );
}
