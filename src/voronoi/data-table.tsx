"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  type SortingState,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Download from "@/components/Download";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <div className="rounded-md border mt-12">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                    <TableCell key={cell.id}>
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
      <div className="flex items-center justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {/* @ts-ignore */}
              <Download data={data} fileName="space" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Download .csv</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex items-center justify-end flex-wrap space-x-2 pt-6 pb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="hidden sm:block"
          >
            First
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <p className="hidden sm:flex w-[100px] items-center justify-center font-medium text-xs">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="hidden sm:block"
          >
            Last
          </Button>
        </div>
      </div>

      <div>
        <h3 className="pb-1">Filter</h3>
        <ToggleGroup type="multiple" size="sm" className="pb-2 flex-wrap">
          <ToggleGroupItem
            value="G"
            aria-label="Toggle goalkeeper"
            className="text-xs font-normal"
            onClick={() => {
              table.getColumn("position")?.setFilterValue(() => {
                if (
                  (
                    (table.getColumn("position")?.getFilterValue() as string) ??
                    ""
                  ).includes("G")
                ) {
                  return (
                    (table.getColumn("position")?.getFilterValue() as string) ??
                    ""
                  ).replace("G", "");
                } else {
                  return (
                    ((table
                      .getColumn("position")
                      ?.getFilterValue() as string) ?? "") + "G"
                  );
                }
              });
            }}
          >
            Goalkeeper
          </ToggleGroupItem>
          <ToggleGroupItem
            value="D"
            aria-label="Toggle defender"
            className="text-xs font-normal"
            onClick={() => {
              table.getColumn("position")?.setFilterValue(() => {
                if (
                  (
                    (table.getColumn("position")?.getFilterValue() as string) ??
                    ""
                  ).includes("D")
                ) {
                  return (
                    (table.getColumn("position")?.getFilterValue() as string) ??
                    ""
                  ).replace("D", "");
                } else {
                  return (
                    ((table
                      .getColumn("position")
                      ?.getFilterValue() as string) ?? "") + "D"
                  );
                }
              });
            }}
          >
            Defender
          </ToggleGroupItem>
          <ToggleGroupItem
            value="M"
            aria-label="Toggle midfielder"
            className="text-xs font-normal"
            onClick={() => {
              table.getColumn("position")?.setFilterValue(() => {
                if (
                  (
                    (table.getColumn("position")?.getFilterValue() as string) ??
                    ""
                  ).includes("M")
                ) {
                  return (
                    (table.getColumn("position")?.getFilterValue() as string) ??
                    ""
                  ).replace("M", "");
                } else {
                  return (
                    ((table
                      .getColumn("position")
                      ?.getFilterValue() as string) ?? "") + "M"
                  );
                }
              });
            }}
          >
            Midfielder
          </ToggleGroupItem>
          <ToggleGroupItem
            value="F"
            aria-label="Toggle forward"
            className="text-xs font-normal"
            onClick={() => {
              table.getColumn("position")?.setFilterValue(() => {
                if (
                  (
                    (table.getColumn("position")?.getFilterValue() as string) ??
                    ""
                  ).includes("F")
                ) {
                  return (
                    (table.getColumn("position")?.getFilterValue() as string) ??
                    ""
                  ).replace("F", "");
                } else {
                  return (
                    ((table
                      .getColumn("position")
                      ?.getFilterValue() as string) ?? "") + "F"
                  );
                }
              });
            }}
          >
            Forward
          </ToggleGroupItem>
        </ToggleGroup>
        <Input
          type="number"
          placeholder="Minimum games played"
          min="1"
          name="Minimum games played"
          onChange={(event) =>
            table.getColumn("games")?.setFilterValue(event.target.value)
          }
          className="w-full text-xs mx-auto max-w-[200px]"
        ></Input>
      </div>
    </div>
  );
}
