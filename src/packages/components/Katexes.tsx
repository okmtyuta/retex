import { Katex } from "./Katex";

const DISPLAY_ENVIRONMENTS = ["align", "equation"];
const BEGIN_AND_END_MATCHER: RegExp = /(\\begin\{\w+\}[\s\S]*?\\end\{\w+\})/g;
const DOLLAR_MATCHER: RegExp = /\$([\s\S]*?)\$/g;
const ENVIRONMENTAL_MATCHER: RegExp = /\\begin\{(\w+?)\}[\s\S]*?\\end\{(\w+)\}/;

/**
 * LaTex形式の文字列を入力してKaTexをレンダリングするコンポーネントの配列を返す / Input LaTex-style string and return Array of component rendering KaTex
 * @module katexParser
 * @param {string} mathString - LaTex形式の文字列 / LaTex-style string
 * @return {JSX.Element[]} - KaTexをレンダリングするコンポーネントの配列 / Array of component rendering KaTex
 */
const katexParser = (mathString: string): JSX.Element[] => {
  const mathSegments: JSX.Element[] = [];
  const splitMathStrings: string[] = mathString.split(DOLLAR_MATCHER);

  for (let i = 0; i < splitMathStrings.length; i++) {
    if (i % 2 === 1) {
      mathSegments.push(
        <Katex key={crypto.randomUUID()} equation={splitMathStrings[i]} />
      );
      continue;
    }

    const beginAndEndMatches = splitMathStrings[i].split(BEGIN_AND_END_MATCHER);
    for (let j = 0; j < beginAndEndMatches.length; j++) {
      const environmentMatch = beginAndEndMatches[j].match(
        ENVIRONMENTAL_MATCHER
      );

      if (!environmentMatch) {
        mathSegments.push(
          <span key={crypto.randomUUID()}>{beginAndEndMatches[j]}</span>
        );
        continue;
      }

      const beginEnvironment = environmentMatch[1];
      const endEnvironment = environmentMatch[2];

      if (beginEnvironment !== endEnvironment) {
        console.error(
          `ENVIRONMENTAL ERROR: ${beginEnvironment} and ${endEnvironment} is not consistent.`
        );
        mathSegments.push(
          <Katex
            key={crypto.randomUUID()}
            equation={beginAndEndMatches[j]}
            display={false}
          />
        );
        continue;
      }

      const environment = beginEnvironment;

      mathSegments.push(
        <Katex
          key={crypto.randomUUID()}
          equation={beginAndEndMatches[j]}
          display={DISPLAY_ENVIRONMENTS.includes(environment)}
        />
      );
    }
  }

  return mathSegments;
};

interface KatexesProps {
  mathString: string; // LaTex形式の文字列 / LaTex-style string
}

export const Katexes = (props: KatexesProps) => {
  const mathSegments = katexParser(props.mathString);
  return (
    <>
      {mathSegments.map((mathSegment) => {
        return mathSegment;
      })}
    </>
  );
};
