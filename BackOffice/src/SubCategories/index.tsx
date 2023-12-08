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
import { ArrowUpDown, ChevronDown, Package, PackageOpen } from "lucide-react";

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
import axios from "axios";
import ImageViewer from "./components/ImageViewer";
import { Skeleton } from "@/components/ui/skeleton";

export type SubCategories = {
  _id: string;
  sku: string;
  price: string;
  discount_price: string;
  active: boolean;
  subcategory_id: string;
  product_name: string;
  product_image: string[];
  options: string[];
  short_description: string;
  long_description: string;
};

export default function SubCategoriesPage() {
  //Fetching data
  const [data, setData] = useState<SubCategories[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      const response = await axios.get("http://localhost:4000/v1/products/");
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

  const handleReload = (reloadValue: boolean) => {
    if (reloadValue === true) {
      getData();
    }
  };

  const columns: ColumnDef<SubCategories>[] = [
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
        <div className="lowercase line-clamp-1">
          {row.getValue("product_name")}
        </div>
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
        <div className="lowercase line-clamp-1">
          {row.getValue("short_description")}
        </div>
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
          {row.getValue("active") === true ? (
            <Package className="text-green-700 w-6" />
          ) : (
            <PackageOpen className="text-red-700 w-6" />
          )}
        </div>
      ),
    },
    {
      accessorKey: "product_image",
      header: () => {
        return <Button variant="ghost">product images</Button>;
      },
      cell: ({ row }) => (
        <div className="ml-5 lowercase flex gap-2">
          {row.original.product_image.map((image, index) => (
            <ImageViewer path={image} key={index} />
          ))}
        </div>
      ),
    },
    {
      accessorKey: "discount_price",
      header: () => {
        return <Button variant="ghost">Price</Button>;
      },
      cell: ({ row }) => (
        <div className="ml-3 lowercase flex">{row.original.discount_price}</div>
      ),
    },
    {
      accessorKey: "color",
      header: () => {
        return <Button variant="ghost">Color</Button>;
      },
      cell: ({ row }) => (
        <div className="ml-3 flex">
          <input
            type="color"
            value={
              row.original.options
                .map((option) => {
                  const [key, value] = option
                    .split(":")
                    .map((item) => item.trim());
                  if (key === "color") {
                    return value;
                  }
                  return null;
                })
                .find((value) => value !== null) || ""
            }
            readOnly
            disabled
          />
        </div>
      ),
    },
    {
      accessorKey: "size",
      header: () => {
        return <Button variant="ghost">Size</Button>;
      },
      cell: ({ row }) => (
        <div className="ml-3 flex">
          {row.original.options
            .map((option) => {
              const [key, value] = option.split(":").map((item) => item.trim());
              if (key === "size") {
                return value;
              }
              return null;
            })
            .find((value) => value !== null)
            ?.toLocaleLowerCase()}
        </div>
      ),
    },
    {
      accessorKey: "age",
      header: () => {
        return <Button variant="ghost">Age</Button>;
      },
      cell: ({ row }) => (
        <div className="ml-3 flex">
          {row.original.options
            .map((option) => {
              const [key, value] = option.split(":").map((item) => item.trim());
              if (key === "age") {
                return value;
              }
              return null;
            })
            .find((value) => value !== null)
            ?.toLocaleLowerCase()}
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
          _id,
          sku,
          price,
          discount_price,
          active,
          subcategory_id,
          product_name,
          short_description,
          long_description,
          product_image,
          options,
        } = row.original;
        return (
          <UpdateProduct
            onVariable={handleReload}
            SubCategories={{
              id: _id,
              sku,
              price,
              discount_price,
              active,
              subcategory_id,
              product_name,
              product_image,
              long_description,
              options,
              short_description,
            }}
          />
        );
      },
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
          placeholder="Filter by sku..."
          value={(table.getColumn("sku")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("sku")?.setFilterValue(event.target.value);
          }}
          className="w-30 xsm:w-40 xs:w-50 md:w-90"
        />
        <div className="ml-auto">
          <AddProduct onUpdate={handleReload} />
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
          <Alert
            onUpdate={handleReload}
            rows={table.getFilteredSelectedRowModel().rows.length}
            selected={table.getFilteredSelectedRowModel().rows}
          />
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
        <AddProduct onUpdate={handleReload} />
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
                    {Array.from({ length: 12 }).map((_, index) => (
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
