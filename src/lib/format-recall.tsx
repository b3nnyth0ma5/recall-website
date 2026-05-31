import { Fragment } from "react";

/**
 * Split text on single quotes and wrap quoted segments in <em>, preserving
 * the surrounding quote characters. e.g. Ask: 'foo' -> Ask: <em>'foo'</em>
 */
export function formatRecall(text: string) {
  const parts = text.split("'");
  return (
    <>
      {parts.map((part, i) => {
        // Even indices are outside quotes; odd indices are inside quotes.
        if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
        return <em key={i}>{`'${part}'`}</em>;
      })}
    </>
  );
}