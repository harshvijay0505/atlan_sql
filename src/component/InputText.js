import CodeEditor from '@uiw/react-textarea-code-editor';
import React, { useState,useContext } from "react";
import {Codecontext} from "../context/Codecontext"

function InputText() {
  // const [code,setCode] = React.useState(
  //   `Select * from Persons;`
  // );
  const {code,setCode} = useContext(Codecontext)
  return (
    <>
    <CodeEditor
      value={code}
      language="SQL"
      placeholder="Please enter SQL code."
      padding={15}
      style={{
        height: 300,
        fontSize: 15,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
    </>
  );
}
export default InputText;
