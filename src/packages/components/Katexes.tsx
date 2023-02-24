import { katexParser } from "../function/parser";
import { Katex } from "./Katex";

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
