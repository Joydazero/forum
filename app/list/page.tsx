import { connectDB } from "@/util/database"

type listResultProps = {
    _id: string,
    title: string,
    content: string
}
export default async function List() {
    const db = (await connectDB).db('forum')
    const listResult = await db.collection<listResultProps>('post').find().toArray()
    return (
        <div>
            {listResult.map((box) => (
                <div className="list-bg" key={box._id}>
                    <div className="list-item">
                        <h4>{box.title}</h4>
                        <p>{box.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
