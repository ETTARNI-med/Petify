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
import { ArrowUpDown, ChevronDown, MonitorCheck, MonitorX } from "lucide-react";

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
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import UpdateSubCategories from "./components/UpdateSubCategories";
import AddSubCategories from "./components/AddSubCategories";
import ImageViewer from "./components/ImageViewer";

export type SubCategory = {
  _id: string;
  subcategory_name: string;
  subcategory_image: string;
  category_id: string;
  active: boolean;
};

export default function SubCategoriesPage() {
  //Fetching data
  const [data, setData] = useState<SubCategory[]>([]);
  const [dataTable, setDataTable] = useState<SubCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategories = async (data: SubCategory[]) => {
    try {
      const response = await axios.get(`http://localhost:4000/v1/categories`);
      const cat = response.data;
      setIsLoading(false);

      const updatedData = data.map((item) => {
        const category = cat.find(
          (c: SubCategory) => c._id === item.category_id
        );
        if (category) {
          console.log(category.category_name);
          return {
            ...item,
            category_id: category.category_name,
          };
        }
        return item;
      });
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategories(dataTable);
  }, [dataTable]);

  const getData = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      const response = await axios.get(
        "http://localhost:4000/v1/subcategories/"
      );
      setDataTable(response.data);
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

  const columns: ColumnDef<SubCategory>[] = [
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
      accessorKey: "subcategory_name",
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
        <div className="capitalize">{row.getValue("subcategory_name")}</div>
      ),
    },
    {
      accessorKey: "category_id",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            category
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="ml-5 uppercase">{row.getValue("category_id")}</div>
      ),
    },
    {
      accessorKey: "subcategory_image",
      header: () => {
        return <Button variant="ghost">subcategory image</Button>;
      },
      cell: ({ row }) => (
        <div className="ml-5 lowercase flex gap-2">
          <ImageViewer path={row.original.subcategory_image} />
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
            <MonitorCheck className="text-green-700 w-6" />
          ) : (
            <MonitorX className="text-red-700 w-6" />
          )}
        </div>
      ),
    },
    {
      id: "Update",
      header: () => {
        return (
          <Button variant="ghost" className="w-20 py-px lg:py-2">
            Update
          </Button>
        );
      },
      cell: ({ row }) => {
        const {
          _id,
          subcategory_name,
          category_id,
          active,
          subcategory_image,
        } = row.original;
        return (
          <UpdateSubCategories
            onUpdate={handleReload}
            SubCategory={{
              subcategory_image,
              _id,
              category_id,
              subcategory_name,
              active,
            }}
          />
        );
      },
    },
    {
      id: "Delete",
      header: () => {
        return (
          <Button variant="ghost" className="w-20 py-px lg:py-2">
            Delete
          </Button>
        );
      },
      cell: ({ row }) => {
        return <Alert onUpdate={handleReload} selected={row.original._id} />;
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
          placeholder="Filter by subcategory name..."
          value={
            (table.getColumn("subcategory_name")?.getFilterValue() as string) ??
            ""
          }
          onChange={(event) => {
            table
              .getColumn("subcategory_name")
              ?.setFilterValue(event.target.value);
          }}
          className="w-30 xsm:w-40 xs:w-50 md:w-90"
        />
        <div className="ml-auto">
          <AddSubCategories onUpdate={handleReload} />
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
            selected={Object.values(
              table.getFilteredSelectedRowModel().rows
            ).map((item) => item.original._id)}
          />
        ) : (
          ""
        )}
      </div>
      {/* Table controllers for smaller scr */}
      <div className="xsm:hidden flex flex-col justify-center py-4 mr-6">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter by subcategory name..."
            value={
              (table
                .getColumn("subcategory_name")
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) => {
              table
                .getColumn("subcategory_name")
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
        <AddSubCategories onUpdate={handleReload} />
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
                    {Array.from({ length: 7 }).map((_, index) => (
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
