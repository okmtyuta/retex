import "katex/dist/katex.min.css";
import { Katexes } from "./packages/components/Katexes";

import { TEST_MATH_STRING } from "./packages/components/test/testMathString";

function App() {
  const testMathStringSplitByBreak = TEST_MATH_STRING.split("\n");
  return (
    <>
      {testMathStringSplitByBreak.map((st) => {
        return (
          <div key={crypto.randomUUID()} style={{ margin: "10px 0" }}>
            <Katexes mathString={st} />
          </div>
        );
      })}
    </>
  );
}

export default App;
