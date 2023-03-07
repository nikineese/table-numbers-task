import { InputNumberParams } from "../model";
import React from "react";
import "./styles.css";

export const InputNumber: React.FC<InputNumberParams> = ({
  title,
  value,
  onChange,
}) => {
  return (
    <label htmlFor={title}>
      <p className="title">{title}</p>
      <input
        className="input"
        id={title}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
