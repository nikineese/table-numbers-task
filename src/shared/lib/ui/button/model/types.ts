export type ButtonParams = {
  type?: "button" | "submit";
  name: string;
  onClick?: () => void;
};
