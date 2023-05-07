import LogOutBtn from "@/components/LogOutBtn";
import "./globals.css";
import Link from "next/link";

export default function Nav({ name }) {
  return (
    <div className="nav">
      <div>
        <Link href="/">Note.Press</Link>{" "}
      </div>
      <div className="user">
        <div>{name}님</div>
        <LogOutBtn />
      </div>
    </div>
  );
}
