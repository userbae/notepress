import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  const db = (await connectDB).db("notepress");
  let result = await db
    .collection("post")
    .find({ author: session.user.email })
    .toArray();
  응답.status(200).json(result);
}
