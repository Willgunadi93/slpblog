import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World</p>",
  });
  return <EditorContent editor={editor} />;
}

export default Editor;
