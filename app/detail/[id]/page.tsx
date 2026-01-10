import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail(props: { params: Promise<{ id: string }> }) {
        const params = await props.params
        
        // ObjectId 유효성 검사 (24자리 16진수)
        if (!ObjectId.isValid(params.id)) {
            return <div>잘못된 게시글 ID입니다</div>
        }
        
        const db = (await connectDB).db('forum')
        const detailResult = await db.collection('post').findOne({ '_id': new ObjectId(params.id) })
        console.log(params.id);
        
        return (
        <div>
            <h4 className="title">상세페이지</h4>
            <h4 className="font-bold text-xl">{detailResult?.title}</h4>
            <div>{detailResult?.content}</div>
        </div>
        )
    }
