import React, { ChangeEvent, useState } from "react";
import {
  CODE_TABS,
  ExampleESLintRuleNames,
  codeExamples,
} from "./constants/codeExamples";
import testFunctions from "./utils";
import "./App.css";

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
const getRandomRGB = (): string => {
  const r = Math.floor(30+Math.random() * 100);
  const g = Math.floor(30+Math.random() * 100);
  const b = Math.floor(30+Math.random() * 100);
  return `rgb(${r},${g},${b})`;

}

const CodeInput = React.memo(({ inputCode }: { inputCode: string }): React.ReactNode => {
  return (
    <>
      <div>Input Code</div>
      <div className="code-container">
        {simpleCodeFormatter(inputCode).map((line, index) => {
          return (
            <div style={
              {
                backgroundImage: `linear-gradient(to right, ${getRandomRGB()}, ${getRandomRGB()})`,
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 400
              }
            }  key={index}>
              {line}
            </div>
          );
        })}
      </div>
    </>
  );
})

function App(): React.ReactNode {
  const [runCodeOutput, setRunCodeOutput] = useState("output");
  const [eslintRuleName, setEslintRuleName] = useState(
    ExampleESLintRuleNames.NO_ARRAY_SORT_COMPARE
  );

  const RULES_OPTIONS = Object.values(ExampleESLintRuleNames);
  const [tabSelected, setTabSelected] = useState<{
    isTabSelected: boolean;
    tabName: CODE_TABS;
  }>({ isTabSelected: true,
    tabName: CODE_TABS.BAD_CODE}  );

  const codeTabCSSStyle = {
    backgroundColor: tabSelected.tabName === CODE_TABS.GOOD_CODE ? "green" : "#DE3939",
    color: "white",
  };

const resolveAndSetLater=(promise:Promise<unknown>):void=>{
promise.then((data)=>{
  setRunCodeOutput(`OUTPUT: ${JSON.stringify(data)}`)
 })
}
  const runCodeHandler = (): void => {
   const codeResultFn =testFunctions[eslintRuleName][tabSelected.tabName]
    const isPromise = typeof codeResultFn() === 'object' && typeof (codeResultFn() as Promise<unknown>).then === 'function'
   if(isPromise){
    resolveAndSetLater(codeResultFn() as Promise<unknown>)
    return
   }
   const codeResult=testFunctions[eslintRuleName][tabSelected.tabName]()
    const result = `OUTPUT: ${JSON.stringify(
      codeResult || "No Output"
    )}`;
    setRunCodeOutput(result);
  };

  const selectRuleHandler = (e: ChangeEvent<HTMLSelectElement>):void=> {
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
                tabSelected.isTabSelected &&
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
                tabSelected.isTabSelected &&
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
          <CodeInput inputCode={codeExamples[eslintRuleName][`${tabSelected.tabName}Example`]} />
          <button onClick={runCodeHandler} className="run-code-button">
            Run Code
          </button>
        </div>
        <div>
          <CodeOutput outputCode={runCodeOutput} />
          <span className="filler"></span>
        </div>
      </div>
    </>
  );
}

export default App;
