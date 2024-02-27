// 3. prefer-optional-chain
import { CODE_TABS } from "../constants/codeExamples";

interface ExampleObject {
  a?: {
    b?: {
      c: string;
    };
  };
}
function badCode(): undefined | string {
  // BAD CODE [newline]
  const obj: ExampleObject = {
    a: {
      b: {
        c: "I am returning from ExampleObject as string [BAD CODE]",
      },
    },
  };
  const val = obj.a && obj.a.b && obj.a.b.c;
  return val;
}

function goodCode(): undefined | string {
  // GOOD CODE [newline]
  const obj: ExampleObject = {
    a: {
      b: {
        c: "I am returning from ExampleObject as string [GOOD CODE]",
      },
    },
  };
  const val = obj.a?.b?.c;
  return val;
}
export default {
  [CODE_TABS.BAD_CODE]: badCode,
  [CODE_TABS.GOOD_CODE]: goodCode,
};
