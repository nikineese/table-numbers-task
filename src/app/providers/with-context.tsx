import React, { useEffect, useState } from "react";
import {
  TableContext,
  ContextSizes,
  ContextRow,
  ContextCell,
} from "shared/config";
import { createArrayWithMap } from "shared/lib/helpers";

export const withContext = (Component: React.ComponentType) => () => {
  const [isCreatingTable, setIsCreatingTable] = useState(true);
  const [tableSizes, setTableSizes] = useState<ContextSizes>({
    m: 0,
    n: 0,
    x: 0,
  });
  const [rows, setRows] = useState<ContextRow[]>([]);

  useEffect(() => {
    setRows(
      createArrayWithMap<ContextRow>(tableSizes.m, (_, idx) => ({
        idx: ++idx,
        columns: createArrayWithMap<ContextCell>(tableSizes.n, (el, id) => ({
          id: `${++idx}_${++id}`,
          amount: 0,
          isHighlighted: false,
        })),
      }))
    );
  }, [tableSizes.m, tableSizes.n, isCreatingTable]);

  return (
    <TableContext.Provider
      value={{
        tableSizes,
        rows,
        isCreatingTable,
        setTableSizes,
        setRows,
        setIsCreatingTable,
      }}
    >
      <Component />
    </TableContext.Provider>
  );
};
