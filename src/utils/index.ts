import requireArraySortCompareTest from "./requireArraySortCompare";
import noImpliedEvalTest from "./noImpliedEval";
import preferOptionalChainTest from "./preferOptionalChain";
import noAwaitInLoopTest from "./noAwaitInLoop";
import { ExampleESLintRuleNames } from "../constants/codeExamples";

export default {
  [ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE]: requireArraySortCompareTest,
  [ExampleESLintRuleNames.NO_IMPLIED_EVAL]:noImpliedEvalTest,
  [ExampleESLintRuleNames.PREFER_OPTIONAL_CHAIN]:preferOptionalChainTest,
  [ExampleESLintRuleNames.NO_AWAIT_IN_LOOP]:noAwaitInLoopTest,
} as const;
