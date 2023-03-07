import { Row } from "../ui/table-row/model";
import { createArrayWithMap } from "shared/lib/helpers";
import { Cell } from "../ui/cell/model";

export const handleDeleteRow = (
  idx: number,
  rows: Row[],
  setRows: (rows: Row[]) => void
) => {
  setRows(rows.filter((el) => el.idx !== idx));
};
export const handleAddRow = (
  rows: Row[],
  setRows: (rows: Row[]) => void,
  columnsLength: number
) => {
  setRows([
    ...rows,
    {
      idx: (rows[rows.length - 1]?.idx || 0) + 1,
      columns: createArrayWithMap<Cell>(columnsLength || 1, (el, id) => ({
        id: ++id,
        amount: 0,
      })),
    },
  ]);
};
