import Link from "next/link"
import DeleteButton from "./DeleteButton"

export const dynamic = 'force-dynamic'

type listResultProps = {
    _id: string,
    title: string,
    content: string,
    createdAt?: Date
}

export default async function List() {
    // 개발/배포 환경 자동 대응
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    
    const response = await fetch(`${API_URL}/api/board`, { next: { revalidate: 60 } })
    const listResult: listResultProps[] = await response.json()
  
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
