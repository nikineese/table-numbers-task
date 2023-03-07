import { lazy, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { TableContext } from "../shared/config";

const ConstructorPage = lazy(() => import("./constructor"));
const TablePage = lazy(() => import("./table"));

export const Pages = () => {
  const { isCreatingTable } = useContext(TableContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          isCreatingTable ? <ConstructorPage /> : <Navigate to="/table" />
        }
      />
      <Route
        path="/table"
        element={isCreatingTable ? <Navigate to="/" /> : <TablePage />}
      />
    </Routes>
  );
};
