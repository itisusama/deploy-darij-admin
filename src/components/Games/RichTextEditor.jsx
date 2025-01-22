import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

const RichTextEditor = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  // Initialize the state with a default structure
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Type something here...' }],
    },
  ]);

  const renderElement = (props) => {
    const { attributes, children, element } = props;
    switch (element.type) {
      case 'heading':
        return <h1 {...attributes}>{children}</h1>;
      default:
        return <p {...attributes}>{children}</p>;
    }
  };

  const renderLeaf = (props) => {
    const { attributes, children, leaf } = props;
  
    let modifiedChildren = children; // Create a new variable for modifications
  
    if (leaf.bold) {
      modifiedChildren = <strong>{modifiedChildren}</strong>;
    }
    if (leaf.italic) {
      modifiedChildren = <em>{modifiedChildren}</em>;
    }
    if (leaf.underline) {
      modifiedChildren = <u>{modifiedChildren}</u>;
    }
    if (leaf.strikeThrough) {
      modifiedChildren = <s>{modifiedChildren}</s>;
    }
  
    return <span {...attributes}>{modifiedChildren}</span>;
  };

  return (
    <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Start typing..."
        className="border rounded p-4"
      />
    </Slate>
  );
};

export default RichTextEditor;
