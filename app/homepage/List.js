import Link from "next/link";
import styled from "../page.module.css";
import ListItem from "./ListItem";
export default function List() {
  return (
    <div>
      <div className={styled.home_nav}>
        <div className={styled.plus_m}>
          <Link href="/write">
            <button>추가하기</button>
          </Link>
        </div>
      </div>
      <div className={styled.list}>
        <ListItem />
      </div>
    </div>
  );
}
