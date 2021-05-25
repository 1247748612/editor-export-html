import { useCallback, useEffect, useRef } from "react";
import wangEditor from "wangeditor";
import "./styles.css";

export default function App() {
  const editorRef = useRef<wangEditor>();
  const refBind = useCallback((element) => {
    if (!element || editorRef.current) return;

    const editor = new wangEditor(element);
    editor.create();
    editorRef.current = editor;
  }, []);

  return (
    <div className="App">
      <h1>wangEditor</h1>
      <div ref={refBind}></div>
    </div>
  );
}
