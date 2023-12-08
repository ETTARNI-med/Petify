import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import React from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  cart_total_price: number;
  order_items: [string];
  status: "Pending" | "processing" | "Delivered" | "Canceled";
  date: string;
  image: React.ReactElement;
};

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'image',
        header: 'Image'
    },
    {
      accessorKey: "order_items",
      header: 'Name'
    },
  {
    accessorKey: "cart_total_price",
    header: "Price",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
