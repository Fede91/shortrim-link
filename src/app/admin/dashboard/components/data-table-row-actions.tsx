"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getPublicShortLinkUrl } from "@/lib/shortlink";
import { ShortLink } from "./columns";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (key: ShortLink["key"]) => void;
  onDelete: (key: ShortLink["key"]) => void;
}

export function DataTableRowActions<TData>({
  row,
  onEdit,
  onDelete,
}: DataTableRowActionsProps<TData>) {
  const { toast } = useToast();

  const handleCopyClick = async () => {
    const key = row.getValue("key") as string;
    await navigator.clipboard.writeText(getPublicShortLinkUrl(key));
    toast({
      description: "Shotlink copied to clipboard",
    });
  };

  const handlEditClick = () => {
    const key = row.getValue("key") as string;
    onEdit(key);
  };

  const handleDeleteClick = () => {
    const key = row.getValue("key") as string;
    onDelete(key);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={handlEditClick}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyClick}>Copy link</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDeleteClick}>
          Delete
          {/* <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
