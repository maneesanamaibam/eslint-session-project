import requireArraySortCompareTest from "./requireArraySortCompare";
import noImpliedEvalTest from "./noImpliedEval";
import { ExampleESLintRuleNames } from "../constants/codeExamples";
// import arrayTypeFixableTest from "./arrayTypeFixable";
import preferOptionalChainTest from "./preferOptionalChain";
// import noUnboundMethodTest from "./unboundMethod";
// import noAwaitInLoopTest from "./noAwaitInLoop";

export default {
  [ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE]: requireArraySortCompareTest,
  [ExampleESLintRuleNames.NO_IMPLIED_EVAL]: noImpliedEvalTest,
  [ExampleESLintRuleNames.PREFER_OPTIONAL_CHAIN]: preferOptionalChainTest,
  // [ExampleESLintRuleNames.ARRAY_TYPE]: arrayTypeFixableTest,
  // [ExampleESLintRuleNames.NO_AWAIT_IN_LOOP]: noAwaitInLoopTest,
  // [ExampleESLintRuleNames.UNBOUND_METHOD]: noUnboundMethodTest,
} as const;
