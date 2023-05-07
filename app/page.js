import { getServerSession } from "next-auth";
import List from "./homepage/List";
import styled from "./page.module.css";
import LoginBtn from "@/components/LoginBtn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
  let session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <div className={styled.home}>
          <List />
        </div>
      ) : (
        <LoginBtn />
      )}
    </div>
  );
}
