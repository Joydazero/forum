'use client'
import { useRouter } from "next/navigation"

export default function DetailLink() {
    const router = useRouter()
    return (
        <>
        <button onClick={()=>{ router.back()}}>버튼</button>
        </>
    )
}
