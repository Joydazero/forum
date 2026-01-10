import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"

type listResultProps = {
    _id: string,
    title: string,
    content: string,
    createdAt?: Date
}
export default async function List() {
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
                        <DetailLink />
                    </div>
                </div>
            ))}
        </div>
    )
}
