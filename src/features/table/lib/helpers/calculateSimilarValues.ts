import { Row } from "../../ui/table-row/model";

export const calculateSimilarValues = (
  value: number,
  limitNearest: number,
  rows: Row[],
  setRows: (rows: Row[]) => void
) => {
  if (isNaN(value) || limitNearest === 0) return;
  let differences: number[] = [];

  rows.forEach((row) => {
    row.columns.forEach((cell) => {
      differences.push(Math.abs(value - cell.amount));
    });
  });

  differences = differences.sort().slice(0, limitNearest);

  setRows(
    rows.map((row) => ({
      idx: row.idx,
      columns: row.columns.map((cell) => {
        const isDifferenceMatch = differences.includes(
          Math.abs(value - cell.amount)
        );
        const columnsWithHighlighted = isDifferenceMatch
          ? { ...cell, isHighlighted: true }
          : cell;
        if (isDifferenceMatch) {
          differences.splice(
            differences.indexOf(Math.abs(value - cell.amount)),
            1
          );
        }

        return columnsWithHighlighted;
      }),
    }))
  );
};
export const hideSimilarValues = (
  rows: Row[],
  setRows: (rows: Row[]) => void
) => {
  setRows(
    rows.map((row) => ({
      idx: row.idx,
      columns: row.columns.map((cell) => ({ ...cell, isHighlighted: false })),
    }))
  );
};
