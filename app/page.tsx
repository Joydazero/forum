import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db('forum');
  const result = await db.collection('post').find().toArray();
  console.log('result:', result); // 디버깅용
  return (
    <main>
      {result.length > 0 ? result.map((post) => <div key={post._id.toString()}>{post.title}</div>) : '게시글이 없습니다'}
    </main>
  );
}
