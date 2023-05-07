"use client";

import styled from "./write.module.css";
import { useState } from "react";

export default function Write() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  return (
    <div className={styled.wrap}>
      <div className={styled.write}>
        <form action="/api/post/new" method="POST" className={styled.form}>
          <div style={{ flex: "1" }}>
            <input
              onKeyDown={(e) => console.log("onKeyDown:", e.key, e.code)}
              onKeyUp={(e) => console.log("onKeyUp:", e.key, e.code)}
              name="title"
              placeholder="제목"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className={styled.content}>
              <textarea
                name="content"
                placeholder="내용"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={styled.nav}>
            <button type="submit">Note추가하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
