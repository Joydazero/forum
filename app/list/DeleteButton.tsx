'use client'

import { useRouter } from 'next/navigation'

export default function DeleteButton({ id }: { id: string }) {
    const router = useRouter()
    
    const handleDeleteArticle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget.parentElement  // 버튼의 부모 요소 저장
        
        const response = await fetch('/api/test', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
        const result = await response.json()
        console.log(result)
        
        if (result.deletedCount) {
            // 1. 애니메이션 실행
            if (target) {
                target.style.transition = 'opacity 0.5s'
                target.style.opacity = '0'
                
                // 2. 애니메이션 끝나면 숨기고 새로고침
                setTimeout(() => {
                    target.style.display = 'none'
                    router.refresh()
                }, 500)
            }
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
