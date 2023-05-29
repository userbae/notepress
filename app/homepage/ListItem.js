"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "./ListItem.module.css";

export default function ListItem(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/Note/list")
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <div className={styled.wrap}>
      <div className={styled.plus_pc}>
        <Link href="/write">
          <span className={styled.symbol}></span>
          <div>추가</div>
        </Link>
      </div>
      {data.length > 0
        ? data.map((a, i) => {
            return (
              <div key={i} className={styled.list_box}>
                <Link prefetch={false} href={`detail/${a._id}`}>
                  <div>
                    <img src="/pngwing.com.png" />
                  </div>
                  <div className={styled.title}>{a.title}</div>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}
