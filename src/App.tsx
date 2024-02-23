import React, { ChangeEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import testFunctions from "./utils";
import {
  CODE_TABS,
  ExampleESLintRuleNames,
  codeExamples,
} from "./constants/codeExamples";

const simpleCodeFormatter = (codeSnippet: string): string[] => {
  return codeSnippet.split("[newline]");
};

const CodeOutput = ({
  outputCode,
}: {
  outputCode: string;
}): React.ReactNode => {
  return (
    <>
      CodeOutput
      {outputCode && (
        <div className="code-container">
          <div className="code-line">{outputCode}</div>
        </div>
      )}
    </>
  );
};

const CodeInput = ({ inputCode }: { inputCode: string }): React.ReactNode => {
  return (
    <>
      <div>Input Code</div>
      <div className="code-container">
        {simpleCodeFormatter(inputCode).map((line, index) => {
          return (
            <div className="code-line" key={index}>
              {line}
            </div>
          );
        })}
      </div>
    </>
  );
};

function App(): React.ReactNode {
  const [runCodeOutput, setRunCodeOutput] = useState("output");
  const [eslintRuleName, setEslintRuleName] = useState(
    ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE
  );

  const RULES_OPTIONS = Object.values(ExampleESLintRuleNames);
  const [tabSelected, setTabSelected] = useState<{
    isTabSelected: boolean;
    tabName: CODE_TABS;
  } | null>(null);

  const codeTabCSSStyle = {
    backgroundColor: "green",
    color: "white",
  };

  const runCodeHandler = (): void => {
    const result = `OUTPUT: ${JSON.stringify(
      testFunctions[ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE]()
    )}`;
    setRunCodeOutput(result);
  };

  const selectRuleHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setEslintRuleName(e.target.value as ExampleESLintRuleNames);
  };

  return (
    <>
      <div>
        <span className="text">ESLint Rule: </span>
        <span className="text">{eslintRuleName}</span>
      </div>
      <div className="code-container-layout">
        <div className="select-rule-container">
          Select Rule
          <select onChange={selectRuleHandler}>
            {RULES_OPTIONS.map((rule) => {
              return (
                <option key={rule} value={rule}>
                  {rule}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <div className="code-tabs">
            <span
              style={
                tabSelected?.isTabSelected &&
                tabSelected.tabName === CODE_TABS.BAD_CODE
                  ? codeTabCSSStyle
                  : {}
              }
              onClick={() => {
                setTabSelected({
                  isTabSelected: true,
                  tabName: CODE_TABS.BAD_CODE,
                });
              }}
              className="rule-tab"
            >
              Bad Code
            </span>
            <span
              style={
                tabSelected?.isTabSelected &&
                tabSelected.tabName === CODE_TABS.GOOD_CODE
                  ? codeTabCSSStyle
                  : {}
              }
              onClick={() => {
                setTabSelected({
                  isTabSelected: true,
                  tabName: CODE_TABS.GOOD_CODE,
                });
              }}
              className="rule-tab"
            >
              Good Code
            </span>
          </div>
          <CodeInput inputCode={codeExamples[eslintRuleName].badCodeExample} />
          <button onClick={runCodeHandler} className="run-code-button">
            Run Code
          </button>
        </div>
        <div>
          <CodeOutput outputCode={runCodeOutput} />
          <span className="filler"></span>
          {/* <button>Output</button> */}
        </div>
      </div>
    </>
  );
}

export default App;
