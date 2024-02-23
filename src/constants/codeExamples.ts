// eslint-disable-next-line no-shadow
export enum ExampleESLintRuleNames {
  NO_ARRAY_SORT_COMPARE = "require-array-sort-compare",
  NO_IMPLIED_EVAL = "no-implied-eval",
  PREFER_OPTIONAL_CHAIN = "prefer-optional-chain",
  NO_AWAIT_IN_LOOP = "no-await-in-loop",
}

export enum CODE_TABS {
  BAD_CODE = "badCode",
  GOOD_CODE = "goodCode",
}
type ExampleCode = `${CODE_TABS}Example`;
interface CodeExample {
  [key in ExampleCode]: string;
  ruleName: ExampleESLintRuleNames;
  goodCodeExample: string;
  description: string;
}
export const codeExamples: {
  [key in ExampleESLintRuleNames]: CodeExample;
} = {
  [ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE]: {
    ruleName: ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE,
    [`${CODE_TABS.BAD_CODE}Example`]: `
    //BAD CODE [newline]
    const arr: number[] = [132, 234, 13, 64, 35, 16, 37, 78, 9, 10]; [newline]
    arr.sort(); [newline]
    `,
    goodCodeExample: `
    // GOOD CODE
     const arr: number[] = [132, 234, 13, 64, 35, 16, 37, 78, 9, 10];
     const compareFn = (a: number, b: number) => a - b;
     arr.sort(compareFn);
    `,
    description: ``,
  },
  [ExampleESLintRuleNames.NO_IMPLIED_EVAL]: {
    ruleName: ExampleESLintRuleNames.NO_IMPLIED_EVAL,
    [`${CODE_TABS.BAD_CODE}Example`]: `
// BAD CODE [newline]
 setTimeout("alert('Hi!');", 100); [newline]
    `,
    goodCodeExample: `
    // GOOD CODE
    setTimeout(() => {
     alert("Hi!");
    }, 100);
    `,
    description: ``,
  },
  [ExampleESLintRuleNames.PREFER_OPTIONAL_CHAIN]: {
    ruleName: ExampleESLintRuleNames.PREFER_OPTIONAL_CHAIN,
    [`${CODE_TABS.BAD_CODE}Example`]: `
    // BAD CODE [newline]
    const obj = { a: "a" }; [newline]
    const val = obj && obj.a && obj.a.b && obj.a.b.c; [newline]
     `,
    goodCodeExample: `
    // GOOD CODE [newline]
    const obj = { a: "a" }; [newline]
    const val = obj?.a?.b?.c; [newline]
    `,
    description: ``,
  },
  [ExampleESLintRuleNames.NO_AWAIT_IN_LOOP]: {
    ruleName: ExampleESLintRuleNames.NO_AWAIT_IN_LOOP,
    [`${CODE_TABS.BAD_CODE}Example`]: `
 // BAD CODE [newline]
 async function foo(things) { [newline]
   const results = []; [newline]
   for (const thing of things) { [newline] 
   
     results.push(await bar(thing)); [newline]
   } [newline]
   return baz(results); [newline]
 }
    `,
    goodCodeExample: `
    // GOOD CODE
     const arr: number[] = [132, 234, 13, 64, 35, 16, 37, 78, 9, 10];
     const compareFn = (a: number, b: number) => a - b;
     arr.sort(compareFn);
    `,
    description: ``,
  },
};
