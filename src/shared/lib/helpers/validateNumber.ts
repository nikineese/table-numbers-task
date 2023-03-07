import { MAX_SIZE } from "../constants";

export const validateNumber = (num: string, validNum: number) => {
  const numberInRange = Number(num) <= MAX_SIZE ? Number(num) : 100;
  return isNaN(Number(num)) ? validNum : numberInRange;
};
