import { ContextRow } from "shared/config";

export type Row = ContextRow;
export type TableRowParams = Row & {
  classname: string;
  handleDelete: (rowId: number) => void;
  sumOpened: boolean;
};
