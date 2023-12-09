"use client";

import { useEffect, useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { Status } from "./components/Status";

export type Order = {
  id: string;
  customer_id: string;
  order_items: string[] | string;
  status: "open" | "cancelled" | "confirmed" | "completed";
  order_date: string;
  cart_total_price: number;
};

export default function ProductsPage() {
  //Fetching data
  const [data, setData] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      const response = await axios.get("http://localhost:4000/v1/orders/");
      setData(response.data);
      setIsLoading(false); // Set loading state to false after data is fetched
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleReload = (reloadValue: boolean) => {
  //   if (reloadValue === true) {
  //     getData();
  //   }
  // };

  const columns: ColumnDef<Order>[] = [
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
  ];

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [table, setTable] = useState(
    useReactTable({
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
    })
  );

  useEffect(() => {
    setTable((prevTable) => ({
      ...prevTable,
      data: data,
    }));
  }, [data]);

  return (
    <div className="w-[95vw]">
      {/* Table controllers for xsm and bigger scr */}
      <div className="hidden xsm:flex items-center py-4 ml-0 mr-4">
        <Input
          placeholder="Filter by custome id..."
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
            {isLoading ? (
              <>
                {Array.from({ length: 10 }).map((_, i) => (
                  <TableRow key={i} className="h-12">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <TableCell key={index}>
                        <Skeleton className="h-7 w-auto" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            ) : table.getRowModel().rows?.length ? (
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
      <div className="flex items-center justify-end space-x-2 py-4 mr-6">
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
