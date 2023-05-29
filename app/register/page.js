import Link from "next/link";
import styled from "./register.module.css";

export const dynamic = "force-static";

export default function Register() {
  return (
    <div className={styled.wrap}>
      <form method="POST" action="/api/auth/signup">
        <input name="name" type="text" placeholder="이름" />
        <input name="email" type="text" placeholder="이메일" />
        <input name="password" type="password" placeholder="비번" />

        <div className={styled.btn}>
          <button type="submit">가입요청</button>

          <Link href="/">
            <button>홈으로</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
