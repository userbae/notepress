"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import styled from "./LoginBtn.module.css";

export default function LoginBtn() {
  return (
    <div className={styled.wrap}>
      <h1>Note.Press</h1>
      <div className={styled.btn}>
        <button
          onClick={() => {
            signIn();
          }}
        >
          로그인
        </button>
        <Link href="/register">
          <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
}
