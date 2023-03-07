export function createArrayWithMap<T>(
  length: number,
  mapper: (el: T, idx: number, arr: T[]) => any
): T[] {
  return [...new Array(length)].map(mapper);
}
