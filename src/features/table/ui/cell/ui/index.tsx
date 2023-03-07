import React, { useContext } from "react";
import { TableCellParams } from "../model";
import {
  calculateSimilarValues,
  hideSimilarValues,
} from "../../../lib/helpers/calculateSimilarValues";
import { TableContext } from "shared/config";
import "./styles.css";

export const TableCell: React.FC<TableCellParams> = ({
  amount,
  handleIncreaseCellAmount,
  classname,
  isHighlighted,
}) => {
  const { rows, setRows, tableSizes } = useContext(TableContext);

  return (
    <td
      onMouseOver={() =>
        calculateSimilarValues(Number(amount), tableSizes.x, rows, setRows)
      }
      onMouseOut={() => hideSimilarValues(rows, setRows)}
      className={isHighlighted ? classname + " similar" : classname}
      onClick={() => handleIncreaseCellAmount()}
    >
      {amount}
    </td>
  );
};
