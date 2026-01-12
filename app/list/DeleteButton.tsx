'use client'

import { useRouter } from 'next/navigation'

export default function DeleteButton({ id }: { id: string }) {
    const router = useRouter()
    
    const handleDeleteArticle = async () => {
        const response = await fetch('/api/test', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
        const result = await response.json()
        console.log(result)
        
        if (result.deletedCount) {
            alert('삭제 완료!')
            router.refresh()  // 서버 컴포넌트 새로고침 (페이지 전체 리로드 X)
        }
    }
    
    return (
        <button 
            className="rounded-[5px] bg-red-600 text-white text-sm px-2 py-1 ml-2" 
            onClick={handleDeleteArticle}
        >
            삭제
        </button>
    )
}
