// CodeEditor.js
import React, { useState, useEffect } from 'react';
import Editor from "@monaco-editor/react";

function CodeEditor({ code, onChange }) {
  const [editorCode, setEditorCode] = useState(code);

  const handleEditorChange = (newValue, e) => {
    setEditorCode(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    if (code) {
      setEditorCode(code);
    }
  }, [code]);

  return (
    <div style={{
      fontStyle: "normal",
      textDecoration: "none",
      height: 'calc(80vh - 200px)',
      width: '100%',
      fontFamily: 'Courier New, monospace',
      fontSize: '20px',
      padding: '10px',
      borderRadius: '5px',

      border: '1px solid #ccc',
      resize: 'vertical',
      //backgroundColor: '#1e1e1e',
      //color: '#dcdcdc',
  }}>
      <Editor
        language="cpp"
        theme="vs-dark"
        value={editorCode}
        onChange={handleEditorChange}
        options={{
          selectOnLineNumbers: true,
          folding: true,
        }}
      />
    </div>
  );
}

export default CodeEditor;
