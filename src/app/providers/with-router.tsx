import React from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (Component: React.ComponentType) => () =>
  (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
