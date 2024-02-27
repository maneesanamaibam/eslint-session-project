import { CODE_TABS } from "../constants/codeExamples";

function badCode(): string[] {
  const bookTitles: string[] = ["BAD CODE", "book1", "book2", "book3"];
  return bookTitles;
}

function goodCode(): string[] {
  const bookTitles: string[] = ["GOOD CODE", "book1", "book2", "book3"];
  return bookTitles;
}

export default {
  [CODE_TABS.BAD_CODE]: badCode,
  [CODE_TABS.GOOD_CODE]: goodCode,
};
