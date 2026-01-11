import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import EditForm from './EditForm';

export default async function Edit(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const db = (await connectDB).db('forum')
  const detailResult = await db.collection('post').findOne({ '_id': new ObjectId(params.id) });
  
  return (
    <div>
      <h1 className="title">수정하기</h1>
      <EditForm 
        id={params.id}
        initialTitle={detailResult?.title || ''}
        initialContent={detailResult?.content || ''}
      />
    </div>
  )
}
