import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { TableContext } from "shared/config";
import { InputNumber, Button } from "shared/lib/ui";
import { validateNumber } from "shared/lib/helpers";
import "./styles.css";

export const ConstructorTable = () => {
  const { tableSizes, setTableSizes, setIsCreatingTable } =
    useContext(TableContext);
  const [sizes, setSizes] = useState({
    m: 0,
    n: 0,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [sizes]);
  return (
    <form
      className="constructor-container"
      onSubmit={(e) => {
        e.preventDefault();
        if (sizes.m > 0 && sizes.n > 0) {
          setTableSizes({ ...sizes, x: tableSizes.x });
          setIsCreatingTable(false);
        } else {
          setError("Enter sizes greater than 0");
        }
      }}
    >
      <h1 className="constructor__title">Table creator</h1>
      <InputNumber
        title="Enter M size"
        value={sizes.m}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSizes((prevState) => ({
            ...prevState,
            m: validateNumber(e.target.value, prevState.m),
          }))
        }
      />
      <InputNumber
        title="Enter N size"
        value={sizes.n}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSizes((prevState) => ({
            ...prevState,
            n: validateNumber(e.target.value, prevState.n),
          }))
        }
      />
      <span className="error">{error.length > 0 && error}</span>
      <Button name="Create table" type="submit" />
    </form>
  );
};
