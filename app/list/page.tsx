import { connectDB } from "@/util/database"
import Link from "next/link"
import DeleteButton from "./DeleteButton"

type listResultProps = {
    _id: string,
    title: string,
    content: string,
    createdAt?: Date
}
export default async function List({_id} : {_id: string}) {
    const db = (await connectDB).db('forum')
    const listResult = await db.collection<listResultProps>('post').find().toArray()
  
    return (
        <div>
            {listResult.map((box) => (
                <div className="list-bg" key={box._id}>
                    <div className="list-item">
                        <Link href={`/detail/${box._id.toString()}`}> <h4>{box.title}</h4>
                        </Link>                        
                        <p>{box.createdAt ? new Date(box.createdAt).toLocaleDateString('ko-KR') : '날짜 없음'}</p>
                        <Link href={`/edit/${box._id.toString()}`} className="rounded-[5px] bg-green-900 text-white text-sm px-2 py-1">수정</Link>
                        <DeleteButton id={box._id.toString()} />
                    </div>
                </div>
            ))}            
        </div>
    )
}
