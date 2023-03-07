import { Row } from "../../ui/table-row/model";

export const calculateMiddleFromRows = (rows: Row[], columnsLength: number) => {
  const middleValues = [...new Array(columnsLength)];

  return middleValues.map((val, idx) => {
    const columns = rows.map((row) => row.columns[idx]);

    const middleVal = Math.round(
      columns.reduce((acc, val) => acc + val?.amount, 0) / columns.length
    );
    return isNaN(middleVal) ? 0 : middleVal;
  });
};
