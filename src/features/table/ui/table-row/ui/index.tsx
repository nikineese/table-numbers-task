import React, { useContext, useMemo, useState } from "react";
import { TableRowParams } from "../model";
import { TableCell } from "../../cell";
import { handleIncreaseCellAmount } from "../model";
import { TableContext } from "shared/config";
import { calculatePercentage } from "shared/lib/helpers";

export const TableRow: React.FC<TableRowParams> = ({
  idx,
  columns,
  classname,
  handleDelete,
  sumOpened,
}) => {
  const { rows, setRows } = useContext(TableContext);
  const [isMouseHoverSum, setIsMouseHoverSum] = useState<boolean>(false);
  const sumVal = useMemo(
    () => columns.reduce((acc, el) => acc + el.amount, 0),
    [columns]
  );
  return (
    <tr className={classname}>
      <td className="table-row-header">Cell Value M={idx}</td>
      {columns.map((cell) => (
        <TableCell
          classname="table-data"
          id={cell.id}
          key={cell.id}
          amount={
            isMouseHoverSum && cell.amount > 0
              ? `${calculatePercentage(cell.amount, sumVal)}%`
              : cell.amount
          }
          isHighlighted={cell.isHighlighted}
          handleIncreaseCellAmount={() =>
            handleIncreaseCellAmount(columns, cell.id, rows, setRows, idx)
          }
        />
      ))}
      {sumOpened && (
        <td
          className="table-data"
          onMouseEnter={() => setIsMouseHoverSum(true)}
          onMouseLeave={() => setIsMouseHoverSum(false)}
        >
          {sumVal}
        </td>
      )}
      <td
        className="table-row-footer table-delete-btn"
        onClick={() => handleDelete(idx)}
      >
        Delete
      </td>
    </tr>
  );
};
