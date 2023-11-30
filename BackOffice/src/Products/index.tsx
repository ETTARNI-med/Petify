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
import {
  ArrowDownRight,
  ArrowUpDown,
  ChevronDown,
  Minus,
  Package,
  PackageOpen,
} from "lucide-react";

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
import AddProduct from "./components/AddProduct";
import { Checkbox } from "@/components/ui/checkbox";
import UpdateProduct from "./components/updateProduct";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    sku: "2980203",
    active: true,
    price: 69,
    discount_price: 55,
    subcategory_id: "toy",
    product_name: "toy1",
    short_description: "toy",
  },
  {
    id: "3u1reuv4",
    sku: "2321203",
    active: false,
    price: 89,
    discount_price: 79,
    subcategory_id: "toy",
    product_name: "toy2",
    short_description: "toy",
  },
  {
    id: "derv1ws0",
    sku: "2789203",
    active: true,
    price: 89,
    discount_price: 89,
    subcategory_id: "toy",
    product_name: "toy3",
    short_description: "toy",
  },
  {
    id: "5kma53ae",
    sku: "0909203",
    active: true,
    price: 89,
    discount_price: 82,
    subcategory_id: "home",
    product_name: "home1",
    short_description: "home",
  },
  {
    id: "bhqecj4p",
    sku: "9973232",
    active: true,
    price: 79,
    discount_price: 75,
    subcategory_id: "food",
    product_name: "food1",
    short_description: "food",
  },
  {
    id: "bhfecj4p",
    sku: "0973833",
    active: true,
    price: 39,
    discount_price: 35,
    subcategory_id: "treatment",
    product_name: "treat1",
    short_description: "treat",
  },
  {
    id: "bhfexj4p",
    sku: "0390909",
    active: false,
    price: 39,
    discount_price: 32,
    subcategory_id: "treatment",
    product_name: "treat2",
    short_description: "treat",
  },
  {
    id: "bhfecj0p",
    sku: "0390876",
    active: false,
    price: 29,
    discount_price: 29,
    subcategory_id: "home",
    product_name: "home2",
    short_description: "home",
  },
  {
    id: "bxxecj0p",
    sku: "8290876",
    active: false,
    price: 79,
    discount_price: 75,
    subcategory_id: "treatment",
    product_name: "treat3",
    short_description: "treat",
  },
  {
    id: "bmaecj0p",
    sku: "8938726",
    active: false,
    price: 29,
    discount_price: 25,
    subcategory_id: "food",
    product_name: "food2",
    short_description: "food",
  },
  {
    id: "bmaemj0p",
    sku: "0938736",
    active: true,
    price: 99,
    discount_price: 79,
    subcategory_id: "food",
    product_name: "food3",
    short_description: "food",
  },
  {
    id: "bmaemj0p",
    sku: "128736",
    active: false,
    price: 89,
    discount_price: 79,
    subcategory_id: "treatment",
    product_name: "treat4",
    short_description: "treat",
  },
];

export type Payment = {
  id: string;
  sku: string;
  price: number;
  discount_price: number;
  active: boolean;
  subcategory_id: string;
  product_name: string;
  short_description: string;
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
    accessorKey: "sku",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          sku
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("sku")}</div>,
  },
  {
    accessorKey: "product_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("product_name")}</div>
    ),
  },
  {
    accessorKey: "subcategory_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          subcategory
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("subcategory_id")}</div>
    ),
  },
  {
    accessorKey: "short_description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          description
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("short_description")}</div>
    ),
  },
  {
    accessorKey: "active",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          active
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="ml-5 lowercase">
        {row.getValue("active") ? (
          <Package className="text-green-700 w-6" />
        ) : (
          <PackageOpen className="text-red-700 w-6" />
        )}
      </div>
    ),
  },
  {
    accessorKey: "discount_price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          price B-N <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="ml-3 lowercase flex">
        {row.original.price}
        {Number(row.original.price) > Number(row.original.discount_price) ? (
          <ArrowDownRight className="text-green-700 w-6 mx-1" />
        ) : (
          <Minus className="text-gray-500 w-6 mx-1" />
        )}
        {row.original.discount_price}
      </div>
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
    cell: ({ row }) => {
      const {
        sku,
        price,
        discount_price,
        active,
        subcategory_id,
        product_name,
        short_description,
      } = row.original;
      return (
        <UpdateProduct
          Payment={{
            sku,
            price,
            discount_price,
            active,
            subcategory_id,
            product_name,
            short_description,
          }}
        />
      );
    },
  },
];

{
  /* Page for managing users */
}
export default function ProductsPage() {
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
          placeholder="Filter by sku..."
          value={(table.getColumn("sku")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("sku")?.setFilterValue(event.target.value);
          }}
          className="w-30 xsm:w-40 xs:w-50 md:w-90"
        />
        <div className="ml-auto">
          <AddProduct />
        </div>
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
        {table.getFilteredSelectedRowModel().rows.length ? (
          <Alert rows={table.getFilteredSelectedRowModel().rows.length} />
        ) : (
          ""
        )}
      </div>
      {/* Table controllers for smaller scr */}
      <div className="xsm:hidden flex flex-col justify-center py-4 mr-6">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by sku..."
            value={(table.getColumn("sku")?.getFilterValue() as string) ?? ""}
            onChange={(event) => {
              table.getColumn("sku")?.setFilterValue(event.target.value);
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
        <AddProduct />
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
