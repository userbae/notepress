import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import styled from "./detail.module.css";

export default async function Detail(props) {
  const db = (await connectDB).db("notepress");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props?.params?.id) });

  return (
    <div className={styled.wrap}>
      <div className={styled.nav}>
        <h3>{result?.title}</h3>
      </div>

      <div
        className={styled.content}
        dangerouslySetInnerHTML={{ __html: result?.content }}
      ></div>
      <div className={styled?.bot}>
        <Link href={`/edit/${result?._id}`}>
          <button>수정하기</button>
        </Link>

        <Link href="/">
          <button>홈</button>
        </Link>
      </div>
    </div>
  );
}
