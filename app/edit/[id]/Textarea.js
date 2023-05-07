"use client";

import { useState } from "react";
import styled from "./Edit.module.css";

export default function Textarea({ result }) {
  let [content, setContent] = useState(result.content);
  return (
    <div className={styled.content}>
      <textarea
        name="content"
        defaultValue={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </div>
  );
}
