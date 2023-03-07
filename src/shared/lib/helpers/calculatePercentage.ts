export const calculatePercentage = (partialVal: number, totalVal: number) => {
  const percentage = Math.floor((100 * partialVal) / totalVal);

  return percentage > 0 ? percentage : 1;
};
