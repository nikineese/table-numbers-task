import { ChangeEvent } from "react";

export type InputNumberParams = {
  title: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
