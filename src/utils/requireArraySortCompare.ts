// 1.  require-array-sort-compare

import { CODE_TABS } from "../constants/codeExamples";

function badCode(): number[] {
  //BAD CODE
  const arr: number[] = [1, 12, 110, 23];
  arr.sort();
  return arr;
}
function goodCode(): number[] {
  //GOOD CODE
  const arr: number[] = [1, 12, 110, 23];
  const compareFn = (a: number, b: number): number => a - b;
  arr.sort(compareFn);
  return arr;
}

export default {
  [CODE_TABS.BAD_CODE]: badCode,
  [CODE_TABS.GOOD_CODE]: goodCode,
};
