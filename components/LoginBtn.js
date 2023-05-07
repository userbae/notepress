"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginBtn() {
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        로그인
      </button>
      <Link href="/register">회원가입</Link>
    </div>
  );
}
