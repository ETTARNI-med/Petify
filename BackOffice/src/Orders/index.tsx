"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Alert from "./components/Alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Status } from "./components/Status";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    customer_id: "jdzsdazk",
    order_items: "home",
    status: "completed",
    cart_total_price: 399,
    order_date: "09-21-2023",
  },
  {
    id: "3u1reuv4",
    customer_id: "jdzfaazk",
    order_items: "home",
    status: "cancelled",
    cart_total_price: 199,
    order_date: "09-21-2023",
  },
  {
    id: "derv1ws0",
    customer_id: "jdzezazk",
    order_items: "home",
    status: "confirmed",
    cart_total_price: 299,
    order_date: "09-22-2023",
  },
  {
    id: "5kma53ae",
    customer_id: "jdzezazk",
    order_items: "treat",
    status: "confirmed",
    cart_total_price: 99,
    order_date: "09-22-2023",
  },
  {
    id: "bhqecj4p",
    customer_id: "jdzezazk",
    order_items: "treat",
    status: "confirmed",
    cart_total_price: 99,
    order_date: "09-22-2023",
  },
  {
    id: "bhfecj4p",
    customer_id: "jdzzaazk",
    order_items: "treat",
    status: "completed",
    cart_total_price: 119,
    order_date: "09-23-2023",
  },
  {
    id: "bhfexj4p",
    customer_id: "jdzarazk",
    order_items: "treat",
    status: "cancelled",
    cart_total_price: 59,
    order_date: "09-23-2023",
  },
  {
    id: "bhfecj0p",
    customer_id: "jdzarazk",
    order_items: "treat",
    status: "confirmed",
    cart_total_price: 59,
    order_date: "09-23-2023",
  },
  {
    id: "bxxecj0p",
    customer_id: "jdzddazk",
    order_items: ["treat", "food"],
    status: "open",
    cart_total_price: 289,
    order_date: "09-23-2023",
  },
  {
    id: "bmaecj0p",
    customer_id: "jdzddazk",
    order_items: "food",
    status: "completed",
    cart_total_price: 249,
    order_date: "09-23-2023",
  },
  {
    id: "bmaemj0p",
    customer_id: "jdskdjk",
    order_items: "food",
    status: "completed",
    cart_total_price: 199,
    order_date: "09-23-2023",
  },
  {
    id: "bmaemj0p",
    customer_id: "jdslhsdk",
    order_items: "food",
    status: "confirmed",
    cart_total_price: 189,
    order_date: "09-24-2023",
  },
];

export type Payment = {
  id: string;
  customer_id: string;
  order_items: string[] | string;
  status: "open" | "cancelled" | "confirmed" | "completed";
  order_date: string;
  cart_total_price: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customer_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          customer id
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("customer_id")}</div>
    ),
  },
  {
    accessorKey: "order_items",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          order items
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("order_items")}</div>
    ),
  },
  {
    accessorKey: "cart_total_price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          total
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase ml-5">{row.getValue("cart_total_price")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          status
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">
        <Status status={row.getValue("status")} />
      </div>
    ),
  },
  {
    accessorKey: "order_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("order_date")}</div>
    ),
  },
  {
    id: "actions",
    header: () => {
      return (
        <Button variant="ghost" className="w-20 py-px lg:py-2">
          Action
        </Button>
      );
    },
    cell: () => {
      return <Alert />;
    },
  },
];

{
  /* Page for managing users */
}
export default function OrdersPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-[95vw]">
      {/* Table controllers for xsm and bigger scr */}
      <div className="hidden xsm:flex items-center py-4 ml-0 mr-4">
        <Input
          placeholder="Filter by customer id..."
          value={
            (table.getColumn("customer_id")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) => {
            table.getColumn("customer_id")?.setFilterValue(event.target.value);
          }}
          className="w-30 xsm:w-40 xs:w-50 md:w-90"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-1 lg:ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="py-4 ml-4">
        {table.getFilteredSelectedRowModel().rows.length >= 2 ? (
          <Alert rows={table.getFilteredSelectedRowModel().rows.length} />
        ) : (
          ""
        )}
      </div>
      {/* Table controllers for smaller scr */}
      <div className="xsm:hidden flex flex-col justify-center py-4 mr-6">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by customer id..."
            value={
              (table.getColumn("customer_id")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) => {
              table
                .getColumn("customer_id")
                ?.setFilterValue(event.target.value);
            }}
            className="w-36 xs:w-auto"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-1 lg:ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border ml-0 mr-6 xsm:mr-4">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="sm:text-xs lg:text-base"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className="sm:text-xs lg:text-base"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
