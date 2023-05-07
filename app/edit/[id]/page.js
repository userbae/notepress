import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import styled from "./Edit.module.css";
import Textarea from "./Textarea";

export default async function Edit(props) {
  const db = (await connectDB).db("notepress");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className={styled.wrap}>
      <div className={styled.edit}>
        <h4>수정페이지</h4>
        <form action="/api/post/edit" method="POST">
          <input name="title" defaultValue={result.title} />
          <Textarea result={result} />

          <input
            style={{ display: "none" }}
            name="_id"
            defaultValue={result._id.toString()}
          />
          <button type="submit">수정하기</button>
        </form>
      </div>
    </div>
  );
}
