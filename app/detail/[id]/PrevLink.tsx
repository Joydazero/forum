'use client'
import { useRouter } from "next/navigation"

export default function PrevLink() {
    const router = useRouter()
    return (
        <>
        <button onClick={()=>{ router.push('/list')}} className="mx-3 my-3 rounded-md bg-[#e5e5e5] flex px-3 py-2 text-base font-medium cursor-pointer border border-[#bbbbbb]">목록으로</button>
        </>
    )
}
