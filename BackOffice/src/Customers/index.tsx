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
  ArrowUpDown,
  Check,
  ChevronDown,
  Wifi,
  WifiOff,
  X,
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
import AddCustomer from "./components/AddCustomer";
import { Checkbox } from "@/components/ui/checkbox";
import ProfileSheet from "@/Container/components/ProfileSheet";

const data: Payment[] = [
  {
    _id: "m5gr84i9",
    email: "ken99@yahoo.com",
    valid: false,
    active: true,
    date: "2023-11-23T11:00:00",
    first_name: "ken",
    last_name: "aguero",
  },
  {
    _id: "3u1reuv4",
    email: "abe45@gmail.com",
    valid: true,
    active: false,
    date: "2023-12-11T11:00:00",
    first_name: "abla",
    last_name: "beka",
  },
  {
    _id: "derv1ws0",
    email: "monserrat44@gmail.com",
    valid: false,
    active: true,
    date: "2023-11-17T11:00:00",
    first_name: "monser",
    last_name: "rat",
  },
  {
    _id: "5kma53ae",
    email: "silas22@gmail.com",
    valid: true,
    active: true,
    date: "2023-07-11T11:00:00",
    first_name: "silas",
    last_name: "syla",
  },
  {
    _id: "bhqecj4p",
    email: "carmella@hotmail.com",
    valid: true,
    active: true,
    date: "2023-09-11T11:00:00",
    first_name: "carmella",
    last_name: "mella",
  },
  {
    _id: "bhfecj4p",
    email: "ahmedmohammadi@hotmail.com",
    valid: true,
    active: true,
    date: "2023-09-23T11:00:00",
    first_name: "Ahamed",
    last_name: "mohammadi",
  },
  {
    _id: "bhfexj4p",
    email: "younnesjbari@hotmail.com",
    valid: true,
    active: false,
    date: "2023-09-22T11:00:00",
    first_name: "younnes",
    last_name: "jbari",
  },
  {
    _id: "bhfecj0p",
    email: "younnestayeb@hotmail.com",
    valid: true,
    active: false,
    date: "2023-09-24T11:00:00",
    first_name: "younnes",
    last_name: "tayeb",
  },
  {
    _id: "bxxecj0p",
    email: "houssamarabi@hotmail.com",
    valid: false,
    active: false,
    date: "2023-09-24T11:00:00",
    first_name: "houssam",
    last_name: "arabi",
  },
  {
    _id: "bmaecj0p",
    email: "yassineaaerab@hotmail.com",
    valid: true,
    active: false,
    date: "2023-09-24T11:00:00",
    first_name: "yassine",
    last_name: "aaerab",
  },
  {
    _id: "bmaemj0p",
    email: "youssefjaouhari@hotmail.com",
    valid: false,
    active: true,
    date: "2023-09-24T11:00:00",
    first_name: "youssef",
    last_name: "jaouhari",
  },
  {
    _id: "bmaemj0p",
    email: "karimhassan@hotmail.com",
    valid: false,
    active: false,
    date: "2023-09-24T11:00:00",
    first_name: "hassan",
    last_name: "karim",
  },
];

export type Payment = {
  _id: string;
  email: string;
  valid: boolean;
  active: boolean;
  date: string;
  first_name: string;
  last_name: string;
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
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">
        {
          <ProfileSheet
            email={row.original.email}
            date={row.original.date}
            first_name={row.original.first_name}
            last_name={row.original.last_name}
            active={row.original.active}
            valid={row.original.valid}
          />
        }
      </div>
    ),
  },

  {
    accessorKey: "first_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          first Name
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("first_name")}</div>
    ),
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          last Name
          <ArrowUpDown className="ml-1 lg:ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("last_name")}</div>
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
          <Wifi className="text-green-700 w-6" />
        ) : (
          <WifiOff className="text-red-700 w-6" />
        )}
      </div>
    ),
  },
  {
    accessorKey: "valid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          valid
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="ml-5 lowercase">
        {row.getValue("valid") ? (
          <Check className="text-green-700 w-6" />
        ) : (
          <X className="text-red-700 w-6" />
        )}
      </div>
    ),
  },
  {
    accessorKey: "date",
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
    cell: ({ row }) => <div className="lowercase">{row.getValue("date")}</div>,
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
export default function UsersPage() {
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
          placeholder="Filter by email..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("email")?.setFilterValue(event.target.value);
          }}
          className="w-30 xsm:w-40 xs:w-50 md:w-90"
        />
        <div className="ml-auto">
          <AddCustomer />
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
            placeholder="Filter by email..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) => {
              table.getColumn("email")?.setFilterValue(event.target.value);
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
        <div className="mx-auto">
          <AddCustomer />
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
      <div className="flex items-center justify-end space-x-2 py-4  mr-6">
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
