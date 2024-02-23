// // 1.  require-array-sort-compare
// //
// // BAD CODE

// GOOD CODE
// const arr: number[] = [132, 234, 13, 64, 35, 16, 37, 78, 9, 10];
// const compareFn = (a: number, b: number) => a - b;
// arr.sort(compareFn);

export default function (): number[] {
  //BAD CODE
  const arr: number[] = [132, 234, 13, 64, 35, 16, 37, 78, 9, 10];
  arr.sort();
  return arr;
}
