import React from "react";
import { ButtonParams } from "../model";
import "./styles.css";

export const Button: React.FC<ButtonParams> = ({ name, onClick, type }) => {
  return (
    <button
      className="button"
      type={type || "button"}
      onClick={() => {
        if (!onClick) return;
        onClick();
      }}
    >
      {name}
    </button>
  );
};
