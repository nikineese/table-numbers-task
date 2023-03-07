import { Cell } from "../../cell/model";
import { Row } from "./types";

export const handleIncreaseCellAmount = (
  columns: Cell[],
  id: number,
  rows: Row[],
  setRows: (rows: Row[]) => void,
  rowId: number
) => {
  const columnsWithIncreasedCellAmount = columns.map((el) =>
    el.id === id ? { ...el, amount: ++el.amount } : el
  );
  setRows(
    rows.map((el) =>
      el.idx === rowId ? { ...el, columns: columnsWithIncreasedCellAmount } : el
    )
  );
};
