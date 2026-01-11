'use client'

import { useState } from 'react'

type EditFormProps = {
  id: string
  initialTitle: string
  initialContent: string
}

export default function EditForm({ id, initialTitle, initialContent }: EditFormProps) {
  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()  // 페이지 새로고침 방지
    
    const response = await fetch('/api/test', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, title, content })  // id 추가!
    })

    const result = await response.json()
    console.log(result)
    
    if (result.modifiedCount) {  // insertedId → modifiedCount
      alert('수정 완료!')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className='p-2.5 m-2.5 box-border'>
        <input 
          type="text" 
          placeholder="제목" 
          value={title}
          className='border border-[#ccc] rounded-[5px] p-1.5 w-full box-border'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea 
          placeholder="내용" 
          value={content}
          className='border border-[#ccc] rounded-[5px] p-1.5 w-full box-border mt-5 max-h-30'
          onChange={(e) => setContent(e.target.value)}
        />
        </div>
        <button type="submit" className='mx-5 my-3 rounded-md bg-[#e5e5e5] flex px-3 py-2 text-base font-medium cursor-pointer border border-[#bbbbbb]'>저장</button>
      </form>
    </div>
  )
}
