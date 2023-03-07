import React, { useContext, useState } from "react";
import { TableContext } from "shared/config";
import { createArrayWithMap } from "shared/lib/helpers";
import { TableRow } from "./table-row";
import { handleAddRow, handleDeleteRow, ButtonText } from "../model";
import { calculateMiddleFromRows } from "../lib";
import { TableParams } from "../model/types";
import "./styles.css";
import { Button } from "shared/lib/ui";

export const Table: React.FC<TableParams> = ({ setSettingsIsOpen }) => {
  const { tableSizes, rows, setRows, setIsCreatingTable } =
    useContext(TableContext);
  const [sumOpened, setSumOpened] = useState(false);
  const [middleOpened, setMiddleOpened] = useState(false);

  return (
    <div>
      <table className="table">
        <thead className="table-header">
          <tr className="table-row">
            <td className="header__item" />
            {createArrayWithMap(tableSizes.n, (el, id) => (
              <td className="header__item">Cell Value N={id + 1}</td>
            ))}
            <td className={sumOpened ? "header__item" : "table-row-footer"}>
              {sumOpened && "Sum values"}
            </td>
          </tr>
        </thead>
        <tbody className="table-content">
          {rows.map((el) => (
            <TableRow
              classname="table-row"
              key={el.idx}
              idx={el.idx}
              columns={el.columns}
              handleDelete={() => handleDeleteRow(el.idx, rows, setRows)}
              sumOpened={sumOpened}
            />
          ))}
          <tr className="table-row">
            {middleOpened && (
              <>
                <td className="table-row-header">Average values</td>
                {calculateMiddleFromRows(rows, tableSizes.n).map((el) => (
                  <td className="table-data">{el}</td>
                ))}
                {sumOpened && <td className="table-data" />}
                <td className="table-row-footer" />
              </>
            )}
          </tr>
        </tbody>
      </table>
      <div className="actions">
        <Button
          name="Add row"
          onClick={() => handleAddRow(rows, setRows, tableSizes.n)}
        />
        <Button
          name={`${sumOpened ? ButtonText.HIDE : ButtonText.SHOW} sum`}
          onClick={() => setSumOpened(!sumOpened)}
        ></Button>
        <Button
          name={`${middleOpened ? ButtonText.HIDE : ButtonText.SHOW} average`}
          onClick={() => setMiddleOpened(!middleOpened)}
        />
        <Button name="Settings" onClick={() => setSettingsIsOpen(true)} />
        <Button
          name="Create New Table"
          onClick={() => setIsCreatingTable(true)}
        />
      </div>
    </div>
  );
};
