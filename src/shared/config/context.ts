import React from "react";
type CellId = number;
type CellValue = number;

export type ContextCell = {
  id: CellId;
  amount: CellValue;
  isHighlighted: boolean;
};

export type ContextRow = {
  idx: number;
  columns: ContextCell[];
};

export type ContextSizes = {
  m: number;
  n: number;
  x: number;
};

export type ContextTable = {
  isCreatingTable: boolean;
  rows: ContextRow[];
  tableSizes: {
    m: number;
    n: number;
    x: number;
  };
  setTableSizes: (tableSizes: ContextSizes) => void;
  setRows: (rows: ContextRow[]) => void;
  setIsCreatingTable: (isCreatingTable: boolean) => void;
};

export const TableContext = React.createContext<ContextTable>({
  isCreatingTable: true,
  rows: [],
  tableSizes: {
    m: 0,
    n: 0,
    x: 0,
  },
  setTableSizes: () => {},
  setRows: () => {},
  setIsCreatingTable: () => {},
});
