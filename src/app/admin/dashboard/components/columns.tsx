"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-row-actions";

export type ShortLink = {
  key: string;
  url: string;
  visits?: number;
  createdAt?: number;
};

export const getColumns = (
  onEdit: (key: ShortLink["key"]) => void
): ColumnDef<ShortLink>[] => [
  {
    accessorKey: "key",
    header: "Unique URL",
  },
  {
    accessorKey: "url",
    header: "Redirect to",
  },
  {
    accessorKey: "visits",
    header: "Visits",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      const timestamp = row.getValue("createdAt") as ShortLink["createdAt"];
      if (!timestamp) return "";
      const date = new Date(timestamp);
      return date.toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} onEdit={onEdit} />,
  },
];
