import React, { useState, useMemo } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

const PlainTextExample = () => {
  const [value, setValue] = useState<Descendant[]>(initialValue);
  // @ts-ignore
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable placeholder="Enter some plain text..." />
    </Slate>
  );
};

const initialValue: Descendant[] = [
  {
    // @ts-ignore
    type: "paragraph",
    children: [
      {
        text: "SLATE COMPONENT: This is editable plain text, just like a <textarea>!",
      },
    ],
  },
];

export default PlainTextExample;
