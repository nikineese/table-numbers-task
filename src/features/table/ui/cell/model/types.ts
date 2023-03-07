import { ContextCell } from "shared/config";

export type Cell = ContextCell;
export type TableCellParams = Omit<Cell, "amount"> & {
  amount: number | string;
  classname: string;
  handleIncreaseCellAmount: () => void;
};
