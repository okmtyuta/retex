import katex from "katex";
import { useEffect, useRef } from "react";
import { color } from "./config";
import "katex/dist/katex.min.css";
import "../css/Katex.css";

interface KatexProps {
  equation: string;
  display?: boolean;
}

export const Katex = (props: KatexProps) => {
  const katexElementRef = useRef(null);

  useEffect(() => {
    const katexElement = katexElementRef.current;

    if (katexElement !== null) {
      katex.render(props.equation, katexElement, {
        displayMode: props.display,
        errorColor: color.katexErrorColor,
        output: "html",
        strict: "warn",
        throwOnError: false,
        trust: false,
      });
    }
  }, [props.equation]);
  return <span ref={katexElementRef} />;
};
