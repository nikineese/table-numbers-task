import React from "react";
import { withProviders } from "./providers";
import { Pages } from "../pages";
import "./styles/index.css";

function App() {
  return (
    <>
      <Pages />
      <div id="modals" />
    </>
  );
}

export default withProviders(App);
