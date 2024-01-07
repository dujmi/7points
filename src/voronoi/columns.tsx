"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export type Voronoi = {
  games: number;
  name: string;
  position: "G" | "D" | "M" | "F";
  space: number;
};

export const columns: ColumnDef<Voronoi>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "games",
    header: "Games",
    filterFn: (row, columnId, filterValue) => {
      return (
        filterValue === 0 || (row.getValue("games") as number) >= filterValue
      );
    },
  },
  {
    accessorKey: "position",
    header: "Position",
    filterFn: (row, columnId, filterValue) => {
      return (
        filterValue === "" || filterValue.includes(row.getValue("position"))
      );
    },
  },
  {
    accessorKey: "space",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Space (m<sup>2</sup>)
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("space"));
      const formatted = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
];
