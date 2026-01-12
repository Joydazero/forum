import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await connectDB;
  const db = client.db("forum");  // 데이터베이스명
  const result = await db.collection("post").find().toArray();  // 컬렉션명
  
  console.log(result);
  
  return Response.json(result);
}

export async function POST(request: Request) {
  const client = await connectDB;
  const db = client.db("forum");
  const body = await request.json();
  
  // 작성 날짜 추가
  const dataWithDate = {
    ...body,
    createdAt: new Date()
  };
  
  const result = await db.collection("post").insertOne(dataWithDate);
  return Response.json({ message: "저장완료", insertedId: result.insertedId });
}


export async function PATCH(request: Request) {
  const client = await connectDB;
  const db = client.db("forum");
  const body = await request.json();

  const result = await db.collection("post").updateOne(
    { '_id': new ObjectId(body.id) },
    { $set: { title: body.title, content: body.content, updatedAt: new Date() } }
  );
  
  return Response.json({ message: "수정완료", modifiedCount: result.modifiedCount });
}
export async function DELETE(request: Request) {
  const client = await connectDB
  const db = client.db("forum")
  const body = await request.json()

  const result = await db.collection("post").deleteOne({'_id': new ObjectId(body.id)})
  return Response.json({message:'삭제완료', deletedCount: result.deletedCount})
}